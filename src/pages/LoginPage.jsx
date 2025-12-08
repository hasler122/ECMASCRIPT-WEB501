import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            return toast.error("Vui lòng nhập đầy đủ thông tin");
        }

        try {
            const { data } = await axios.post("http://localhost:3000/login", {
                email,
                password,
            });

            localStorage.setItem("token", data.accessToken);

            toast.success("Đăng nhập thành công");
            navigate("/dashboard"); // chuyển đến trang bảo vệ
        } catch (error) {
            toast.error("Sai tài khoản hoặc mật khẩu");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
                Đăng nhập
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold">Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập password"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}
