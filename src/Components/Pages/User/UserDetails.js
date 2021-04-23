import React, { useState, useEffect } from "react";
import UserDetailsOptions from "./UserDetailsOptions";
import edit from "../../../Images/edit.png";
import PasswordMask from "react-password-mask";
import { v4 as uuidv4 } from "uuid";

const details = {
  name: "John Smith",
  phone: "072536236236",
  email: "youremail@yahoo.com",
  address: "street TheStreet, Nr.8, Iasi",
};
const detailsText = ["Name", "Phone", "E-mail", "Address"];

export default function UserDetails() {
  const [editMode, setEditMode] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChange = (ev, input) => {
    switch (input) {
      case 1:
        if (password.length < 15) {
          setPassword(ev.target.value);
        }
        break;
      case 2:
        if (newPassword.length < 15) {
          setNewPassword(ev.target.value);
        }
        break;
      default:
    }
  };

  const handleEdit = () => {
    setEditMode((prev) => !prev);
  };

  const buttonStatus = true;

  useEffect(() => {}, [editMode, password, newPassword]);

  return (
    <div className="col-12">
      <div className="userOrderWrapper">
        {Object.keys(details).map((detail, index) => {
          return (
            <UserDetailsOptions
              editMode={editMode}
              detail={details[detail]}
              text={detailsText[index]}
              key={uuidv4()}
            />
          );
        })}
        <div className="userOrderDetail userOrderPasswordWrap">
          <span className="w-100 userOrderPasswordInnerWrap">
            <span className="userOrderTitle">Password: </span>
            {editMode ? (
              <PasswordMask
                className="userOrderPWInputWrap"
                inputClassName="userOrderPWInput"
                buttonClassName="userOrderPWVisibility"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(ev) => handleChange(ev, 1)}
                useVendorStyles={false}
              />
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="userOrderDetail userOrderPasswordWrap">
          <div className="w-100 userOrderPasswordInnerWrap">
            <span className="userOrderTitle">New Password: </span>
            {editMode ? (
              <PasswordMask
                className="userOrderPWInputWrap"
                inputClassName="userOrderPWInput"
                buttonClassName="userOrderPWVisibility"
                id="password"
                name="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(ev) => handleChange(ev, 2)}
                useVendorStyles={false}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <button
          className={
            buttonStatus
              ? "userOrderSaveButton userOrderSaveButtonDisabled"
              : "userOrderSaveButton userOrderSaveButtonActive"
          }
        >
          Save
        </button>
      </div>
      <button className="userEditWrapper" onClick={handleEdit}>
        <img src={edit} alt="Edit" />
      </button>
    </div>
  );
}
