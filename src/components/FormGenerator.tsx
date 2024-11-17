import React from "react";
import { useForm } from "react-hook-form";

const FormGenerator = ({
  schema,
  onSubmit,
}: {
  schema: any;
  onSubmit: (data: any) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!schema?.fields || schema.fields.length === 0) {
    return <p>No fields to display. Please check your JSON schema.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema.fields.map((field: any) => {
        switch (field.type) {
          case "text":
          case "email":
          case "password":
          case "textarea":
            return (
              <div key={field.id} className="flex flex-col">
                <label className="mb-1">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.id, { required: field.required })}
                  className="border p-2 rounded"
                />
                {errors[field.id] && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>
            );
          case "select":
            return (
              <div key={field.id} className="flex flex-col">
                <label className="mb-1">{field.label}</label>
                <select
                  {...register(field.id, { required: field.required })}
                  className="border p-2 rounded"
                >
                  <option value="">Select an option</option>
                  {field.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors[field.id] && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>
            );
          case "radio":
            return (
              <div key={field.id} className="flex flex-col">
                <label className="mb-1">{field.label}</label>
                <div className="flex space-x-4">
                  {field.options.map((option: any) => (
                    <label key={option.value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value={option.value}
                        {...register(field.id, { required: field.required })}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors[field.id] && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>
            );
          default:
            return null;
        }
      })}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
