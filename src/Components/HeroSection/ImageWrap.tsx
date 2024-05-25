const ImageWrap = () => {
  return (
    <div className="md:w-[41.6%] w-full z-10 rounded-b-full overflow-hidden px-3 relative">
      <div className="circle bg-black w-80 h-80 absolute -z-10 top-28 left-0"></div>
      <img
        src="/heroImage.png"
        className="w-full h-max object-contain"
        alt="Hero Image"
      />
      <img
        src="/progress-shape.png"
        className="w-full h-max object-contain absolute right-0 bottom-0 -z-10"
        alt="Hero Image"
      />
    </div>
  );
};

export default ImageWrap;
