import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
const Contact: React.FC = () => {
  return (
    <div className="pb-6 mx-3 md:mx-8">
      <h2 className="text-3xl font-semibold mb-6 mt-4 text-center flex flex-col items-center dark:text-themecolor-white">
        Contact
        <div className="w-[120px] h-[3px] bg-themecolor-gold rounded-full" />
      </h2>
      <div className="border-2 border-slate-800  rounded-md overflow-hidden my-8  shadow-[0_0_20px_1px_rgba(0,0,0,0.6)] dark:shadow-[0_0_20px_1px_rgba(255,255,255,0.6)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31161.94730152567!2d74.94487515687797!3d12.500018749763827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba482155de6aad1%3A0x3a07d5464844020a!2sKasaragod%2C%20Kerala!5e0!3m2!1sen!2sin!4v1770818473243!5m2!1sen!2sin"
          width={"100%"}
          height={"400px"}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="dark:invert dark:sepia rounded-[10px]"
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-evenly">
        {/* Contact Info */}
        <div className="space-y-3 flex-1 lg:flex-none xl:flex-1">
          <h2 className="text-xl font-semibold mb-6 mt-4 text-center flex flex-col items-start dark:text-themecolor-white">
            Contact Info
            <div className="w-[120px] h-[3px] bg-themecolor-gold rounded-full" />
          </h2>
          <div className="flex ">
            <MdAddIcCall
              size={22}
              className="mt-[7px] dark:text-themecolor-white"
            />
            <div className="ml-3">
              <p className="text-lg font-medium dark:text-themecolor-white">
                Call Me
              </p>
              <p className="dark:text-themecolor-white">(+91) 9895086660</p>
            </div>
          </div>
          <div className="flex">
            <SiGmail
              size={22}
              className="mt-[7px] dark:text-themecolor-white"
            />
            <div className="ml-3">
              <p className="text-lg font-medium dark:text-themecolor-white">
                E-mail
              </p>
              <p className="dark:text-themecolor-white">
                nitheshkumar0612@gmail.com
              </p>
            </div>
          </div>
          <div className="flex">
            <FaLocationDot
              size={22}
              className="mt-[7px] dark:text-themecolor-white"
            />
            <div className="ml-3">
              <p className="text-lg font-medium dark:text-themecolor-white">
                Location
              </p>
              <p className="dark:text-themecolor-white">Kasaragod, Kerala</p>
            </div>
          </div>
        </div>
        {/* Form section */}
        <div className="flex-1 xl:flex-1 lg:flex-none lg:w-[40%] md:mt-0 mt-10">
          <form action="" className="space-y-4">
            <div className=" ">
              <label
                htmlFor="name"
                className="text-lg dark:text-themecolor-gold "
              >
                Hello
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full h-full border-2 border-slate-600 p-2 bg-transparent rounded-lg mt-[4px] dark:text-color-5"
              />
            </div>
            <div className=" ">
              <label
                htmlFor="email"
                className="text-lg dark:text-themecolor-gold"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full h-full border-2 border-slate-600 p-2 bg-transparent rounded-lg mt-[4px] dark:text-color-5"
              />
            </div>
            <div className=" ">
              <label
                htmlFor="message"
                className="text-lg dark:text-themecolor-gold"
              >
                Your Message
              </label>
              <textarea
                name="message"
                required
                className="w-full h-full border-2 border-slate-600 p-2 bg-transparent rounded-lg mt-[4px] dark:text-color-5"
              />
            </div>
            <div className="flex items-end justify-center md:justify-end">
              <button
                type="submit"
                className="flex justify-center items-center bg-themecolor-gold p-3 rounded-lg"
              >
                <FaLocationArrow size={20} className="mr-1" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
