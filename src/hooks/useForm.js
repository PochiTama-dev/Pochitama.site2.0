import { useState, useCallback } from "react";
import axios from "axios";
/* import { Resend } from 'resend'; */

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [buttonSelections, setButtonSelections] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [recaptcha, setRecaptcha] = useState(null);

  const recaptchaCallback = useCallback((recaptchaInstance) => {
    setRecaptcha(recaptchaInstance);
  }, []);

  const handleChange = (e, buttonValue) => {
    if (e.target.tagName === "BUTTON") {
      setButtonSelections({
        ...buttonSelections,
        [buttonValue]: !buttonSelections[buttonValue],
      });

      setForm({
        ...form,
        buttons: {
          ...form.buttons,
          [buttonValue]: !buttonSelections[buttonValue] ? buttonValue : "",
        },
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

    if (Object.keys(formErrors).length === 0 && recaptcha == 'success') {
      setLoading(true);

      /* try {

        const resend = new Resend('re_EtDwyxfE_4NhDTNJjMFyYmKgShiJ9537A');

        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'matiasdiazdev@gmail.com',//consultas@pochitama.dev
          subject: 'Contacto Landing Pochitama',
          html: '<p>Congrats on sending your <strong>first email</strong>!</p>'//form
        });        

        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setButtonSelections({});
        console.log('Correo enviado exitosamente');
      } catch (error) {
        console.error('Error al enviar el correo:', error);
      } */

      axios
        .post(
          "https://getform.io/f/566cb1ba-bdff-4158-93b7-0ed82642b0e7",
          form,
          { headers: { "Content-Type": "application/json" } }
        )
        .then(function (result) {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setButtonSelections({});
          console.log(result);
        })
        .catch(function (error) {
          console.log(error);
        });
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
    recaptcha: recaptchaCallback,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
