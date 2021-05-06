import Image from "next/Image";
import SkillCard from "./SkillCard";
const Tutorial = () => {
  interface MyProfile {
    myName: string;
    age: number;
  }

  const Mydata = {
    Name: "MachidaNaoto",
    age: 18,
  };

  interface MySkill {
    SkillName: string;
  }

  const MySkill = [
    {
      SkillName: "React",
    },
    {
      SkillName: "TypeScript",
    },
    {
      SkillName: "JavaScript",
    },
    {
      SkillName: "Next.js",
    },
    {
      SkillName: "GraphQl",
    },
  ];

  return (
    <div className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto shadow-lg">
      <div className="relative h-40">
        <img
          className="absolute h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        />
      </div>
      <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4 bg-white">
        <Image
          className="object-cover w-full h-full"
          src="/ProfileReact.png"
          layout="fill"
        />
      </div>
      <div className="mt-16">
        <h1 className="text-lg text-center font-semibold">{Mydata.Name}</h1>
        <p className="text-sm text-gray-600 text-center">{Mydata.age}歳</p>
      </div>
      <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
        {MySkill.map((SkillList) => (
          <SkillCard SkillName={SkillList.SkillName} />
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
