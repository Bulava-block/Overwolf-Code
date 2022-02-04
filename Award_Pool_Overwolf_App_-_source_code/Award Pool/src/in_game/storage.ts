import { SlaveStorage, Data } from "../background/storage-classes";
import ee from "./emitter";

class Storage extends SlaveStorage {
  constructor(eventEmitter) {
    super(eventEmitter);
  }

  public getData() {
    return this.data;
  }

  public waitForTokenAndGameId(): Promise<Data> {
    return new Promise((resolve) => {
      console.log("waitForTokenAndGameId", this.getData());
      if (this.data.gameId != null && this.data.token != null) {
        resolve(this.data);
        return;
      }
      const intv = setInterval(() => {
        console.log("setInterval", this.data);
        if (this.data.gameId != null && this.data.token != null) {
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
