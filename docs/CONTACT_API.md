# 📧 Integración API de Contacto - Flashtag

## Configuración

La API de contacto está configurada para enviar emails automáticamente desde `black3vampire@gmail.com` hacia `enriquegonzalodamian@outlook.com`.

### Endpoints

- **POST**: `https://api.flashtag.tech/api/contact` - Enviar email de contacto
- **GET**: `https://api.flashtag.tech/api/contact/status` - Verificar estado de la API

## Estructura de Datos

### Request (POST)

```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "subject": "Asunto del mensaje",
  "message": "Contenido del mensaje"
}
```

### Response Exitosa

```json
{
  "success": true,
  "message": "Email enviado correctamente"
}
```

### Response con Error

```json
{
  "success": false,
  "error": "Descripción del error"
}
```

## Implementación en el Proyecto

### 1. Hook useForm (`src/hooks/useForm.js`)

El hook maneja:
- ✅ Validación de formulario
- ✅ Estado de carga
- ✅ Integración con reCAPTCHA
- ✅ Envío a la API de Flashtag
- ✅ Manejo de errores
- ✅ Conversión de servicios seleccionados a texto

### 2. Formulario de Contacto (`src/pages/Contact/Contact.jsx`)

Características:
- ✅ Botones de selección de servicios
- ✅ Validación en tiempo real
- ✅ Mensajes de éxito/error
- ✅ Protección con reCAPTCHA
- ✅ Diseño responsivo

### 3. Servicios Disponibles

El formulario incluye botones para seleccionar:
- 🎯 SEO
- 🌐 Web Design & Development
- 🛒 E-Commerce
- 📱 Mobile App
- 🎨 Branding
- 💼 Consulting

Los servicios seleccionados se incluyen automáticamente en el asunto y mensaje del email.

## Formato del Email Enviado

**Asunto**: Servicios seleccionados (ej: "SEO, Web Design & Development")

**Mensaje**:
```
Servicios de interés: SEO, Web Design & Development

[Mensaje del usuario]
```

**De**: Nombre y email del usuario
**Para**: enriquegonzalodamian@outlook.com

## Testing

### Verificar Estado de la API

```javascript
import { checkContactApiStatus } from './utils/contactApi';

const status = await checkContactApiStatus();
console.log(status);
```

### Enviar Email de Prueba

```javascript
import { sendTestEmail } from './utils/contactApi';

const result = await sendTestEmail();
console.log(result);
```

### Prueba Manual

1. Abre el navegador en la página de contacto
2. Completa el formulario
3. Selecciona uno o más servicios
4. Verifica el reCAPTCHA
5. Envía el formulario
6. Verifica que el email llegue a `enriquegonzalodamian@outlook.com`

## Manejo de Errores

El sistema incluye manejo de errores para:
- ❌ Validación de campos (nombre, email, mensaje)
- ❌ Errores de red
- ❌ Respuestas no exitosas de la API
- ❌ Verificación de reCAPTCHA

Los usuarios reciben alertas claras en caso de error.

## Dependencias

- ✅ **Fetch API**: Nativo del navegador (no requiere instalación)
- ✅ **react-google-recaptcha**: Para protección anti-spam
- ✅ **react-bootstrap**: Para componentes UI

**Nota**: Se eliminó la dependencia de `axios` ya que usamos Fetch API nativo.

## Variables de Entorno (Opcional)

Si deseas configurar el endpoint como variable de entorno:

```env
VITE_CONTACT_API_URL=https://api.flashtag.tech/api/contact
```

Actualizar en `useForm.js`:
```javascript
const API_URL = import.meta.env.VITE_CONTACT_API_URL || 'https://api.flashtag.tech/api/contact';
```

## Seguridad

- ✅ Validación del lado del cliente
- ✅ Protección reCAPTCHA
- ✅ HTTPS en todas las comunicaciones
- ✅ Sanitización de inputs en la API

## Soporte

Para problemas con la API de Flashtag, contacta al administrador del backend.

---

**Última actualización**: Octubre 2025
**Versión**: 1.0.0
