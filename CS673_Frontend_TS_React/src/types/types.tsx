// type JobData = {
//   [key:string]:
// }

export type Activity = {
  category: string
  description: string
  startDate: string
  endDate: string
  ActivityID: string
  jobId: string
}

export type Job = {
  ID?: string,
  companyname : string,
  jobtitle: string,
  description: string,
  status: string,
  createdAt?: Date,
  updatedAt?: Date, 
  //activities: Activity[]
}
