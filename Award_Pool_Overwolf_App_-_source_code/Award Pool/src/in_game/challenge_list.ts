import Challenge from "./challenge";
import Challenges from "./challenges";
import emitter from "./emitter";

//Death challenge
const deathChallenge = new Challenge();
deathChallenge.setEventsToListenTo(["death"]);
deathChallenge.setEventHandler((event) => {
  if (event.data != null && deathChallenge.isCompleted() === false) {
    const deaths = parseFloat(event.data);
    if (deaths > 0) {
      deathChallenge.setState(deathChallenge.getState() + 1);
    }
  }
});
deathChallenge.setCompletedState(3);
deathChallenge.setLabel("Die 3 times");

//Kill challenge
const killChallenge = new Challenge();
killChallenge.setEventsToListenTo(["kill"]);
killChallenge.setEventHandler((event) => {
  if (event.data != null && killChallenge.isCompleted() === false) {
    const kills = parseFloat(event.data);
    if (kills > 0) {
      killChallenge.setState(killChallenge.getState() + 1);
    }
  }
});
killChallenge.setCompletedState(15);
killChallenge.setLabel("Kill 15 enemies");

//Play challenge
const playChallenge = new Challenge();
playChallenge.setEventsToListenTo(["matchStart"]);
playChallenge.setEventHandler(() => {
  if (playChallenge.isCompleted() === false) {
    playChallenge.setState(playChallenge.getState() + 1);
  }
});
playChallenge.setCompletedState(3);
playChallenge.setLabel("Play 3 games");

const challenges = new Challenges();
challenges.addChallange(deathChallenge);
challenges.addChallange(killChallenge);
challenges.addChallange(playChallenge);

emitter.on("storage-add", (event) => {
  challenges.handleEvent(event);
});

export { challenges };
