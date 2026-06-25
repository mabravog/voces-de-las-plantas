import { useState } from 'react'
import './App.css'
import { plants } from './data/plants'
import AppHeader from './components/AppHeader'
import PlantList from './components/PlantList'
import PlantDetail from './pages/PlantDetail'

function App() {
  const [selectedPlantId, setSelectedPlantId] = useState(null)
  const selectedPlant = plants.find((plant) => plant.id === selectedPlantId) ?? null

  return (
    <main className="app-shell">
      <AppHeader
        eyebrow="Voces de las plantas"
        title={selectedPlant ? selectedPlant.name : 'Explora tus plantas'}
        subtitle={
          selectedPlant
            ? 'Conoce más sobre esta planta y escucha su audio.'
            : 'Selecciona una planta para ver su información.'
        }
      />

      {selectedPlant ? (
        <PlantDetail plant={selectedPlant} onBack={() => setSelectedPlantId(null)} />
      ) : (
        <PlantList plants={plants} onSelectPlant={setSelectedPlantId} />
      )}
    </main>
  )
}

export default App
