import React from "react";
import { Input as AntdInput } from "antd";

const Input = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  name,
  id,
  disabled,
  required,
  readOnly,
  height,
  width,
  prefix,
  label,
  isRequired,
  errorText
}) => {
  return (
    <>
      {label && (
        <label className="text-[#333333] opacity-70 font-semibold text-[14px]" htmlFor="">
          {label}{" "}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}

      <AntdInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-[8px] h-[40px] px-3 py-2 ${className} ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        width={width || "100%"}
        prefix={prefix}
      />

      {errorText && <span className="text-red-500 text-sm">{errorText}</span>}
    </>
  );
};

export default Input;
