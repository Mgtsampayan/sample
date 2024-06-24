const students = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more students here
];

const StudentList = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Student List</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="bg-gray-100">
                            <td className="py-2 text-center">{student.id}</td>
                            <td className="py-2">{student.name}</td>
                            <td className="py-2">{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
