const $ = (selector) => {
    return document.querySelector(selector);
};

const hour = $('.hour');
const min = $('.min');
const week = $('.week');

let showDot = false;

function update() {
    showDot = !showDot;
    const now = new Date();

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    
    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });

    week
        .children[now.getDay()]
        .classList.add('active');
}
setInterval(update, 500);
