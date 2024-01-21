import { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { LanguageContext } from "../context/LanguageContext";
export const ContactUs = () => {
  const { language, content } = useContext(LanguageContext);
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
        toast.success(`${content.contact[language].success}`);
      },
      (error) => {
        toast.error(`${content.contact[language].failure}`);
      }
    );
  };
  return { form, sendEmail };
};
