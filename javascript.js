const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
// const walk = 100; // 100px
const walk = 500;

function shadow(e) {
    // console.log(e);
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // console.log(x, y);
    // console.log(this, e.target);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // console.log(x, y);
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // console.log(xWalk, yWalk);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 blue,
    ${xWalk * -1}px ${yWalk * -1}px 0 pink,
    ${yWalk}px ${xWalk * -1}px 0 yellow,
    ${yWalk * -1}px ${xWalk}px 0 purple
    `;


}

hero.addEventListener("mousemove", shadow);