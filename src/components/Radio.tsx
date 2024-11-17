import React from "react";

const Radio = ({ field, register }: { field: any; register: any }) => {
  const { id, label, options, required } = field;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <div className="flex gap-2">
        {options.map((option: any) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              value={option.value}
              {...register(id, { required })}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;
