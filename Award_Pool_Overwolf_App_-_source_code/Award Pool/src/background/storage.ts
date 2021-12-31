import { postEventList } from "../utils/api";
import eventEmitter from "../utils/events.js";

const throttle = require("lodash.throttle");

class Storage {
  private saveInterval: number;
  private events: Array<any>;
  private throttledSave: () => void;
  private data: {
    token: undefined | number;
    userId: undefined | number;
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

          await postEventList(
            {
              user_id: this.data.userId,
              game_id: this.data.gameId,
              action_id: "",
              eventname: "game_ended",
              eventdata: JSON.stringify({
                events,
              }),
            },
            this.data.token
          );
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
    console.log("Key", key);
    console.log("value", value);
    this.data[key] = value;
  }
}

const storage = new Storage();

export default storage;
