import React, { useState, useRef, useEffect } from "react";

export default function CheckoutInvoice({ objectKey, credential }) {
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit((prev) => !prev);
  };

  const [inputValue, setInputValue] = useState(credential[objectKey]);
  const changeInputHandler = (ev) => {
    if (ev.target.value.length !== 0) {
      setInputValue(ev.target.value);
    } else {
      setInputValue(credential[objectKey]);
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    function outsideInputHandler(ev) {
      if (inputRef.current && !inputRef.current.contains(ev.target)) {
        setEdit(false);
      }
    }

    document.addEventListener("mousedown", outsideInputHandler);
    return () => {
      document.removeEventListener("mousedown", outsideInputHandler);
    };
  });

  return (
    <p className="boxInnerLine">
      <span>
        <span className="boxWordBold">{objectKey}:</span>
        {!edit ? (
          <span className="checkoutAccountEditInput">{inputValue}</span>
        ) : (
          <input
            className="checkoutAccountEditInput removeInputDefaults"
            placeholder={inputValue}
            ref={inputRef}
            onChange={(ev) => changeInputHandler(ev)}
          />
        )}
      </span>
      <a
        className="boxRightAlignedElement"
        onClick={editHandler}
        role="button"
        href="/#"
      >
        Edit item
      </a>
    </p>
  );
}
