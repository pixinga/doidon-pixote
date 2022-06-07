import { useState, useEffect, useCallback } from 'react'
const isText = RegExp(/^[A-Z ]+$/i)
const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
const isPhone = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/) // us
// const isZip = RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/) // us
const isNumber = RegExp(/^\d+$/)

export const useFormValidation = (schema: any) => {
  const [state, setState] = useState(schema)
  const [disabled, setDisabled] = useState(true)

  const validateState = useCallback(() => {
    return Object.keys(schema).some((key) => {
      return (schema[key].required && !state[key].value) || state[key].error
    })
  }, [state, schema])

  useEffect(() => {
    setDisabled(validateState())
    return () => setDisabled(true)
  }, [validateState])

  const handleBlur = ({ target }) => {
    const { name, value } = target
    const field = schema[name]

    if (!field) return

    const { required, minLength, maxLength } = field

    if (!required) return

    let error = ''
    if (value === '') error = 'This field is required.'
    else if (minLength && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`
    else if (maxLength && value.length > maxLength)
      error = 'Maximum length exceeded!'

    setState((prev) => ({
      ...prev,
      [name]: { value, error }
    }))
  }

  const handleChange = ({ target }) => {
    const { name, type, value, checked } = target
    const field = schema[name]
    const { required, validate, helperText, minLength, maxLength } = field

    if (!field || !required) return

    let error = ''

    if (minLength && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`
    else if (maxLength && value.length > maxLength)
      error = 'Maximum length exceeded!'

    switch (validate) {
      case 'text':
        if (!isText.test(value)) error = helperText
        break

      case 'number':
        if (!isNumber.test(value)) error = helperText
        break

      case 'email':
        if (!isEmail.test(value)) error = helperText
        break

      case 'phone':
        if (!isPhone.test(value)) error = helperText
        break

      case 'checkbox':
        if (state[name].value) error = helperText
        break

      default:
        break
    }

    setState((prev) => ({
      ...prev,
      [name]: { value: type === 'checkbox' ? checked : value, error }
    }))
  }

  return { state, disabled, handleChange, handleBlur }
}
