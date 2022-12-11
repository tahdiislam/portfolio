import React from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";
import img01 from "../../assets/LaptopMart/laptopMart01.png";
import img02 from "../../assets/LaptopMart/laptopMart02.png";
import img03 from "../../assets/LaptopMart/laptopMart03.png";
import Footers from "../Footers/Footers";

const Project01 = () => {
  return (
    <div>
      <Header />
      <div
        id="home"
        className="bg-white py-12 px-4 md:py-48"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%2380877f' fill-opacity='0.11'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "auto",
        }}
      >
        <div className="w-full md:w-1/2 mx-auto flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-10 text-center">Laptop Mart</h1>
          <p className="text-xl mb-10 text-center">
            Multi vendor e-commerce application
          </p>
          <a target="_blank" href="https://laptop-mart-26.web.app/">
            <Button>Live Preview</Button>
          </a>
        </div>
      </div>
      <h1 className="text-5xl font-bold my-8 text-center">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 mb-8">
        <img className="rounded-xl" src={img01} alt="" />
        <img className="rounded-xl" src={img02} alt="" />
        <img className="rounded-xl" src={img03} alt="" />
      </div>
      <div className="px-4 md:px-0">
        <h1 className="text-5xl font-bold my-8 text-center">Details</h1>
        <p className="text-xl mb-10 text-center md:w-1/2 mx-auto">
          Laptop Mart is a multi vendor e-commerce where I seller can sell old
          laptop, a buyer can buy laptop, and the Admin can manage his user and
          all product.
        </p>
        <div className="md:w-1/2 mx-auto flex flex-col items-start mb-10 px-4 md:px-0">
          <h3 className="text-center font-bold text-2xl">Main Feature</h3>
          <ul className="list-disc">
            <li>Seller Dashboard</li>
            <li>Admin DashBoard</li>
            <li>Authentication system</li>
            <li>Payment system</li>
            <li>Advertisement</li>
          </ul>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Project01;
