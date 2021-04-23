import React from "react";

export default function UserDetails({ detail, text, editMode }) {
  return (
    <p className="userOrderDetail">
      <span className="userOrderTitle">{`${text}: `}</span>
      {editMode ? (
        <input className="userOrderInputRemovers" placeholder="Enter name" />
      ) : (
        <span>{detail}</span>
      )}
    </p>
  );
}
