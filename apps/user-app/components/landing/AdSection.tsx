"use client"

const adArray = [
  { title: "Flight", img: "./img/download.svg" },
  { title: "Bus", img: "./img/bus.svg" },
  { title: "Train", img: "./img/train.svg" },
  { title: "Hotels", img: "./img/hotels.svg" },
];

const AdSection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-24 space-y-4 ">
      <h3 className="text-4xl">Travel, stays & commute</h3>
      <p className="text-xl max-w-2xl text-center">
        Recharge Fast, book flights, hotels, cabs, and metro tickets, get
        roadside assistance and more seamlessly.
      </p>

      <section className="flex-center mt-12 gap-6">
        {adArray.map((el) => (
          <div
            key={el.title}
            className=" border-2  border-purple-400 w-[16.5rem] h-[17.5rem] rounded-3xl flex gap-2 justify-between "
          >
            <p className="text-2xl translate-x-8 translate-y-8   ">{el.title}</p>
            <img
              src={el.img}
              className="self-end object-contain rounded-br-3xl "
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default AdSection;
