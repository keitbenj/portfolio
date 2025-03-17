window.addEventListener("load", () => {
    const sec = document.querySelectorAll("section");
    anime({
        targets: sec[0],
        translateX: -960,
        duration: 2000,
        easing: 'easeInOutSine'
    });
    anime({
        targets: sec[1],
        translateX: 960,
        delay: 1000,
        duration: 2000,
        easing: 'easeInOutSine'
    });
    anime({
        targets: sec[2],
        translateX: -960,
        delay: 2000,
        duration: 2000,
        easing: 'easeInOutSine'
    });
    anime({
        targets: sec[3],
        translateX: 960,
        delay: 3000,
        duration: 2000,
        easing: 'easeInOutSine'
    });
    anime({
        targets: sec[4],
        translateX: -960,
        delay: 4000,
        duration: 2000,
        easing: 'easeInOutSine'
    });

    var heading = document.querySelector(".heading");
    heading.innerHTML = heading.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime({
        targets:'.heading .letter',
        opacity: [0,1],
        translateY: 128,
        easing: 'easeOutBounce',
        delay: (el, i) => 6000 + (30 * i)
    });
});
