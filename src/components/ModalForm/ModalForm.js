import React from "react";
import { useFormik } from "formik";
import Label from "../../UI/Label/Label";

const ModalForm = ({ firstInputForm }) => {
  const formText = ["name", "description"];

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {formText.map((el, index) => (
        <Label
          index={index}
          key={index}
          text={el}
          handleChange={formik.handleChange}
          type={"text"}
        />
      ))}

      {/* <label>
        <span>Variety dish</span>
        <input
          name="test"
          onChange={formik.handleChange}
          ref={firstInputForm}
        />
      </label>
      <input name="description" onChange={formik.handleChange} /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModalForm;
