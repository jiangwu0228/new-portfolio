import React, { FormEvent, useRef, useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";
import emailjs from "@emailjs/browser";

// interface FormDate {
//   name: string;
//   email: string;
//   message: string;
// }

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  // const [formData, setFormData] = useState<FormDate>({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const { name, email, message } = formData;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current !== null)
      emailjs
        .sendForm(
          "service_f5a9qhj",
          "template_zzkjwya",
          formRef.current,
          "user_ZdQV18JTV2HLFEkaxAqHO"
        )
        .then(
          (result) => {
            console.log(result.text);
            postMessage(true);
            setIsSubmitted(true);
            setIsLoading(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  // const handleChangeInput = (e:any) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e:any) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const contact = {
  //     _type: "contact",
  //     name: formData.name,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client
  //     .create(contact)
  //     .then(() => {
  //       setIsSubmitted(true);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <h2 className="head-text" id="Contact">
        Take a coffee & chat with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:jasonwu0228@gmail.com" className="p-text">
            jasonwu0228@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+64 (0) 21 163 1412" className="p-text">
            +64 (0) 21 163 1412
          </a>
        </div>
      </div>
      {!isSubmitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Message"
              name="message"
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Message send, will contact you ASAP!</h3>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default Footer;
