import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

export const UseErrorValidator = ({ name, value }) => {
  const { language, content } = useContext(LanguageContext);
  const messageError = (name) => content.contact[language].error[name];
  const error = {};
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (name == "name") {
    if (!value || value.length == 0) error.name = messageError(name).invalid;
    if (value.length < 3) error.name = "Nombre muy corto.";
    if (value.length > 20) error.name = "Nombre demasiado largo.";
  }
  if (name == "email") {
    if (!value || value.length == 0) error.email = "Introduzca un correo.";
    if (!emailRegex.test(value)) error.email = "Correo inválido.";
  }
  if (name == "message") {
    if (!value || value.length == 0) error.message = "Introduzca un mensaje.";
    if (value.length < 10) error.message = "Mensaje muy corto.";
    if (value.length > 200) error.message = "Mensaje demasiado largo.";
  }
  return error;
};
