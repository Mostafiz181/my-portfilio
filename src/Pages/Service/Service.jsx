import React from "react";
import "./Service.css";
import shape from "../../assets/about-shape.png";
import { FaDiceD6, FaElementor, FaIdCard } from "react-icons/fa";

const Service = () => {
  return (
    <div className="">
      <div className="bg-[#edf4f9] py-20 mt-8 service-part">
        <img className="shape-img" src={shape} alt="" />
        <div className="service-title">
          <h1 className="text-6xl service-head">Services</h1>
          <h3 className="text-2xl service-sub-header">My Services</h3>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-3 mt-8">
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="mt-5 ">
                <FaIdCard className="font-icon"></FaIdCard>
              </figure>
              <div className="card-body text-white ">
                <p className="font-bold text-2xl service-name ">LAYOUT DESIGN</p>
                <p>
                  I'm passionate with any kind of layout design. I always design
                  unique layout for my client and company. I always focus on eye
                  catching layout and it must be user friendly.
                </p>
              </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="mt-5 ">
                <FaElementor className="font-icon"></FaElementor>
              </figure>
              <div className="card-body text-white">
                <p className="font-bold text-2xl service-name">WEB DESIGN</p>
                <p>
                  I'm passionate with any kind of layout design. I always design
                  unique layout for my client and company. I always focus on eye
                  catching layout and it must be user friendly.
                </p>
              </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="mt-5 ">
                <FaDiceD6 className="font-icon"></FaDiceD6>
              </figure>
              <div className="card-body text-white">
                <p className="font-bold text-2xl service-name">
                  WEB DEVELOPMENT
                </p>
                <p>
                  I'm passionate with any kind of layout design. I always design
                  unique layout for my client and company. I always focus on eye
                  catching layout and it must be user friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
