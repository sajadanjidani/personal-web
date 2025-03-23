const $ = document;
let isRun = false
// get element

// skills
const Skills90 = $.querySelectorAll("#Skills90")
const Skills80 = $.querySelectorAll("#Skills80")
const Skills75 = $.querySelectorAll("#Skills75")
// R - U - L - B
const rtl = $.querySelectorAll("#rtl") 
const utb = $.querySelectorAll("#utb")
const ltr = $.querySelectorAll("#ltr") 
const btu = $.querySelectorAll("#btu") 
// regester Word
const regesterWord = $.querySelectorAll("#regesterWord")
const paraWord = $.querySelector("#paraWord")

// create function
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
    const target = entry.target
    const animate = target.id
    if(animate.includes("Skills")){
        const animateTarget = entry.target.shadowRoot.querySelector("#perecentSkill")
        if (entry.isIntersecting) {
            animateTarget.classList.add(`animate-${animate}`)   
        }
    }
    if(animate.includes("rtl")){
        if (entry.isIntersecting) {
            target.classList.add(`animate-${animate}`)
            target.classList.remove(`opacity-0`)
        }
    }
    if(animate.includes("utb")){
        if (entry.isIntersecting) {
            target.classList.remove(`opacity-0`)
            target.classList.add(`animate-${animate}`)
        }
    }
    if(animate.includes("ltr")){
        if (entry.isIntersecting) {
            target.classList.add(`animate-${animate}`)
            target.classList.remove(`opacity-0`)
        }
    }
    if(animate.includes("btu")){
        if (entry.isIntersecting) {
            target.classList.add(`animate-${animate}`)
            target.classList.remove(`opacity-0`)
        }
    }
    if(animate.includes("regesterWord")){
        if (entry.isIntersecting) {
            if(!isRun){
                regesterWordFunc()
                paraWord.classList.remove("child:opacity-0")
                paraWord.classList.add("child:opacity-100")
            }
        }
    }
});},{
    threshold: 0.5 
});

const setAnimation = elements => {
    elements.forEach(element => {
        observer.observe(element);
    });
};

const regesterWordFunc = () => {
    const textElements = $.querySelectorAll('.text');
        
    textElements.forEach((textElement, textIndex) => {
    
        const cleanText = textElement.textContent.trim();
        const words = cleanText.split(' ').map(word => word.trim());
    
        textElement.innerHTML = words.map(word => `<span class="word invisible">${word}</span>`).join(' ');
    
        let index = 0;
        const wordElements = textElement.querySelectorAll('.word');
    
        function showNextWord() {
            if (index < wordElements.length) {
                wordElements[index].classList.remove('invisible');
                wordElements[index].classList.add('visible', 'transition-all', 'duration-300');
                index++;
                setTimeout(showNextWord, 50);
            }
        }
    
        setTimeout(() => {
            showNextWord();
            }, textIndex * 3000);
        });
        isRun = true
}
// set animate

// skills
setAnimation(Skills90)
setAnimation(Skills80)
setAnimation(Skills75)
// R - U - L - B
setAnimation(rtl)
setAnimation(utb)
setAnimation(ltr)
setAnimation(btu)
// regester Word
setAnimation(regesterWord)