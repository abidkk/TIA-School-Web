"use client"
import React from 'react';
import myFile from "@/../public/admissionOpen1.png"
const DownloadForm = () => {
  const handleDownload = () => {
    // Construct the URL of the file you want to download
    const fileUrl = '@/../public/aliabid.pdf';
    // Trigger download
    window.open(fileUrl);
  };

  return (
    <div>
      <h1>Download Page</h1>
      <button onClick={handleDownload}>Download Form</button>
    </div>
  );
};

export default DownloadForm;
