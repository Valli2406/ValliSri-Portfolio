/*=============== SHOW SIDEBAR ===============*/
const navMenu =document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show__sidebar')
        
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show__sidebar')
    })
}

/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
tabcontent = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target = document.querySelector(tab.dataset.target)

        tabcontent.forEach(tabContents =>{
           tabContents.classList.remove('skills__active')
        } )

        target.classList.add('skills__active')

        tabs.forEach(tab =>{
            tab.classList.remove('skills__active')
         } )
 
         tab.classList.add('skills__active')
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container',{
    selectors:{
        target:'.work__card'
    },
    animation:{
        duration:300
    }
})
/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click",activeWork))
/*===== Work Popup =====*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
   document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
   document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
   document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) =>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__menu a');
  
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50; // Adjust the offset as needed
      const sectionHeight = section.clientHeight;
  
     
      
      if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
        
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active-link');
      }
    });
  });
  
const button = document.querySelector('.uil-share-alt');

button.addEventListener("click",()=>{
   
        const link = "https://valli2406.github.io/ValliSri-Portfolio/"; 
        const tempInput = document.createElement("input");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-9999px";
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Link copied to clipboard!");
    
})










