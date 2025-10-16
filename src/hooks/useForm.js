import { useState, useCallback } from "react";

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

      // Preparar los servicios seleccionados
      const selectedServices = Object.entries(buttonSelections)
        .filter(([_, isSelected]) => isSelected)
        .map(([service]) => {
          const serviceNames = {
            'seo': 'SEO',
            'web_design': 'Web Design & Development',
            'ecommerce': 'E-Commerce',
            'mobile_app': 'Mobile App',
            'branding': 'Branding',
            'consulting': 'Consulting'
          };
          return serviceNames[service] || service;
        })
        .join(', ');

      // Construir el mensaje con los servicios
      const fullMessage = selectedServices 
        ? `Servicios de interés: ${selectedServices}\n\n${form.mensaje}`
        : form.mensaje;

      // Datos a enviar a la API de Flashtag
      const contactData = {
        name: form.nombre,
        email: form.email,
        subject: selectedServices || 'Consulta general',
        message: fullMessage
      };

      try {
        const response = await fetch('https://api.flashtag.tech/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactData)
        });

        const result = await response.json();

        if (response.ok) {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setButtonSelections({});
          console.log('Email enviado exitosamente:', result);
        } else {
          setLoading(false);
          console.error('Error al enviar el email:', result);
          alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
        }
      } catch (error) {
        setLoading(false);
        console.error('Error de conexión:', error);
        alert('Error de conexión. Por favor, verifica tu internet e intenta nuevamente.');
      }
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
