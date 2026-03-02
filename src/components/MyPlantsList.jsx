import MyPlantsItem from "./MyPlantsItem.jsx";

export default function MyPlantsList({ plants, setPlants }) {
  if (plants.length === 0) {
    return <p>No plants found.</p>;
  }

  // Delete function 
  function deletePlant(id) {
  const isConfirmed = window.confirm("Are you sure you want to delete this plant?");
  if (isConfirmed) {
    setPlants(plants.filter(plant => plant.id !== id));
    }
}

  return (
    <div className="plant-grid">
      {plants.map((plant) => (
        <MyPlantsItem key={plant.id} plant={plant} deleteHandler={deletePlant}/>
      ))}
    </div>
  );
}