const workExperienceList = {
  company: [
    {
      id: 1,
      name: "Build With Harvoxx",
      duration: "Sep 2023 - Mar 2024",
    },
    {
      id: 2,
      name: "The Metal App",
      duration: "Aug 2024 - Mar 2025",
    },
    {
      id: 3,
      name: "Harvoxx Product Sch",
      duration: "Sep 2024 - Till date",
    },
  ],

  description: [
    {
      id: 4,
      title: "Experience Designer",
      achievement: `I designed user-friendly web and mobile interfaces, improved
            usability, and collaborated with developers to refine user flows.`,
    },
    {
      id: 5,
      title: "UI/UX Designer",
      achievement: `I designed an intuitive social platform for blind connection,
          enhancing onboarding, networking, and scalability for better user
               engagement.`,
    },
    {
      id: 6,
      title: "Lead Design Tutor",
      achievement: ` I mentor aspiring designers, guiding them through UI/UX
              fundamentals, design tools, and real-world projects. I create
              structured learning paths, provide feedback on portfolios, and
              help students build industry-ready skills.`,
    },
  ],
};

const WorkExperience = () => {
  return (
    <div className=" ">
      <div className="max-w-7xl mx-auto">
        <h1 className="py-[85px] text-center text-[64px] font-medium leading-[100%] -tracking-[0.01em]">
          My <span className="text-primary ">Work Experience</span>
        </h1>

        <div className="flex gap-[213.5px] mb-[29px]">
          <div className="min-w-[391px] space-y-[112px] ">
            {workExperienceList.company.map((c) => (
              <div key={c.id}>
                <h1 className="font-semibold text-[40px] text-[#344054] leading-[100%] -tracking-[0.01em] mb-[14px]">
                  {c.name}
                </h1>
                <p className="font-normal text-[24px] leading-[100%] -tracking-[0.01em]">
                  {c.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="w-[48px] h-[418px] relative flex flex-col items-center justify-between">
            <div className="border-dashed border-[2px] border-spacing-5 border-black h-full absolute -z-10"></div>

            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1.5" y="1" width="48" height="48" rx="24" fill="white" />
              <rect
                x="1.5"
                y="1"
                width="48"
                height="48"
                rx="24"
                stroke="#1D2939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="7 7"
              />
              <circle cx="25.5" cy="25" r="18" fill="#FD853A" />
            </svg>

            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1.5" y="1" width="48" height="48" rx="24" fill="white" />
              <rect
                x="1.5"
                y="1"
                width="48"
                height="48"
                rx="24"
                stroke="#1D2939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="7 7"
              />
              <circle cx="25.5" cy="25" r="18" fill="#1D2939" />
            </svg>

            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1.5" y="1" width="48" height="48" rx="24" fill="white" />
              <rect
                x="1.5"
                y="1"
                width="48"
                height="48"
                rx="24"
                stroke="#1D2939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="7 7"
              />
              <circle cx="25.5" cy="25" r="18" fill="#FD853A" />
            </svg>
          </div>

          <div className="min-w-[391px] space-y-[32px]">
            {workExperienceList.description.map((d) => (
              <div key={d.id}>
                <h1 className="font-semibold text-[40px] text-[#344054] leading-[100%] -tracking-[0.01em] mb-[14px]">
                  {d.title}
                </h1>
                <p className="font-normal text-[24px] leading-[100%] -tracking-[0.01em]">
                  {d.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[806px] items-center justify-center gap-24 px-[71px] py-[122px] relative bg-[#f2f3f6] rounded-[50px] overflow-hidden">
        <div className="flex w-[1299px] h-[600px] items-center justify-between relative mt-[-19.00px] mb-[-19.00px] ml-[-0.50px] mr-[-0.50px]">
          <div className="relative w-[603px] h-[600px] bg-[url(/tech-lady.png)] bg-cover bg-[50%_50%]" />

          <div className="flex flex-col items-start gap-[47px] relative flex-1 grow mt-[-2.00px] mb-[-2.00px]">
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-transparent text-[64px] tracking-[-0.96px] leading-[64px]">
                <span className="text-[#344053] tracking-[-0.61px]">Why </span>

                <span className="text-[#fd8439] tracking-[-0.61px]">
                  Hire me
                </span>

                <span className="text-[#344053] tracking-[-0.61px]">?</span>
              </p>
            </div>

            <p className="relative w-[531px] [font-family:'Lufga-Regular',Helvetica] font-normal text-[#98a1b2] text-xl tracking-[-0.30px] leading-[normal]">
              I blend UI/UX expertise with psychology, creating designs that are
              not only visually appealing but also intuitive and user-focused.
              With experience in fintech, marketplaces, and social platforms, I
              craft seamless user experiences that drive engagement and
              retention. My ability to collaborate with developers, conduct UX
              research, and implement scalable design systems ensures products
              are both functional and impactful.
            </p>

            <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Medium',Helvetica] font-medium text-[#1d2838] text-4xl tracking-[-0.54px] leading-[normal]">
                  50+
                </div>

                <div className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-[#667084] text-xl tracking-[-0.30px] leading-[normal]">
                  Projects Completed
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Medium',Helvetica] font-medium text-[#1d2838] text-4xl tracking-[-0.54px] leading-[normal]">
                  450+
                </div>

                <div className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-[#667084] text-xl tracking-[-0.30px] leading-[normal]">
                  Designers Trained
                </div>
              </div>
            </div>

            <button className="border border-[#151515] rounded-[32px] py-[33px] px-[59px] w-[233px] h-[108px] font-semibold text-[32px] -tracking-[0.01em] text-[#151515] flex items-center justify-center">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
