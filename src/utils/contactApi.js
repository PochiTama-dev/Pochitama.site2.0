// Utilidad para verificar el estado de la API de contacto
export const checkContactApiStatus = async () => {
  try {
    const response = await fetch('https://api.flashtag.tech/api/contact/status');
    const data = await response.json();
    return {
      success: true,
      status: data,
      message: 'API funcionando correctamente'
    };
  } catch (error) {
    console.error('Error al verificar el estado de la API:', error);
    return {
      success: false,
      status: null,
      message: 'Error al conectar con la API'
    };
  }
};

// Función para enviar un email de prueba
export const sendTestEmail = async () => {
  try {
    const response = await fetch('https://api.flashtag.tech/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test Pochitama',
        email: 'test@pochitama.dev',
        subject: 'Email de Prueba',
        message: 'Este es un email de prueba desde el formulario de contacto.'
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Email de prueba enviado exitosamente:', data);
      return { success: true, data };
    } else {
      console.error('❌ Error al enviar email de prueba:', data);
      return { success: false, error: data };
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    return { success: false, error: error.message };
  }
};
