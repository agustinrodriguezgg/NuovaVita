document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById(
    "toggle-password",
  );
  const rememberCheckbox = document.getElementById("recordar");

  const forgotPasswordButton = document.getElementById(
    "forgot-password-toggle",
  );
  const recoveryPanel = document.getElementById("recovery-panel");
  const recoveryForm = document.getElementById("recovery-form");
  const recoveryEmailInput = document.getElementById(
    "recovery-email",
  );
  const recoveryStatus = document.getElementById(
    "recovery-status",
  );

  const EMAIL_STORAGE_KEY = "nuovaVita.rememberedEmail";
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_PASSWORD_LENGTH = 6;

  const setFieldValidity = (input, isValid) => {
    input.classList.toggle("is-valid", isValid);
    input.classList.toggle("is-invalid", !isValid);
    input.setAttribute("aria-invalid", String(!isValid));
  };

  const clearFieldValidity = (input) => {
    input.classList.remove("is-valid", "is-invalid");
    input.removeAttribute("aria-invalid");
  };

  const togglePasswordVisibility = () => {
    const isPasswordHidden = passwordInput.type === "password";

    passwordInput.type = isPasswordHidden
      ? "text"
      : "password";

    togglePasswordButton.setAttribute(
      "aria-pressed",
      String(isPasswordHidden),
    );

    togglePasswordButton.setAttribute(
      "aria-label",
      isPasswordHidden
        ? "Ocultar contraseña"
        : "Mostrar contraseña",
    );
  };

  const validateEmail = () => {
    const isValid = EMAIL_REGEX.test(
      emailInput.value.trim(),
    );

    setFieldValidity(emailInput, isValid);

    return isValid;
  };

  const validatePassword = () => {
    const isValid =
      passwordInput.value.trim().length >= MIN_PASSWORD_LENGTH;

    setFieldValidity(passwordInput, isValid);

    return isValid;
  };

  const handleRememberMe = () => {
    const email = emailInput.value.trim();

    if (rememberCheckbox.checked) {
      localStorage.setItem(EMAIL_STORAGE_KEY, email);
      return;
    }

    localStorage.removeItem(EMAIL_STORAGE_KEY);
  };

  const toggleRecoveryPanel = () => {
    const isOpening = recoveryPanel.hidden;

    recoveryPanel.hidden = !isOpening;

    forgotPasswordButton.setAttribute(
      "aria-expanded",
      String(isOpening),
    );

    if (isOpening) {
      const loginEmail = emailInput.value.trim();

      if (EMAIL_REGEX.test(loginEmail)) {
        recoveryEmailInput.value = loginEmail;
      }

      recoveryEmailInput.focus();
    }
  };

  const rememberedEmail = localStorage.getItem(
    EMAIL_STORAGE_KEY,
  );

  if (rememberedEmail) {
    emailInput.value = rememberedEmail;
    rememberCheckbox.checked = true;
  }

  togglePasswordButton.addEventListener(
    "click",
    togglePasswordVisibility,
  );

  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  forgotPasswordButton.addEventListener(
    "click",
    toggleRecoveryPanel,
  );

  recoveryEmailInput.addEventListener("input", () => {
    const isValid = EMAIL_REGEX.test(
      recoveryEmailInput.value.trim(),
    );

    setFieldValidity(recoveryEmailInput, isValid);
  });

  recoveryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const recoveryEmail = recoveryEmailInput.value.trim();
    const isEmailValid = EMAIL_REGEX.test(recoveryEmail);

    setFieldValidity(recoveryEmailInput, isEmailValid);

    if (!isEmailValid) {
      recoveryStatus.className =
        "form-status alert alert-danger mt-3";

      recoveryStatus.textContent =
        "Revisá el correo electrónico ingresado.";

      recoveryEmailInput.focus();

      return;
    }

    recoveryStatus.className =
      "form-status alert alert-success mt-3";

    recoveryStatus.textContent =
      "Si existe una cuenta asociada, recibirás instrucciones para recuperar el acceso.";

    recoveryForm.reset();
    clearFieldValidity(recoveryEmailInput);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      const firstInvalidField = form.querySelector(
        ".is-invalid",
      );

      if (firstInvalidField) {
        firstInvalidField.focus();
      }

      return;
    }

    handleRememberMe();

    const emailToKeep = rememberCheckbox.checked
      ? emailInput.value.trim()
      : "";

    form.reset();

    clearFieldValidity(emailInput);
    clearFieldValidity(passwordInput);

    if (emailToKeep) {
      emailInput.value = emailToKeep;
      rememberCheckbox.checked = true;
    }

    window.location.href = "dashboard.html";
  });
});