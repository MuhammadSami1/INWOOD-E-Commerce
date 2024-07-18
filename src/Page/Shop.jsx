import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../features/userDetailSlice";
import { useState } from "react";
import Product from "./Product";

const Shop = () => {
  const [id, setId] = useState();
  const [showProduct, setShowProduct] = useState(false);
  const productPage = (itemId) => {
    setShowProduct(true);
    setId(itemId);
  };

  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUsers());
    if (loading) {
      return (
        <h2 className="text-5xl text-CustomColor1 font-bold text-center my-5">
          Loading...
        </h2>
      );
    }
    if (error !== null) {
      return (
        <h2 className="text-3xl font-bold">
          Something went wrong with your network.
        </h2>
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0) {
      showAllData();
    }
    if (loading) {
      return (
        <h2 className="text-5xl text-CustomColor1 font-bold text-center my-5">
          Loading...
        </h2>
      );
    }
    if (error !== null) {
      return (
        <h2 className="text-3xl font-bold">
          Something went wrong with your network.
        </h2>
      );
    }
  }, [users]);
  const [updataData, setUpdataData] = useState([]);

  const showAllData = () => {
    const randomizedUsers = [...users].sort(() => Math.random() - 0.5);
    const slicedUsers = randomizedUsers.slice(0, 6);
    setUpdataData(
      slicedUsers.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt="bedroom"
            className="rounded-lg sm:px-0 w-[210px] sm:w-[230px] md:w-[385px] h-[170px] sm:h-[150px] md:h-[200px] hover:scale-105 duration-150 transition-transform transform"
            style={{ objectFit: "cover" }}
            onClick={() => productPage(item.id)}
          />
        </div>
      ))
    );
  };

  const showCategoryItems = (id) => {
    setUpdataData(
      users
        .filter((item) => item.category === id)
        .map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt="bedroom"
              className="rounded-lg sm:px-0 w-[210px] sm:w-[230px] md:w-[385px] h-[170px] sm:h-[150px] md:h-[200px] hover:scale-105 duration-150 transition-transform transform"
              style={{ objectFit: "cover" }}
              onClick={() => productPage(item.id)}
            />
          </div>
        ))
    );
  };

  return (
    <>
      {showProduct ? (
        <Product id={id} setShowProduct={setShowProduct} />
      ) : (
        <section className="bg-zinc-200 bg-opacity-70 py-16">
          <div className="text-center text-CustomColor1 text-2xl sm:text-4xl libre-baskerville-regular">
            Explore by Category
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-x-5 sm:gap-x-10 py-16">
            <div className="col-span-1 flex flex-col items-start gap-y-10 pt-16 px-3 sm:px-7 text-xs sm:text-lg text-CustomColor1">
              <button
                className="CustomHover"
                onClick={() => showCategoryItems("Bedroom")}
              >
                Bedroom
              </button>
              <button
                className="CustomHover"
                onClick={() => showCategoryItems("Dining Room")}
              >
                Dinning Room
              </button>
              <button
                className="CustomHover"
                onClick={() => showCategoryItems("Meeting Room")}
              >
                Meeting Room
              </button>
              <button
                className="CustomHover"
                onClick={() => showCategoryItems("Workspace")}
              >
                Workspace
              </button>
              <button
                className="CustomHover"
                onClick={() => showCategoryItems("Living Room")}
              >
                Living Room
              </button>
              <button
                className="CustomHover"
                onClick={() => showCategoryItems("Kitchen")}
              >
                Kitchen
              </button>
              <button
                className="CustomHover"
                onClick={() => showCategoryItems("Living Space")}
              >
                Living Space
              </button>
              <button
                className="text-white text-xs sm:text-md bg-CustomColor1 bg-opacity-75 rounded-lg px-5 md:px-10 py-3 CustomHover"
                onClick={showAllData}
              >
                All
              </button>
            </div>
            <div className="col-span-2 md:col-span-3 flex flex-wrap items-center gap-x-5 gap-y-3">
              {updataData.length > 0 && updataData}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Shop;
