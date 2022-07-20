import { getCredentialsByEncryptedMessage } from "../utils/index";

/*
Main events:

storage-update-data - sets the data for master
storage-trigger-sync-data - triggers storage-sync-data
storage-sync-data - sends the current master data to whoever is subscribed
*/
type Data = {
  userId: undefined | string;
  gameId: undefined | number;
  message: undefined | number;
  isInternetConnection: boolean;
};

class Storage {
  protected data: Data;
  protected eventEmitter: any;

  constructor(eventEmitter) {
    this.data = {
      userId: undefined,
      gameId: undefined,
      message: undefined,
      isInternetConnection: window.navigator.onLine,
    };
    this.eventEmitter = eventEmitter;
    this.listenToUpdateData();
  }

  private setData = (key: string, value: any) => {
    console.log(`[Storage] set data key: ${key}, value: ${value}.`);
    this.data[key] = value;
    console.log("[Storage] Data: ", this.data);
  };

  private listenToUpdateData() {
    console.log(`[Storage] FN: listenToUpdateData`);
    this.eventEmitter.on("storage-update-data", this.setData);
  }
}

class MasterStorage extends Storage {
  constructor(eventEmitter) {
    super(eventEmitter);
    this.restoreCredentials();
    this.listenToTriggerSyncData();
    //this.listenToUpdateDataForLS();
  }

  private syncData = () => {
    console.log(`[MasterStorage] FN: syncData: `, this.data);
    this.eventEmitter.emit("storage-sync-data", this.data);
  };
  private listenToTriggerSyncData() {
    console.log(`[MasterStorage] FN: listenToTriggerSyncData.`);
    this.eventEmitter.on("storage-trigger-sync-data", this.syncData);
  }
  private async restoreCredentials() {
    const lsStorageData = localStorage.getItem("storage");
    console.log(`[MasterStorage] FN: restoreCredentials.`);
    if (lsStorageData != null) {
      const dataParsed = JSON.parse(lsStorageData);
      if (dataParsed.message != null) {
        console.log(`[MasterStorage] FN: restoreCredentials message exists.`);

        const { userId } = await getCredentialsByEncryptedMessage(
          dataParsed.message
        );
        console.log("dataParsed userId", userId);
        if (userId != null) {
          console.log(
            `[MasterStorage] FN: restoreCredentials userId restoration.`
          );
          //Necessary, because I have to write it to memory
          this.eventEmitter.emit(
            "storage-update-data",
            "message",
            dataParsed.message
          );
          this.eventEmitter.emit("storage-update-data", "userId", userId);
        }
      }
    }
  }
  private saveMessageToLocalStorage = (key, data) => {
    if (key === "message") {
      console.log(
        `[MasterStorage] FN: writeToLocalStorage: key ${key}, message: ${data}`,
        this.data
      );
      localStorage.setItem(
        "storage",
        JSON.stringify({
          message: data,
        })
      );
    }
  };

  /*private listenToUpdateDataForLS() {
    console.log(`[MasterStorage] FN: listenToUpdateDataForLS.`);
    this.eventEmitter.on("storage-update-data", this.saveMessageToLocalStorage);
  }*/
}

class SlaveStorage extends Storage {
  constructor(eventEmitter) {
    super(eventEmitter);
    this.listenToSyncData();
    //Initial sync
    this.eventEmitter.emit("storage-trigger-sync-data");
  }

  private syncDataSlave = (data: Data) => {
    console.log(`[SalveStorage] FN: syncData: `, data);
    this.data = data;
  };

  private listenToSyncData() {
    console.log(`[SalveStorage] FN: listenToSyncData.`);
    this.eventEmitter.on("storage-sync-data", (x) => {
      this.syncDataSlave(x);
    });
  }
}

export { Storage, MasterStorage, SlaveStorage };
export type { Data };
