import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const formRef = useRef(null);

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setLoading(false);
    setResponse(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      //Asigno la referencia al formulario
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
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};
