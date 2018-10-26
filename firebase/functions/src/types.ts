export type TagMessage = {
  tag: string;
  uid: string;
  msg: string;
  tc: number;
};

export type TagSummary = {
  tag?: string;

  count: number;
  msg: string;
  tm: number;
};
