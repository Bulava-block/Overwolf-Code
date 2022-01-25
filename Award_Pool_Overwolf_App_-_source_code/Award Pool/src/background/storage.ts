import { postEventList } from "../utils/api";
import eventEmitter from "../utils/events.js";

const throttle = require("lodash.throttle");

class Storage {
  private saveInterval: number;
  private events: Array<any>;
  private throttledSave: () => void;
  private data: {
    token: undefined | string;
    userId: undefined | string;
    gameId: undefined | number;
  };

  constructor() {
    this.saveInterval = 10000;
    this.events = [];
    this.throttledSave = throttle(this.save.bind(this), this.saveInterval, {
      leading: false,
      trailing: true,
    });
    this.data = {
      userId: undefined,
      token: undefined,
      gameId: undefined,
    };
    this.listenToStorageSync();
  }
  private handleStorageSync() {
    eventEmitter.emit("storage-sync", this.data);
  }
  private listenToStorageSync() {
    eventEmitter.on("init-storage-sync", this.handleStorageSync.bind(this));
  }

  public addEvent(event) {
    eventEmitter.emit("storage-add", event);
    this.events.push(event);
    this.throttledSave();
  }

  private clearEvents() {
    this.events = [];
  }

  public reset() {
    this.clearEvents();
    this.data.gameId = undefined;
  }

  public get() {
    return this.events;
  }

  private async save() {
    const events = storage.get();
    if (events.length > 0) {
      if (this.data.token != null && this.data.userId != null) {
        if (this.data.gameId != null) {
          console.log("Saving events: ", events);

          const postEventListResponse = await postEventList(
            {
              user_id: this.data.userId,
              game_id: this.data.gameId,
              action_id: "",
              eventname: Math.floor(Date.now() / 1000), //"game_ended",
              eventdata: events,
            },
            this.data.token
          );
          if (
            postEventListResponse.success === true &&
            postEventListResponse.stas != null
          ) {
            console.log("Does this happen?");
            eventEmitter.emit("challenges-update", [
              postEventListResponse.stas,
            ]);
          }

          storage.clearEvents();
        } else {
          console.log("Game id is missing.");
        }
      } else {
        console.log("Token or userId is missing.");
      }
    } else {
      console.log("No events available for save.");
    }
  }

  public setData(key: string, value: any) {
    this.data[key] = value;
    eventEmitter.emit("storage-update", {
      [key]: value,
    });
  }
}

const storage = new Storage();

export default storage;
