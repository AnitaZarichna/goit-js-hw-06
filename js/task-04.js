let counterValue = 0;

const counterValueEl = document.querySelector(`#value`);

const decrementBtn = document.querySelector(`[data-action="decrement"]`);
decrementBtn.addEventListener(`click` , () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}
);

const incrementBtn = document.querySelector(`[data-action="increment"]`);
incrementBtn.addEventListener(`click` , () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}
);
