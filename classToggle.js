const options = {
  toggleSelector: '[data-toggle]',
  toggleEvent: 'toggleClass',
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
  const toggleTargets = toggleElement.dataset.toggleTarget && document.querySelectorAll(toggleElement.dataset.toggleTarget) || [toggleElement];
  const toggleClass = toggleElement.dataset.toggle;

  if(!toggleTargets) return;

  toggleTargets.forEach((toggleTarget) => {
    toggleTarget.classList.toggle(toggleClass);
    fireEvent(options.toggleEvent, toggleTarget);
  });
}

const fireEvent = (name, entry) => {
  const event = new CustomEvent(name, {
    bubbles: true,
    detail: entry,
  });

  entry.dispatchEvent(event);
};

const classToggle = {
  options,
  init: toggleInit
}

export default classToggle;
