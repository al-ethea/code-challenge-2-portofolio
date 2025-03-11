"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

import { FiDownload } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const testimonials = [
    {
      job: "Web Developer",
      message:
        "I absolutely love the work done! The project was delivered on time and met all expectations.",
    },
    {
      job: "UI/UX Designer",
      message:
        "A fantastic experience! The attention to detail was impeccable, and I couldn't be happier with the outcome.",
    },
    {
      job: "Project Manager",
      message:
        "Amazing work and great communication. Would love to work together again on future projects.",
    },
  ];
  const [person, setPerson] = useState([]);

  const handleGetPerson = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=3");
      setPerson(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetPerson();
  }, []);

  return (
    <>
      <div className="bg-primary min-h-screen  w-screen  p-4 pt-16">
        {/* Profile and Details Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Section */}
          <div className="md:w-1/3 mx-10 mt-14 border-[2px] rounded-3xl p-2 py-4 shadow-xl space-y-6">
            <div className="avatar flex justify-center pt-10">
              <div className="rounded-full">
                {/* changed pic */}
                <Image
                  src="/images/AletheaAzkaAmaliaColorPhotograph-resized.jpg"
                  alt="profile"
                  height={80}
                  width={80}
                />
              </div>
            </div>

            <div className="text-white space-y-1 ibm-plex-mono-regular flex flex-col justify-center">
              <h1 className="text-3xl text-center">Azka</h1>
              <p className="text-base text-center">Purwadhika JCWD Student</p>
            </div>
            <div className="mx-3 mt-4 space-y-3 ibm-plex-mono-regular">
              <div className="pl-[13px] flex items-center space-x-6">
                <GoMail className="text-[16px] text-accent" />
                <h1 className="text-white text-sm">alethea.azka3@gmail.com</h1>
              </div>
              <div className="pl-[13px] flex items-center space-x-6">
                <IoLocationOutline className="text-[18px] text-accent" />
                <h1 className="text-white text-sm">Indonesia</h1>
              </div>
              <div className="pl-[13px] flex items-center space-x-6">
                <FiBriefcase className="text-[18px] text-accent" />
                <h1 className="text-white text-sm">Fulltime / Freelance</h1>
              </div>
              <div className="pl-[13px] flex items-center space-x-6">
                <GoLink className="text-[18px] text-accent" />
                <h1 className="text-white text-sm">www.alethea03.com</h1>
              </div>
              <div className="space-x-3 py-2 flex justify-center">
                <div className="badge rounded-lg bg-accent text-[#292F36] text-[15px]">
                  HTML
                </div>
                <div className="badge rounded-lg bg-accent text-[#292F36] text-[15px]">
                  CSS
                </div>
                <div className="badge rounded-lg bg-accent text-[#292F36] text-[15px]">
                  JS
                </div>
                <div className="badge rounded-lg bg-accent text-[#292F36] text-[15px]">
                  REACT
                </div>
              </div>
            </div>
            <div className="py-6 flex justify-center">
              <button className="btn ibm-plex-mono-regular text-lg bg-white text-[#292F36] rounded-full hover:text-white hover:bg-[#292F36]">
                Download CV
                <FiDownload className="text-base" />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-2/3 mx-10 mt-14 text-left ibm-plex-mono-regular">
            <h1 className="text-accent text-[15px]">&lt;h1&gt;</h1>
            <div className="pl-8">
              <h1 className="text-white text-[26px]">
                Hi, I'm <span className="text-accent">Azka</span>,
              </h1>
              <h1 className="text-white text-[26px]">
                a Full Stack Developer in Progress
              </h1>
            </div>
            <h1 className="text-accent text-[15px]">&lt;/h1&gt;</h1>

            <div className="mt-7">
              <h1 className="text-accent text-[12px]">&lt;p&gt;</h1>
              <div className="pl-8">
                <h1 className="text-white text-[15px] leading-relaxed">
                  I studied Business Information System in University of
                  Wollongong and am currently studying Web Development at
                  Purwadhika. If you're hiring a fresh graduate Programmer,
                </h1>
              </div>
              <h1 className="text-accent text-[12px]">&lt;/p&gt;</h1>
            </div>

            <div className="mt-5 pb-5 flex justify-center gap-3">
              <h1 className="text-accent text-[30px] text-center">Email Me</h1>
              <button className="btn bg-[#43454D] text-accent w-[50px] h-[50px] rounded-full hover:text-white">
                <GoMail className="text-lg" />
              </button>
            </div>
            <div className="flex justify-center">
              <div className="border rounded-3xl w-52 p-8 mt-2 bg-secondary border-none shadow-md space-y-8">
                <div className="flex items-center">
                  <h1 className="text-5xl text-accent">7</h1>
                  <h1 className="pl-3 text-white">Programming Languages</h1>
                </div>
                <div className="flex items-center">
                  <h1 className="text-5xl text-accent">5</h1>
                  <h1 className="pl-3 text-white">Development Tools</h1>
                </div>
                <div className="flex items-center">
                  <h1 className="text-5xl text-accent">5</h1>
                  <h1 className="pl-3 text-white">Years of Experience</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mx-10 mt-16 ibm-plex-mono-regular">
          {/* Title Section */}
          <div className="border-[2px] border-[#79f2ce] rounded-3xl shadow-xl p-2 mx-auto mb-8 max-w-md">
            <h1 className="ibm-plex-mono-regular text-3xl text-center text-white">
              About Me
            </h1>
          </div>

          {/* Content Section */}
          <div className="text-left border-[1px] rounded-3xl p-5 mx-auto max-w-2xl">
            <p className="text-accent text-[12px]">&lt;p&gt;</p>
            <h1 className="text-accent text-[26px] mb-4">Hello!</h1>
            <p className="text-[15px] mb-4 text-white">
              My name is Azka and I specialize in web development that utilizes
              HTML, CSS, JS, and REACT etc.
            </p>
            <p className="mb-4 text-white">
              I also learned a variety of programming languages in university,
              such as Python, Java, PHP, and SQL. Having worked in a group
              project several times, I am experienced in utilizing project
              management tools, such as Taiga.
            </p>
            <p className="mb-4 text-white">
              Other than that, I possess proficient skills in English and
              Japanese.
            </p>
            <p className="mb-2 text-white">
              When I'm not coding, I like to listen to my favorite bands and
              read mangas.
            </p>
            <p className="text-accent text-[12px]">&lt;/p&gt;</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8 mb-16">
          {/* Title and Subtitle */}
          <div className="text-center">
            <h1 className="text-accent text-2xl">Skills</h1>
            <h1 className="text-sm mt-2 text-white">
              I am striving to always learn and explore new things
            </h1>
          </div>

          {/* Icons Section */}
          <div className="space-y-4 mt-6">
            {/* Row 1: HTML and CSS */}
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="text-white relative h-10 w-10 mx-auto">
                  <Image
                    src="/images/html-1.svg"
                    alt="HTML"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-white">HTML</p>
              </div>
              <div className="text-center">
                <div className="text-white relative h-10 w-10 mx-auto">
                  <Image
                    src="/images/css-3.svg"
                    alt="CSS"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-white">CSS</p>
              </div>
            </div>

            {/* Row 2: JS and REACT */}
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="text-white relative h-10 w-10 mx-auto">
                  <Image
                    src="/images/javascript-1.svg"
                    alt="JS"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-white">JS</p>
              </div>
              <div className="text-center">
                <div className="text-white relative h-10 w-10 mx-auto">
                  <Image
                    src="/images/react-2.svg"
                    alt="REACT"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-white">REACT</p>
              </div>
            </div>

            {/* Row 3: PHP and JAVA */}
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="text-white relative h-10 w-10 mx-auto">
                  <Image
                    src="/images/xampp.svg"
                    alt="PHP"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-white">PHP</p>
              </div>
              <div className="text-center">
                <div className="text-white relative h-10 w-10 mx-auto">
                  <Image
                    src="/images/java-14.svg"
                    alt="JAVA"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-white">JAVA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Works Section */}
        <div className="mt-8 mb-16">
          {/* Centered Title and Subtitle */}
          <div className="text-center">
            <h1 className="text-accent text-2xl">Works</h1>
            <h1 className="text-sm mt-2 text-white">
              Projects that I participated in
            </h1>
          </div>

          {/* Projects Section */}
          <div className="mt-6">
            {/* Work 1: ActiveAxis */}
            <div>
              <div className="py-3 text-center">
                <h1 className="text-lg text-white">ActiveAxis</h1>
                <h1 className="text-sm text-white">
                  Fitness Tracking Mobile App
                </h1>
              </div>

              {/* Carousel with Centered Images */}
              <div className="carousel max-w-2xl mx-auto flex justify-center items-center">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="/images/activeaxis.png"
                    className="max-w-full max-h-96"
                  />
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="/images/activeaxis2.png"
                    className="max-w-full max-h-96"
                  />
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                  <img
                    src="/images/activeaxis3.png"
                    className="max-w-full max-h-96"
                  />
                </div>
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                <a href="#slide1" className="btn btn-xs">
                  1
                </a>
                <a href="#slide2" className="btn btn-xs">
                  2
                </a>
                <a href="#slide3" className="btn btn-xs">
                  3
                </a>
              </div>
              <div>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Situation</span>: For my final
                  year project, we were tasked to create a mobile app that can
                  track the user's exercise progress. ActiveAxis integrates
                  various data sources, such as step count, heart rate, and
                  calories burned to provide users with a comprehensive overview
                  of their fitness journey.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Task</span>: The goal was to
                  develop a cross-platform app (iOS/Android) that tracks
                  real-time data, integrates with fitness wearables, and
                  provides detailed analytics to help users achieve their
                  fitness goals.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Action</span>: I used React
                  Native for cross-platform development, Node.js for the
                  backend, and FireBase for data storage. The app features
                  activity tracking, a personalized dashboard, and integration
                  with wearable devices, with a responsive and visually
                  appealing interface built using Tailwind CSS.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Result</span>: The app
                  launched successfully, reaching 10,000+ downloads and
                  maintaining an average rating of 4.7 stars. Users reported
                  higher engagement and improved fitness tracking, with a
                  noticeable increase in workout consistency.
                </p>
              </div>
              <hr className="border-t-2 border-accent mx-auto w-[80%] my-6" />
            </div>

            {/* Work 2: Point of Sales Web App */}
            <div>
              <div className="py-3 text-center">
                <h1 className="text-lg text-white">Point of Sales Web App</h1>
              </div>
              <div className="carousel max-w-2xl mx-auto flex justify-center items-center">
                <div id="pos-app1" className="carousel-item relative w-full">
                  <img
                    src="/images/pos-app1.png"
                    className="max-w-full max-h-96"
                  />
                </div>
                <div id="pos-app2" className="carousel-item relative w-full">
                  <img
                    src="/images/pos-app2.png"
                    className="max-w-full max-h-96"
                  />
                </div>
                <div id="pos-app3" className="carousel-item relative w-full">
                  <img
                    src="/images/pos-app3.png"
                    className="max-w-full max-h-96"
                  />
                </div>
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                <a href="#pos-app1" className="btn btn-xs">
                  1
                </a>
                <a href="#pos-app2" className="btn btn-xs">
                  2
                </a>
                <a href="#pos-app3" className="btn btn-xs">
                  3
                </a>
              </div>
              <div>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Situation</span>: The Point of
                  Sales (POS) Web App is designed to streamline and enhance the
                  sales process for small to medium-sized businesses by
                  providing an intuitive and efficient platform for managing
                  sales transactions and inventory.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Task</span>: The goal was to
                  build a user-friendly POS system that allows businesses to
                  process sales, track inventory, and generate reports, all in a
                  responsive web interface.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Action</span>: I developed the
                  app using React for the frontend and Node.js with Express for
                  the backend. I integrated features like real-time sales
                  tracking, inventory management, and sales reporting, ensuring
                  a seamless user experience across devices.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Result</span>: The app
                  successfully reduced transaction times for users and improved
                  inventory management accuracy. It received positive feedback
                  for its ease of use and reliability, enhancing business
                  operations for clients.
                </p>
              </div>
              <hr className="border-t-2 border-accent mx-auto w-[80%] my-6" />
            </div>

            {/* Work 3: Instagram UI */}
            <div className="flex flex-col">
              <div className="py-3 text-center">
                <h1 className="text-lg text-white">Instagram UI</h1>
              </div>
              <div className="carousel max-w-2xl mx-auto flex justify-center items-center">
                <div id="insta1" className="carousel-item  w-full">
                  <img
                    src="/images/insta.png"
                    className="max-w-full max-h-96"
                  />
                </div>
              </div>
              <div className="pt-8">
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Situation</span>: The
                  Instagram UI project was created to replicate the look and
                  feel of the popular social media platform, focusing on user
                  interface design and interaction patterns.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Task</span>: The goal was to
                  design a responsive and visually appealing Instagram feed
                  clone, aimed at improving design and front-end development
                  skills.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Action</span>: I used React
                  for building the interface and Tailwind CSS for styling to
                  ensure a smooth and responsive layout. The project involved
                  designing components like posts, comments, and navigation
                  bars, following Instagram’s design guidelines.
                </p>
                <p className="text-xs text-justify m-3 mx-10 text-white">
                  <span className="font-semibold">Result</span>: The project was
                  successfully completed with an intuitive UI that mirrors
                  Instagram's core features. It helped improve my front-end
                  development and UI design skills, receiving positive feedback
                  for its clean and modern design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="testimonial-section py-16 bg-[#1A1E23] max-w-screen">
        <h1 className="text-accent text-center text-2xl font-semibold pb-8">
          Testimonials
        </h1>
        {!person || person.length === 0 ? (
          <div className="flex justify-center items-center mb-8">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ) : (
          <div className="space-y-8">
            {person.map((personData, index) => (
              <div
                key={index}
                className="testimonial-card text-center text-white"
              >
                <img
                  src={personData.picture.large}
                  alt={personData.name.first}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-cp-secondary">
                  {personData.name.first} {personData.name.last}
                </h3>
                <p className="text-md font-semibold text-cp-font mb-2">
                  {testimonials[index]?.job}
                </p>
                <p className="text-sm italic text-cp-font mb-4 mx-6">
                  "{testimonials[index]?.message}"
                </p>
                <hr className="border-t-2 border-accent mx-auto w-[80%] my-4" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Me Section */}
      <div className="bg-[#1A1E23] h-40 flex flex-col justify-center items-center">
        {/* Centered Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-accent text-2xl">Contact Me</h1>
          <h1 className="text-sm mt-2 text-white">
            I am available for freelance work
          </h1>
        </div>

        {/* Centered Buttons */}
        <div className="space-x-6 pt-4">
          <button className="btn bg-[#43454D] text-accent w-[50px] h-[50px] rounded-full hover:text-white">
            <FaGithub className="text-3xl" />
          </button>
          <button className="btn bg-[#43454D] text-accent w-[50px] h-[50px] rounded-full hover:text-white">
            <FaDiscord className="text-3xl" />
          </button>
          <button className="btn bg-[#43454D] text-accent w-[50px] h-[50px] rounded-full hover:text-white">
            <FaInstagram className="text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
}
