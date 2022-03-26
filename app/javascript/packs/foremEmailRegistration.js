function setTogglePasswordEvent(targetClass) {
  function togglePasswordMask(event) {
    event.preventDefault();
    visible = !visible;
    toggleAriaPressed(visible);
    togglePasswordType(visible);
    toggleEyeIcons(visible);
  }

  function toggleAriaPressed(visible) {
    visibility.setAttribute('aria-pressed', visible);
  }

  function togglePasswordType(visible) {
    const passwordType = visible ? 'text' : 'password';
    passwordField.type = passwordType;
  }

  function toggleEyeIcons(visible) {
    eyeOffIcon.classList.toggle('hidden', !visible);
    eyeIcon.classList.toggle('hidden', visible);
  }

  let visible = false;
  const targetWrapper = document.getElementsByClassName(targetClass)[0];
  const eyeIcon = targetWrapper.getElementsByClassName('js-eye')[0];
  const eyeOffIcon = targetWrapper.getElementsByClassName('js-eye-off')[0];
  const passwordField = targetWrapper.getElementsByClassName('js-password')[0];
  const visibility = targetWrapper.getElementsByClassName(
    'js-creator-password-visibility',
  )[0];
  visibility.addEventListener('click', togglePasswordMask);
}

setTogglePasswordEvent('js-password-wrapper');
setTogglePasswordEvent('js-password-confirmation-wrapper');
