import React from "react";
import "../../../css/login.css";
import "../../../css/universal.css";

export default function Login() {
  return (
    <div className="pageSection pageSectionLogin d-flex align-items-center">
      <div className="container">
        <div className="row loginBoxContainer justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 boxContainerShadow pt-0 mb-0">
            <h5 className="titleWithOrangeLine">Login</h5>
            <div className="row">
              <div className="col-3">
                <span>Email: </span>
              </div>
              <div className="col-8 col-sm-9 ml-auto ml-sm-0">
                <input className="removeInputDefaults loginInput" type="text" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <span>Password: </span>
              </div>
              <div className="col-8 col-sm-9 ml-auto ml-sm-0">
                <input className="removeInputDefaults loginInput" type="text" />
              </div>
            </div>
            <div className="row mt-5 mb-3">
              <div className="col-12 col-sm-6">
                Don't have an account?
                <div>
                  Sign up&nbsp;&nbsp;
                  <a className="boxTextOrange" href="/#">
                    here
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                <button className="loginSubmitButton buttonOrangeWhite buttonRemoveDefaults py-2 py-sm-0">
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
