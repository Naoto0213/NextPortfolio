import Firstvew from "../component/FirstVew/Firstvew";
import Tutorial from "../component/UI/PrpfileCard/ProfileCard";
import Link from "next/link";

export default function Home({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="">
      <Firstvew />
      <Tutorial />
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const paddedId = ("00" + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokeman, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
