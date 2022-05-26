import { AppWindow } from "../AppWindow";
import { windowNames } from "../consts";
import eventEmitter from "../in_game/emitter";
import { getCredentialsByEncryptedMessage } from "../utils/index";
import Timer from "./timer";
import storage from "./storage";

// The desktop window is the window displayed while Fortnite is not running.
// In our case, our desktop window has no logic - it only displays static data.
// Therefore, only the generic AppWindow class is called.
class Desktop extends AppWindow {
  private static _instance: Desktop;
  private timer: Timer;

  private constructor() {
    super(windowNames.desktop);
    this.timer = new Timer();
    (window as any).global = window;
    global.Buffer = global.Buffer || require("buffer").Buffer;
    window.addEventListener("message", (message) => {
      console.log("Incoming message", message);
      if (message.origin !== "https://app.awardpool.com") {
        return;
      }
      const data = message.data;
      if (!data || typeof data !== "string") {
        return;
      }

      this.processPostMessage(data);
    });

    const iframe = document.getElementById("ap_iframe");
    iframe.addEventListener("load", () => {
      const loading_overlay = document.getElementById("loading-overlay");
      loading_overlay.style.display = "none";
    });

    this.addWindowStateChangeListener();
  }

  private async addWindowStateChangeListener() {
    const { userId } = await storage.waitForUserId();
    console.log("[xx] User id is here");
    overwolf.windows.getWindowState(
      windowNames.desktop,
      (currentDesktopWindowState) => {
        console.log("[xx] Current window state", currentDesktopWindowState);
        if (currentDesktopWindowState.success === true) {
          this.handleWindowStateChange({
            window_name: windowNames.desktop,
            window_state_ex: currentDesktopWindowState.window_state_ex,
          });
        }
      }
    );

    overwolf.windows.onStateChanged.addListener(
      this.handleWindowStateChange.bind(this)
    );
  }

  private handleWindowStateChange(newWindowStates) {
    console.log("[xx] handleWindowStateChange called w", newWindowStates);
    if (
      newWindowStates.window_name === windowNames.desktop &&
      storage.isUserLoggedIn()
    ) {
      const newWindowState = newWindowStates.window_state_ex;
      const shouldStopWindowStates = ["closed", "minimized", "hidden"];
      if (shouldStopWindowStates.includes(newWindowState)) {
        //Stop the timer if it has not been stopped yet
        console.log("[xx] Stop");
        if (this.timer.isTimerStarted()) {
          console.log("[xx] Stopped");
          this.timer.setEndTime();
          this.timer.calculateAndSetTotalTime();
          console.log(
            "[xx] Total time that the desktop window was open: ",
            this.timer.getTotalTime()
          );
        }
      } else {
        console.log("[xx] Start");
        //Start the timer if it has not been stopped yet
        if (this.timer.isTimerStarted() === false) {
          console.log("[xx] Started");
          this.timer.setStartTime();
        }
      }
    }
  }

  private async processPostMessage(message: string) {
    const { userId } = await getCredentialsByEncryptedMessage(message);
    console.log("userId", userId);
    if (userId != null) {
      console.log("Message from backend - login", message);
      eventEmitter.emit("storage-update-data", "message", message);
      eventEmitter.emit("storage-update-data", "userId", userId);
    }
  }

  public static instance() {
    if (!this._instance) {
      this._instance = new Desktop();
    }

    return this._instance;
  }
}

Desktop.instance();
