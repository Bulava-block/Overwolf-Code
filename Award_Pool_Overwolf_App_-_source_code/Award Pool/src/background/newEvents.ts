import storage from "./storage";

//Any game, any new events update is handled here
const onNewEvents = (data) => {
  if (data != null && data.events != null && data.events.length > 0) {
    data.events.forEach(({ name, data }) => {
      storage.addEvent({
        name,
        data,
      });
    });
  }
};

export default onNewEvents;
