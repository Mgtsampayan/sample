const uploadedDocuments = [
    { id: 1, name: 'Transcript.pdf', date: '2024-01-10' },
    { id: 2, name: 'Diploma.pdf', date: '2024-02-15' },
    // Add more documents here
];

const UploadedDocuments = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Uploaded Documents</h2>
            <ul>
                {uploadedDocuments.map(doc => (
                    <li key={doc.id} className="bg-gray-100 p-2 mb-2">
                        {doc.name} - {doc.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UploadedDocuments;
