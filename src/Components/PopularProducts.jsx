import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, showUsers } from "../features/userDetailSlice";

const PopularProducts = () => {
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.app);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsers());
  }, [dispatch]);
  return (
    <section className=" bg-zinc-200 bg-opacity-80">
      <div className="py-16">
        <h2 className="text-3xl md:text-5xl text-center pb-14 tracking-tight libre-baskerville-regular text-CustomColor1">
          Popular Products
        </h2>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 items-center max-w-6xl mx-auto">
          {users.slice(16, 20).map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-background bg-opacity-45 hover:scale-105 duration-300 transition-transform transform"
            >
              <img
                src={item.image}
                alt="image"
                style={{
                  objectFit: "center",
                  width: "250px",
                  height: "250px",
                }}
                className="rounded-t-lg"
              ></img>

              <div className=" text-CustomColor1 text-center">
                <div className="pt-5 font-semibold">{item.name}</div>
                <div className="py-5 font-medium">$ {item.price}</div>
                <div className="pb-7 flex justify-center">
                  <button
                    className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-50 hover:bg-opacity-30 rounded-lg px-5 py-3 hover:scale-105 duration-300 transition-transform transform"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-16">
          <button
            className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-50 rounded-lg px-5 md:px-7 py-4 hover:scale-105 duration-300 transition-transform transform"
            onClick={() => navigate("/shop")}
          >
            Explore all items
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
