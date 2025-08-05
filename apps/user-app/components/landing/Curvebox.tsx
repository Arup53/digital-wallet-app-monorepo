const Curvebox = ({ icon, text, className, children, circleColor }) => {
  return (
    <div
      className={`h-40 w-96  py-2  gap-8 rounded-full border-2 border-purple-600 flex  items-center ${
        className ? className : "px-8"
      }`}
    >
      <div
        className="h-28 w-28   rounded-full  flex justify-center items-center text-4xl text-black"
        style={{ backgroundColor: circleColor }}
      >
        {children}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Curvebox;
