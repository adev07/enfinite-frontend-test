import React from 'react';
import { Select as Sel } from 'antd';

const Select = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  name,
  id,
  disabled,
  readOnly,
  height,
  width,
  label,
  isRequired,
  options,
  ...args
}) => {
  return (
    <>
      {label && (
        <label className="text-[#333333] opacity-70  font-semibold text-[14px]" htmlFor="">
          {label}{" "}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}
      <Sel
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-[8px] h-[40px] ${className}`}
        id={id}
        disabled={disabled}
        options={options}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default Select;