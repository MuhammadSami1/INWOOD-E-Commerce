const Footer = () => {
  return (
    <footer className="bg-zinc-100 pt-20 text-CustomColor1">
      <div className="grid grid-cols-1 md:grid-cols-5 place-items-center gap-28 max-w-6xl mx-auto">
        <div>
          <div className="flex">
            <img
              src="./Images/logo.svg"
              alt="logo"
              style={{ width: "30px", height: "30px" }}
            />
            <div className="text-xs md:text-lg libre-baskerville-regular">
              INWOOD
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium">My Account</div>
          <div>Sign in</div>
          <div>Register</div>
          <div>Order status</div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Help</div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Shop</div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Legel Stuff</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-3 pb-7 text-sm">
        Copyright &#169;2024 INWOOD. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
