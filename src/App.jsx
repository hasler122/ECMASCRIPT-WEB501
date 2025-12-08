import { Toaster } from "react-hot-toast";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import List from "./pages/ListPage";
import Add from "./pages/AddPage";
import Edit from "./pages/EditPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB501</h1>
      <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">Trang chủ</Link>
            {token && (
              <>
                <Link to="/list" className="hover:text-gray-200">Danh sách</Link>
                <Link to="/add" className="hover:text-gray-200">Thêm mới</Link>
              </>
            )}
          </div>

          {/* Right menu desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {!token && (
              <>
                <Link to="/login" className="hover:text-gray-200">Đăng nhập</Link>
                <Link to="/register" className="hover:text-gray-200">Đăng ký</Link>
              </>
            )}
            {token && (
              <button onClick={handleLogout} className="hover:text-gray-200">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <List />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <Add />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;
