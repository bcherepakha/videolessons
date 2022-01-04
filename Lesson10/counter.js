function makeCounter(formEl) {
    // LE = { formEl };
    const decreaseBtn = formEl.elements.decrease;
    const increaseBtn = formEl.elements.increase;
    const valueEl = formEl.elements.value;

    let value = parseInt(valueEl.value, 10) || 0;

    function increase() {
        setValue(value + 1);
    }

    function decrease() {
        setValue(--value);
    }

    function setValue( newValue ) {
        value = Math.max(newValue, 0);

        valueEl.value = value.toString();
    }

    decreaseBtn.addEventListener('click', decrease);
    increaseBtn.addEventListener('click', increase);
    formEl.addEventListener('submit', e => e.preventDefault());
    valueEl.addEventListener('input', function () {
        value = parseInt(valueEl.value, 10);
    });

    return {
        getValue() {
            return value;
        },
        setValue
    };
}

const counters = [];

Array.from(document.querySelectorAll('.counter')).map(formEl => {
    counters.push( makeCounter(formEl) );
});

console.log( counters );
