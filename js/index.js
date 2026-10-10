/* ==========================================================================
   Nuova Vita — TP4: JavaScript y manipulación del DOM
   Funcionalidades de la página principal
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("mensaje");
  const characterCounter = document.getElementById("mensaje-contador");
  const formStatus = document.getElementById("contact-form-status");

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_NAME_LENGTH = 3;
  const MIN_MESSAGE_LENGTH = 10;
  const MAX_MESSAGE_LENGTH = 300;

  const setFieldValidity = (input, isValid) => {
    input.classList.toggle("is-valid", isValid);
    input.classList.toggle("is-invalid", !isValid);
    input.setAttribute("aria-invalid", String(!isValid));
  };

  const validateName = () => {
    const name = nameInput.value.trim();
    const isValid = name.length >= MIN_NAME_LENGTH;

    setFieldValidity(nameInput, isValid);

    return isValid;
  };

  const validateEmail = () => {
    const email = emailInput.value.trim();
    const isValid = EMAIL_REGEX.test(email);

    setFieldValidity(emailInput, isValid);

    return isValid;
  };

  const validateMessage = () => {
    const messageLength = messageInput.value.trim().length;

    const isValid =
      messageLength >= MIN_MESSAGE_LENGTH &&
      messageLength <= MAX_MESSAGE_LENGTH;

    setFieldValidity(messageInput, isValid);

    return isValid;
  };

  const updateCharacterCounter = () => {
    const characterCount = messageInput.value.length;

    characterCounter.textContent = `${characterCount}/${MAX_MESSAGE_LENGTH}`;

    characterCounter.classList.toggle(
      "character-counter-limit",
      characterCount >= MAX_MESSAGE_LENGTH,
    );
  };

  const clearValidationStates = () => {
    const fields = form.querySelectorAll(".form-control");

    fields.forEach((field) => {
      field.classList.remove("is-valid", "is-invalid");
      field.removeAttribute("aria-invalid");
    });
  };

  nameInput.addEventListener("input", validateName);

  emailInput.addEventListener("input", validateEmail);

  messageInput.addEventListener("input", () => {
    updateCharacterCounter();
    validateMessage();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      formStatus.className = "form-status alert alert-danger mt-3";
      formStatus.textContent =
        "Revisá los campos marcados antes de enviar el mensaje.";

      const firstInvalidField = form.querySelector(".is-invalid");

      if (firstInvalidField) {
        firstInvalidField.focus();
      }

      return;
    }

    const contactName = nameInput.value.trim();

    formStatus.className = "form-status alert alert-success mt-3";
    formStatus.textContent = `Gracias, ${contactName}. Recibimos tu consulta y nos comunicaremos pronto.`;

    form.reset();
    clearValidationStates();
    updateCharacterCounter();
  });
});
