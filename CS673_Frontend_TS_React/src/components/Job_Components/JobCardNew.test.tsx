import { fireEvent, render, RenderResult } from 'test-utils'
import JobCardNew from './JobCardNew'
import { useFetchActivitiesQuery } from '../../redux/features/activities/activities-slice'
import { useAppDispatch } from '../../redux/app/hooks'
import { useDeleteJobMutation } from '../../redux/features/jobs/jobs-api-slice'

let documentBody: RenderResult

jest.mock('../../features/activities/activities-slice', () => ({
  useFetchActivitiesQuery: jest.fn(),
}))
const mockUseFetchActivitiesQuery = useFetchActivitiesQuery as jest.Mock

jest.mock('../../app/hooks', () => ({
  useAppDispatch: jest.fn(),
}))
const mockUseAppDispatch = useAppDispatch as jest.Mock

jest.mock('../../features/jobs/jobs-api-slice', () => ({
  useDeleteJobMutation: jest.fn(),
}))
const mockUseDeleteJobMutation = useDeleteJobMutation as jest.Mock

jest.mock('@mui/material/CircularProgress', () => () => (
  <div data-testid="MockCircularProgress" />
))

jest.mock('../Activity_Components/ActivityContainer', () => () => (
  <div data-testid="MockActivityContainer" />
))

describe('Unit tests: <JobCardNew />', () => {
  it('renders when loading', () => {
    mockUseFetchActivitiesQuery.mockReturnValue({
      data: [],
      isLoading: true,
    })
    mockUseAppDispatch.mockReturnValue({})
    mockUseDeleteJobMutation.mockReturnValue({})

    documentBody = render(
      <JobCardNew
        companyName=""
        jobTitle=""
        status=""
        id=""
        description=""
        priority={0}
      />
    )

    expect(documentBody.getByTestId('MockCircularProgress')).toBeVisible()
  })

  it('renders when loaded & collapsed', () => {
    mockUseFetchActivitiesQuery.mockReturnValue({
      data: [],
      isLoading: false,
    })
    mockUseAppDispatch.mockImplementation(() => {
      return () => {}
    })
    mockUseDeleteJobMutation.mockReturnValue(() => {
      return [() => {}]
    })

    documentBody = render(
      <JobCardNew
        companyName="Example Company Name"
        jobTitle="Example Job title"
        status="Example Status"
        id="100"
        description="Example Description"
        priority={3}
      />
    )

    expect(documentBody.getByTestId('BusinessIcon')).toBeVisible()
    expect(documentBody.getByText('Example Company Name')).toBeVisible()
    expect(documentBody.getByTestId('WorkOutlineIcon')).toBeVisible()
    expect(documentBody.getByText('Example Job title')).toBeVisible()
    expect(documentBody.getByTestId('SyncAltIcon')).toBeVisible()
    expect(documentBody.getByText('Example Status')).toBeVisible()
  })

  it('renders when loaded & collapsed', () => {
    mockUseFetchActivitiesQuery.mockReturnValue({
      data: [],
      isLoading: false,
    })
    mockUseAppDispatch.mockImplementation(() => {
      return () => {}
    })
    mockUseDeleteJobMutation.mockReturnValue(() => {
      return [() => {}]
    })

    documentBody = render(
      <JobCardNew
        companyName="Example Company Name"
        jobTitle="Example Job title"
        status="Example Status"
        id="100"
        description="Example Description"
        priority={3}
      />
    )

    fireEvent(
      documentBody.getByRole('button', { expanded: false }),
      new MouseEvent('click')
    )
    setTimeout(() => {
      expect(documentBody.getByText('Description')).toBeVisible()
      expect(documentBody.getByText('Example Description')).toBeVisible()
      expect(documentBody.getByText('Activities')).toBeVisible()
      expect(documentBody.getByTestId('MockActivityContainer')).toBeVisible()
    }, 100)
  })
})
