"use client";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    emailjs.send(
      "service_owu59ow",
      "template_bmvz7wp",
      formData,
      "OADCW-qxOW27N6XDx"
    );

    toast.success("Email sent successfully!");
  };

  return (
    <div className="h-full bg-primary/30 lg:mt-5">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text  */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                name="name"
                id="name"
                placeholder="name"
                className="input capitalize"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                name="email"
                id="email"
                type="email"
                placeholder="email"
                className="input"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <input
              name="subject"
              id="subject"
              placeholder="subject"
              className="input"
              onChange={handleChange}
              value={formData.subject}
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea"
              onChange={handleChange}
              value={formData.message}
            />
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
