import {useState, useEffect} from 'react'

const useForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({})

  const { name, value } = e.target
  const handleChange = e => {
    setValues({
      ...values,
      [name]: value
    })
  }
  return  {handleChange}
}

export default useForm;