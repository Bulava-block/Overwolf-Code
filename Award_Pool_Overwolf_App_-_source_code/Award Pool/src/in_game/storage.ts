import emitter from "./emitter";
console.log("M");
type StorageData = {
  token?: undefined | string;
  userId?: undefined | string;
  gameId?: undefined | number;
};

class Storage {
  private data: StorageData;
  constructor() {
    this.data = {};
    this.listenToMainStorageUpdate();
    this.listenToStorageSync();
    this.triggerStorageSync();
  }

  public getData() {
    return this.data;
  }

  public waitForTokenAndGameId(): Promise<StorageData> {
    return new Promise((resolve) => {
      console.log("first", this.getData());
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

  private handleStorageUpdate(data: Object) {
    this.data = {
      ...this.data,
      ...data,
    };
  }
  private listenToMainStorageUpdate() {
    emitter.on("storage-update", this.handleStorageUpdate.bind(this));
  }

  private triggerStorageSync() {
    emitter.emit("init-storage-sync");
  }

  private handleStorageSync(data) {
    console.log("storage sync", data);
    this.data = data;
  }

  private listenToStorageSync() {
    emitter.on("storage-sync", this.handleStorageSync.bind(this));
  }
}

const storage = new Storage();

export default storage;
