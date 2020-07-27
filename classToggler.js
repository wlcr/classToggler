const options = {
  toggleSelector: '[data-toggle]',
  toggleEvent: 'toggle',
}

const toggleInit = function() {
  const classToggles = document.querySelectorAll(options.toggleSelector);

  if (!classToggles) return;

  classToggles.forEach((element) => {
    element.addEventListener('click', toggleClickHandler);
  });
}

const toggleClickHandler = function(event) {
  const toggleElement = event.currentTarget;
  const toggleTarget = document.querySelector(toggleElement.dataset.toggleTarget) || toggleElement;
  const toggleClass = toggleElement.dataset.toggle;
  console.log(toggleElement, toggleTarget, toggleClass);

  toggleTarget.classList.toggle(toggleClass);
  fireEvent(options.toggleEvent, toggleElement);
}

const fireEvent = (name, entry) => {
  const event = new CustomEvent(name, {
    bubbles: true,
    detail: entry,
  });

  entry.dispatchEvent(event);
};

const classToggler = {
  options,
  init: toggleInit
}

export default classToggler;
