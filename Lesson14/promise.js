const circleEl = document.querySelector('.circle');

function move(circleEl, dx = 0, dy = 0) {
    return new Promise(function (resolve) {
        if (dx || dy) {
            circleEl.style.transform += `translate(${dx}px, ${dy}px)`;
        }

        circleEl.addEventListener(
            'transitionend',
            resolve,
            {
                once: true
            }
        );

    });
}

async function animated() {
    const v1 = await move(circleEl, 300, 0);
    const v2 = await move(circleEl, 0, 300);
    const v3 = await move(circleEl, -300, 0);
    const v4 = await move(circleEl, 0, -300);

    return v4;
}

console.log( animated() );
