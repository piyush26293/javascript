import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { useEffect } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';

import "./LoginComponent.scss"
export function LoginComponent() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/pages");
    }
  }, []);

  const validationSchema = yup.object({
    email:yup
    .string('Enter your email')
    .email('enter valid email')
    .required('email is required'),
    password:yup
    .string('Enter you password')
    .min(8,'Password should be of minimum 8 character')
    .required('Password is required')
  });

  const formik = useFormik({
    initialValues :{
        email:'',
        password: '',
    },
    onSubmit:(values)=>{
        // alert(JSON.stringify(values, null,2));
        navigate('/pages')
    },
  });




  return (
    <div className="login-component">
      <Paper elevation={3} className="form-container">

        <form className="d-flex align-items-center flex-column" onSubmit={formik.handleSubmit}>
        <h3>Login</h3>
          <TextField fullWidth 
          name="email" label="Email" className="my-3" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}/>
          <TextField fullWidth
            type="password" name="password" label="Password" className=" mb-3" value={formik.values.password}  onChange={formik.handleChange}/>
          <Button variant="contained" type="submit">Login</Button>
        </form>
      </Paper>
    </div>
  );
}
