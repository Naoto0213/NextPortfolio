import Image from "next/Image";

export default function PokemonCard(props) {
  return (
    <button className="bg-gray-200 shadow-2xl w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center focus:outline-none">
      <div className="bg-purple-400 w-full">
        <div className="flex items-center justify-center">
          <div className="pt-3 pr-2">
            <Image
              src="/Poké_Ball.png"
              alt="Picture of the author"
              width={20}
              height={20}
            />
          </div>
          <h2 className="pt-2 font-bold text-gray-100">No.{props.pokemonId}</h2>
        </div>
        <h2 className="pb-2 font-bold text-gray-100">{props.pokemonName}</h2>
      </div>
      <img src={props.pokemonImage} alt="" />
    </button>
  );
}
