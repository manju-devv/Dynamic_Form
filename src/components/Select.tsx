import React from "react";

const Select = ({ field, register }: { field: any; register: any }) => {
  const { id, label, options, required } = field;

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(id, { required })} className="border p-2 rounded">
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
