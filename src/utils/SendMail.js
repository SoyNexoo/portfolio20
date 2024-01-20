import { useRef } from "react";
import emailjs from "@emailjs/browser";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.VITE_SERVICE_ID,
        process.env.VITE_TEMPLATE_ID,
        form.current,
        process.env.VITE_PUBLIC_ID
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
  return { form, sendEmail };
};
