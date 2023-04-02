import "./Modal.scss";
import React, { useRef } from "react";
import cancel from "../../img/cancel.svg";
import ModalForm from "../ModalForm/ModalForm";
import dataFormRecept from "../../formDatas/formDataRecept";

const Modal = ({ setShowModal, data }) => {
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
        <ModalForm data={data} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Modal;
