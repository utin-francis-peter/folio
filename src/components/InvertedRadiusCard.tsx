const InvertedRadiusCard = ({ title, image, alt }) => {
  return (
    <div className="relative w-[416px]">
      <div className="z-50 absolute bottom-5 right-5 rounded-[57px] w-[120px] h-[120px] p-[21px] bg-[#1d2939]">
        <svg
          width="73"
          height="72"
          viewBox="0 0 73 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 51L51.5 21"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 21H51.5V51"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="inverted-radius  backdrop-blur-[15px] fill-[ rgba(104, 104, 104, 0.2)] pt-[42px] ">
        <h1 className="pb-[23px] px-[37px] font-medium text-[32px] -tracking-[0.01em] text-white border-b-[2px] border-[rgba(249, 250, 251, 0.3)] mb-[49px]">
          {title}
        </h1>

        <div className="h-[375px]">
          <img src={image} alt={alt} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default InvertedRadiusCard;
