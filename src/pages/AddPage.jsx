import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
    category: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/tours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(() => {
        toast.success("Thêm tour thành công!");
        navigate("/list");
      })
      .catch(() => toast.error("Thêm tour thất bại!"));
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Thêm Tour</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Tên tour"
          required
        />

        <input
          type="text"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Điểm đến"
          required
        />

        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="VD: 5 ngày 4 đêm"
          required
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Giá"
          required
        />

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="URL hình"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Mô tả"
        ></textarea>

        <input
          type="number"
          name="available"
          value={form.available}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Số lượng còn trống"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Chọn loại tour --</option>
          <option value="tour nội địa">Tour nội địa</option>
          <option value="tour quốc tế">Tour quốc tế</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
          />
          <label>Kích hoạt</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Thêm Tour
        </button>
      </form>
    </div>
  );
}

export default AddPage;
