import Image from "next/image";
import SignupInput from "./component/SignupInput";
import SignupButton from "./component/SignupButton";
import Divider from "./component/Divider";
import Faq from "./component/Faq";
import { faqs } from "./mock";
import Button from "./component/Button";
import Footer from "./footer/page";
import { top_ten_movies } from "@/public/movies";
import React from "react";
import HomeSlider from "./component/HomeSlider";
import Slot_5 from "./component/Slot_5";

export default function Home() {
  return (
    <div className="relative w-full h-3/4 bg-[url('/images/hero.png')] bg-no-repeat bg-cover">
      <div className="bg-black bg-opacity-70 h-full w-full ">
        <nav className="p-3 flex justify-between items-center lg:px-52">
          <img src={"/images/logo.png"} alt={"Logo"} className="h-6 md:h-8" />
          <Button
            style="h-8 flex items-center justify-center text-sm bg-[#E50914] rounded-sm px-4 text-white active:bg-red-500"
            href="signIn"
            label="Signin"
          />
        </nav>

        {/* Signup Email */}
        <div className="flex justify-center items-center h-full">
          <div className="self-center w-full lg:max-w-lg py-12 px-2 flex-col flex justify-center">
            <p className="text-white lg:text-5xl text-2xl max-sm:px-12 text-center font-semibold">
              Unlimited movies, TV shows and more.
            </p>
            <p className="text-white lg:text-lg text-sm max-sm:px-12 text-center py-3">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="hidden lg:block text-white lg:text-sm text-2xl max-sm:px-12 text-center py-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col md:flex-row w-full self-center px-5 sm:px-12 md:px-32 lg:px-0 max-sm:py-3 overflow-clip">
              <SignupInput
                id="signup_mail"
                type={"email"}
                label="Email Address"
              />
              <SignupButton title={"Get Started"} />
            </div>
          </div>
        </div>
      </div>
      <HomeSlider
        title="Top Trending"
        list={[...top_ten_movies, ...top_ten_movies]}
      />
      <Slot_5  />

      {/* FAQ */}
      <div className="bg-black flex flex-col px-6 sm:px-8 py-12 justify-center items-center">
        <p className="text-center text-2xl text-white font-semibold pb-10">
          Frequently Asked Questions
        </p>
        {faqs?.map((faq) => (
          <Faq key={faq.que} question={faq.que} ans={faq.ans} />
        ))}
      </div>

      {/* Signup Email */}
      <div className="flex justify-center flex-col w-full bg-black">
        <p className="hidden lg:block text-white lg:text-sm text-2xl max-sm:px-12 text-center py-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex self-center w-full md:w-2/3 px-6 lg:w-2/4 lg:px-6 py-4 overflow-clip">
          <SignupInput id="signup_mail" type={"email"} label="Email Address" />
          <SignupButton title={"Get Started"} />
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
}
