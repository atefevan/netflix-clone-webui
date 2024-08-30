import React from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import Image from "next/image";
import Footer from "../footer/page";
const SignIn = () => {
  return (
    <div className="relative w-full h-full bg-[url('/images/hero.png')] bg-no-repeat bg-cover">
      <div className="bg-black lg:bg-opacity-70 h-full w-full">
        <nav className="p-12">
          <Image
            src={"/images/logo.png"}
            width={`100`}
            height={`100`}
            alt={"Picture of the author"}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black w-full bg-opacity-70 self-center lg:w-2/5 lg:max-w-lg rounded-md p-12">
            <h2 className="text-white text-4xl font-semibold pb-5">Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input id={"email"} label={"Email"} type={"email"} />
              <Input id={"pass"} label={"Password"} type={"password"} />
              <Button href="profile" label="Signin" />
              <div className="flex justify-between text-xs text-[#B3B3B3]">
                <p className="hover:underline underline-offset-2 cursor-pointer active:text-white">
                  Remember me
                </p>
                <p className="hover:underline underline-offset-2 cursor-pointer active:text-white">
                  Need help ?
                </p>
              </div>
              <p className="text-[#737373] py-5">
                New to netflis?{" "}
                <span className="text-white hover:underline underline-offset-2 cursor-pointer">
                  Sign up now
                </span>
              </p>
              <p className="text-xs text-[#8C8C8C]">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <span className="text-[#0071EB] hover:underline cursor-pointer hover:underline-offset-2">
                  Learn More
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
