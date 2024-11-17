import React from "react";
import { useForm } from "react-hook-form";

const FormPreview = ({ schema }: { schema: any }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema?.fields?.map((field: any) => (
        <div key={field.id} className="flex flex-col">
          <label>{field.label}</label>
          {field.type === "text" && (
            <input
              type="text"
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
              className="border p-2 rounded"
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
