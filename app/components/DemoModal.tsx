"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";

type DemoModalProps = {
  onToggleModal: () => void;
};

interface Formdata {
  name: string;
  email: string;
  phone: string;
}

function DemoModal({ onToggleModal }: DemoModalProps) {
  const [formData, setFormData] = useState<Formdata>({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form data :", formData);

    // clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setSubmitted(true);
  }
  return (
    // overlay
    <div className=" fixed inset-0 backdrop-blur-lg bg-black/50 flex items-center justify-center">
      <div className=" relative h-[80%] w-[80%] sm:h-120 sm:w-120 bg-indigo-50 px-5 py-10">
        <h2 className="text-center font-semibold sm:text-2xl text-xl text-indigo-800">
          Upgrade Your Fleet
        </h2>
        <button className="cursor-pointer absolute sm:top-5 top-2  right-5 text-2xl text-indigo-900">
          <IoClose onClick={onToggleModal} />
        </button>
        {submitted ? (
          <p className=" text-green-800  h-full flex items-center flex-col mt-5">
            <FaRegSmile className="sm:text-[4rem] text-[2rem] " />
            <span className="text-sm sm:text-xl mt-4">
              Thanks! We will contact you soon
            </span>
          </p>
        ) : (
          <form
            action=""
            className="flex flex-col gap-y-2 sm:gap-y-5 sm:items-center sm:mt-10"
            onSubmit={handleSubmit}
          >
            <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center">
              <label className="text-sm sm:text-base sm:w-[20%]">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="shadown-sm border-2 text-sm placeholder:text-sm px-2 py-0.5 sm:py-2  focus:outline-none focus:ring -inset-1 focus:ring-indigo-200 border-indigo-200 rounded-sm w-full "
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>{" "}
            <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center">
              <label className="text-sm sm:text-base sm:w-[20%]">Email</label>
              <input
                name="email"
                type="mail"
                placeholder="Enter your name"
                className="shadown-sm border-2 text-sm placeholder:text-sm px-2 py-0.5  sm:py-2 focus:outline-none focus:ring -inset-1 focus:ring-indigo-200 border-indigo-200 rounded-sm w-full "
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center">
              <label className="text-sm sm:text-base sm:w-[20%]">
                {" "}
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Enter your name"
                className="shadown-sm border-2 text-sm placeholder:text-sm px-2 py-0.5 sm:py-2 focus:outline-none focus:ring -inset-1 focus:ring-indigo-200 border-indigo-200 rounded-sm w-full "
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <button
              className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-sm w-full sm:w-[50%]"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
export default DemoModal;
