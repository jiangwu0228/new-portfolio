import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailJs.scss";

function EmailJs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current !== null)
      emailjs
        .sendForm(
          'service_f5a9qhj',
          'template_zzkjwya',
          formRef.current,
          'user_ZdQV18JTV2HLFEkaxAqHO'
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="user_name" required />
        <input type="text" placeholder="Subject" name="user_subject" required />
        <input type="text" placeholder="Email" name="user_email" required />
        <textarea placeholder="Message" name="message" required />
        <button>Submit</button>
        {message && <p>Message sent</p>}
      </form>
    </div>
  );
}

export default EmailJs;
