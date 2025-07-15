import FavTopSection from "./_components/FavTopSection";
import FavContent from "./_components/FavContent";

export default function Page() {
  return (
    <div className="my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8">
      <FavTopSection />
      <FavContent />
    </div>
  );
}