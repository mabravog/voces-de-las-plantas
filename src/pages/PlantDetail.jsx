function PlantDetail({ plant, onBack }) {
  return (
    <section className="plant-detail" aria-label="Detalle de planta">
      <button className="back-button" type="button" onClick={onBack}>
        ← Volver
      </button>

      <article className="detail-card">
        <img src={plant.image} alt={plant.name} />
        <div className="detail-content">
          <p className="detail-id">ID: {plant.id}</p>
          <h2>{plant.name}</h2>
          <p>{plant.description}</p>

          <div className="audio-block">
            <h3>Audio</h3>
            <audio controls preload="metadata">
              <source src={plant.audio} type="audio/mpeg" />
              Tu navegador no soporta el reproductor de audio.
            </audio>
          </div>
        </div>
      </article>
    </section>
  )
}

export default PlantDetail
