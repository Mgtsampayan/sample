import React from "react";

const documents = [
    { id: 1, studentName: 'John Doe', documentName: 'Transcript.pdf', status: 'Pending' },
    { id: 2, studentName: 'Jane Smith', documentName: 'Diploma.pdf', status: 'Verified' },
    // Add more documents here
  ];
const DocumentVerification = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <ul>
        {documents
         .filter((document) =>
            document.studentName.toLowerCase().includes(searchTerm.toLowerCase())
          )
         .map((document) => (
            <li key={document.id}>{document.studentName}</li>
          ))}
      </ul>
    </div>
  )
}

export default DocumentVerification;
