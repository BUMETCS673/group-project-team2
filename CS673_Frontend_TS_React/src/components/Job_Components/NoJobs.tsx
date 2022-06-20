import { NoJobsComponent } from '../../styles/styles'

export default function NoJobs() {
  return (
    <NoJobsComponent>
      <div>
        <h2>You are currently not tracking any jobs.</h2>

        <p style={{ fontSize: '2rem' }}>Good Luck for the job search!</p>
      </div>
    </NoJobsComponent>
  )
}
