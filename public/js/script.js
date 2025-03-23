const $ = document;

// get html element 
const hireMe = $.querySelectorAll("#HireMe")
const sendRequst = $.querySelector("#sendRequst")
const subjectInp = $.querySelector("#subjectInp")
const contactForm = $.querySelector("#contactForm")

// create custome element
import { SkillItem } from "../component/skill-item/skill-item.js";
window.customElements.define("skill-item",SkillItem)

import { PortfolioItem } from "../component/portfolio-item/portfolio-item.js";
window.customElements.define("portfolio-item",PortfolioItem)

import { ServicesItem } from "../component/services-item/services-item.js";
window.customElements.define("services-item",ServicesItem)

import { submitForm } from "../component/form-event/form-event.js";
contactForm.addEventListener("submit",submitForm)

// create function
const hireMeRequst = e => {
    subjectInp.value = e.target.innerHTML
}

const sendRequstFunc = e => {
    const target = e.target.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling
    subjectInp.value = target.innerHTML
}

// add event
hireMe.forEach(item => {
    item.addEventListener("click",hireMeRequst)
})
sendRequst.addEventListener("click",sendRequstFunc)