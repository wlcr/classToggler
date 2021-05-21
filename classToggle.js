/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
let options = {
  toggleSelector: '[data-toggle]',
  toggleEvent: 'toggleClass',
  callback: null,
};

const fireEvent = (name, entry) => {
  const event = new CustomEvent(name, {
    bubbles: true,
    detail: entry,
  });

  entry.dispatchEvent(event);
};

const toggleClickHandler = (event) => {
  const toggleElement = event.currentTarget;
  const toggleTargets = (toggleElement.dataset.toggleTarget &&
    document.querySelectorAll(toggleElement.dataset.toggleTarget)) || [toggleElement];
  const toggleClass = toggleElement.dataset.toggle;

  if (!toggleTargets) return;

  toggleTargets.forEach((toggleTarget) => {
    toggleTarget.classList.toggle(toggleClass);

    try {
      options.callback && options.callback(toggleTarget);
    } finally {
      fireEvent(options.toggleEvent, toggleTarget);
    }
  });
};

const toggleInit = (args = {}) => {
  options = { ...options, ...args };
  const classToggles = document.querySelectorAll(options.toggleSelector);

  if (!classToggles) return;

  classToggles.forEach((element) => {
    element.addEventListener('click', toggleClickHandler);
  });
};

const classToggle = {
  options,
  init: toggleInit,
};

export default classToggle;
