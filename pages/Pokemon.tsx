import SearchBox from "../component/UI/Button/SearchBox";
import PokemonCard from "../component/UI/PokemonCard/PokemonCard";

const Pokemon = () => {
  return (
    <div className="flex bg-purple-300 from-purple-050 flex-col items-center pb-5">
      <div className="text-3xl text-white font-sans items-center mt-10 font-bold">
        ポケモン図鑑
      </div>
      <div className="mt-6">
        <SearchBox />
      </div>
      <PokemonCard />
    </div>
  );
};

export default Pokemon;
