let play = document.getElementsByClassName('playstation')[0];
let xbox = document.getElementsByClassName('xbox')[0];

play.addEventListener('mouseenter', function() { play.classList.add('slide-open') });
play.addEventListener('mouseleave', function() { play.classList.remove('slide-open') });

xbox.addEventListener('mouseenter', function() { xbox.classList.add('slide-open') });
xbox.addEventListener('mouseleave', function() { xbox.classList.remove('slide-open') });