import React from "react";

const JsonEditor = ({
  schema,
  formData,
  onSchemaChange,
}: {
  schema: any;
  formData: any;
  onSchemaChange: (newSchema: any) => void;
}) => {
  return (
    <div>
      <textarea
        className="w-full h-64 p-2 border rounded"
        value={JSON.stringify(schema, null, 2)}
        onChange={(e) => onSchemaChange(JSON.parse(e.target.value))}
      />
      <h3 className="text-lg font-bold mt-4">Submitted Data:</h3>
      <pre className="bg-gray-100 p-2 rounded border">{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default JsonEditor;
