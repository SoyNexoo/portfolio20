import { ContactUs } from "../../utils/SendMail";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const { form, sendEmail } = ContactUs();
  const { language, content } = useContext(LanguageContext);

  return (
    <div
      className="h-screen bg-cyan flex text-white flex-col justify-center text-center gap-20 items-center sm:px-4 p-10 pb-[80px]"
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
        onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          className="border-b-2 p-4 rounded-b-2xl  bg-darkCyan placeholder:text-gray "
          placeholder={`${content.contact[language].name}`}></input>
        <input
          type="email"
          name="user_mail"
          className="border-b-2 p-4 rounded-b-2xl  bg-darkCyan placeholder:text-gray "
          placeholder="Email"></input>
        <textarea
          name="message"
          className="border-b-2 p-4 rounded-b-2xl resize-none h-[200px] bg-darkCyan placeholder:text-gray "
          placeholder={`${content.contact[language].message}`}></textarea>
        <button
          type="submit"
          value={"send"}
          className="px-5 py-2 border-2 hover:bg-white transition-colors hover:text-cyan">
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
