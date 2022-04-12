import { AppWindow } from "../AppWindow";
import { windowNames } from "../consts";
import eventEmitter from "../in_game/emitter";
import { getCredentialsByEncryptedMessage } from "../utils/index";

// The desktop window is the window displayed while Fortnite is not running.
// In our case, our desktop window has no logic - it only displays static data.
// Therefore, only the generic AppWindow class is called.
class Desktop extends AppWindow {
  private static _instance: Desktop;

  private constructor() {
    super(windowNames.desktop);

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
