import React, { useState } from "react";
import JsonEditor from "./components/JsonEditor";
import FormGenerator from "./components/FormGenerator";

const App = () => {
  const [schema, setSchema] = useState<any>({
    fields: [
      {
        id: "name",
        type: "text",
        label: "Name",
        required: true,
        placeholder: "Enter your name",
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        required: true,
        placeholder: "Enter your email",
      },
      {
        id: "password",
        type: "password",
        label: "Password",
        required: true,
        placeholder: "Enter your password",
      },
      {
        id: "gender",
        type: "radio",
        label: "Gender",
        required: true,
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
      },
      {
        id: "role",
        type: "select",
        label: "Role",
        required: true,
        options: [
          { value: "admin", label: "Admin" },
          { value: "user", label: "User" },
          { value: "guest", label: "Guest" },
        ],
      },
    ],
  });

  const [formData, setFormData] = useState<any>({});

  const handleFormSubmit = (data: any) => {
    setFormData(data); 
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">JSON Editor</h2>
        <JsonEditor schema={schema} formData={formData} onSchemaChange={setSchema} />
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Generated Form</h2>
        <FormGenerator schema={schema} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default App;
