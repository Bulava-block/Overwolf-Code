import { postEventList } from "../utils/api";
import ee from "../utils/events";
import { MasterStorage } from "./storage-classes";

const throttle = require("lodash.throttle");

class BackgroundStorage extends MasterStorage {
  private saveInterval: number;
  private events: Array<any>;
  private throttledSave: () => void;

  constructor(eventEmitter) {
    super(eventEmitter);
    this.saveInterval = 10000;
    this.events = [];
    this.throttledSave = throttle(this.save.bind(this), this.saveInterval, {
      leading: false,
      trailing: true,
    });
  }

  public addEvent(event) {
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
    const events = this.get();
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
            this.eventEmitter.emit("challenges-update", [
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
}

const storage = new BackgroundStorage(ee);

export default storage;
