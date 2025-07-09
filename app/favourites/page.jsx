import { NewspaperIcon } from "lucide-react";
import FavNewsList from "./_components/FavNewsList";

const page = () => {
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <div className="mx-auto px-4 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl my-[8rem] text-center">
        <h1>Favourites</h1>
        <p className="text-base sm:text-lg font-normal mt-4">
          We have got you favourites
        </p>
      </div>
      <FavNewsList />
    </div>
  );
};

export default page;