const fontSizeControle = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

textEl.style.fontSize = fontSizeControle.value + 'px';

fontSizeControle.addEventListener ( `click` , () => {
    textEl.style.fontSize = fontSizeControle.value + 'px';
})


