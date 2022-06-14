import { Formik, FormikHelpers, FormikErrors, Field } from 'formik'
import {
  Row,
  SingleCol,
  Form,
  FormSubtitle,
  HelperText,
} from '../../styles/styles'
import {
  useCreateActivityMutation,
  useUpdateActivityMutation,
} from '../../features/activities/activities-slice'
import { Activity } from '../../features/activities/activities-slice'
import React from 'react'
import { Button, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { LocalizationProvider } from '@mui/x-date-pickers'

// import { IoFastFood } from 'react-icons/io5'

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
  currentActivity?: any
  closePopup: () => void
}

const ActivityForm: React.FC<FormProps> = ({
  job_id,
  currentActivity,
  closePopup,
}: FormProps) => {
  const [createActivity, data] = useCreateActivityMutation()
  const [updateActivity, editData] = useUpdateActivityMutation()

  console.log(data, editData)
  //const job = useAppSelector(state => state.job)

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Formik
          initialValues={{
            ID: currentActivity?.ID,
            job_id: String(job_id) ?? '',
            category: currentActivity?.category ?? '',
            description: currentActivity?.description ?? '',
            start_date: currentActivity?.start_date ?? '',
            end_date: currentActivity?.end_date ?? '',
            status: currentActivity?.status ?? '',
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

            if (currentActivity) {
              await updateActivity(values)
            } else {
              await createActivity(values)
            }

            setSubmitting(false)
            closePopup()
            // history.push('/home')
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            touched,
            errors,
            values,
            isValid,
            dirty,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormSubtitle>Activity info</FormSubtitle>

              <Row>
                <SingleCol>
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
                </SingleCol>
              </Row>
              <Row>
                <SingleCol>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    //border = {!(touched.jobtitle  && errors.jobtitle && "1px solid red")}
                    id="description"
                    name="description"
                    placeholder="Activity Description"
                  />
                  {touched.description && errors.description && (
                    <HelperText>{errors.description}</HelperText>
                  )}
                </SingleCol>
              </Row>

              <Row>
                <SingleCol>
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  value={props.values.date}
                  onChange={value => props.setFieldValue("date", value)}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider> */}
                  <DatePicker
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={values.start_date}
                    onChange={(value) => {
                      console.log(value)
                      setFieldValue('start_date', value)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  {touched.start_date && errors.start_date && (
                    <HelperText>{errors.start_date}</HelperText>
                  )}
                </SingleCol>
              </Row>

              <Row>
                <SingleCol>
                  {/* <Field
                    name="end_date"
                    onChange={handleChange}
                    placeholder="end_date"
                  ></Field> */}
                  <DatePicker
                    label="End Date"
                    inputFormat="MM/dd/yyyy"
                    value={values.end_date}
                    onChange={(value) => {
                      console.log(value)
                      setFieldValue('end_date', value)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {touched.end_date && errors.end_date && (
                    <HelperText>{errors.end_date}</HelperText>
                  )}
                </SingleCol>
              </Row>

              <Row>
                <SingleCol>
                  <Field
                    name="status"
                    onChange={handleChange}
                    placeholder="status"
                  ></Field>

                  {touched.status && errors.status && (
                    <HelperText>{errors.status}</HelperText>
                  )}
                </SingleCol>
              </Row>

              <Button type="submit" disabled={!isValid || !dirty}>
                <CheckIcon fontSize="large" /> Save Activity
              </Button>
            </Form>
          )}
        </Formik>
      </LocalizationProvider>
    </div>
  )
}
export default ActivityForm