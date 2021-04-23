import React from "react";
import "../../../css/register.css";
import "../../../css/universal.css";

export default function Login() {
  return (
    <div className="pageSection pageSectionRegister d-flex align-items-center">
      <div className="container">
        <div className="row registerBoxContainer justify-content-center">
          <div className="boxContainerShadow registerBoxContainerShadow col-12 col-md-8 col-lg-6 pt-0 mb-0">
            <h5 className="titleWithOrangeLine">Sign up</h5>
            <div className="row">
              <div className="col-3">
                <span>Email: </span>
              </div>
              <div className="col-8 col-sm-9 ml-auto ml-sm-0">
                <input
                  className="removeInputDefaults registerInput"
                  type="text"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <span>Phone: </span>
              </div>
              <div className="col-8 col-sm-9 ml-auto ml-sm-0">
                <input
                  className="removeInputDefaults registerInput"
                  type="text"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <span>Email: </span>
              </div>
              <div className="col-8 col-sm-9 ml-auto ml-sm-0">
                <input
                  className="removeInputDefaults registerInput"
                  type="text"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <span>Address: </span>
              </div>
              <div className="col-8 col-sm-9 ml-auto ml-sm-0">
                <input
                  className="removeInputDefaults registerInput"
                  type="text"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <span>Password: </span>
              </div>
              <div className="col-8 col-sm-9 ml-auto ml-sm-0">
                <input
                  className="removeInputDefaults registerInput"
                  type="text"
                />
              </div>
            </div>
            <div className="row registerSubmitWrap">
              <div className="registerSubmitInnerWrap col-12 col-sm-6">
                <button className="registerSubmitButton buttonOrangeWhite buttonRemoveDefaults">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
