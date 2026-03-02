import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddPlant.css";

export default function UpdatePlant() {
  const { id } = useParams();

  // Initialize plants state from localStorage
  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("myPlants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  // Find the plant to edit
  const plant = plants.find(plant => plant.id === Number(id));

  // Individual states for each form input
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [lastWatered, setLastWatered] = useState("");
  const [notes, setNotes] = useState("");

  let navigate = useNavigate();

  // Save plants to webstorage/local storage
  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(plants));
    }, [plants]);

  // Pre-fill the form when the plant is found
  useEffect(() => {
    if (plant) {
      setName(plant.name);
      setSpecies(plant.species);
      setLocation(plant.location);
      setDifficulty(plant.difficulty);
      setLastWatered(plant.lastWatered);
      setNotes(plant.notes);
    }
  }, [plant]);

  // updates the specific plant, when the user presses the button
  function updateHandler(e) {
    e.preventDefault();

    const updatedPlant = { id: Number(id), name: name, species: species, location: location, difficulty: difficulty, lastWatered: lastWatered, notes: notes };
    
    setPlants(plants.map((plant) => 
        plant.id === Number(id) ? updatedPlant : plant
        )
    );

    navigate("/my-plants");
  }

  return (
    <section className="addplant">
        <h1>Update Plant</h1>

        <form onSubmit={updateHandler} className="addplant-form">
            <div>
                <label htmlFor="id">ID:</label>
                <input type="number" id="id" name="id" value={id} readOnly />
            </div>
            <div>
                <label htmlFor="name">Plant Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="species">Species:</label>
                <input type="text" id="species" name="species" value={species} onChange={e => setSpecies(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <select value={location} onChange={e => setLocation(e.target.value)} required>
                    <option value="">Select location</option>
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                </select>
            </div>
            <div>
                <label htmlFor="difficulty">Difficulty</label>
                <select value={difficulty} onChange={e => setDifficulty(e.target.value)} required>
                    <option value="">Select difficulty</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
            </div>
            <div>
                <label htmlFor="lastWatered">Last Watered</label>
                <input type="date" id="lastWatered" name="lastWatered" value={lastWatered} onChange={e => setLastWatered(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" value={notes} onChange={e => setNotes(e.target.value)} rows="4" required />
            </div>

            <button type="submit" className="submit-btn">Update Plant</button>
        </form>
    </section>
  );
}