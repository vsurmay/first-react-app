import React from "react";
import { useFormik } from "formik";
import Label from "../../UI/Label/Label";
import Button from "../../UI/Button/Button";

const ModalForm = ({ data }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
    },
    validate: validateForms,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function validateForms(values) {
    const errors = {
      name: "",
      description: "",
      image: "",
    };
    if (values.name.length === 0) {
      errors.name = "Please enter valid values";
    }

    if (values.description.length === 0) {
      errors.description = "Please enter valid values";
    }

    if (!/^https:\/\/robohash\.org\//.test(values.image)) {
      errors.image = "Please enter valid values";
    }

    return errors;
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      {data.map((el, index) => (
        <Label
          errors={formik.errors[el.name]}
          key={index}
          text={el.placeholder}
          handleChange={formik.handleChange}
          name={el.name}
          type={el.type}
        />
      ))}
      <Button className="modal__form-btn" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ModalForm;
