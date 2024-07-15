import TestimonalsCard from "./TestimonalsCard";

const profiles = [
  {
    id: 1,
    title: "Top-Rated Electronics",
    profile:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    name: "John Doe",
    message:
      "I recently purchased a laptop from this site, and I couldn't be happier. The user-friendly interface made shopping a breeze, and the delivery was prompt. Highly recommended!",
    address: "Los Angeles, CA",
  },
  {
    id: 2,
    title: "Exceptional Home Goods",
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "Andy Smith",
    message:
      "This website exceeded my expectations on all fronts. The selection of home goods was vast, and I found exactly what I needed. The items arrived in perfect condition.",
    address: "San Diego, CA",
  },
  {
    id: 3,
    title: "Unique Fashion Finds",
    profile:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    name: "Sophia Robson",
    message:
      "Shopping for fashion on this site was an incredible experience. The variety and quality of clothes are unmatched. I found some unique pieces that have become staples in my wardrobe.",
    address: "San Francisco, CA",
  },
];

const TestimonalsSection = () => {
  return (
    <section className="bg-zinc-100">
      <div>
        <div className="text-center text-2xl md:text-4xl pt-20 text-CustomColor1 libre-baskerville-regular">
          Testimonals
        </div>
        <div className="text-2xl text-center text-CustomColor1 pt-7 pb-20">
          Over 15,000 happy customers.
        </div>
        <div className="pb-36 flex flex-wrap gap-x-5 gap-y-10 items-center justify-center max-w-5xl md:px-3 mx-auto">
          {profiles.map((id) => (
            <TestimonalsCard
              key={id}
              title={id.title}
              profile={id.profile}
              name={id.name}
              address={id.address}
              message={id.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonalsSection;
