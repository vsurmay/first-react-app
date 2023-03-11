import "./Page.scss";
import React from "react";
import Logo from "../../components/Logo/Logo";
import logo from "../../icon/logo.svg";
import Form from "../../components/Form/Form";

const Page = () => {
  return (
    <div className="page">
      <div className="page__header">
        <div className="container">
          <Logo alt="Logo" url={logo} />
        </div>
      </div>
      <div className="page__main">
        <div className="container">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Page;
