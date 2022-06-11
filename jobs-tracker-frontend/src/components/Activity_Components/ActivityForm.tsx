import { Formik, FormikHelpers, FormikErrors, Field } from 'formik'
import { Row, Col, Form, FormSubtitle, HelperText } from '../../styles/styles'
import { useCreateActivityMutation } from '../../features/activities/activities-slice'
import { useHistory } from 'react-router-dom'
import { Activity } from '../../features/activities/activities-slice'
import React from 'react'

// interface Values {
//   jobId: string
//   category: string
//   description: string
//   start_date: string
//   endDate: string
//   status: string
// }

type FormProps = {
  job_id: string | undefined
}

const ActivityForm: React.FC<FormProps> = ({ job_id }: FormProps) => {
  const history = useHistory()
  const [createActivity, data] = useCreateActivityMutation()
  console.log(data)
  //const job = useAppSelector(state => state.job)

  return (
    <div>
      <Formik
        initialValues={{
          job_id: String(job_id) ?? '',
          category: '',
          description: '',
          start_date: '',
          end_date: '',
          status: '',
        }}
        validate={(values: Activity) => {
          let errors: FormikErrors<Activity> = {}
          // if (!values.job_id) {
          //   errors.job_id = 'Required'
          // }
          if (!values.category) {
            errors.category = 'Required'
          }
          if (!values.description) {
            errors.description = 'Required'
          }
          if (!values.start_date) {
            errors.start_date = 'Required'
          }
          if (!values.end_date) {
            errors.end_date = 'Required'
          }
          if (!values.status) {
            errors.status = 'Required'
          }
          return errors
        }}
        onSubmit={async (
          values: Activity,
          { setSubmitting }: FormikHelpers<Activity>
        ) => {
          console.log(values)

          await createActivity(values)
          setSubmitting(false)
          history.push('/home')
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
            <FormSubtitle>Activity info</FormSubtitle>

            <Row>
              <Col>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                  //border = {!(touched.companyname  && errors.companyname && "1px solid red" )}
                  id="category"
                  name="category"
                  placeholder="category"
                />
                {touched.category && errors.category && (
                  <HelperText>{errors.category}</HelperText>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <Field
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  //border = {!(touched.jobtitle  && errors.jobtitle && "1px solid red")}
                  id="description"
                  name="description"
                  placeholder="Activity DeScription"
                />
                {touched.description && errors.description && (
                  <HelperText>{errors.description}</HelperText>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                <Field
                  as="textarea"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start_date}
                  id="start_date"
                  name="start_date"
                  placeholder="Activity start_date..."
                />

                {touched.start_date && errors.start_date && (
                  <HelperText>{errors.start_date}</HelperText>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                <Field
                  name="end_date"
                  onChange={handleChange}
                  placeholder="end_date"
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
                {touched.end_date && errors.end_date && (
                  <HelperText>{errors.end_date}</HelperText>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                <Field
                  name="status"
                  onChange={handleChange}
                  placeholder="status"
                ></Field>

                {touched.status && errors.status && (
                  <HelperText>{errors.status}</HelperText>
                )}
              </Col>
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
export default ActivityForm
