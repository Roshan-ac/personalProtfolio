import ImageWrap from "./ImageWrap";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="m-auto container py-20 container-2xl overflow-hidden min-h-screen flex items-center">
        <div className="flex md:space-y-0 space-y-6 md:flex-row flex-col items-center justify-center md:px-4 mt-14 w-full gap-6">
          <div className=" text-white w-full md:w-[35%]">
            <div className=" flex flex-col gap-4">
              <span className=" text-5xl text-[#6b6b6b]">Hello, i'm</span>
              <h1 className="text-6xl leading-[4rem] w-full">
                <b className="font-bold text-green-500 mr-2">Resham. <span className="text-3xl text-white">acharya</span> </b>
                web designer
              </h1>
            </div>
            <div className="my-6">
              <span className=" text-xl text-[#a9a9a9] ">
                We denounce with righteous indignation dislike demoralized by
                the charms of pleasure
              </span>
            </div>
            <div className="my-12 flex items-center gap-6">
              <button className=" p-3 bg-green-500 px-7 text-[#222222] font-semibold text-lg rounded-md">Hire Me</button>
              <p>
                <a href="" className=" hover:underline hover:text-green-500 transition-all duration-500 ease-in-out">Download Resume</a>
              </p>
            </div>
          </div>
          <ImageWrap />
          <div className="rounded-lg bg-black md:w-[20%] w-full space-y-4 py-8 h-max text-white">
            <div className=" w-[80%] m-auto space-y-3">
            <div className="space-y-2">
              <span className=" text-5xl font-medium text-green-500">2+</span>
              <p className=" text-lg"> Years Of Experience</p>
            </div>
            <hr className=" opacity-30 w-full" />
            <div className="space-y-2">
              <span className=" text-5xl font-medium text-green-500">4+</span>
              <p className=" text-lg">Project Complete</p>
            </div>
            <hr className=" opacity-30 w-full" />
            <div className="space-y-2">
              <span className=" text-5xl font-medium text-green-500">8+</span>
              <p className=" text-lg">Client Satisfactions</p>
            </div>
            </div>
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
