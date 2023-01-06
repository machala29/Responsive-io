const submitButton = document.querySelector('.submit');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const ratingButtons = document.querySelectorAll('.rate-btn');
const resultSpan = document.querySelector('.result span');
let score = 3;

submitButton.addEventListener('click', () => {
  box1.classList.add('hide');
  box2.classList.remove('hide');
});

ratingButtons.forEach(button => {
  button.addEventListener('click', event => {
    ratingButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    const target = event.target.closest('.rate-btn');
    target.classList.add('active');
    score = target.textContent;
    resultSpan.textContent = score;
  });
});
/*const submit = document.querySelector('.submit');
const box1show = document.querySelector('.box1');
const box2show = document.querySelector('.box2');
const ratings = document.querySelectorAll('.rate-btn');
const result = document.getElementsByClassName('.result');
const score = document.querySelector('score');
let scoreShow = 3; 
submit.addEventListener('click', onSubmit);


function onSubmit() {
    box1show.classList.add('hide');
    box2show.classList.remove('hide');
};
ratings.forEach( btn => {
    btn.addEventListener('click', pickbtn);
});

function pickbtn(event) {
    ratings.forEach(btn => {
        btn.classList.remove('active');
    });
    
    if(event.target.classList.contains('ratings')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    scoreShow = event.target.textContent;
    console.log(scoreShow);
    result.innerHTML = '<span>${scoreShow}</span>';
}

/*
ratings.forEach ( btn => {
  btn.addEventListener('click',handleRatingBtnClick);
});


function handleRatingBtnClick(event) {
    ratings.forEach(btn => {
        btn.classList.remove('active');
    
    })
}
if (e.target.classList.contains('ratings')){
    e.target.classList.add('active');
} else {
    e.target.parentElement.classList.remove('active');

}*/


/*for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.add('active')
            ratings[i].classList.remove('active');

        }
        


            
   
    })

     result.addEventListener("click", (e) => {
         e.preventDefault();
        if(e.target.classList = "rate-btn") {
           console.log(e.target.innerText)
        };
        
    }*/
