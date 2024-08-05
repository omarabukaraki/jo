

const GradeTextBtn = ({ text, active, click }) => {
  return (
    <button
      onClick={click}
      className={`w-1/4 h-10 rounded-md text-xl m-1 focus:outline-none ${
        active
          ? 'bg-primary text-white font-bold'
          : 'bg-white text-primary'
      }`}
    >
      {text}
    </button>
  );
};

export default GradeTextBtn;
