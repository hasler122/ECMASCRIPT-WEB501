import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:3000/register', {
                email,
                password,
            });

            toast.success('Đăng ký thành công');
        } catch (error) {
            toast.error(error.message || 'Đăng ký thất bại');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
                Đăng ký
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                    <label className="text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Nhập email"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="text-sm font-semibold">Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Nhập password"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Đăng ký
                </button>
            </form>
        </div>
    );
}
