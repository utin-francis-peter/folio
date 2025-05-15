const navList = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/",
  },
  {
    text: "Services",
    path: "/",
  },
  {
    text: "TECH_MAJETY",
    path: "",
    icon: "/logo.png",
  },
  {
    text: "Resume",
    path: "/",
  },
  {
    text: "Project",
    path: "/",
  },
  {
    text: "Contact",
    path: "/",
  },
];

const HeroSection = () => {
  return (
    // TODO: improve the nav styles
    <div className="min-h-screen">
      <nav className="mx-[71px] mt-[40px] mb-[37px] bg-dark h-[86px] rounded-full text-white font-normal overflow-hidden">
        <ul className="h-full flex items-center justify-around p-[10px] gap-[15px]">
          {navList.map((n, i) => (
            <li className="h-full rounded-full px-[20px] py-[40px]" key={i}>
              <a
                href={n.path}
                className="flex items-center bg-primary gap-[12.5px] h-full"
              >
                {n.icon && (
                  <img alt="logo" src={n.icon} width={46} height={46} />
                )}
                <span className={`${i === 3 ? "font-unlock font-black" : ""}`}>
                  {n.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <div className="text-center ">
          <p className="border-[1.27px] border-dark rounded-[38px] py-[12px] px-[25px] w-[103px] h-[45px] mx-auto">
            Hello!
          </p>
          <h1 className="font-semibold text-[95px] -tracking-[0.01em] leading-[100%]">
            I'm <span className="text-primary">Francis,</span> <br /> Frontend
            Developer
          </h1>
        </div>

        <div>
          <div className="relative ">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
              <img
                src="/smiling-lady.png"
                alt="a smiling lady"
                width={952}
                height={636}
              />

              <svg
                className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2"
                width="813"
                height="300"
                viewBox="0 0 813 406"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M812.673 406C542.08 406 271.487 406 0.894531 406C0.894531 181.833 182.617 0.110565 406.784 0.110565C630.95 0.110565 812.673 181.833 812.673 406Z"
                  fill="#FEB273"
                />
              </svg>

              <div className="p-[10px] w-[367px] h-[82px] z-40 rounded-[50px] bg-glass backdrop-blur-[15px] flex items-center gap-[27.5px] text-white -tracking-[0.1em] font-medium absolute bottom-[10px] left-1/2 -translate-x-1/2">
                <button className="border-[0.50px] border-[#d0d5dd] rounded-[60px] px-[20px] py-[10px] w-[208px] h-[62px] flex items-center justify-center bg-primary">
                  <span className="text-[25px] ">Portfolio</span>
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.25 29.75L29.75 12.25"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.25 12.25H29.75V29.75"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>Hire me</button>
              </div>
            </div>

            <div className="flex justify-between mx-[71px] mt-[80.33px]">
              <div className="w-[304px] ">
                <img src="/quote-up.png" alt="quote" /> <br />
                <p className="font-medium text-[20px] text-[##344054]">
                  Lily’s Exceptional product design ensure our website’s
                  success. Highly Recommended{" "}
                </p>
              </div>

              <div className="text-end w-[176px] ">
                <img
                  className="w-full"
                  src="/five-stars.png"
                  alt="five stars"
                  width={160}
                  height={32}
                />{" "}
                <h1 className="font-urbanist text-[47px] font-bold text-center">
                  3+ Years
                </h1>
                <p className="">Experience</p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
