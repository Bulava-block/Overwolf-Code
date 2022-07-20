import { AppWindow } from "../AppWindow";
import { OWGames, OWHotkeys } from "@overwolf/overwolf-api-ts";
import { hotkeys, windowNames } from "../consts";
import WindowState = overwolf.windows.WindowStateEx;
import "./app";
import { getChallangesList } from "../utils/api";
import { handleInternetConnectionChange } from "../utils/internetconnection";
import eventEmitter from "./emitter";
import storage from "./storage";

// The window displayed in-game while a Fortnite game is running.
// It listens to all info events and to the game events listed in the consts.ts file
// and writes them to the relevant log using <pre> tags.
// The window also sets up Ctrl+F as the minimize/restore hotkey.
// Like the background window, it also implements the Singleton design pattern.

class InGame extends AppWindow {
  private static _instance: InGame;

  private constructor() {
    super(windowNames.inGame);

    this.setToggleHotkeyBehavior();
    this.setToggleHotkeyText();

    overwolf.settings.hotkeys.onChanged.addListener((e) => {
      this.setToggleHotkeyText();
    });
    handleInternetConnectionChange(eventEmitter);
  }

  public static instance() {
    if (!this._instance) {
      this._instance = new InGame();
    }

    return this._instance;
  }

  public async run() {
    const { userId, gameId } = await storage.waitForUserIdAndGameId();
    const challengesList = await getChallangesList(userId, gameId);
    console.log("ingame challange fetch ran", challengesList);
    if (challengesList.length > 0) {
      eventEmitter.emit("challenges-update", challengesList);
    }
  }

  // Displays the toggle minimize/restore hotkey in the window header
  private async setToggleHotkeyText() {
    const info = await OWGames.getRunningGameInfo();
    const hotkeyText = await OWHotkeys.getHotkeyText(
      hotkeys.toggle,
      info.classId
    );
    const hotkeyElem = document.getElementById("hotkey");
    hotkeyElem.textContent = hotkeyText;
  }

  // Sets toggleInGameWindow as the behavior for the Ctrl+F hotkey
  private async setToggleHotkeyBehavior() {
    const toggleInGameWindow = async (
      hotkeyResult: overwolf.settings.hotkeys.OnPressedEvent
    ): Promise<void> => {
      const inGameState = await this.getWindowState();

      if (
        inGameState.window_state === WindowState.NORMAL ||
        inGameState.window_state === WindowState.MAXIMIZED
      ) {
        this.currWindow.minimize();
      } else if (
        inGameState.window_state === WindowState.MINIMIZED ||
        inGameState.window_state === WindowState.CLOSED
      ) {
        this.currWindow.restore();
      }
    };

    OWHotkeys.onHotkeyDown(hotkeys.toggle, toggleInGameWindow);
  }
}

InGame.instance().run();
