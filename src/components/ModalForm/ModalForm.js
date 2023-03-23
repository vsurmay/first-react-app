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

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {data.map((el, index) => (
        <Label
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
