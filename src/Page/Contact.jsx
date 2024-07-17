const Contact = () => {
  return (
    <section className="bg-zinc-100">
      <div className="flex flex-col">
        <div className="text-center pt-10 pb-16">
          <div className="text-2xl md:text-4xl text-CustomColor1 text-opacity-80 libre-baskerville-regular">
            Contact Us
          </div>
          <p className="max-w-lg px-5 sm:px-0 sm:text-sm text-md mx-auto pt-5 text-CustomColor1">
            We consider all the drivers of change gives you the components you
            need need to change to create a truly happens.
          </p>
        </div>

        {/*Form  */}
        <div className="px-5 md:px-0">
          <div className="bg-white rounded-xl mb-16 max-w-2xl mx-auto shadow-2xl">
            <form className="px-8">
              <div className="pt-10 pb-5 flex flex-col justify-center text-sm">
                <label htmlFor="text" className="pb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter your name"
                  className="rounded-3xl py-4 border custom-placeholder"
                />
              </div>
              <div className="pb-5 flex flex-col justify-center text-sm">
                <label htmlFor="email" className="pb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  className="rounded-3xl py-4 border custom-placeholder"
                />
              </div>
              <div className="pb-5 flex flex-col justify-center text-sm">
                <label htmlFor="subject" className="pb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Write a subject"
                  className="rounded-3xl py-4 border custom-placeholder"
                />
              </div>
              <div className="pb-5 flex flex-col justify-center text-sm">
                <label htmlFor="message" className="pb-2">
                  Messsage
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a message"
                  rows="5"
                  cols="50"
                  className="border py-4 rounded-xl custom-placeholder"
                ></textarea>
              </div>
              <div className="pb-7">
                <button
                  type="submit"
                  className="bg-CustomColor1 hover:bg-opacity-70 w-full text-white py-4 rounded-3xl text-sm"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* details */}
        <div className="max-w-2xl mx-auto pb-20">
          <div className="flex flex-row items-center font-medium text-xs sm:text-sm md:text-md justify-evenly px-5 md:px-0 space-x-2 sm:space-x-0 gap-16 sm:gap-44 md:gap-56">
            <div className="mb-2 md:mb-0">Call Us:</div>
            <div className="mb-2 md:mb-0">Hours:</div>
            <div className="mb-2 md:mb-0">Our Location:</div>
          </div>
          <div className="flex  items-center justify-evenly  sm:px-5 md:px-0 gap-5 sm:gap-24 md:gap-24 md:space-x-1 pt-0 sm:pt-5">
            <div className="text-CustomColor1 bg-opacity-90 font-medium sm:font-semibold text-[10px] sm:text-sm sm:text-md md:text-xl mb-2 md:mb-0">
              +92-307-4031207
            </div>
            <div className="text-[10px] sm:text-sm mb-2 md:mb-0">
              Mon-Fri: 9:00 AM - 10:00 PM
            </div>
            <div className="text-[10px] sm:text-sm max-w-16 sm:max-w-32 leading-5 pl-0 md:pl-5">
              123 Main Street, Los Angeles, CA, United States
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.681730734388!2d-118.24645648922646!3d34.05203437304512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6492802e7df%3A0xdb74a941157e2d85!2s123%20Main%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2s!4v1719826688541!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
