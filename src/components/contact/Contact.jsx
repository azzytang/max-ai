import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-2">Questions? Reach out to us!</h1>
        <p className="text-xl mb-2">Email: maxai@gmail.com</p>
        <p className="text-xl mb-2">Phone: 123-456-7890</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <form className="flex flex-col items-center justify-center">
          <input
            className="border-2 border-gray-300 rounded-md p-2 w-100 mb-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="border-2 border-gray-300 rounded-md p-2 w-100 mb-2"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="border-2 border-gray-300 rounded-md p-2 w-100 mb-2"
            placeholder="Message"
          />
          <button
            className="bg-blue-500 text-white rounded-md p-2 w-50 mb-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
