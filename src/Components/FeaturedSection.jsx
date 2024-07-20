import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, showUsers } from "../features/userDetailSlice";

const FeaturedSection = () => {
  const { users } = useSelector((state) => state.app);
  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsers());
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-6xl py-20">
      <div className="text-CustomColor1 text-center text-3xl md:text-5xl pb-16 libre-baskerville-regular">
        Featured Section
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-10">
        {users &&
          users.slice(6, 10).map((item) => (
            <div
              key={item.id}
              className="overflow-hidden bg-zinc-200 rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                style={{ objectFit: "cover", width: "250px", height: "250px" }}
                src={item.image}
                alt="avatar"
              />
              <div className="py-5 flex justify-center">
                <button
                  className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-50 rounded-lg px-5 py-3 hover:scale-105 duration-300 transition-transform transform"
                  onClick={() => handleAddToCart(item)}
                >
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
