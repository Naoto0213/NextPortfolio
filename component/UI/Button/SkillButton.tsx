const SkillButton = (props) => {
  const title = props;
  return (
    <div>
      <button className="inline-block px-10 py-3 text-xs mt-10 font-medium leading-6 text-center text-white uppercase transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none">
        {props.title}
      </button>
    </div>
  );
};

export default SkillButton;
