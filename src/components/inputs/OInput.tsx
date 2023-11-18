import React, { useState } from "react";

interface props {
  placeholder: string;
  icon: React.JSX.Element;
  inputType: React.HTMLInputTypeAttribute;
  errorConditions?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function OInput({
  icon,
  placeholder,
  inputType,
  errorConditions = false,
  value,
  setValue,
}: props) {
  const [showError, setShowError] = useState<boolean>(false);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (errorConditions) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>
      <input
        type={inputType}
        value={value}
        className={`border ${
          showError ? "border-red-600" : "border-gray-300"
        } text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full ps-10 p-2.5`}
        placeholder={placeholder}
        onChange={valueChangeHandler}
        onBlur={blurHandler}
      />
    </div>
  );
}

export default OInput;
