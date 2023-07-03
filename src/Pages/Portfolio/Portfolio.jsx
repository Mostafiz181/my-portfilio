import React from "react";
import "./Portfolio.css";
import port1 from "../../assets/p1.png"
// import port2 from "../../assets/p2.png"
import port3 from "../../assets/p3.png"
import port4 from "../../assets/p4.png"
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="banner py-3">
      <div className="img h-[]">
        {/* <img src={portfolioImg} alt="" /> */}
        <div className="overlay">
          <div className="p-main">
            <h2 className="text-white text-6xl p-title mt-5">Portfolio </h2>
            <p className="text-white p-text text-2xl">These are done by me</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
            <div className="card w-full bg-base-100 shadow-xl h-[550px]">
              <figure>
                <img
                  className="h-[300px]"
                  src={port1}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">
                  Foodies and Goodies
                  
                </h2>
                <p>Its a Foodies and Goodies Restaurant website. Where user choose any kind of recipe. </p>
                <div className="card-actions justify-start">
                 <Link to="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Mostafiz181"> <div className="badge badge-outline">Client-repo</div></Link>
                  <Link to="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-Mostafiz181"><div className="badge badge-outline">Server-repo</div></Link>
                 <Link to="https://the-chef-recipe-client.web.app/"> <div className="badge badge-outline">Live Preview</div></Link>
                </div>
              </div>
            </div>


            <div className="card w-full bg-base-100 shadow-xl h-[550px]">
              <figure>
                <img
                   className="h-[300px]"
                  src={port3}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">
                 Shayaan's Toy
                 
                </h2>
                <p>It's a Toy Market Place website. Here user buy their favorite toys by category.</p>
                <div className="card-actions justify-start">
                  <Link to="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Mostafiz181"><div className="badge badge-outline">Client-repo</div></Link>
                 <Link to="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Mostafiz181"> <div className="badge badge-outline">Server-repo</div></Link>
                  <Link to="https://toy-firebase-auth.web.app/"><div className="badge badge-outline">Live Preview</div></Link>
                </div>
              </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl h-[550px]">
              <figure>
                <img
                   className="h-[300px]"
                  src={port4}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl">
                  Music Hunt
                  
                </h2>
                <p>Its a Music Learning School website. Here user can buy their music instrument course in their summer vacation.</p>
                <div className="card-actions justify-start">
                  <Link to="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Mostafiz181"><div className="badge badge-outline">Client-repo</div></Link>
                  <Link to="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Mostafiz181"><div className="badge badge-outline">Server-repo</div></Link>
                 <Link to="https://music-learning-auth.web.app/"> <div className="badge badge-outline">Live Preview</div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
