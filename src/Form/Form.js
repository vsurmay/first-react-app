import React from "react";
import "./Form.scss";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      text: "Vitalik",
      email: "vitaliy@gmail.com",
      password: "",
      checkbox: false,
      age: 17,
    },
    validate: validateForms,
    onSubmit: (valuess) => {
      console.log(valuess);
    },
  });

  function validateForms(values) {
    console.log(values);
    const errors = {};
    if (values.text.length < 6) {
      errors.text = "Your name must be longer";
    }
    if (values.age < 18) {
      errors.age = "You must be older";
    }
    return errors;
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          onChange={formik.handleChange}
          name="text"
          id="text"
          value={formik.values.text}
        />
        {formik.errors.text ? <div>{formik.errors.text}</div> : ""}
        {formik.touched.text ? "" : <div>{"not touched"}</div>}
        <input
          type="number"
          onChange={formik.handleChange}
          name="age"
          id="age"
          value={formik.values.age}
        />
        {formik.errors.age ? <div>{formik.errors.age}</div> : ""}
        <input
          type="email"
          onChange={formik.handleChange}
          name="email"
          id="email"
          value={formik.values.email}
        />
        <input
          type="password"
          onChange={formik.handleChange}
          name="password"
          id="password"
          value={formik.values.password}
        />
        <input
          type="checkbox"
          onChange={formik.handleChange}
          name="checkbox"
          id="checkbox"
          value={formik.values.checkbox}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
