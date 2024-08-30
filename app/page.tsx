import Image from "next/image";
import SignupInput from "./component/SignupInput";
import SignupButton from "./component/SignupButton";
import Divider from "./component/Divider";
import Slot_1 from "./component/Slot_1";
import Slot_2 from "./component/Slot_2";
import Slot_3 from "./component/Slot_3";
import Slot_4 from "./component/Slot_4";
import Faq from "./component/Faq";
import { faqs } from "./mock";
import Button from "./component/Button";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="relative w-full h-2/3 bg-[url('/images/hero.png')] bg-no-repeat bg-cover ">
      <div className="bg-black lg:bg-opacity-70 h-full w-full ">
        <nav className="p-12 flex justify-between items-center">
          <Image
            src={"/images/logo.png"}
            width={`100`}
            height={`100`}
            alt={"Picture of the author"}
          />
          <Button
            style="h-full w-[45px] flex bg-[#E50914] rounded-sm px-12 py-1 h-10 justify-center items-center text-white mt-4 active:bg-red-500"
            href="signIn"
            label="Signin"
          />
        </nav>
        {/* Signup Email */}
        <div className="flex justify-center ">
          <div className="self-center w-full lg:max-w-lg py-12 px-2 flex-col flex justify-center">
            <p className="text-white lg:text-5xl text-2xl max-sm:px-12 text-center font-semibold">
              Unlimited movies, TV shows and more.
            </p>
            <p className="text-white lg:text-lg text-sm max-sm:px-12 text-center py-3">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="hidden lg:block text-white lg:text-sm text-2xl max-sm:px-12 text-center py-3">
              Ready to watch? Enter your email to create or restart your
              memebership.
            </p>
            <div className=" flex w-full self-center px-5 sm:px-12  md:px-32 lg:px-0 max-sm:py-3 overflow-clip">
              <SignupInput
                id="signup_mail"
                type={"email"}
                label="Email Address"
              />
              <SignupButton />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      {/* Enjoy your TV */}
      <Slot_1 />
      <Divider />
      {/* Downloading Movie */}
      <Slot_2 />
      <Divider />
      {/* Watch Every Where */}
      <Slot_3 />
      <Divider />
      {/* Kids Poster*/}
      <Slot_4 />
      <Divider />

      {/* FAQ */}
      <div className="bg-black flex flex-col px-6 sm:px-8 py-12 justify-center items-center">
        <p className="text-center text-2xl  text-white font-semibold pb-10">
          Frequently Asked Questions
        </p>
        {faqs?.map((faq) => (
          <Faq question={faq.que} ans={faq.ans} />
        ))}
      </div>

      {/* Signup Email */}
      <div className="flex justify-center flex-col w-full bg-black">
        <p className="hidden lg:block text-white lg:text-sm text-2xl max-sm:px-12 text-center py-3">
          Ready to watch? Enter your email to create or restart your
          memebership.
        </p>
        <div className=" flex self-center w-full md:w-2/3 px-6 lg:w-2/4 lg:px-6 py-4 overflow-clip">
          <SignupInput id="signup_mail" type={"email"} label="Email Address" />
          <SignupButton />
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
}
