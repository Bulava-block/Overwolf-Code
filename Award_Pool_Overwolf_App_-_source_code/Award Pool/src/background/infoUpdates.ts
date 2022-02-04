import storage from "./background-storage";

//Any game, any info update is handled here
const onInfoUpdates = (data) => {
  if (data != null) {
    storage.addEvent({
      name: "info_update",
      data,
    });
  }
};

export default onInfoUpdates;
