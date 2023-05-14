import React from "react";

const Field = ({ label, type, name, value, onChange, placeholder }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="">
        <input
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className=""
        />
      </div>
    </div>
  );
};

export default Field;
