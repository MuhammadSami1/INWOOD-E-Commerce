const CheckOut = () => {
  return (
    <section className="py-20 bg-zinc-200 bg-opacity-70">
      <div className="max-w-6xl mx-auto rounded-lg">
        <h1 className="text-2xl sm:text-4xl font-bold pb-10 text-center text-CustomColor1 libre-baskerville-regular">
          Checkout
        </h1>
        <form>
          {/* Billing Information  */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold pb-4 text-CustomColor1">
              Billing Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="billing-name" className="block text-gray-700">
                  Name
                </label>
                <input
                  id="billing-name"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="billing-email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="billing-email"
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="billing-address"
                  className="block text-gray-700"
                >
                  Address
                </label>
                <input
                  id="billing-address"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="billing-city" className="block text-gray-700">
                  City
                </label>
                <input
                  id="billing-city"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="billing-state" className="block text-gray-700">
                  State
                </label>
                <input
                  id="billing-state"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="billing-zip" className="block text-gray-700">
                  ZIP Code
                </label>
                <input
                  id="billing-zip"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
            </div>
          </section>

          {/* Shipping Information */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold pb-4 text-CustomColor1">
              Shipping Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="shipping-name" className="block text-gray-700">
                  Name
                </label>
                <input
                  id="shipping-name"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="shipping-email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="shipping-email"
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="shipping-address"
                  className="block text-gray-700"
                >
                  Address
                </label>
                <input
                  id="shipping-address"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="shipping-city" className="block text-gray-700">
                  City
                </label>
                <input
                  id="shipping-city"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="shipping-state" className="block text-gray-700">
                  State
                </label>
                <input
                  id="shipping-state"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="shipping-zip" className="block text-gray-700">
                  ZIP Code
                </label>
                <input
                  id="shipping-zip"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
            </div>
          </section>

          {/* Payment Information */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold pb-4 text-CustomColor1">
              Payment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="card-number" className="block text-gray-700">
                  Card Number
                </label>
                <input
                  id="card-number"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="card-expiration"
                  className="block text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  id="card-expiration"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label htmlFor="card-cvv" className="block text-gray-700">
                  CVV
                </label>
                <input
                  id="card-cvv"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
            </div>
          </section>

          {/* Order Summary  */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold pb-4 text-CustomColor1">
              Order Summary
            </h2>
            <div className="bg-gray-300 p-4 rounded">
              <p className="text-gray-700">
                <strong>Item 1</strong>: $10.00
              </p>
              <p className="text-gray-700">
                <strong>Item 2</strong>: $15.00
              </p>
              <p className="text-gray-700">
                <strong>Item 3</strong>: $20.00
              </p>
              <hr className="my-2" />
              <p className="text-gray-700 text-lg">
                <strong>Total</strong>: $45.00
              </p>
            </div>
          </section>

          {/* Submit Button  */}
          <div className="text-right pt-5">
            <button
              type="submit"
              className="text-white text-sm sm:text-md bg-CustomColor1 bg-opacity-75 rounded-lg px-5 py-3 CustomHover"
            >
              Complete Purchase
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOut;
