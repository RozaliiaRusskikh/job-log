export enum Status {
  Interviewing = "INTERVIEWING",
  Applied = "APPLIED",
  Offer = "OFFER",
  Rejected = "REJECTED",
}

export type ApplicationProp = {
  _id: string;
  company: string;
  position: string;
  status: Status;
  date: string;
  note: string | null;
  jobDescriptionLink: string;
  createdAt: Date;
  updateAt: Date;
  userId: string;
};
