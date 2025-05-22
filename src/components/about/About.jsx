import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen p-20 ">
      <div className="flex flex-col items-center justify-center mr-20">
        <img
          className="w-100 border-2 border-gray-300 rounded-full mb-10"
          src="azalea.png"
          alt="Founder"
        />
        <h1 className="text-4xl font-bold">Azalea Tang</h1>
        <h2 className="text-2xl font-bold">Founder</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-250">
        <p className="text-xl mb-10">
          Azalea is a 17 year old software engineer and a powerlifter. She is
          the founder of Max AI. She has been lifting for 2 years and
          powerlifting for a few months. Through this short time, she has
          improved her numbers to squat 265, deadlift 295, and bench press 135.
        </p>
        <p className="text-xl">
          Through her experience, she has learned a lot about the science of
          lifting and how to get the most out of your training. She is
          passionate about helping others achieve their goals and is dedicated
          to providing the best possible service to her clients.
        </p>
      </div>
    </div>
  );
};

export default About;
