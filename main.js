// main.js

document.addEventListener('DOMContentLoaded', () => {
    const style1Btn = document.getElementById('style1');
    const style2Btn = document.getElementById('style2');

    style1Btn.addEventListener('click', () => {
        document.body.style.background = 'linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%)';
    });

    style2Btn.addEventListener('click', () => {
        document.body.style.background = 'linear-gradient(135deg, rgba(25,25,255,1) 3%, rgba(206,60,132,1) 38%, rgba(226,238,48,1) 68%, rgba(94,0,101,1) 98%)';
    });
});
