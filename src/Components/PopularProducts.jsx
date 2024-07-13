const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/Images/chair.png",
    imageAlt: " Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/Images/chair.png",
    imageAlt: "Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/Images/chair.png",
    imageAlt: "Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/Images/chair.png",
    imageAlt: "Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

const PopularProducts = () => {
  return (
    <section className="bg-zinc-200 bg-opacity-80">
      <div className="py-16">
        <h2 className="text-3xl md:text-5xl text-center pb-14 tracking-tight libre-baskerville-regular text-CustomColor1">
          Popular Products
        </h2>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-7 items-center max-w-6xl mx-auto ">
          {products.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-background bg-opacity-45 hover:scale-105 duration-300 transition-transform transform"
            >
              <img
                src={item.imageSrc}
                alt="image"
                style={{
                  objectFit: "center",
                  width: "250px",
                  height: "250px",
                }}
                className="rounded-t-lg"
              ></img>

              <div className="px-8 text-CustomColor1">
                <div className="pt-1 font-semibold">{item.name}</div>
                <div className="text-sm pt-5">{item.imageAlt}</div>
                <div className="py-3 font-medium">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-16">
          <button className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-50 rounded-lg px-5 md:px-7 py-4 hover:scale-105 duration-300 transition-transform transform">
            Explore all items
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
