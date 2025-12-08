// src/api/tourApi.js
const API_URL = "http://localhost:3000/tours";

export async function getAllTours() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch tours");
    return await res.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}

export async function deleteTour(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete tour");
    return true;
  } catch (error) {
    console.error("DELETE ERROR:", error);
    throw error;
  }
}

export async function updateTourStatus(id, status) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) throw new Error("Failed to update status");
    return await res.json();
  } catch (error) {
    console.error("STATUS UPDATE ERROR:", error);
    throw error;
  }
}
