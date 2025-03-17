const norm = document.querySelector("div");
const text = document.querySelector("p");

norm.addEventListener("mouseover", () => {
    norm.classList.add("right");
    let right = document.querySelector(".right");
    right.addEventListener("mouseover", ()=> {
        right.classList.add("down");
        let down = document.querySelector(".down");
        down.addEventListener("mouseover", ()=>{
            down.classList.remove("right");
            down.classList.add("vmiddle");
            let mid = document.querySelector(".vmiddle");
            mid.addEventListener("mouseover",()=>{
                mid.classList.remove("down");
                mid.classList.add("final");
            });
        });
    });
});

text.addEventListener("click",()=>{
    text.innerText = "HI";
    setTimeout(()=>{text.innerText = "This text will disappear in 5";}, 3000);
    setTimeout(() => {text.innerText = "This text will disappear in 4";}, 4000);
    setTimeout(() => {text.innerText = "This text will disappear in 3";}, 5000);
    setTimeout(() => {text.innerText = "This text will disappear in 2";}, 6000);
    setTimeout(() => {text.innerText = "This text will disappear in 1";}, 7000);
    setTimeout(() => {text.remove(); norm.remove()}, 8000);
});