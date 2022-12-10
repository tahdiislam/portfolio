import React from "react";
import img from "../../assets/Tahdi-Islam.jpg";

const Footers = () => {
  return (
    <div>
      <section class="bg-black">
        <div class="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 class="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
            <span class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              {" "}
              Tahdi
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                {" "}
                Islam
              </span>{" "}
            </span>
          </h1>
          <div class="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <p className="font-medium">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>
      </section>

      <hr class="text-white mx-5" />
      <footer class="bg-black pb-5">
        <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-teal-300 sm:justify-start">
              <img class="rounded-full" src={img} width="40" height="40" />
            </div>

            <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              © Copyright 2022 Tahdi Islam
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
