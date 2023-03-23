import React from "react";
import { useFormik } from "formik";
import Label from "../../UI/Label/Label";
import Button from "../../UI/Button/Button";
import ContextCurrentPage from "../../ContextCurrentPage";
import validateForms from "../../validateForm";

const ModalForm = ({ data, setShowModal, modalRecept }) => {
  const contextData = React.useContext(ContextCurrentPage);
  const initialValues = modalRecept
    ? {
        name: "",
        timeForDone: "",
        description: "",
        ingredients: "",
        recipe: "",
        image: "",
      }
    : {
        name: "",
        description: "",
        image: "",
      };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validateForms,
    onSubmit: (values) => {
      setShowModal(false);
      if (modalRecept) {
        console.log(values);
      } else {
        values.items = [];
        contextData.adedRecept(values);
      }
    },
  });

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
