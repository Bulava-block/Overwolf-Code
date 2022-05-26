import { SlaveStorage, Data } from "../background/storage-classes";
import ee from "../in_game/emitter";

class Storage extends SlaveStorage {
  constructor(eventEmitter) {
    super(eventEmitter);
  }

  public getData() {
    return this.data;
  }

  public isUserLoggedIn(): boolean {
    return this.data.userId != null;
  }

  public waitForUserId(): Promise<Data> {
    return new Promise((resolve) => {
      if (this.data.userId != null) {
        resolve(this.data);
        return;
      }
      const intv = setInterval(() => {
        if (this.data.userId != null) {
          resolve(this.data);
          clearInterval(intv);
          return;
        }
      }, 1000);
    });
  }
}

const storage = new Storage(ee);

export default storage;
