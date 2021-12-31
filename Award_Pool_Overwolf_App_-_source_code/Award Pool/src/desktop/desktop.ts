import { AppWindow } from "../AppWindow";
import { windowNames } from "../consts";
import { getToken } from "../utils/api";
const CryptoJS = require("crypto-js");

// The desktop window is the window displayed while Fortnite is not running.
// In our case, our desktop window has no logic - it only displays static data.
// Therefore, only the generic AppWindow class is called.
class Desktop extends AppWindow {
  private static _instance: Desktop;
  private token: string;
  private user_id: string;

  private constructor() {
    super(windowNames.desktop);

    (window as any).global = window;
    global.Buffer = global.Buffer || require("buffer").Buffer;

    const user_detail = localStorage.getItem("user_detail");
    if (user_detail) {
      this.processPostMessage(user_detail);
    }

    window.addEventListener("message", (message) => {
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

  private async processPostMessage(data: string) {
    const secret = "UFhQ9WH2rvKdgHXAxYL5";

    const bytes = CryptoJS.AES.decrypt(data, secret);
    const jsonText = bytes.toString(CryptoJS.enc.Utf8);
    console.log("Received message from iframe:", data, jsonText);
    console.log("Parsed json:", JSON.parse(jsonText));
    //alert('OW-App Received message from iframe: ' + data);
    //alert('OW-App Decrypted json: ' + jsonText);
    const jsonData = JSON.parse(jsonText);

    if (!jsonData.state) {
      return;
    }

    if (jsonData.state === "login") {
      const token = await getToken(jsonData.email, jsonData.password);
      if (token) {
        this.token = token;
        this.user_id = jsonData.UID;
        //alert("OW-App getToken: " + token);
        localStorage.setItem("user_detail", data);
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", jsonData.UID);
      }
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
