import React from "react";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import logoXl from "../assets/logo-xl.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary pt-8 px-8 sm:pt-12 sm:px-12 md:px-20 md:pt-20  mx-auto w-full mt-3 sm:mt-6 md:mt-10 pb-0 space-y-7">
      <div className="text-center flex flex-col items-center gap-4">
        {/*         <h1 className="text-4xl sm:text-5xl md:text-7xl text-white">
          <span className="font-bold">Keen</span>
          <span className="">Keeper</span>
        </h1> */}
        <Image src={logoXl} alt="KeenKeeper Logo" width={412} height={61} />
        <p className="leading-6 text-white text-sm sm:text-base px-2 sm:px-0">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="font-medium text-xl text-white">Social Links</p>
        <div className="flex gap-3">
          <Link href="https://www.instagram.com">
            <Image
              src={instagramIcon}
              alt="instagram icon"
              width={60}
              height={60}
              className="w-11.5"
            />
          </Link>
          <Link href="https://www.facebook.com">
            <Image
              src={facebookIcon}
              alt="facebook icon"
              width={60}
              height={60}
              className="w-11.5"
            />
          </Link>
          <Link href="https://www.x.com">
            <Image
              src={twitterIcon}
              alt="twiiter/x icon"
              width={60}
              height={60}
              className="w-11.5"
            />
          </Link>
        </div>
      </div>
      <hr className="text-[#fafafa]" />
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-5 items-center pb-6 text-center sm:text-left">
        <p className="text-[#FAFAFA] text-sm sm:text-base">
          &copy; 2026 KeenKeeper. All rights reserved.
        </p>
        <p className="flex flex-wrap justify-center gap-3 sm:gap-5 items-center text-sm sm:text-base">
          <span className="text-[#FAFAFA]">
            <Link href="">Privacy Policy</Link>
          </span>
          <span className="text-[#FAFAFA]">
            <Link href="">Terms of Service</Link>
          </span>
          <span className="text-[#FAFAFA]">
            <Link href="">Cookies</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
