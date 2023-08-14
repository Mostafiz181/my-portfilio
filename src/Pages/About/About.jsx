
import aboutImg from "../../assets/about_img_home1.png";
import {FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row px-3">
      <div className="w-full md:w-1/2">
        <img className="w-full" src={aboutImg} alt="" />
      </div>

      <div className="w-full md:w-1/2 mt-10 about-header">
        <h1 className="text-7xl font-bold about">About Me</h1>
        <h3 className="text-2xl about-text">Something About Me</h3>

        <p className="text-xl mt-8">
          Hello, This is Mostafizur Rahman, a Professional Web Developer. I have
          been working for more than 2 years as a Web Developer. I love to code
          for myself and clients. I always deliver projects before the deadline.
          I am an expert in Front-End Development and I write quality code using
          clever techniques.
        </p>

        <p className="text-xl mt-8">
          I specialize in front-end development, which involves creating
          visually appealing and user-friendly interfaces for websites and web
          applications. I am proficient in HTML, CSS, JavaScript, React,
          Tailwind CSS, Bootstrap, and Animation, allowing me to build engaging
          and interactive user experiences. Additionally, I have gained
          expertise in the MERN stack development. This means I am proficient in
          working with MongoDB, Express.js, React.js, and Node.js. This stack
          enables me to develop full-stack web applications, handling both the
          front-end and back-end components, as well as integrating them with a
          database.
        </p>

      </div>
    </div>
  );
};

export default About;
