class Challenge {
  private state: number;
  private completedState: number;
  public listenToEvents: Array<string>;
  public label: string;

  constructor() {
    this.state = 0;
    this.completedState = 5;
    this.listenToEvents = [];
    this.label = "";
  }

  public setLabel(label: string) {
    this.label = label;
  }

  public setCompletedState(completedState: number) {
    this.completedState = completedState;
  }

  public setState(state: any) {
    this.state = state;
  }

  public getState() {
    return this.state;
  }

  public handleEvent: (arg: { name: string; data: any }) => {};

  public setEventsToListenTo(events) {
    this.listenToEvents = events;
  }

  public setEventHandler(handler) {
    this.handleEvent = handler;
  }

  public isCompleted() {
    return this.completedState === this.state;
  }

  public getInfo() {
    return {
      label: this.label,
      incomplete: 0,
      complete: this.completedState,
      state: this.state,
      progress: Math.round((this.state / this.completedState) * 100),
    };
  }
}

export default Challenge;
