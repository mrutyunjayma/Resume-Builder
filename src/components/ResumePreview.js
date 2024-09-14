import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

const ResumePreview = forwardRef((props, ref) => {
  const resumeData = useSelector((state) => state.resume);

  return (
    <div
      ref={ref}
      className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg space-y-6"
    >
      <h1 className="text-3xl font-bold text-gray-900">{resumeData.name}</h1>
      <p className="text-sm text-gray-600">Email: {resumeData.email}</p>
      <p className="text-sm text-gray-600">Phone: {resumeData.phone}</p>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
        <p className="text-sm text-gray-700">{resumeData.education}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
        <p className="text-sm text-gray-700">{resumeData.experience}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <p className="text-sm text-gray-700">{resumeData.skills}</p>
      </div>
    </div>
  );
});

export default ResumePreview;
