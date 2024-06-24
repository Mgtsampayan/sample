import { useState } from 'react';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleFileUpload = (event) => {
    event.preventDefault();
    console.log(selectedFile);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button 
        onClick={handleFileUpload} 
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Upload
      </button>
    </div>
  );
};

export default DocumentUpload;
