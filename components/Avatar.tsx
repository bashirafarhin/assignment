"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

const Avatar = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    toast.success("Logged out successfully");
  };

  const user = session?.user;

  return (
    <div
      onClick={handleLogout}
      className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold overflow-hidden cursor-pointer"
    >
      {user?.image ? (
        <Image
          src={user.image}
          alt="user"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      ) : (
        user?.name?.charAt(0).toUpperCase()
      )}
    </div>
  );
};

export default Avatar;