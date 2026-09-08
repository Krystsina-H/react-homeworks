import { useState, useEffect } from 'react'
import DogGallery from './components/DogGallery'
import GalleryControls from './components/GalleryControls'
import './App.css'

const App = () => {
  const [dogs, setDogs] = useState([])
  const [count, setCount] = useState(3)
  const [refreshes, setRefreshes] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')

  async function loadDogs(breed = selectedBreed) {
    setIsLoading(true)
    try {
      const url = breed
        ? `https://dog.ceo/api/breed/${breed}/images/random/${count}`
        : `https://dog.ceo/api/breeds/image/random/${count}`
      const response = await fetch(url)
      const data = await response.json()
      setDogs(data.message)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadDogs()
  }, [])

  useEffect(() => {
    async function loadBreeds() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await response.json()
        setBreeds(Object.keys(data.message))
      } catch (error) {
        console.error(error)
      }
    }
    loadBreeds()
  }, [])

  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {refreshes} раз(а)</p>
      <GalleryControls
        count={count}
        setCount={setCount}
        setRefreshes={setRefreshes}
        loadDogs={loadDogs}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        breeds={breeds}
      />
      <DogGallery dogs={dogs} isLoading={isLoading} />
    </>
  )
}
export default App
