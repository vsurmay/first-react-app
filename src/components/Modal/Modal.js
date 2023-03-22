import React, { useRef, useEffect } from "react";
import "./Modal.scss";
import cancel from "../../img/cancel.svg";
import ModalForm from "../ModalForm/ModalForm";

const Modal = ({ setShowModal }) => {
  const modalRef = useRef(null);
  const firstInputForm = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      // console.log(firstInputForm.current);
      // firstInputForm.current.focus();
    }
  }, []);

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
        <ModalForm firstInputForm={firstInputForm} />
      </div>
    </div>
  );
};

export default Modal;
