import {Formik, FormikHelpers, FormikErrors, Field} from 'formik'
import {Row, Col, Form, FormSubtitle, HelperText, Label } from '../../styles/styles'
import { useAppDispatch} from '../../app/hooks'
import { setJob }  from '../../features/job/job-slice'
import { useCreateJobMutation } from '../../features/api/api-slice'


interface Values {
    companyname: string;
    jobtitle: string;
    description: string;
    status: string;
}

const JobForm = () =>{
  const dispatch = useAppDispatch()
  const [createJob, data] = useCreateJobMutation()
  console.log("data: ", data)
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
        validate = {(values:Values) => {
          let errors: FormikErrors<Values> = {}
          if (!values.companyname) {
            errors.companyname = "Required"
          }
          if (!values.jobtitle) {
            errors.jobtitle = "Required"
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
                  value = {values.companyname}
                  //border = {!(touched.companyname  && errors.companyname && "1px solid red" )}
                  data-testid="companyname" 
                  name="companyname" 
                  placeholder = "Company"
                 />
                 {touched.companyname && errors.companyname && (
                    <HelperText>{errors.companyname}</HelperText>
                  )}
                </Col>
                <Col>
                    <Label>
                    <Field
                      onChange = {handleChange}
                      onBlur = {handleBlur}
                      value = {values.jobtitle}
                      //border = {!(touched.jobtitle  && errors.jobtitle && "1px solid red")}
                      data-testid="jobtitle" 
                      name="jobtitle" 
                      placeholder = "Job Title" 
                    />
                    {touched.jobtitle && errors.jobtitle && (
                    <HelperText>{errors.jobtitle}</HelperText>
                  )}
                    </Label>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Label>
                    <Field 
                      as = "textarea"
                      onChange = {handleChange}
                      onBlur = {handleBlur}
                      value = {values.description}
                      data-testid="description" 
                      name="description" 
                      placeholder = "Job description..." 
                    />
                    </Label>
                    

                </Col>

                <Col>
                      <Label>
                        <Field name  = "status" onChange = {handleChange} placeholder = "Status" data-testid = "status"></Field>
                      </Label>
                    
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