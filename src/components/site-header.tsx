import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const SiteHeader = () => {
  return (
    <div className="w-full h-16 px-24 flex items-center justify-around gap-8">
      <div className="flex items-center justify-center flex-row gap-4">
        <Image
          src={"/assets/socialpilot-icon.svg"}
          className="h-12 w-14 bg-cover hover:cursor-pointer"
          width={400}
          height={500}
          alt="logo"
        />
        <p>QuizzBased</p>
      </div>

      <div className="flex items-center justify-center gap-4 text-slate-600">
        <Link href={"/features"}>Features</Link>
        <Link href={"/solutions"}>Solutions</Link>
        <Link href={"/resources"}>Resources</Link>
        <Link href={"/pricing"}>Pricing</Link>
      </div>

      <div className="flex items-center justify-center flex-row gap-4">
        <Link
          href={"/login"}
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "py-2 px-3 animate-out hover:bg-slate-100 rounded-none",
          })}
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className={buttonVariants({
            variant: "default",
            size: "lg",
            className:
              "py-2 px-3 animate-out bg-orange-400 hover:bg-orange-500 text-white rounded-none",
          })}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default SiteHeader;
