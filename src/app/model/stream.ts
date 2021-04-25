export interface Stream {
  id: number;
  streamShortName: string;
  streamLongName: string;
  streamSubscription: number;
  streamCurRevenue?: number;
  streamPrevRevenue?: number;
  streamTotalRevenue?: number;
  streamLicensing?: number;
}
