const submit = document.querySelector('.submit');
const box1show = document.querySelector('.box');
const box2show = document.querySelector('.box2');
const ratings = document.querySelectorAll('.rate-btn');
const score = document.querySelector('score');
submit.addEventListener('click', onSubmit);
ratings.forEach ( btn => {
    btn.addEventListener('click',handleRatingBtnClick);
});

function onSubmit(){
    box1show.classList.add('hide');
    box2show.classList.remove('hide');
}
function handleRatingBtnClick(event) {
    ratings.forEach(btn => {
        btn.classList.remove('active');
    
    })
}
if (event.target.classList.contains('rate-btn')){
    event.target.classList.add('active');
} else {
    event.target.parentElement.classList.add('active');

}
stars_score = event.target.textContent;
console.log(stars_score);

