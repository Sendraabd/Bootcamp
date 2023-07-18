import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { doSigninRequest } from "../ReduxSaga/Action/UserAction";

export default function Signin() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        password: values.password,
      };
      dispatch(doSigninRequest(payload))
    },
  });
  return( 
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
          <button type="submit" onClick={formik.handleSubmit}>
            login
          </button>
        </div>
  </div>);
}
