import React from "react";
import "./Modal.scss";
import { useFormik } from "formik";

const Modal = () => {
  // useFormik({
  //   initialValues: {
  //     test: "",
  //     describtion: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <div className="modal">
      <div className="modal__content">
        <form></form>
      </div>
    </div>
  );
};

export default Modal;
