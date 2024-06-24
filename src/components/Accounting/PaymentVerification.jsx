const paymentVerifications = [
    { id: 1, studentName: 'John Doe', amount: 500, status: 'Pending' },
    { id: 2, studentName: 'Jane Smith', amount: 50, status: 'Verified' },
    // Add more payment verifications here
];

const PaymentVerification = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Payment Verification</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Student Name</th>
                        <th className="py-2">Amount</th>
                        <th className="py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentVerifications.map(payment => (
                        <tr key={payment.id} className="bg-gray-100">
                            <td className="py-2 text-center">{payment.id}</td>
                            <td className="py-2">{payment.studentName}</td>
                            <td className="py-2 text-center">${payment.amount}</td>
                            <td className="py-2 text-center">{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentVerification;
