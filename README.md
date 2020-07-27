# classToggler
Simple ES6+ Library to create triggers that toggle a class

## :floppy_disk: Development Team
- [Will Christenson](https://github.com/MrSpecific) (Egalitarian Project Lead :unicorn:)

## :wrench: Setup & Usage
Simply drop-in and import the module into your code, and initialize
```
import classToggler from './classToggler';

classToggler.init();
```

To create a toggle, simply apply a few data-attributes to a button of your choosing:
- `data-toggle="{className}"` with `{className}` being the class you'd like to toggle.
- `data-toggle-target="{selector}"` with `{selector}` being a valid selector for `document.querySelector` to toggle the class on (will target _this_ element if not included)

For example:
```
<button type="button" data-toggle="active" data-toggle-target="#my-element">Toggle</button>

<div id="my-element">Some cool progressive-disclosure content here</div>
```

_Note: classToggler does not handle any of the styling of elements, it simply toggles a class - you must add your own styling._
