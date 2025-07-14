// "use client";

// import React from "react";
// import Link from "next/link";
// import Logo from "@/components/ui/Logo";
// import ThemeToggleButton from "../ui/ThemeToggleButton";
// import Login from "../Login";
// import MenuDropdown from "../MenuDropdown";
// import LanguageButton from "../ui/LanguageButton";
// import { useTranslation } from "react-i18next";

// const Header = () => {

//   const { t } = useTranslation();

//   return (
//     <header>
//       <div className="w-[80vw] mx-auto flex justify-between items-center mt-3">
//         <Logo />

//         <div className="hidden sm:block">
//           <ul className="flex flex-col font-medium flex-row space-x-8">
//             <li>
//               <Link
//                 href="/news"
//                 className="dark:text-text"
//                 aria-current="page"
//               >
//                 {t("news")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/movies"
//                 className="dark:text-text"
//                 aria-current="page"
//               >
//                 {t("movies")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/favourites"
//                 className="dark:text-text"
//                 aria-current="page"
//               >
//                 {t("favourites")}
//               </Link>
//             </li>
//           </ul>
//         </div>

        

//         <div className="flex gap-2 justify-center items-center">
//           <ThemeToggleButton />
//           <LanguageButton />
//           <Login />
//           <div className="block sm:hidden"><MenuDropdown /></div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import Login from "../Login";
import MenuDropdown from "../MenuDropdown";
import LanguageButton from "../ui/LanguageButton";
import { useTranslation } from "react-i18next";
import { Sparkle } from "lucide-react";
import { useDispatch } from "react-redux";
import { insertFavourite } from "@/Redux/slices/favourites";
import toast from "react-hot-toast";
import { AppDispatch } from "@/Redux/store";

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    console.log(data);
    if (data) {
      try {
        const draggedData = JSON.parse(data);
        dispatch(insertFavourite({ type: draggedData.type, item: draggedData.item }));
        toast.success("Added to favourites");
      } catch {
        toast.error("Invalid data dropped");
      }
    }
  };

  return (
    <header>
      <div className="w-[80vw] mx-auto flex justify-between items-center mt-3">
        <Logo />

        <div className="hidden sm:block">
          <ul className="flex flex-col font-medium flex-row space-x-8">
            <li>
              <Link
                href="/news"
                className="dark:text-text"
                aria-current="page"
              >
                {t("news")}
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className="dark:text-text"
                aria-current="page"
              >
                {t("movies")}
              </Link>
            </li>
            <li>
              <Link
                href="/favourites"
                className="dark:text-text"
                aria-current="page"
              >
                {t("favourites")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-3 justify-center items-center">
          {/* Drop to Favourite Icon */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="p-2 border border-yellow-400 rounded-full hover:bg-yellow-100 cursor-pointer transition-all relative group"
            title="Drop news card here to favourite"
          >
            <Sparkle className="text-yellow-500" />
            <span className="absolute top-full mt-1 text-xs text-center text-gray-700 dark:text-gray-300 bg-white dark:bg-black px-2 py-1 rounded shadow-md hidden group-hover:block">
              {t("dropToFav") || "Drop to favourite"}
            </span>
          </div>

          <ThemeToggleButton />
          <LanguageButton />
          <Login />
          <div className="block sm:hidden">
            <MenuDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;