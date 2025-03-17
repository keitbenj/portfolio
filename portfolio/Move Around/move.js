var button = document.querySelector('.movingButton');
const text = document.querySelector("p");

var t1 = false;
var t2 = false;
var t3 = false;
var t4 = false;

button.addEventListener("mouseover", () => {
    if (!t1){
        anime({
            targets: button,
            translateX: 500,
            duration: 750,
            easing: 'easeOutElastic(1, 0.4)'
        }).finished.then(function(){
            t1 = true;
            button.addEventListener("mouseover", () => {
                if (!t2){
                    anime({
                        targets: button,
                        translateY: 400,
                        duration: 750,
                        easing: 'easeOutElastic(1, 0.4)'
                    }).finished.then(function(){
                        t2 = true;
                        button.addEventListener("mouseover", () => {
                            if (!t3){
                                anime({
                                    targets: button,
                                    translateX: 250,
                                    duration: 750,
                                    easing: 'easeOutElastic(1, 0.4)'
                                }).finished.then(function(){
                                    t3 = true;
                                    button.addEventListener("mouseover", () => {
                                        if (!t4){
                                            anime({
                                                targets: button,
                                                translateY: 200,
                                                duration: 750,
                                                easing: 'easeOutElastic(1, 0.4)'
                                            })
                                        }
                                    })
                                });
                            }
                        })
                    });
                }
            })
        });      
    }
})

text.addEventListener("click",()=>{
    text.innerText = "HI";
    setTimeout(()=>{text.innerText = "This text will disappear in 5";}, 3000);
    setTimeout(() => {text.innerText = "This text will disappear in 4";}, 4000);
    setTimeout(() => {text.innerText = "This text will disappear in 3";}, 5000);
    setTimeout(() => {text.innerText = "This text will disappear in 2";}, 6000);
    setTimeout(() => {text.innerText = "This text will disappear in 1";}, 7000);
    setTimeout(() => {text.remove(); button.remove()}, 8000);
});
