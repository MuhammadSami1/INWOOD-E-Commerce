const HeroSection = () => {
  return (
    <section className="bg-zinc-400 bg-opacity-80">
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          src="./Images/mainpic.jpg"
          alt="herosection"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div
          className="absolute px-6 md:px-32 py-2 sm:py-10 md:py-20"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <div className="text-sm sm:text-2xl md:text-4xl max-w-40 sm:max-w-xs md:max-w-lg leading-snug text-CustomColor1 libre-baskerville-regular">
            Exclusive Deals of Furniture Collection
          </div>
          <p className="text-CustomColor1 text-xs sm:text-md py-1 sm:py-3 md:py-10">
            Explore different categories. Find the best deals.
          </p>
          <button className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-50 rounded-lg px-2 sm:px-5 md:px-9 py-1 sm:py-2 md:py-4">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
