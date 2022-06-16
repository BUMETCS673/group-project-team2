import { Formik, FormikHelpers, FormikErrors, Field } from 'formik'
import { Row, Col, Form, FormSubtitle, HelperText } from '../../styles/styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setJob } from '../../features/job/job-slice'
import { useCreateJobMutation, useUpdateJobMutation } from '../../features/jobs/jobs-api-slice'
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { Job } from '../../types/types'
// import { useHistory } from 'react-router-dom'

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
  // const { push } = useHistory()
  const dispatch = useAppDispatch()
  const jobsList = useAppSelector(state => state.user.jobs)
  const jobToEdit:Job | null = jobsList.filter( job => job.ID == job_id)[0]
  const [createJob, newJob] = useCreateJobMutation()
  const [updateJob, editJob] = useUpdateJobMutation()
  console.log(newJob, job_id)
  console.log(editJob, job_id)
  //const job = useAppSelector(state => state.job)

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
            await updateJob(values)
          } else {
            dispatch(setJob(values))
            await createJob(values)
          }
          setSubmitting(false)
          closePopup()
          // push('/home')
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
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyname}
                  //border = {!(touched.companyname  && errors.companyname && "1px solid red" )}
                  id="companyname"
                  data-testid="companyname"
                  name="companyname"
                  placeholder="Company"
                />
                {touched.companyname && errors.companyname && (
                  <HelperText data-testid="companynameError">{errors.companyname}</HelperText>
                )}
              </Col>
              <Col>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobtitle}
                  //border = {!(touched.jobtitle  && errors.jobtitle && "1px solid red")}
                  id="jobtitle"
                  name="jobtitle"
                  data-testid="jobtitle" 
                  placeholder="Job Title"
                />
                {touched.jobtitle && errors.jobtitle && (
                  <HelperText data-testid="jobtitleError">{errors.jobtitle}</HelperText>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <Field
                  as="textarea"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  id="description"
                  name="description"
                  placeholder="Job description..."
                />
              </Col>

              <Col>
                <Field
                  name="status"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Status"
                  data-testid = "status"
                  value={values.status}
                ></Field>
                {/* <Field 
                      component = "select"
                      onChange = {handleChange}
                      
                      //border = {!(touched.status  && errors.status && "1px solid red")}
                       
                      name="status" 
                      
                      
                    >
                      <option value = "in progress">In progress</option>
                      <option  value = "completed process">Completed process</option>
                      <option value = "received offer">Received Offer</option>
                    </Field> */}
                {touched.status && errors.status && (
                  <HelperText data-testid="statusError">{errors.status}</HelperText>
                )}
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
