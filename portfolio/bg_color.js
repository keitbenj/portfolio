function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const gradient = '#00000';
    document.querySelector('#colorBg').style.backgroundImage = `linear-gradient(to bottom, ${randomColor}, black)`;
    document.querySelector('#colorText').innerHTML = randomColor;
}