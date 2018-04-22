import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'bulma-ui'
import Field from '../../../../components/ui/field'
import Radio from '../../../../components/ui/radio'
import Select from '../../../../components/ui/select'
import Message from '../../../../components/ui/message'

const statesList = [
  {
    // Id: '1',
    value: 'AC',
    text: 'Acre'
  },
  {
    // Id: '2',
    value: 'AL',
    text: 'Alagoas'
  },
  {
    // Id: '3',
    value: 'AM',
    text: 'Amazonas'
  },
  {
    // Id: '4',
    value: 'AP',
    text: 'Amapá'
  },
  {
    // Id: '5',
    value: 'BA',
    text: 'Bahia'
  },
  {
    // Id: '6',
    value: 'CE',
    text: 'Ceará'
  },
  {
    // Id: '7',
    value: 'DF',
    text: 'Distrito Federal'
  },
  {
    // Id: '8',
    value: 'ES',
    text: 'Espírito Santo'
  },
  {
    // Id: '9',
    value: 'GO',
    text: 'Goiás'
  },
  {
    // Id: '10',
    value: 'MA',
    text: 'Maranhão'
  },
  {
    // Id: '11',
    value: 'MG',
    text: 'Minas Gerais'
  },
  {
    // Id: '12',
    value: 'MS',
    text: 'Mato Grosso do Sul'
  },
  {
    // Id: '13',
    value: 'MT',
    text: 'Mato Grosso'
  },
  {
    // Id: '14',
    value: 'PA',
    text: 'Pará'
  },
  {
    // Id: '15',
    value: 'PB',
    text: 'Paraíba'
  },
  {
    // Id: '16',
    value: 'PE',
    text: 'Pernambuco'
  },
  {
    // Id: '17',
    value: 'PI',
    text: 'Piauí'
  },
  {
    // Id: '18',
    value: 'PR',
    text: 'Paraná'
  },
  {
    // Id: '19',
    value: 'RJ',
    text: 'Rio de Janeiro'
  },
  {
    // Id: '20',
    value: 'RN',
    text: 'Rio Grande do Norte'
  },
  {
    // Id: '21',
    value: 'RO',
    text: 'Rondônia'
  },
  {
    // Id: '22',
    value: 'RR',
    text: 'Roraima'
  },
  {
    // Id: '23',
    value: 'RS',
    text: 'Rio Grande do Sul'
  },
  {
    // Id: '24',
    value: 'SC',
    text: 'Santa Catarina'
  },
  {
    // Id: '25',
    value: 'SE',
    text: 'Sergipe'
  },
  {
    // Id: '26',
    value: 'SP',
    text: 'São Paulo'
  },
  {
    // Id: '27',
    value: 'TO',
    text: 'Tocantins'
  }
]

const isCompanyOptions = [
  {
    value: 'false',
    text: 'Pessoa Física'
  },
  {
    value: 'true',
    text: 'Pessoa Jurídica'
  }
]

const segments = [
  {
    value: 'automotive',
    text: 'Automotivo'
  },
  {
    value: 'eletronics',
    text: 'Eletronicos'
  },
  {
    value: 'internet',
    text: 'Internet'
  }
]

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  status
}) => (
  <form onSubmit={handleSubmit}>
    {status.message && <Message {...status.message} />}
    <Radio
      type="radio"
      name="isCompany"
      label={false}
      options={isCompanyOptions}
      isSuccess={touched.email && !errors.email}
      isDanger={touched.email && Boolean(errors.email)}
      errorMessage={errors.isCompany}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.isCompany}
      placeholder="Pessoa Jurídica"
    />
    <Field
      type="email"
      name="email"
      label={false}
      isSuccess={touched.email && !errors.email}
      isDanger={touched.email && Boolean(errors.email)}
      errorMessage={errors.email}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      placeholder="Digite seu e-mail"
    />
    <Field
      type="password"
      name="password"
      label={false}
      isSuccess={touched.password && !errors.password}
      isDanger={touched.password && Boolean(errors.password)}
      errorMessage={errors.password}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      placeholder="Digite a Senha"
    />
    <Field
      type="text"
      name="name"
      label={false}
      isSuccess={touched.name && !errors.name}
      isDanger={touched.name && Boolean(errors.name)}
      errorMessage={errors.name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      placeholder="Digite seu nome"
    />
    <Field
      type="text"
      name="legalName"
      label={false}
      isSuccess={touched.legalName && !errors.legalName}
      isDanger={touched.legalName && Boolean(errors.legalName)}
      errorMessage={errors.legalName}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.legalName}
      placeholder="Digite seu nome de pessoa jurídica"
    />

    <Select
      type="select"
      name="segment"
      options={segments}
      label={false}
      isSuccess={touched.segment && !errors.segment}
      isDanger={touched.segment && Boolean(errors.segment)}
      errorMessage={errors.segment}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.segment}
      placeholder="Escolha o segmento da sua empresa"
    />
    <Field
      type="text"
      name="postalCode"
      label={false}
      isSuccess={touched.postalCode && !errors.postalCode}
      isDanger={touched.postalCode && Boolean(errors.postalCode)}
      errorMessage={errors.postalCode}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.postalCode}
      placeholder="Digite seu CEP"
    />
    <Field
      type="number"
      name="latitude"
      label={false}
      isSuccess={touched.latitude && !errors.latitude}
      isDanger={touched.latitude && Boolean(errors.latitude)}
      errorMessage={errors.latitude}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.latitude}
      placeholder="Latitude"
    />
    <Field
      type="number"
      name="longitude"
      label={false}
      isSuccess={touched.longitude && !errors.longitude}
      isDanger={touched.longitude && Boolean(errors.longitude)}
      errorMessage={errors.longitude}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.longitude}
      placeholder="Longitude"
    />
    <Field
      type="text"
      name="streetAddress"
      label={false}
      isSuccess={touched.streetAddress && !errors.streetAddress}
      isDanger={touched.streetAddress && Boolean(errors.streetAddress)}
      errorMessage={errors.streetAddress}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.streetAddress}
      placeholder="Digite seu endereço"
    />

    <Select
      type="select"
      name="state"
      label={false}
      options={statesList}
      isSuccess={touched.state && !errors.state}
      isDanger={touched.state && Boolean(errors.state)}
      errorMessage={errors.state}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.state}
      placeholder="Digite seu estado"
    />
    <Field
      type="text"
      name="city"
      label={false}
      isSuccess={touched.city && !errors.city}
      isDanger={touched.city && Boolean(errors.city)}
      errorMessage={errors.city}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.city}
      placeholder="Digite sua cidade"
    />
    <Button
      type="submit"
      color="success"
      size="medium"
      isFullWidth
      isOutlined
      isRounded
      state={isSubmitting ? 'loading' : 'normal'}
    >
      Efetuar cadastro
    </Button>
  </form>
)

InnerForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  status: PropTypes.shape({
    message: PropTypes.shape({
      text: PropTypes.string,
      isDanger: PropTypes.bool,
      isInfo: PropTypes.bool
    })
  }),
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

InnerForm.defaultProps = {
  touched: {
    email: false,
    password: false
  },
  errors: {
    email: null,
    password: null
  },
  status: {
    message: null
  }
}

export default InnerForm
