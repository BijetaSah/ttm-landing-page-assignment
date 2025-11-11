"use client";

import Image from "next/image";
import { useState } from "react";

interface Formdata {
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  message: string;
}
function Contact() {
  const [formData, setFormData] = useState<Formdata>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
      companyName: "",
      message: "",
    });
  }
  return (
    <section className="lg:px-20 p-5 lg:py-15 bg-stone-50 shadow-sm flex flex-col items-center ">
      <h2 className="text-indigo-900 lg:text-4xl text-2xl font-semibold text-center mb-5">
        Get in touch
      </h2>
      <p className="text-center">
        Our team will help you find the right fleet solution for your business.
        Fill out the form and we’ll get back to you within 24 hours.
      </p>
      <form
        action=""
        className="flex flex-col gap-y-2 sm:gap-y-5 sm:items-center sm:mt-10 px-5 w-[40rem] "
        onSubmit={handleSubmit}
      >
        <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center sm:gap-x-4">
          <label className="text-sm sm:text-base sm:w-[30%]">Name</label>
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
        <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center sm:gap-x-4">
          <label className="text-sm sm:text-base sm:w-[30%]">Email</label>
          <input
            name="email"
            type="mail"
            placeholder="Enter your email"
            className="shadown-sm border-2 text-sm placeholder:text-sm px-2 py-0.5  sm:py-2 focus:outline-none focus:ring -inset-1 focus:ring-indigo-200 border-indigo-200 rounded-sm w-full "
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center sm:gap-x-4">
          <label className="text-sm sm:text-base sm:w-[30%]">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="shadown-sm border-2 text-sm placeholder:text-sm px-2 py-0.5 sm:py-2 focus:outline-none focus:ring -inset-1 focus:ring-indigo-200 border-indigo-200 rounded-sm w-full "
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        {/* company name */}
        <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center sm:gap-x-4">
          <label className="text-sm sm:text-base sm:w-[30%]">
            Company Name
          </label>
          <input
            name="companyName"
            type="text"
            placeholder="Enter your company name"
            className="shadown-sm border-2 text-sm placeholder:text-sm px-2 py-0.5 sm:py-2 focus:outline-none focus:ring -inset-1 focus:ring-indigo-200 border-indigo-200 rounded-sm w-full "
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-y-1 w-full sm:items-center sm:gap-x-4">
          <label className="text-sm sm:text-base sm:w-[30%]">Message</label>
          <textarea
            name="message"
            className="shadown-sm border-2 text-sm placeholder:text-sm px-2 py-0.5 sm:py-2 focus:outline-none focus:ring -inset-1 focus:ring-indigo-200 border-indigo-200 rounded-sm w-full resize-none h-[5rem] "
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          className="text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg w-full sm:w-[50%]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
export default Contact;
