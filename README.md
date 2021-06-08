# simpleClassToggle
Simple ES6+ Library to create triggers that toggle a class

*Version 0.1.1*

## :floppy_disk: Development Team
- [Will Christenson](https://github.com/MrSpecific) (Egalitarian Project Lead :unicorn:)

## :wrench: Setup & Usage
Install the package as a dependency
```bash
npm i simpleclasstoggle
```
Then, simply import the module into your code, and initialize
```js
import classToggle from 'simpleclasstoggle';

classToggle.init();
```

To create a toggle, apply a few data-attributes to a button of your choosing:
- `data-toggle="{className}"` with `{className}` being the class you'd like to toggle.
- `data-toggle-target="{selector}"` with `{selector}` being a valid selector for `document.querySelectorAll` to toggle the class on (will target _this_ element if not included)

For example:
```html
<button type="button" data-toggle="active" data-toggle-target="#my-element">Toggle</button>

<div id="my-element">Some cool progressive-disclosure content here</div>
```

If your script isn't deferred or loaded in the footer, make sure to wait on init until your elements are loaded:

```js
document.addEventListener('DOMContentLoaded', () => {
  classToggle.init();
});
```

You may also pass an options object to override the default settings and/or add a callback argument that will fire on toggle.

```js
classToggle.init({
  toggleSelector: '[data-toggle]',
  toggleEvent: 'toggleClass',
  callback: null,
});
```

_Note: classToggle does not handle any of the styling of elements, it simply toggles a class - you must add your own styling._

## Events
When the toggle is activated, it will toggle the class on the targeted element, as well as firing a custom event on that element (by default, `toggleClass`), if you'd like to add any additional event listeners.

## Callbacks
Callback functions will receive two arguments:
1. `toggleTarget` - The element that is currently having a class toggled on
2. `toggleElement` - The element that triggered the classToggle

***Note: Callback will be called multiple times, if the target selector matches multiple elements on the page***

```js
classToggle.init({
  callback: (toggleTarget, toggleElement) => {
    console.log(toggleTarget, toggleElement);
  },
});
```
