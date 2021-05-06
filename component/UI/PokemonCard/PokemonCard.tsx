import Image from "next/Image";
const PokemonCard = () => {
  return (
    <div className="px-12 gap-x-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
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
            <h2 className="pt-2 font-bold text-gray-100">No.002</h2>
          </div>
          <h2 className="pb-2 font-bold text-gray-100">フシギダネ</h2>
        </div>
        <Image
          src="/7b705082db2e24dd4ba25166dac84e0a.png"
          alt="Picture of the author"
          width={180}
          height={180}
        />
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center ">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>{" "}
      <button className="bg-gray-200 shadow-2xl h-60 w-60 rounded-md flex flex-col mt-20 transform transition duration-500 hover:scale-110 items-center">
        Hello
      </button>
    </div>
  );
};

export default PokemonCard;
