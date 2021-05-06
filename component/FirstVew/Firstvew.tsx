import Link from "next/link";
import StandatButton from "../UI/Button/StandartButton";
const Firstvew = (): JSX.Element => {
  return (
    <div className="h-96 bg-gray-100 pt-20 flex font-sans flex-col items-center">
      <h2 className="text-black text-5xl font-bold ">
        Welcome to React Tutorial
      </h2>
      <h2 className="text-yellow-700 mt-2 text-lg font-bold ">
        TypeScript Tailwind Next
      </h2>
      <div className="flex">
        <div className="mr-5">
          <Link href="/Pokemon">
            <a href="text-white">
              <StandatButton title="Pokemon!" />
            </a>
          </Link>
        </div>
        <div className="ml-5">
          <Link href="ReactTutorial/Tutorial">
            <a href="">
              <StandatButton title="Let`s go!" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Firstvew;
