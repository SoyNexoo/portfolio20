import { useRef } from "react";
import emailjs from "@emailjs/browser";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId =
      process.env.REACT_APP_SERVICE_ID || import.meta.env.VITE_SERVICE_ID;
    const templateId =
      process.env.REACT_APP_TEMPLATE_ID || import.meta.env.VITE_TEMPLATE_ID;
    const publicId =
      process.env.REACT_APP_PUBLIC_ID || import.meta.env.VITE_PUBLIC_ID;
    emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
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
