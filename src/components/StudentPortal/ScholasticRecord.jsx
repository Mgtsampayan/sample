const scholasticRecords = [
    { id: 1, course: 'Math 101', grade: 'A' },
    { id: 2, course: 'History 201', grade: 'B+' },
    // Add more records here
];

const ScholasticRecord = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Scholastic Record</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Course</th>
                        <th className="py-2">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {scholasticRecords.map(record => (
                        <tr key={record.id} className="bg-gray-100">
                            <td className="py-2 text-center">{record.id}</td>
                            <td className="py-2">{record.course}</td>
                            <td className="py-2 text-center">{record.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScholasticRecord;
