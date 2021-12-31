import Challenge from "./challenge";
import emitter from "./emitter";

class Challanges {
  private challenges: Array<Challenge>;

  constructor() {
    this.challenges = [];
  }

  addChallange(challenge: Challenge) {
    this.challenges.push(challenge);
  }

  handleEvent(event) {
    this.challenges.map((challange) => {
      if (event.name != null && challange.listenToEvents.includes(event.name)) {
        challange.handleEvent(event);
      }
    });
    emitter.emit("challenges-update", this.getChallengeList());
  }

  getChallengeList() {
    return this.challenges.map((challange) => challange.getInfo());
  }
}

export default Challanges;
