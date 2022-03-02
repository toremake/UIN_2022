import { useState } from 'react'
import Pokemons from './components/Pokemons'

// https://pokeapi.co/api/v2/pokemon?limit=25

/* const pokemons = [
  { id: 1, name: 'Bulbasaur', experience: 3 },
  { id: 2, name: 'Ivysaur', experience: 23 },
  { id: 3, name: 'Charisard', experience: 44 },
] */

function App() {
  // Write JavaScript, use Hooks, add state and more
  const [pokemons, setPokemons] = useState([])
  // Funksjon for å hente pokemon fra api
  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    const data = await response.json()
    console.log(data.results)
    setPokemons(data.results)
  }

  return (
    <main className="mx-auto max-w-sm mt-6 border-2 p-6">
      <Pokemons pokemons={pokemons} />
      <button type="button" onClick={getPokemons}>
        Hent pokemons
      </button>
    </main>
  )
}

export default App
