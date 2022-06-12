import { Formik, FormikHelpers, FormikErrors, Field } from 'formik'
import { Row, Col, Form, FormSubtitle, HelperText } from '../../styles/styles'
import { useAppDispatch } from '../../app/hooks'
import { setJob } from '../../features/job/job-slice'
import { useCreateJobMutation } from '../../features/jobs/jobs-api-slice'
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
  const [createJob, data] = useCreateJobMutation()
  console.log(data, job_id)
  //const job = useAppSelector(state => state.job)

  return (
    <div>
      <Formik
        initialValues={{
          companyname: '',
          jobtitle: '',
          description: '',
          status: '',
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
          dispatch(setJob(values))
          await createJob(values)
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
                  name="companyname"
                  placeholder="Company"
                />
                {touched.companyname && errors.companyname && (
                  <HelperText>{errors.companyname}</HelperText>
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
                  placeholder="Job Title"
                />
                {touched.jobtitle && errors.jobtitle && (
                  <HelperText>{errors.jobtitle}</HelperText>
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
                  placeholder="Status"
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
                  <HelperText>{errors.status}</HelperText>
                )}
              </Col>
            </Row>
            <FormSubtitle>Activities</FormSubtitle>
            <Row>
              <Col></Col>
            </Row>

            <button type="submit" disabled={!isValid || !dirty}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default JobForm
