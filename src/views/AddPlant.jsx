import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlant.css";

export default function AddPlant() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    location: "",
    difficulty: "",
    lastWatered: "",
    notes: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      id: crypto.randomUUID(),
      ...formData,
      dateAdded: new Date().toISOString().split("T")[0]
    };

    const savedPlants = localStorage.getItem("myPlants");
    const plants = savedPlants ? JSON.parse(savedPlants) : [];

    localStorage.setItem("myPlants", JSON.stringify([...plants, newPlant]));

    navigate("/my-plants");
  }

  return (
    <section className="addplant">
      <h1>Add a New Plant</h1>

      <form onSubmit={handleSubmit} className="addplant-form">

        <label>
          Plant Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Species
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select location</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </label>

        <label>
          Difficulty
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          >
            <option value="">Select difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </label>

        <label>
          Last Watered
          <input
            type="date"
            name="lastWatered"
            value={formData.lastWatered}
            onChange={handleChange}
          />
        </label>

        <label>
          Notes
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
          />
        </label>

        <button type="submit" className="submit-btn">
          Add Plant
        </button>

      </form>
    </section>
  );
}