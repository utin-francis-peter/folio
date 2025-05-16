import InvertedRadiusCard from "./InvertedRadiusCard";

const Services = () => {
  return (
    <div className="h-[878px] rounded-[50px] py-[116px] bg-[#171717] bg-[url('/bg-dark.png')] bg-no-repeat bg-cover mt-[117px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-[455px] text-white mb-[96px]">
          <h1 className="text-[48px] flex items-center gap-2">
            My
            <span className="text-primary"> Services</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            deserunt harum mollitia commodi, voluptatem minima doloremque minus
            quaerat nam magni inventore consequatur.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <InvertedRadiusCard
            title={"App Design"}
            image="/app-dev.png"
            alt="app development"
          />

          <InvertedRadiusCard
            title={"CRM Design"}
            image="/crm-design.png"
            alt="CRM Design"
          />

          <InvertedRadiusCard
            title={"Landing Page"}
            image="/landing-page.png"
            alt="landing page"
          />
        </div>

        <div className="flex items-center justify-center mt-[39px]">
          <svg
            width="140"
            height="16"
            viewBox="0 0 140 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="60.3242"
              height="15.0811"
              rx="7.54053"
              transform="matrix(1 0 0 -1 0.250122 15.0811)"
              fill="#FD853A"
            />
            <rect
              width="15.0811"
              height="15.0811"
              rx="7.54053"
              transform="matrix(1 0 0 -1 71.8851 15.0811)"
              fill="#E4E7EC"
            />
            <rect
              width="15.0811"
              height="15.0811"
              rx="7.54053"
              transform="matrix(1 0 0 -1 98.277 15.0811)"
              fill="#E4E7EC"
            />
            <rect
              width="15.0811"
              height="15.0811"
              rx="7.54053"
              transform="matrix(1 0 0 -1 124.669 15.0811)"
              fill="#E4E7EC"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;
