# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [APP Code](https://github.com/cristianpoleyJS/calculator-app)
- Live Site URL: [APP in Netlify](https://calculator-frontendmentor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Vue 3](https://v3.vuejs.org/) - Framework

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<span>{{ Intl.NumberFormat('en-EN', {maximumSignificantDigits: 9}).format(result) }}</span>
```
```css
@media (prefers-color-scheme: dark) { }
@media (prefers-color-scheme: light) { }
:root { }

```
```js
export default class Calculator {
  // ...
}
```
### Useful resources

- [Media 'prefers-color-scheme'](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) - This helped me for use 'prefers-color-scheme' in styles.

## Author

- Website - [Cristian Poley](https://www.cristianpoley.com)
- Frontend Mentor - [@cristianpoleyjs](https://www.frontendmentor.io/profile/cristianpoleyJS)
- Twitter - [@cristianpoley](https://www.twitter.com/cristianpoley)