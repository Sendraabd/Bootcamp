import React from 'react'
import { UseSelector,useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { doSignupRequest } from '../ReduxSaga/Action/UserAction'
export default function Signup() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            phone: ""
        },
        onSubmit : async(values) =>{
            let payload = {
                username: values.username,
                email: values.email,
                password: values.password,
                phone: values.phone
            }
            dispatch(doSignupRequest(payload))
        }
    })
  return (
    <div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
        <label>password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
        <label>email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
        <label>phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        ></input>
      </div>
      <div>
          <button type="submit" onClick={formik.handleSubmit}>
            login
          </button>
        </div>
    </div>
  )
}
