import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {ErrorMessage, Field, Formik,Form} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  // const [form, setForm] = useState({});

  // function handleValidate() {
  //   const error = {};

  // }

  return (
    <div className="App">
        <h1>Contact form</h1>
        <Formik
          initialValues = {{name: '', email:'', phone:'', message:''}}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('Required.')
              .min(6, "Must be 6 characters or more"),
            email: Yup.string()
              .required('Required.')
              .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,'Invalid email'),
            phone: Yup.string()
              .required('Required.'),
            message: Yup.string()
              .required('Required.')
          })}
          onSubmit = {(values,{setSubmitting}) => {}}
        >
          <Form>
            <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <Field 
                type="text" 
                name="name" 
                className='form-control'
                id='name'
              />
              <ErrorMessage name='name' component='span' className='form-err'/>
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <Field 
                type="email" 
                name="email" 
                className='form-control'
                id='email'
              />
              <ErrorMessage name='email' component='span' className='form-err'/>
            </div>
            <div className='mb-3'>
              <label htmlFor='phone'>Phone number</label>
              <Field 
                type="text" 
                name="phone" 
                className='form-control'
                id='phone'
              />
              <ErrorMessage name='phone' component='span' className='form-err'/>
            </div>
            <div className='mb-3'>
              <label htmlFor='message'>Message</label>
              <Field 
                type="textarea" 
                name="message" 
                className='form-control'
                id='message'
              />
              <ErrorMessage name='message' component='span' className='form-err'/>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
    </div>
  );
}

export default App;
