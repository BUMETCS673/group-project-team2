import {Formik, Field, Form, FormikHelpers} from 'formik'
interface Values {
    companyName: string;
    jobTitle: string;
}
const sleep = ms => new Promise(r => setTimeout(r, ms))
const JobForm = ({onSubmit}) => {
    const handleSubmit = async values= => {
        await sleep(500)
        onSubmit(values)
      }
    <div>
      <Formik
        initialValues={{
          companyName: '',
          jobTitle: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="companyName">Company</label>
          <Field id="companyName" name="companyName" />

          <label htmlFor="jobTitle">Last Name</label>
          <Field id="jobTitle" name="jobTitle" />

          
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
}
export default JobForm