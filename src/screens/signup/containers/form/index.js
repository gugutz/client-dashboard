import {withFormik} from 'formik'
import InnerForm from '../../components/inner-form'
import validate from './validate'
import handleSubmit from './handle-submit'

const Form = withFormik({
  mapPropsToValues: () => ({
    isCompany: '',
    email: '',
    password: '',
    name: '',
    legalName: '',
    segment: '',
    postalCode: '',
    latitude: '',
    longitude: '',
    streetAddress: '',
    city: '',
    state: '',
    captcha: ''
  }),
  validate,
  handleSubmit
})(InnerForm)

export default Form
