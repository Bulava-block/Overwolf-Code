const handleInternetConnectionChange = (emitter) => {
  console.log("sub ingame");
  emitter.on("storage-update-data", (key, data) => {
    console.log("update iconn");
    if (key === "isInternetConnection") {
      if (data === true) {
        alert("Your internet seem to be back. All good!");
      } else {
        alert("It seems your internet connection is down, please check it.");
      }
    }
  });
};

const addInternetConnectionStateChangeListener = (emitter) => {
  window.addEventListener("offline", function () {
    emitter.emit("storage-update-data", "isInternetConnection", false);
  });

  window.addEventListener("online", function () {
    emitter.emit("storage-update-data", "isInternetConnection", true);
  });
};

export {
  handleInternetConnectionChange,
  addInternetConnectionStateChangeListener,
};
