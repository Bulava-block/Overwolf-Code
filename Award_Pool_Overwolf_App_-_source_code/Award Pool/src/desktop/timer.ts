type Data = {
  totalTime: number;
  startTime: null | number;
  endTime: null | number;
};

class Timer {
  private data: Data;

  constructor() {
    this.data = {
      totalTime: 0,
      startTime: null,
      endTime: null,
    };
  }

  private getCurrentTimestampInSeconds() {
    return Math.round(new Date().getTime() / 1000);
  }

  public setStartTime() {
    this.data.startTime = this.getCurrentTimestampInSeconds();
  }

  public setEndTime() {
    this.data.endTime = this.getCurrentTimestampInSeconds();
  }

  public isTimerStarted(): boolean {
    return this.data.startTime != null;
  }

  public calculateAndSetTotalTime() {
    this.data.totalTime += this.data.endTime - this.data.startTime;
    this.data.startTime = null;
    this.data.endTime = null;
  }

  public getTotalTime() {
    return this.data.totalTime;
  }
}

export default Timer;
