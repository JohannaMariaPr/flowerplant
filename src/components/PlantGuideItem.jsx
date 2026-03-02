import "./PlantGuideItem.css";

export default function PlantGuideItem({ plant }) {
  const { commonName, scientificName, light, watering, soil, level, location } = plant;

  return (
    <div className="plant-card">
      <h3>{commonName}</h3>
      <p><em>{scientificName}</em></p>
      <ul>
        <li><strong>Light:</strong> {light}</li>
        <li><strong>Watering:</strong> {watering}</li>
        <li><strong>Soil:</strong> {soil}</li>
        <li><strong>Level:</strong> {level}</li>
        <li><strong>Location:</strong> {location}</li>
      </ul>
    </div>
  );
}