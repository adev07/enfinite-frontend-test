import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const DateRangePicker = ({
  value,
  onChange,
  placeholder,
  className,
  id,
  disabled,
  readOnly,
  height,
  width,
  label,
  isRequired,
  ...args
}) => {
  return (
    <>
      {label && (
        <label className="text-[#333333] opacity-70 font-semibold text-[14px]" htmlFor="">
          {label}{' '}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}
      <RangePicker
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-[8px] h-[40px] ${className}`}
        id={id}
        disabled={disabled}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default DateRangePicker;