const Navbar2 = () => {
  return (
    <section className=" top-0 z-50 bg-white fixed text-black shadow-sm w-full">
      <div className="w-[50%] mx-auto flex justify-between items-center py-3 ">
        <p className="text-xl font-medium">xPay</p>

        <div className="flex text-sm items-center gap-6">
          <p>Login</p>
          <p>Dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default Navbar2;
