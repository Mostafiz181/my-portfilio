// import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./Banner.css";
import bannerImg from "../../assets/banner img.gif";
import { Link } from "react-router-dom";



const Banner = () => {
  return (
    // <div className="py-5 mt-5 grid md: grid-cols-2 lg: grid-cols-1">
    //   <div className="w-1/2 mt-8">
    //     <h1 className="text-3xl font-bold">Hello !</h1>
    //     <h2 className="text-5xl font-bold mt-2">I'm Mostafizur Rahman</h2>
    //     <TypeAnimation
    //       className="animation text-5xl"
    //       sequence={[
    //         // Same substring at the start will only be typed out once, initially
    //         "A Professional Front-end Developer",
    //         1000,
    //         "A Professional React Developer",
    //         1000,
    //         "A Professional MERN stack Developer",
    //         1000,
    //         "A Professional Web Designer",
    //         1000,
    //       ]}
    //       wrapper="span"
    //       speed={30}
    //       style={{ fontSize: "2em", display: "inline-block" }}
    //       repeat={Infinity}
    //     />

    //     <p className="py-3">I am a skilled and passionate developer specializing in building robust and user-friendly web applications using the React framework. With a solid foundation in JavaScript and front-end development, I have honed my skills in creating dynamic and interactive user interfaces that deliver seamless experiences.</p>

    //     <AwesomeButton className="btn mt-3" type="primary">Download CV</AwesomeButton>
    //     <AwesomeButton className="btn" type="primary">Hire me</AwesomeButton>

    //   </div>

    //   <div className="w-1/2">
    //     <img className="w-full" src={bannerImg} alt="" />

    //   </div>
    // </div>

    <div className="py-5 mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-3 px-3">
      <div className="w-full md:w-full mt-8 md:mt-20">
        <h1 className="text-3xl font-bold">Hello!</h1>
        <h2 className="text-5xl font-bold mt-2">I'm Mostafizur Rahman</h2>
        <TypeAnimation
          className="animation text-5xl"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "A Professional Front-end Developer",
            1000,
            "A Professional React Developer",
            1000,
            "A Professional MERN stack Developer",
            1000,
            "A Professional Web Designer",
            1000,
          ]}
          wrapper="span"
          speed={30}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />

        <p className="py-3">
          I am a skilled and passionate developer specializing in building
          robust and user-friendly web applications using the React framework.
          With a solid foundation in JavaScript and front-end development, I
          have honed my skills in creating dynamic and interactive user
          interfaces that deliver seamless experiences.
        </p>

        <div className="flex flex-col md:flex-row ">
          <Link to="https://drive.google.com/file/d/1mm8CnPoj7HpQrVt2nbEKQJJM4PYR4DWV/view?usp=sharing"><AwesomeButton className="btn btn-cv mt-3 md:mr-3" type="primary">
            Download CV
          </AwesomeButton></Link>
          <AwesomeButton className="btn mt-3" type="primary">
            Hire me
          </AwesomeButton>
        </div>
      </div>

      <div className="w-full md:w-full">
        <img className="w-full " src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
