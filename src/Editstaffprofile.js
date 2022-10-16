import { Button } from "bootstrap";
import React from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editstaffprofile() {
  let useparams = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      position: "",
      dept: "",
      city: "",
      Contact: "",
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
      if (!values.position) {
        error.position = "please enter a position";
      }
      if (!values.dept) {
        error.dept = "please enter a dept";
      }
      if (!values.city) {
        error.city = "please enter a city";
      }
      if (!values.Contact) {
        error.Contact = "please enter a Contact";
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
          `https://63450500dcae733e8fe7f213.mockapi.io/staff/${useparams.id}`,
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });
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
            <label>Department : </label>
            <input
              name="dept"
              onChange={formik.handleChange}
              value={formik.values.dept}
              onBlur={formik.handleBlur}
              type="text"
              className="form-control"
              style={{ width: "350px" }}
            />
            {formik.errors.dept&&formik.touched.dept ? (
              <span style={{ color: "red" }}>{formik.errors.dept}</span>
            ) : null}
          </div>
          <div className="col-lg-12">
            <label>Position : </label>
            <input
              name="position"
              onChange={formik.handleChange}
              value={formik.values.position}
              onBlur={formik.handleBlur}
              type="text"
              className="form-control"
              style={{ width: "350px" }}
            />
            {formik.errors.position&&formik.touched.position ? (
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            ) : null}
          </div>
          <div className="col-lg-12">
            <label>Contact : </label>
            <input
              name="Contact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Contact}
              type="text"
              className="form-control"
              style={{ width: "350px" }}
            />
            {formik.errors.Contact&&formik.touched.Contact ? (
              <span style={{ color: "red" }}>{formik.errors.Contact}</span>
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
  );
}

export default Editstaffprofile;
