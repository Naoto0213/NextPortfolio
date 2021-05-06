const SkillCard = (props) => {
  const SkillName: string = props;

  return (
    <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
      {props.SkillName}
    </div>
  );
};

export default SkillCard;
