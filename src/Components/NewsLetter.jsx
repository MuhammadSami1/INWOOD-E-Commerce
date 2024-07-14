const NewsLetter = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="newsletter"
          />
        </div>
        <div className="pt-20 px-10 sm:px-28 flex flex-col bg-background bg-opacity-50">
          <div className="text-5xl text-CustomColor1">Join Our</div>
          <div className="text-5xl py-5 text-CustomColor1 libre-baskerville-regular">
            Newsletter
          </div>
          <p className="text-md py-3 text-CustomColor1">
            Receive exclusive deal, discounts and many offers.
          </p>
          <div className="py-2 sm:py-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-lg py-2 Custom"
            />
          </div>
          <div className="pt-3 pb-7">
            <button className="text-white text-sm sm:text-md bg-CustomColor1 bg-opacity-50 rounded-lg px-14 py-4 hover:scale-105 duration-300 transition-transform transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
