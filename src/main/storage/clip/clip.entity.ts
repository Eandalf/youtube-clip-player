export class Clip {
  id: number;
  videoId: string;
  /**
   * Timestamp for the start time of the clip in string.
   */
  startTime: number;
  /**
   * Timestamp for the end time of the clip in string.
   */
  endTime: number;

  constructor(id: number, videoId: string, startTime: number, endTime: number) {
    this.id = id;
    this.videoId = videoId;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
