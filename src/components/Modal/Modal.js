import React, { useRef } from "react";
import "./Modal.scss";
import cancel from "../../img/cancel.svg";
import ModalForm from "../ModalForm/ModalForm";
import dataForm from "../../formdata";

const Modal = ({ setShowModal }) => {
  const modalRef = useRef(null);

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
        <ModalForm setShowModal={setShowModal} data={dataForm} />
      </div>
    </div>
  );
};

export default Modal;
