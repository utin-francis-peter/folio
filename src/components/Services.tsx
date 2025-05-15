const Services = () => {
  return (
    <div className="h-[878px] rounded-[50px] py-[116px] px-[71px] bg-[#171717] bg-[url('/bg-dark.png')] bg-no-repeat bg-cover mt-[53px]">
      <div className="flex items-center justify-between gap-[455px] text-white mb-[96px]">
        <h1 className="text-[48px] flex items-center gap-2">
          My
          <span className="text-primary"> Services</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt
          harum mollitia commodi, voluptatem minima doloremque minus quaerat nam
          magni inventore consequatur.
        </p>
      </div>

      <div>
        <div className="w-[416px] h-[508px] backdrop-blur-[15px] fill-[ rgba(104, 104, 104, 0.2)]"></div>
      </div>
    </div>
  );
};

export default Services;
