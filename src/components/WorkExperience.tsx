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
    <div className="max-w-7xl mx-auto px-[71px]">
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
  );
};

export default WorkExperience;
