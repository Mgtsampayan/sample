import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement your logic to send a password reset link via email
        console.log("Sending password reset email to:", email);
        // Assume email is sent successfully for this example
        setEmailSent(true);
    };

    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className="relative z-10 p-10 bg-white bg-opacity-70 rounded-lg shadow-2xl max-w-md w-full">
                <div className="branding mb-6 text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Forgot Password
                    </h1>
                </div>
                {emailSent ? (
                    <div className="text-center">
                        <p className="text-gray-700 mb-4">
                            Password reset link sent to your email.
                        </p>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300"
                            onClick={() => navigate("/student-login")}
                        >
                            Back to Login
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="email"
                            >
                                Enter your email address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300"
                                type="submit"
                            >
                                Send Reset Link
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300"
                                onClick={() => navigate("/student-login")}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
