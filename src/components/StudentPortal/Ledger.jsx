const transactions = [
    { id: 1, date: '2024-01-01', description: 'Tuition Fee', amount: 500 },
    { id: 2, date: '2024-02-01', description: 'Library Fee', amount: 50 },
    // Add more transactions here
];

const Ledger = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Ledger</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Description</th>
                        <th className="py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id} className="bg-gray-100">
                            <td className="py-2 text-center">{transaction.id}</td>
                            <td className="py-2">{transaction.date}</td>
                            <td className="py-2">{transaction.description}</td>
                            <td className="py-2">{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ledger;
