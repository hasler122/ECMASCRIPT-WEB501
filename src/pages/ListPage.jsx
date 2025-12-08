import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function ListPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);


  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");


  useEffect(() => {
    fetch("http://localhost:3000/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Lấy dữ liệu thất bại!");
        setLoading(false);
      });
  }, []);

 
const handleDelete = (id) => {
  const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa tour này không?");

  if (!confirmDelete) return;

  fetch(`http://localhost:3000/tours/${id}`, { method: "DELETE" })
    .then(() => {
      setTours(tours.filter((tour) => tour.id !== id));
      toast.success("Xóa tour thành công!");
    })
    .catch(() => toast.error("Xóa thất bại!"));
};



  const toggleStatus = async (tour) => {
    try {
      const newStatus = !tour.status;

      await fetch(`http://localhost:3000/tours/${tour.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      setTours((prev) =>
        prev.map((t) =>
          t.id === tour.id ? { ...t, status: newStatus } : t
        )
      );

      toast.success("Cập nhật trạng thái thành công!");
    } catch {
      toast.error("Lỗi cập nhật trạng thái!");
    }
  };


  const filteredTours = tours.filter((tour) => {
    const matchSearch = tour.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || tour.category === category;

    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && tour.status) ||
      (statusFilter === "inactive" && !tour.status);

    return matchSearch && matchCategory && matchStatus;
  });

  if (loading)
    return <p className="text-center py-6 text-gray-500">Đang tải dữ liệu...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách Tour</h1>


      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Tìm theo tên tour..."
          className="border px-3 py-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Tất cả loại</option>
          <option value="Tour nội địa">Tour nội địa</option>
          <option value="Tour quốc tế">Tour quốc tế</option>
        </select>

        <select
          className="border px-3 py-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Đang hoạt động</option>
          <option value="inactive">Ngừng hoạt động</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Ảnh</th>
              <th className="px-4 py-2 border">Tên tour</th>
              <th className="px-4 py-2 border">Danh mục</th>
              <th className="px-4 py-2 border">Điểm đến</th>
              <th className="px-4 py-2 border">Giá</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredTours.map((tour, index) => (
              <tr key={tour.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 border">{index + 1}</td>

                <td className="px-4 py-2 border">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-20 h-16 object-cover rounded"
                  />
                </td>

                <td className="px-4 py-2 border">{tour.name}</td>
                <td className="px-4 py-2 border">{tour.category}</td>
                <td className="px-4 py-2 border">{tour.destination}</td>

                <td className="px-4 py-2 border">
                  {tour.price.toLocaleString()}
                </td>

                <td className="px-4 py-2 border">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tour.status}
                      onChange={() => toggleStatus(tour)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-checked:bg-green-500 rounded-full peer relative transition"></div>
                  </label>
                </td>

                <td className="px-4 py-2 border">
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/edit/${tour.id}`}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Sửa
                    </Link>

                    <button
                      onClick={() => handleDelete(tour.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredTours.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  Không có tour nào phù hợp
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
