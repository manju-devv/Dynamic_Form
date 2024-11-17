import React from "react";

const Input = ({ field, register, errors }: { field: any; register: any; errors: any }) => {
  const { id, label, type, placeholder, required } = field;

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          {...register(id, { required })}
          className="border p-2 rounded"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, { required })}
          className="border p-2 rounded"
        />
      )}
      {errors[id] && <span className="text-red-500">This field is required</span>}
    </div>
  );
};

export default Input;
