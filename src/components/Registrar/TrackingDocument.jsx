const trackedDocuments = [
  { id: 1, name: 'Transcript', status: 'In Review' },
  { id: 2, name: 'Diploma', status: 'Approved' },
  // Add more documents here
];

const TrackingDocument = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Tracking Document</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {trackedDocuments.map(doc => (
            <tr key={doc.id} className="bg-gray-100">
              <td className="py-2 text-center">{doc.id}</td>
              <td className="py-2">{doc.name}</td>
              <td className="py-2">{doc.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackingDocument;
