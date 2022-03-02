import { useState } from 'react'

// https://pokeapi.co/api/v2/pokemon?limit=25

export default function Pokemon({ name, url }) {
  const [experience, setExperience] = useState(false)

  const getPokemon = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.base_experience)
    setExperience(data.base_experience)
  }

  return (
    <article>
      <h2>{name}</h2>
      {experience ? <p>Experience: {experience}</p> : ''}
      <button type="button" onClick={() => getPokemon(url)}>
        Se experience
      </button>
    </article>
  )
}
