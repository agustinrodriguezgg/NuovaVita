/* ============================================================================
   Nuova Vita — TP4: Funcionalidades JavaScript y DOM (login.html)
   ----------------------------------------------------------------------------
   Este script es exclusivo de la pantalla de login y no depende de nada
   de las demás páginas del sitio.

   Funcionalidades implementadas:
     1. Mostrar / ocultar contraseña.
     2. Validación en tiempo real de email y contraseña, con mensajes
        de error accesibles (clases is-valid / is-invalid de Bootstrap).
     3. "Recordarme": guarda el email en localStorage y lo precarga
        la próxima vez que el usuario visita el login.
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const recordarCheckbox = document.getElementById('recordar');

  const EMAIL_STORAGE_KEY = 'nuovaVita.rememberedEmail';

  /* --------------------------------------------------------------------
     1. Mostrar / ocultar contraseña
     -------------------------------------------------------------------- */
  const togglePasswordVisibility = () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePasswordBtn.setAttribute('aria-pressed', String(isPassword));
    togglePasswordBtn.setAttribute(
      'aria-label',
      isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
    );
  };

  togglePasswordBtn.addEventListener('click', togglePasswordVisibility);

  /* --------------------------------------------------------------------
     2. Validación en tiempo real
     -------------------------------------------------------------------- */
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 6;

  const setFieldValidity = (input, isValid) => {
    input.classList.toggle('is-valid', isValid);
    input.classList.toggle('is-invalid', !isValid);
  };

  const validateEmail = () => {
    const isValid = EMAIL_REGEX.test(emailInput.value.trim());
    setFieldValidity(emailInput, isValid);
    return isValid;
  };

  const validatePassword = () => {
    const isValid = passwordInput.value.trim().length >= MIN_PASSWORD_LENGTH;
    setFieldValidity(passwordInput, isValid);
    return isValid;
  };

  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  /* --------------------------------------------------------------------
     3. "Recordarme" con localStorage
     -------------------------------------------------------------------- */
  const rememberedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
  if (rememberedEmail) {
    emailInput.value = rememberedEmail;
    recordarCheckbox.checked = true;
  }

  const handleRememberMe = () => {
    if (recordarCheckbox.checked) {
      localStorage.setItem(EMAIL_STORAGE_KEY, emailInput.value.trim());
    } else {
      localStorage.removeItem(EMAIL_STORAGE_KEY);
    }
  };

  /* --------------------------------------------------------------------
     Envío del formulario
     -------------------------------------------------------------------- */
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    handleRememberMe();

    // TODO: acá se conectará la autenticación real contra el backend.
    // Por ahora, simulamos un inicio de sesión exitoso y redirigimos.
    const emailToKeep = recordarCheckbox.checked ? emailInput.value.trim() : '';

    form.reset();
    emailInput.classList.remove('is-valid', 'is-invalid');
    passwordInput.classList.remove('is-valid', 'is-invalid');

    if (emailToKeep) {
      emailInput.value = emailToKeep;
      recordarCheckbox.checked = true;
    }

    window.location.href = 'dashboard.html';
  });
});