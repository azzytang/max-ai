import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-black h-dvh flex flex-col items-center justify-center text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Transform Your Training</h1>
          <p className="text-xl mb-8">
            Achieve your strength goals with AI-powered programming tailored
            specifically for powerlifters and strength athletes
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
      <div className="bg-black flex flex-col items-center justify-center h-50 p-30 ">
        <h1 className="text-4xl font-bold m-10">Max AI</h1>
        <p className="text-xl">
          Max AI is a platform to generate the best possible fitness program for
          you. We tailor specifcally torwards powerlifters and strength
          athletes. Our goal is to get you to lift the most weight possible.
        </p>
      </div>
    </div>
  );
};

export default Home;
