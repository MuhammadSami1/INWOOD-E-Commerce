const Footer = () => {
  return (
    <footer className="bg-zinc-100 pt-16 text-CustomColor1">
      <div className="flex justify-between flex-col sm:flex-row gap-y-10 px-5 max-w-6xl mx-auto">
        <div className="flex flex-col">
          <div className="text-sm">INWOOD</div>
          <div>
            <div className="font-medium text-sm pt-3">Address</div>
            <div className="text-xs">
              <div>+92 307 4031207</div>
              <div>877 The Bronx, NY</div>
              <div>14568, USA</div>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium">My Account</div>
          <div className="pt-4">
            <div>Sign in</div>
            <div>Register</div>
            <div>Order status</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Help</div>
          <div className="pt-4">
            <div>Shipping</div>
            <div>Returns</div>
            <div>Sizing</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Shop</div>
          <div className="pt-4">
            <div>All Products</div>
            <div>Bedroom</div>
            <div>Dining Room</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Legel Stuff</div>
          <div className="pt-4">
            <div>Shipping & Delivery</div>
            <div>Terms & Conditions</div>
            <div>Privacy & Policy</div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 pt-10 pb-7 text-sm">
        Copyright &#169;2024 INWOOD. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
