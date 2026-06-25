function PlantList({ plants, onSelectPlant }) {
  return (
    <section className="plant-list" aria-label="Listado de plantas">
      {plants.map((plant) => (
        <button
          key={plant.id}
          type="button"
          className="plant-card"
          onClick={() => onSelectPlant(plant.id)}
        >
          <img src={plant.image} alt={plant.name} />
          <div className="plant-card-content">
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
          </div>
        </button>
      ))}
    </section>
  )
}

export default PlantList
