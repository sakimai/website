"use client";

import { Grand_Hotel } from "next/font/google";

import { useRouter } from "next/navigation";

const grandHotel = Grand_Hotel({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between py-10 px-10 z-10">
      <span className={` text-3xl ${grandHotel.className}`}>Saki imai</span>
      <div className="flex space-x-7">
        <button onClick={() => router.push("/")}>
          <span>Home</span>
        </button>
        <button onClick={() => router.push("/aboutMe")}>
          <span>About Me</span>
        </button>
        <button onClick={() => router.push("/contact")}>
          <span>Contact</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
