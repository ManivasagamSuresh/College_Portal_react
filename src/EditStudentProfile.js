import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { createRoutesFromChildren, useParams } from 'react-router-dom';

function EditStudentProfile() {
    let useparams = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      fathername: "",
      city: "",
      phone: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "please enter a name";
        console.log(error.name);
      }
      if (!values.image) {
        error.image = "please enter a image";
      }
      if (!values.fathername) {
        error.fathername = "please enter fathername";
      }
      
      if (!values.city) {
        error.city = "please enter a city";
      }
      if (!values.phone) {
        error.phone = "please enter a Contact";
      }
    //   if (values.Contact.length() != 10) {
    //     error.Contact = "please enter a valid mobile Number";
    //   }
      return error;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const userdata = await axios.put(
          `https://63450500dcae733e8fe7f213.mockapi.io/students/${useparams.id}`,
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });
  useEffect(()=>{
    let data = async ()=>{
      let a = await axios.get(`https://63450500dcae733e8fe7f213.mockapi.io/students/${useparams.id}`)
      // console.log(a);
      formik.setValues(a.data)
    }
    data()
   
  },[])
  return (
    <div className="container">
    <div className="row">
      <form onSubmit={formik.handleSubmit}>
        <div className="col-lg-12">
          <label>Name : </label>
          <input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            type="text"
            className="form-control"
            style={{ width: "350px" }}
          />
          {formik.errors.name&&formik.touched.name ? (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          ) : null}
        </div>
        
        <div className="col-lg-12">
          <label>Father's Name : </label>
          <input
            name="fathername"
            onChange={formik.handleChange}
            value={formik.values.fathername}
            onBlur={formik.handleBlur}
            type="text"
            className="form-control"
            style={{ width: "350px" }}
          />
          {formik.errors.fathername&&formik.touched.fathername ? (
            <span style={{ color: "red" }}>{formik.errors.fathername}</span>
          ) : null}
        </div>
        <div className="col-lg-12">
          <label>Contact : </label>
          <input
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="text"
            className="form-control"
            style={{ width: "350px" }}
          />
          {formik.errors.phone&&formik.touched.phone ? (
            <span style={{ color: "red" }}>{formik.errors.phone}</span>
          ) : null}
        </div>
        <div className="col-lg-12">
          <label>City : </label>
          <input
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            type="text"
            className="form-control"
            style={{ width: "350px" }}
          />
          {formik.errors.city&&formik.touched.city ? (
            <span style={{ color: "red" }}>{formik.errors.city}</span>
          ) : null}
        </div>
        <div className="col-lg-12">
          <label>Image : </label>
          <input
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            type="text"
            className="form-control"
            style={{ width: "350px" }}
          />
          {formik.errors.image&&formik.touched.image ? (
            <span style={{ color: "red" }}>{formik.errors.image}</span>
          ) : null}
        </div>
        <div className="col-lg-12">
          <button type="submit" className="btn btn-primary mt-5 ms-10">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EditStudentProfile