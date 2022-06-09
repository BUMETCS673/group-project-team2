import {Formik, FormikHelpers, FormikErrors, Field} from 'formik'
import {Row, Col, Form, FormSubtitle, HelperText } from '../../styles/styles'
import { useAppDispatch} from '../../app/hooks'
import { setJob }  from '../../features/job/job-slice'
import { useCreateJobMutation } from '../../features/jobs/jobs-api-slice'
import {useHistory} from 'react-router-dom'

interface Values {
    companyName: string;
    jobTitle: string;
    description: string;
    status: string;
}

const JobForm = () =>{
  const {push} = useHistory()
  const dispatch = useAppDispatch()
  const [createJob, data] = useCreateJobMutation()
  console.log(data)
  //const job = useAppSelector(state => state.job)
  
  return (
    <div>
      <Formik
        initialValues={{
          companyName: '',
          jobTitle: '',
          description: '',
          status: '',
        }}
        validate = {(values:Values) => {
          let errors: FormikErrors<Values> = {}
          if (!values.companyName) {
            errors.companyName = "Required"
          }
          if (!values.jobTitle) {
            errors.jobTitle = "Required"
          }
          if (!values.status) {
            errors.status = "Required"
          }
          return errors
        }}
        onSubmit={async (values:Values, {setSubmitting}: FormikHelpers<Values>) => {
          console.log(values)
            dispatch(setJob(values))
            await createJob(values)
            setSubmitting(false)
            push('/home')
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
          dirty
        }) => (
          <Form onSubmit = {handleSubmit}>
            
                <FormSubtitle>
                    Job info
                </FormSubtitle>
                
            
            <Row>
                <Col>
                <Field 
                  onChange = {handleChange}
                  onBlur = {handleBlur}
                  value = {values.companyName}
                  //border = {!(touched.companyName  && errors.companyName && "1px solid red" )}
                  id="companyName" 
                  name="companyName" 
                  placeholder = "Company"
                 />
                 {touched.companyName && errors.companyName && (
                    <HelperText>{errors.companyName}</HelperText>
                  )}
                </Col>
                <Col>
                    
                    <Field
                      onChange = {handleChange}
                      onBlur = {handleBlur}
                      value = {values.jobTitle}
                      //border = {!(touched.jobTitle  && errors.jobTitle && "1px solid red")}
                      id="jobTitle" 
                      name="jobTitle" 
                      placeholder = "Job Title" 
                    />
                    {touched.jobTitle && errors.jobTitle && (
                    <HelperText>{errors.jobTitle}</HelperText>
                  )}
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <Field 
                      as = "textarea"
                      onChange = {handleChange}
                      onBlur = {handleBlur}
                      value = {values.description}
                      id="description" 
                      name="description" 
                      placeholder = "Job description..." 
                    />

                </Col>

                <Col>
              
                    <Field name  = "status" onChange = {handleChange} placeholder = "Status"></Field>
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
            <FormSubtitle>
                Activities
            </FormSubtitle>
            <Row>
            <Col>
                
                
            </Col>
            </Row>
          

          

          
          <button type="submit" disabled = {!isValid || !dirty}>Save</button>
        </Form>
        )}
        
      </Formik>
    </div>
)}
export default JobForm