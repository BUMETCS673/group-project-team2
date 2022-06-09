import {Formik, Field,  FormikHelpers, FormikErrors} from 'formik'
import {Row, Col, Form, FormSubtitle } from '../../styles/styles'
import { useAppDispatch} from '../../app/hooks'
import { setJob }  from '../../features/job/job-slice'

interface Values {
    companyName: string;
    jobTitle: string;
    description: string;
    status: string;
}

const JobForm = () =>{
  const dispatch = useAppDispatch()
  
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
        onSubmit={(values:Values, {setSubmitting}: FormikHelpers<Values>) => {
            dispatch(setJob(values))
            setSubmitting(false)
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
                  border = {touched.companyName && errors.companyName && "1px solid red"}
                  id="companyName" 
                  name="companyName" 
                  placeholder = "Company"
                 />
                </Col>
                <Col>
                    
                    <Field
                      onChange = {handleChange}
                      onBlur = {handleBlur}
                      value = {values.jobTitle}
                      border = {touched.jobTitle && errors.jobTitle && "1px solid red"}
                      id="jobTitle" 
                      name="jobTitle" 
                      placeholder = "Job Title" 
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <Field 
                      as= "textarea" 
                      onChange = {handleChange}
                      onBlur = {handleBlur}
                      value = {values.description}
                      border = {touched.description && errors.description && "1px solid red"}
                      id="description" 
                      name="description" 
                      placeholder = "Job description..." 
                    />
                </Col>
                <Col>
                    
                    <Field 
                      as= "select" 
                      onChange = {handleChange}
                      value = {values.status}
                      border = {touched.status && errors.status && "1px solid red"}
                      id="status" 
                      name="status" 
                      placeholder = "Select status..." 
                    >
                      <option value = "in progress">In progress</option>
                      <option value = "completed process">Completed process</option>
                      <option value = "received offer">Received Offer</option>
                    </Field>
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