import {
  windowNames,
  gameIds as kGameClassIds,
  interestingFeatures,
} from "../consts";
import {
  OWGames,
  OWGameListener,
  OWGamesEvents,
  OWWindow,
} from "@overwolf/overwolf-api-ts";
import RunningGameInfo = overwolf.games.RunningGameInfo;
import eventEmitter from "../utils/events";
import onInfoUpdates from "./infoUpdates";
import onNewEvents from "./newEvents";
import BufferC from "buffer";
import AppLaunchTriggeredEvent = overwolf.extensions.AppLaunchTriggeredEvent;

// The background controller holds all of the app's background logic - hence its name. it has
// many possible use cases, for example sharing data between windows, or, in our case,
// managing which window is currently presented to the user. To that end, it holds a dictionary
// of the windows available in the app.
// Our background controller implements the Singleton design pattern, since only one
// instance of it should exist.

(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || BufferC.Buffer;

declare global {
  interface Window {
    eventEmitter: any;
  }
}

interface MyEvent {
  name: string;
  data: string;
}

declare global {
  interface Window {
    save: any;
  }
}

class BackgroundController {
  private static _instance: BackgroundController;
  private _windows = {};
  private _gameListener: OWGameListener;
  private _gameEventsListener: OWGamesEvents;

  private constructor() {
    // Populating the background controller's window dictionary
    this._windows[windowNames.desktop] = new OWWindow(windowNames.desktop);
    this._windows[windowNames.inGame] = new OWWindow(windowNames.inGame);
    // When a Fortnite game is started or is ended, toggle the app's windows
    this._gameListener = new OWGameListener({
      onGameStarted: this.toggleWindows.bind(this),
      onGameEnded: this.toggleWindows.bind(this),
    });

    window.eventEmitter = eventEmitter;

    this._gameEventsListener = undefined;
    overwolf.extensions.onAppLaunchTriggered.addListener((e) =>
      this.onAppLaunchTriggered(e)
    );
  }

  // Identify whether the RunningGameInfo object we have references a supported game
  private isSupportedGame(info: RunningGameInfo) {
    return kGameClassIds.includes(info.classId);
  }

  private async isSupportedGameRunning(): Promise<boolean> {
    const info = await OWGames.getRunningGameInfo();

    return info && info.isRunning && this.isSupportedGame(info);
  }

  private async subscribeToGameEvents() {
    console.log("subscribeToGameEvents");
    const info = await OWGames.getRunningGameInfo();
    if (info != null && info.classId != null) {
      console.info("Saving game id", info.classId);
      eventEmitter.emit("storage-update-data", "gameId", info.classId);
      if (this._gameEventsListener != null) {
        this._gameEventsListener.stop();
      }
      this._gameEventsListener = new OWGamesEvents(
        {
          onInfoUpdates: this.onInfoUpdates.bind(this),
          onNewEvents: this.onNewEvents.bind(this),
        },
        interestingFeatures[info.classId]
      );
      this._gameEventsListener.start();
    }
  }

  private unsubscribeFromGameEvents() {
    console.log("unsubscribeFromGameEvents");
    if (this._gameEventsListener != null) {
      this._gameEventsListener.stop();
    }
  }

  private async onAppLaunchTriggered(e: AppLaunchTriggeredEvent) {
    console.log("onAppLaunchTriggered():", e);

    if (!e || e.origin.includes("gamelaunchevent")) {
      return;
    }

    if (await this.isSupportedGameRunning()) {
      this.subscribeToGameEvents();
      // this._windows[windowNames.desktop].close();
      this._windows[windowNames.inGame].restore();
    } else {
      this.unsubscribeFromGameEvents();
      // this._windows[windowNames.desktop].restore();
      this._windows[windowNames.inGame].close();
    }
  }

  private toggleWindows(info: RunningGameInfo) {
    if (!info || !this.isSupportedGame(info)) {
      return;
    }

    if (info.isRunning) {
      this.subscribeToGameEvents();
      // this._windows[windowNames.desktop].close();
      this._windows[windowNames.inGame].restore();
    } else {
      this.unsubscribeFromGameEvents();
      // this._windows[windowNames.desktop].restore();
      this._windows[windowNames.inGame].close();
    }
  }

  private onInfoUpdates(data) {
    console.info("onInfoUpdates", data);
    onInfoUpdates(data);
  }

  private onNewEvents(data) {
    console.info("onNewEvents", data);
    onNewEvents(data);
    if (
      data != null &&
      data.events != null &&
      data.events.length > 0 &&
      data.events.some(({ name }) =>
        ["match_start", "matchStart", "match_end", "matchEnd"].includes(name)
      )
    ) {
      window.eventEmitter.emit("challenges-force-fetch");
      this._windows[windowNames.inGame].restore();
    }
  }

  // Implementing the Singleton design pattern
  public static instance(): BackgroundController {
    if (!BackgroundController._instance) {
      BackgroundController._instance = new BackgroundController();
    }

    return BackgroundController._instance;
  }

  // When running the app, start listening to games' status and decide which window should
  // be launched first, based on whether Fortnite is currently running
  public async run() {
    this._gameListener.start();

    const currWindowName = (await this.isSupportedGameRunning())
      ? windowNames.inGame
      : windowNames.desktop;

    this._windows[currWindowName].restore();
  }
}

BackgroundController.instance().run();
