const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

const FeaturedSection = () => {
  return (
    <div className="mx-auto max-w-6xl py-20">
      <div className="text-CustomColor1 text-center text-3xl md:text-5xl pb-16 libre-baskerville-regular">
        Featured Section
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden bg-zinc-200 rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              style={{ objectFit: "cover", width: "250px", height: "250px" }}
              src={item.img}
              alt="avatar"
            />
            <div className="py-5 flex justify-center">
              <button className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-50 rounded-lg px-5 py-3 hover:scale-105 duration-300 transition-transform transform">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
