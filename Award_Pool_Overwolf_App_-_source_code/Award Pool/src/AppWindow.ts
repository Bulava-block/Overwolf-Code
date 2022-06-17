import { OWWindow } from "@overwolf/overwolf-api-ts";

// A base class for the app's foreground windows.
// Sets the modal and drag behaviors, which are shared accross the desktop and in-game windows.
export class AppWindow {
  protected currWindow: OWWindow;
  protected mainWindow: OWWindow;
  protected maximized: boolean = false;

  constructor(windowName) {
    this.mainWindow = new OWWindow("background");
    this.currWindow = new OWWindow(windowName);

    const closeButton = document.getElementById("closeButton");
    const maximizeButton = document.getElementById("maximizeButton");
    const minimizeButton = document.getElementById("minimizeButton");
    const discordButton = document.getElementById("discordButton");
    const bugButton = document.getElementById("bugButton");

    const header = document.getElementById("header");

    this.setDrag(header);

    closeButton.addEventListener("click", () => {
      this.mainWindow.close();
    });

    minimizeButton.addEventListener("click", () => {
      this.currWindow.minimize();
    });

    if (discordButton != null) {
      discordButton.addEventListener("click", () =>
        overwolf.utils.openUrlInDefaultBrowser("https://discord.gg/awardpool")
      );
    }

    if (bugButton != null) {
      bugButton.addEventListener("click", () =>
        overwolf.utils.openUrlInDefaultBrowser(
          "https://forms.monday.com/forms/1df6676ba6ea9f851a9eb927c2bcb4c8?r=use1"
        )
      );
    }

    // maximizeButton.addEventListener('click', () => {
    //   if (!this.maximized) {
    //     this.currWindow.maximize();
    //   } else {
    //     this.currWindow.restore();
    //   }

    //   this.maximized = !this.maximized;
    // });
  }

  public async getWindowState() {
    return await this.currWindow.getWindowState();
  }

  private async setDrag(elem) {
    this.currWindow.dragMove(elem);
  }
}
