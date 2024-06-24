const documents = [
  { id: 1, studentName: 'John Doe', documentName: 'Transcript.pdf', status: 'Pending' },
  { id: 2, studentName: 'Jane Smith', documentName: 'Diploma.pdf', status: 'Verified' },
  // Add more documents here
];

const DocumentVerification = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Document Verification</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Student Name</th>
            <th className="py-2">Document Name</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(doc => (
            <tr key={doc.id} className="bg-gray-100">
              <td className="py-2 text-center">{doc.id}</td>
              <td className="py-2 text-center">{doc.studentName}</td>
              <td className="py-2 text-center">{doc.documentName}</td>
              <td className="py-2 text-center">{doc.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentVerification;
