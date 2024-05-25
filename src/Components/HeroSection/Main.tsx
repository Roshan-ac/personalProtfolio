import ImageWrap from "./ImageWrap";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="m-auto container py-20 container-2xl overflow-hidden min-h-screen flex items-center">
        <div className="md:flex md:space-y-0 space-y-6 flex-col items-center justify-center px-4 mt-14 w-full gap-4">
          <div className=" text-white w-full md:w-[33.33333333%]">
            <div className=" flex flex-col gap-2">
              <span className=" text-3xl text-gray-300">Hello, i'm</span>
              <p className=" text-5xl font-bold text-green-500">
                Roshan Acharya
              </p>
              <p className=" text-4xl font-semibold"> web designer</p>
            </div>
            <div className="my-6">
              <span className=" text-base text-gray-500 ">
                We denounce with righteous indignation dislike demoralized by
                the charms of pleasure
              </span>
            </div>
          </div>
          <ImageWrap />
          <div className=" bg-[#070707] rounded-lg md:w-[25%] w-full space-y-4 py-8 p-4 h-max text-white">
            <div className="px-8 space-y-2">
              <span className=" text-5xl font-medium text-green-500">2+</span>
              <p className=" text-lg"> Years Of Experience</p>
            </div>
            <hr className=" opacity-30 w-[72%] m-auto" />
            <div className="px-8 space-y-2">
              <span className=" text-5xl font-medium text-green-500">4+</span>
              <p className=" text-lg">Project Complete</p>
            </div>
            <hr className=" opacity-30 w-[72%] m-auto" />
            <div className="px-8 space-y-2">
              <span className=" text-5xl font-medium text-green-500">8+</span>
              <p className=" text-lg">Client Satisfactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
