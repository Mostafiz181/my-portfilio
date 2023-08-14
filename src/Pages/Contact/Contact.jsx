import "./Contact.css";
import contactImg from "../../assets/contact.gif";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cnzd959",
        "template_6u3mccq",
        form.current,
        "kuwQV8OHMsErTKDvF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h2 className="text-6xl contact-title">Contact</h2>

      <div className="flex flex-col md:flex-row">
        <div className="w-full contact-form">
          <div className="contact-item">
            <form ref={form} onSubmit={sendEmail}>
              <label className="label">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter Your Name.."
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="Enter Your Email.."
              />
              <label className="label">Message</label>
              <textarea name="message" placeholder="Enter Your Opinion....." />
              <input type="submit" value="Send" className="submit-btn bg-blue-500" />
            </form>
          </div>
        </div>

        <div className="w-full">
          <img className="w-full" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
