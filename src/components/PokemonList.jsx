import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemon }) => {
  return (
    <>
      {pokemon.map((item) => (
        <PokemonCard key={item.name} pokemon={item} />
      ))}
    </>
  )
}
export default PokemonList
