import BannerIcon1 from "./icons/BannerIcon1";
import BannerIcon2 from "./icons/BannerIcon2";
import BannerIcon3 from "./icons/BannerIcon3";

const Banner = () => {
  return (
    <div className="container flex items-center justify-center gap-32 h-[350px] mx-auto bg-primary/30 my-16">
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
  );
};

export default Banner;
