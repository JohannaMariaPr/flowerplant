import { Link } from "react-router-dom";
import "./MyPlantsItem.css";

export default function MyPlantsItem({ plant, deleteHandler }) {

  return (
    <div className="plant-card">
      <h3>{plant.name}</h3>
      <p><strong>Species:</strong> {plant.species}</p>
      <p><strong>Location:</strong> {plant.location}</p>
      <p><strong>Difficulty:</strong> {plant.difficulty}</p>
      <p><strong>Last Watered:</strong> {plant.lastWatered}</p>
      <p><strong>Notes:</strong></p>
      <p>{plant.notes}</p>
      <div className="card-buttons">
        <Link to={`/update-plant/${plant.id}`} className="update-btn">Update</Link>
        <button onClick={() => deleteHandler(plant.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}