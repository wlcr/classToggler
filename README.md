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
- `data-toggle-target="{selector}"` with `{selector}` being a valid selector for `document.querySelector`

For example:
```
<button type="button" data-toggle="active" data-toggle-target="#my-element">Toggle</button>
```
