import SearchBox from "../component/UI/Button/SearchBox";
import PokemonCard from "../component/UI/PokemonCard/PokemonCard";

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="flex bg-purple-300 from-purple-050 flex-col items-center pb-5">
      <div className="text-3xl text-white font-sans items-center mt-10 font-bold">
        ポケモン図鑑
      </div>
      <div className="mt-6">
        <SearchBox />
      </div>
      <div className="px-12 gap-x-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {pokemon.map((pokeman, index) => (
          <PokemonCard
            pokemonName={pokeman.name}
            pokemonImage={pokeman.image}
            pokemonId={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const Id = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${Id}.png`;
      return { ...pokeman, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
