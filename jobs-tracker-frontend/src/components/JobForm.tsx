import {Formik, Field,  FormikHelpers} from 'formik'
import {Row, Col, Form, FormSubtitle } from '../styles/styles'
interface Values {
    companyName: string;
    jobTitle: string;
}

const JobForm = () => (
    <div>
      <Formik
        initialValues={{
          companyName: '',
          jobTitle: '',
        }}
        onSubmit={(values:Values, {setSubmitting}: FormikHelpers<Values>) => {
            //dispatch action
            setSubmitting(false)
        }}
      >
        <Form>
            
                <FormSubtitle>
                    Job info
                </FormSubtitle>
                
            
            <Row>
                <Col>
                <Field id="companyName" name="companyName" placeholder = "Company" />
                </Col>
                <Col>
                    
                    <Field id="jobTitle" name="jobTitle" placeholder = "Job Title" />
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <Field as= "textarea" id="description" name="description" placeholder = "Job description..." />
                </Col>
            </Row>
          

          

          
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
)
export default JobForm