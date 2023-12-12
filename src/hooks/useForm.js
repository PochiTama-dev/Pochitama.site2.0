import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [buttonSelections, setButtonSelections] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e, buttonValue) => {
    if (e.target.tagName === 'BUTTON') {
      setButtonSelections({
        ...buttonSelections,
        [buttonValue]: !buttonSelections[buttonValue],
      });
    } else {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validateForm(false, name, value);
    setErrors({
      ...errors,
      [name]: fieldErrors[name],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Actualizo el estado de los errores
    setErrors(validateForm(form));

    // Espero a que el estado se actualice antes de continuar
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Vuelvo a obtener los errores después de la actualización del estado
    const formErrors = validateForm(form);
  
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
  
      // Asigno la referencia al formulario
      formRef.current = e.target;
  
      emailjs
        .sendForm(
          "service_zv0t669",
          "template_tj5zvrk",
          formRef.current,
          "xQIakum3hdLQhvFWS"
        )
        .then(
          (result) => {
            setLoading(false);
            setResponse(true);
            setForm(initialForm);
            setButtonSelections({});
            console.log(result.status);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      return;
    }
  };

  return {
    form,
    buttonSelections,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
