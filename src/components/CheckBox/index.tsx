import React, { FC, useState } from "react";

import unCheck from "image/unCheck.svg";
import activeChecked from "image/check.svg";

import "./CheckBox.scss";

interface CheckBox {
  check: boolean;
  disabled?: boolean;
}

const CheckBox: FC<CheckBox> = ({ check, disabled }) => {
  const [checked, setChecked] = useState(check);

  const changeCheckedState = () => {
    if (disabled) return;
    setChecked(!checked);
  };

  return (
    <div className="main">
      {checked ? (
        <img
          src={activeChecked}
          alt="checked"
          onClick={changeCheckedState}
          className={disabled ? "disabled" : ""}
        />
      ) : (
        <img
          src={unCheck}
          alt="unChecked"
          onClick={changeCheckedState}
          className={disabled ? "disabled" : ""}
        />
      )}
    </div>
  );
};

export default CheckBox;
