const cookie = document.getElementById('cookie');
let cookieImage = document.querySelector('.cookie')
let score = document.querySelector('.score span');

let points = 0;
let cookieWidth = 25;

cookie.addEventListener('click', function () {
    cookieWidth++;
    cookieImage.style.width = cookieWidth + 'px';
    points++;
    score.textContent = points;
})

let oven = document.querySelector('.addon-oven')

oven.addEventListener('click', function () {
    if (points >= 100) {
        points -= 100;
        function ovenIncrease() {
            points += 5
            return points
            
        }
        setInterval(ovenIncrease, 2000)

    }

})

const doubleclick = document.querySelector('.addon-doubleclick')

doubleclick.addEventListener('click', () => {
if(points >= 10){
    points -= 10;
    points *= 2;
    return score;
}
}
)

