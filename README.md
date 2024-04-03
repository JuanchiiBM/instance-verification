With this module you can avoid typical typescript errors, such as making mistakes when you are selecting elements from the DOM
# Instance Verification

> Instance Verification is a module that will allow us to obtain elements from the DOM making sure they exist before taking them

## Why Use It?

Many times we put the ID wrong in our constant and there is no error until we want to manipulate it, with these functions, those problems cease to exist, or also, when we get confused and let typescript treat our elements with instances that really are not the correct ones.

## How To Use

#### There will be 5 functions that we will have available:

```ts
const btn = getElementWithId('btnID', HTMLButtonElement)
const btn = getElementsWithClassName('btnClass', HTMLButtonElement)
const btn = getElementsWithName('btnName', HTMLButtonElement)
const btn = getFirstElementWithClassName('btnClass', HTMLButtonElement)
const btn = getFirstElementWithName('btnName', HTMLButtonElement)
```

## Example
#### HTML:
```html
    <div class="div"></div>
    <div class="div"></div>
    <button class="div"></button>
    <div class="div"></div>
    <div class="div"></div>
```

#### TS:
```ts
    import { getElementsWithClassName } from 'instance-verification'

    const divs = getElementsWithClassName('div', HTMLDivElement)
```

#### Error: `The children element '2' with the class: 'div' isn't an HTMLDivElement`
