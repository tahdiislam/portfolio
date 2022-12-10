import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  // form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const messageForm = e.target;
    // send email
    emailjs
      .sendForm(
        "service_750cm48",
        "template_n590ilx",
        form.current,
        "nJo2wm41_bEOYKxS5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Ok");
          messageForm.reset();
          toast.success("Message Send successfully")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="py-6 md:py-16 bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%2380877f' fill-opacity='0.11'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="w-3/4 md:w-1/2 mx-auto mb-10">
        <h2 className="text-3xl font-bold text-center mb-8">CONTACT</h2>
        <p className="text-xl text-center">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div class="md:w-1/2 mx-auto flex items-center justify-start bg-white p-10 rounded-lg shadow-lg">
        <div class="mx-auto">
          <form ref={form} onSubmit={handleFormSubmit} class="mt-10">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="relative z-0">
                <input
                  type="text"
                  name="user_name"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your Name
                </label>
              </div>
              <div class="relative z-0">
                <input
                  type="email"
                  name="user_email"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your Email
                </label>
              </div>
              <div class="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="mt-5 rounded-md bg-green-400 hover:bg-green-500 px-10 py-2 text-white shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
