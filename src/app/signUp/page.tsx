import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-screen py-8 px-4">
      <div className="flex justify-center mt-10 mb-4">
        <Image
          className=""
          src={"/signin.png"}
          alt="shoes banner"
          width={450}
          height={200}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
          <input
            className="w-80 sm:w-96 px-2 py-2 my-2 border-[1px] border-gray-400 rounded-lg outline-none"
            type="text"
            placeholder="Email Address"
          />
          
          <input
                        className="w-80 sm:w-96 px-2 py-2 my-2 border-[1px] border-gray-400 rounded-lg outline-none"

            type="text"
            placeholder="Password"
          />
      </div>

      {/* ================more============= */}
      <div className="flex justify-center items-center ">
        <div className="flex justify-between items-center text-sm w-80 sm:w-96">
          <div className="items-center flex py-4">
            <input type="checkbox" />
            <span className="text-gray-500 px-2 ">Keep me signed in</span>
          </div>
          <div>
            <span className="text-gray-400">Forgetton password?</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-gray-600 text-center text-[15px]">
          By logging in, you agree to {`Nike's`}{" "}
          <span className="text-gray-500 underline">
            Privacy Policy <br /> and Terms of Use.
          </span>{" "}
        </p>
      </div>

      <div className="flex justify-center">
        <button className="w-96 bg-black text-white py-3 rounded-lg mt-6 mb-3">
          Sign In
        </button>
        <br />
        <br />
      </div>
      <div className="flex justify-center items-center pb-5">
        <span className="text-gray-500">
          Not a member?
          <Link href={"/join"}>
            <span className="text-black underline pl-1"> Join Us.</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
