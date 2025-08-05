const SmallCurvebox = ({ children, text, circleColor, className }) => {
  return (
    <div
      className={` h-40 w-80 py-1  gap-4 rounded-full border-2 border-purple-600 flex  items-center ${
        className ? className : " px-6 "
      } `}
    >
      <div
        className="h-28 w-28   rounded-full  flex justify-center items-center text-4xl text-black"
        style={{ backgroundColor: circleColor }}
      >
        {children}
      </div>
      <p className="text-lg ">{text}</p>
    </div>
  );
};

export default SmallCurvebox;
