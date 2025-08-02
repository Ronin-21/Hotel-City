import BannerIcon1 from "./icons/BannerIcon1";
import BannerIcon2 from "./icons/BannerIcon2";
import BannerIcon3 from "./icons/BannerIcon3";

const Banner = () => {
  return (
    <div className="container  h-[350px] mx-auto my-16 bg-[url('/outside-4.png')] bg-cover bg-center relative text-white">
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-32">
        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <BannerIcon1 />
          <p className="mt-3 text-2xl font-bold">Title</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <BannerIcon2 />
          <p className="mt-3 text-2xl font-bold">Title</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <BannerIcon3 />
          <p className="mt-3 text-2xl font-bold">Title</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
