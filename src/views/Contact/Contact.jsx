import { ContactUs } from "../../utils/SendMail";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const { form, sendEmail } = ContactUs();
  const { language, content } = useContext(LanguageContext);
  const [formulario, setFormulario] = useState({
    user_name: "",
    user_mail: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (form) => {
    const error = {};
    const emailRegex = new RegExp('^(.+)@(\\S+)$');
    if (!form.user_name.trim())
      error.user_name = content.contact[language].error.user_name.invalid;
    else if (form.user_name.length < 3)
      error.user_name = content.contact[language].error.user_name.short;
    else if (form.user_name.length > 20)
      error.user_name = content.contact[language].error.user_name.large;
    if (!emailRegex.test(form.user_mail))
      error.user_mail = content.contact[language].error.user_mail.invalid;
    if (!form.message.trim()) error.message = "Introduzca un mensaje.";
    else if (form.message.length < 10) error.message = "Mensaje muy corto.";
    else if (form.message.length > 200)
      error.message = "Mensaje demasiado largo.";
    return error;
  };

  const onChange = (e) => {
    console.log(formulario)
    const { name, value } = e.target;
    setFormulario((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div
      className="h-full bg-cyan flex text-white flex-col justify-center text-center gap-20 items-center sm:px-4 p-10 pb-[80px]"
      id="contact">
      <div>
        <Toaster position="bottom-right" />
      </div>
      <h1 className="text-7xl smMd:text-6xl font-bold">
        {content.contact[language].title}{" "}
      </h1>
      <form
        ref={form}
        className="flex flex-col gap-5 w-[40%] md:w-[70%] sm:w-[90%] "
        onSubmit={(e) =>
          sendEmail(e, setErrors, errors, validateField, formulario)
        }>
        <input
          type="text"
          onChange={onChange}
          name="user_name"
          className="border-b-2 p-4 rounded-b-2xl  bg-darkCyan placeholder:text-gray "
          placeholder={`${content.contact[language].name}`}></input>
        <span>{errors?.user_name}</span>
        <input
          type="email"
          onChange={onChange}
          name="user_mail"
          className="border-b-2 p-4 rounded-b-2xl  bg-darkCyan placeholder:text-gray "
          placeholder="Email"></input>
        <span>{errors?.user_mail}</span>

        <textarea
          name="message"
          onChange={onChange}
          className="border-b-2 p-4 rounded-b-2xl resize-none h-[200px] bg-darkCyan placeholder:text-gray "
          placeholder={`${content.contact[language].message}`}></textarea>
        <span>{errors?.message}</span>

        <button
          type="submit"
          value={"send"}
          className="px-5 py-2 border-2 disabled:bg-gray hover:bg-white transition-colors hover:text-cyan">
          {content.contact[language].submit}
        </button>
        <p>
          {content.contact[language].warning}
          <span className="text-darkCyan">*</span>
        </p>
      </form>
    </div>
  );
};

export default Contact;
