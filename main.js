

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
    });
  

  
const wordContainer = document.getElementById('word-container');
const words = ['Feel the music', "Let's make collaboration", 'For more experience'];
let currentWordIndex = 0;
  
function changeWord() {
    wordContainer.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }
  
setInterval(changeWord, 2000);

// show hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        } else{
            icon.className = 'uil uil-plus'
        }
    })
})

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Humberger Nav
const nav = document.querySelector('.nav__link');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
};

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
};

closeNavBtn.addEventListener('click', closeNav);




// close nav menu on click
if(document.body.clientWidth < 1024){
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav)
    })
}