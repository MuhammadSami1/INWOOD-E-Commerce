const bedroom = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Shop = () => {
  return (
    <section className="bg-zinc-200 bg-opacity-70 py-16">
      <div className="text-center text-CustomColor1 text-2xl sm:text-4xl libre-baskerville-regular">
        Explore by Category
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-x-5 sm:gap-x-10 py-16">
        <div className="col-span-1 flex flex-col items-start gap-y-10 pt-16 px-3 sm:px-7 text-xs sm:text-lg text-CustomColor1">
          <button className="CustomHover">Bedroom</button>
          <button className="CustomHover">Dinning Room</button>
          <button className="CustomHover">Meeting Room</button>
          <button className="CustomHover">Workspace</button>
          <button className="CustomHover">Living Room</button>
          <button className="CustomHover">Kitchen</button>
          <button className="CustomHover">Living Space</button>
          <button className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-75 rounded-lg px-5 md:px-10 py-3 CustomHover">
            All
          </button>
        </div>
        <div className="col-span-2 md:col-span-3 flex flex-wrap items-center gap-x-5 gap-y-3">
          {bedroom.map((item) => (
            <div key={item.id} className="">
              <img
                src={item.img}
                alt="bedroom"
                className="rounded-lg pr-7 sm:px-0 w-[385px] sm:w-[230px] md:w-[385px] h-[170px] sm:h-[150px] md:h-[200px] hover:scale-105 duration-150 transition-transform transform"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
