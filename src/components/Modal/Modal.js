import React, { useRef, useEffect } from "react";
import "./Modal.scss";
import { useFormik } from "formik";
import cancel from "../../img/cancel.svg";

const Modal = ({ setShowModal }) => {
  const modalRef = useRef(null);
  const firstInputForm = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      firstInputForm.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      test: "",
      description: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      onClick={(e) => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      }}
      ref={modalRef}
      className="modal"
    >
      <div className="modal__content">
        <a
          className="modal__content-cancel"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          <img src={cancel} />
        </a>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="test"
            onChange={formik.handleChange}
            ref={firstInputForm}
          />
          <input name="description" onChange={formik.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
