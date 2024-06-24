const currentGrades = [
    { id: 1, course: 'Math 101', grade: 'A' },
    { id: 2, course: 'History 201', grade: 'B+' },
    // Add more grades here
];

const CurrentGrades = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Current Grades</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Course</th>
                        <th className="py-2">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {currentGrades.map(grade => (
                        <tr key={grade.id} className="bg-gray-100">
                            <td className="py-2 text-center">{grade.id}</td>
                            <td className="py-2">{grade.course}</td>
                            <td className="py-2 text-center">{grade.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CurrentGrades;
