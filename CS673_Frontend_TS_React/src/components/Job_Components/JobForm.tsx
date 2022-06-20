import { Formik, FormikHelpers, FormikErrors, Field } from 'formik'
import { Row, Col, Form, FormSubtitle, HelperText } from '../../styles/styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setJob } from '../../features/job/job-slice'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {
  useCreateJobMutation,
  useUpdateJobMutation,
} from '../../features/jobs/jobs-api-slice'
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { Job } from '../../types/types'

interface Values {
  companyname: string
  jobtitle: string
  description: string
  status: string
}

interface JobFormType {
  job_id?: string | undefined
  closePopup: () => void
}

const JobForm: React.FC<JobFormType> = ({
  job_id,
  closePopup,
}: JobFormType) => {
  const dispatch = useAppDispatch()
  const jobsList = useAppSelector((state) => state.user.jobs)
  const jobToEdit: Job | null = jobsList.filter((job) => job.ID == job_id)[0]
  const [createJob] = useCreateJobMutation()
  const [updateJob] = useUpdateJobMutation()

  return (
    <div>
      <Formik
        initialValues={{
          companyname: jobToEdit ? jobToEdit.companyname : '',
          jobtitle: jobToEdit ? jobToEdit.jobtitle : '',
          description: jobToEdit ? jobToEdit.description : '',
          status: jobToEdit ? jobToEdit.status : '',
        }}
        validate={(values: Values) => {
          let errors: FormikErrors<Values> = {}
          if (!values.companyname) {
            errors.companyname = 'Required'
          }
          if (!values.jobtitle) {
            errors.jobtitle = 'Required'
          }
          if (!values.status) {
            errors.status = 'Required'
          }
          return errors
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values)
          if (jobToEdit) {
            await updateJob({ ...values, ID: job_id })
          } else {
            dispatch(setJob(values))
            await createJob(values)
          }
          setSubmitting(false)
          closePopup()
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
          errors,
          values,
          isValid,
          dirty,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormSubtitle>Job info</FormSubtitle>

            <Row>
              <Col>
                <label
                  htmlFor="companyname"
                  style={{ fontSize: '1rem', display: 'flex' }}
                >
                  Company Name
                </label>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyname}
                  id="companyname"
                  data-testid="companyname"
                  name="companyname"
                  placeholder="Google"
                  style={{ minWidth: 180 }}
                  label="Company Name"
                />
                {touched.companyname && errors.companyname && (
                  <HelperText
                    sx={{ color: '#c70e1a' }}
                    data-testid="companynameError"
                  >
                    {errors.companyname}
                  </HelperText>
                )}
              </Col>
              <Col>
                <label
                  htmlFor="jobtitle"
                  style={{ fontSize: '1rem', display: 'flex' }}
                >
                  Job Title
                </label>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobtitle}
                  id="jobtitle"
                  name="jobtitle"
                  data-testid="jobtitle"
                  placeholder="Software Engineer"
                  style={{ minWidth: 180 }}
                />
                {touched.jobtitle && errors.jobtitle && (
                  <HelperText
                    sx={{ color: '#c70e1a' }}
                    data-testid="jobtitleError"
                  >
                    {errors.jobtitle}
                  </HelperText>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  htmlFor="description"
                  style={{
                    fontSize: '1rem',
                    display: 'flex',
                    marginBottom: '1rem',
                  }}
                >
                  Job description
                </label>
                <Field
                  as="textarea"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  id="description"
                  name="description"
                  placeholder="Software Development Engineer on the Ads Analytics Team"
                  style={{ minWidth: 180 }}
                />
              </Col>

              <Col>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="select-helper-label">Status</InputLabel>
                  <Select
                    labelId="select-helper-label"
                    name="status"
                    value={values.status}
                    label="status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Received offer">Received offer</MenuItem>
                    <MenuItem value="Declined offer">Declined offer</MenuItem>
                    <MenuItem value="Not aligned">Not aligned</MenuItem>
                  </Select>
                  {touched.status && errors.status && (
                    <HelperText
                      sx={{ color: '#c70e1a' }}
                      data-testid="statusError"
                    >
                      {errors.status}
                    </HelperText>
                  )}
                </FormControl>
              </Col>
            </Row>

            <Button type="submit" disabled={!isValid || !dirty}>
              <CheckIcon fontSize="large" /> Save job
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default JobForm
