import Pokemon from './Pokemon'

export default function Pokemons({ pokemons }) {
  return (
    <section>
      <h1>Liste med Pokemons</h1>
      <ul>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>
            <Pokemon name={pokemon.name} url={pokemon.url} />
          </li>
        ))}
      </ul>
    </section>
  )
}
