import React, { useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";

interface FormDate {
  name: string;
  email: string;
  message: string;
}

const Footer = () => {
  const [formData, setFormData] = useState<FormDate>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:jasonwu0228@gmail.com" className="p-text">jasonwu0228@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+64 (0) 21 163 1412" className="p-text">+64 (0) 21 163 1412</a>
        </div>
      </div>
      {!isSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!isLoading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default Footer;
