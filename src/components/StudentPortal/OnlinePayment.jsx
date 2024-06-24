import { useState } from 'react';

const OnlinePayment = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        // Logic to handle online payment
        console.log('Payment amount:', amount);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Online Payment</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2"
                placeholder="Enter amount"
            />
            <button
                onClick={handlePayment}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
            >
                Pay
            </button>
        </div>
    );
};

export default OnlinePayment;
