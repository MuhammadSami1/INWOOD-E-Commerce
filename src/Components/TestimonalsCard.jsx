const TestimonalsCard = ({ title, profile, name, address, message }) => {
  return (
    <div className="bg-zinc-200 max-w-xs mx-auto rounded-lg">
      <div className="px-8">
        <div className="pt-10 text-lg text-CustomColor1 font-semibold">
          {title}
        </div>
        <div className="py-7 text-sm text-CustomColor1">{message}</div>
        <div className="border border-gray-300"></div>
        <div className="flex items-center gap-5 py-7">
          <img
            src={profile}
            alt="profile"
            className="rounded-full"
            style={{ objectFit: "cover", width: "60px", height: "60px" }}
          />
          <div className="text-sm text-CustomColor1">
            <div className="py-1">{name}</div>
            <div>{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalsCard;
