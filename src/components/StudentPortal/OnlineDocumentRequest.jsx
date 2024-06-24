import { useState } from 'react';

const OnlineDocumentRequest = () => {
  const [documentType, setDocumentType] = useState('');

  const handleRequest = () => {
    // Logic to handle document request
    console.log('Document requested:', documentType);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Online Document Request</h2>
      <select 
        value={documentType} 
        onChange={(e) => setDocumentType(e.target.value)}
        className="border p-2"
      >
        <option value="">Select Document Type</option>
        <option value="Transcript">Transcript</option>
        <option value="Diploma">Diploma</option>
        {/* Add more document types here */}
      </select>
      <button 
        onClick={handleRequest} 
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Request Document
      </button>
    </div>
  );
};

export default OnlineDocumentRequest;
