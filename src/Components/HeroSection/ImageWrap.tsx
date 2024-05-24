const ImageWrap = () => {
  return (
    <div className=" relative w-[40vw] h-[78vh] rounded-full overflow-hidden">
      <div className="circle bg-black w-52 h-52 absolute top-10 left-10"></div>
      <img
        src="/progress-shape.png"
        className=" absolute p-3 z-10 -bottom-8 right-0 object-contain w-full h-full"
        alt="Hero Image"
      />
      <img
        src="/heroImage.png"
        className=" absolute z-10 object-cover w-full h-full"
        alt="Hero Image"
      />
    </div>
  );
};

export default ImageWrap;
