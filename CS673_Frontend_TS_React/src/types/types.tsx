// type JobData = {
//   [key:string]:
// }

export interface Activity {
  ID: number | undefined
  job_id: string
  category: string
  description: string
  start_date: string
  end_date: string
  status: string
}

export type Job = {
  ID?: string,
  companyname : string,
  jobtitle: string,
  description: string,
  status: string,
  createdAt?: Date,
  updatedAt?: Date, 
  priority?: number
}
