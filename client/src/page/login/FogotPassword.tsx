import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            console.log(email); // kiểm tra xem email có được set state hay không
            const response = await axios.post('http://127.0.0.1:8080/api/forgot-password', { email });
            console.log(response.data); // kiểm tra xem kết quả trả về của API có đúng hay không
            setMessage('An email has been sent to your inbox with instructions to reset your password.');
        } catch (error) {
            console.log(error); // hiển thị lỗi gặp phải
            setMessage('Failed to reset password. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-center text-2xl font-semibold mb-1 mt-[20px]">Forgot Password</h2>
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Reset Password
                    </button>
                </div>
                <div className="text-red-500 mt-4">{message}</div>
            </form>
        </div>

    );
};

export default ForgotPassword;
