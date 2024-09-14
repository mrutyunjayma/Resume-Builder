import React, { useRef } from "react";
import "./App.css";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import ReactToPrint from "react-to-print";

const App = () => {
  const componentRef = useRef();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-indigo-700">
        Resume Builder
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {/* Resume Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ResumeForm />
        </div>

        {/* Resume Preview */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ResumePreview ref={componentRef} />
        </div>
      </div>

      {/* Print Button */}
      <ReactToPrint
        trigger={() => (
          <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Print Resume
          </button>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default App;
