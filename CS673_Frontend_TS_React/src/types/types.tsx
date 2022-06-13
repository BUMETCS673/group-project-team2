// type JobData = {
//   [key:string]:
// }

export type Activities = {
  category: string
  description: string
  startDate: string
  endDate: string
  ActivityID: string
  jobId: string
}

export type Jobs = {
  jobTitle: string
  companyName: string
  description: string
  status: string
  jobId: string
  activities: Activities[]
}
