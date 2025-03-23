const $ = document;

// get element by html file
const formContainer = $.querySelector("#formContainer");
//* org form *//
const contentForm = $.querySelector("#contactForm");
const firstNameInp = $.querySelector("#firstNameInp");
const subjectInp = $.querySelector("#subjectInp");
const lastNameInp = $.querySelector("#lastNameInp");
const phoneNumberInp = $.querySelector("#phoneNumberInp");
const emailInp = $.querySelector("#emailInp");
const textInp = $.querySelector("#textInp");
//* verify form *//
const verifyContainer = $.querySelector("#verifyContainer");
const capCodeEnter = $.querySelector("#capCodeEnter");
const verifyBtn = $.querySelector("#verifyBtn")
const getBack = $.querySelector("#getBack")
//* show stuts *//
const sendCapCode200 = $.querySelector("#sendCapCode200")
const sendMessage200 = $.querySelector("#sendMessage200")
const sendMessage404 = $.querySelector("#sendMessage404")
// create function

let isVerify = false;
let isCheck = false;
let capcodeRandom = 0; 

const submitForm = e => {
    e.preventDefault()
    getValue()
}

const getValue = () => {
    const text = textInp.value;
    const email = emailInp.value;
    const subject = subjectInp.value;
    const lastName = lastNameInp.value;
    const firstName = firstNameInp.value;
    const phoneNumber = phoneNumberInp.value;
    
    if(!isCheck){
        checkValue(text,email,subject,lastName,firstName,phoneNumber)
    }
    if(isVerify){
        sendEmail(text,email,subject,lastName,firstName,phoneNumber)
    }
}

const checkValue = (text,email,subject,lastName,firstName,phoneNumber) => {
    
    let haveError = 0
    
    phoneNumber = convertToPersianNumber(phoneNumber);

    if (!firstName || !/^[\u0600-\u06FF\s]+$/.test(firstName)) {
        modleUnSuccess(firstNameInp ,"لطفاً نام خود را وارد کنید.");
        haveError = 1;
    } else if (!lastName || !/^[\u0600-\u06FF\s]+$/.test(lastName)) {
        modleUnSuccess(lastNameInp ,"لطفاً نام خانوادگی خود را وارد کنید.");
        haveError = 1;
    } else if (!subject || !/^[\u0600-\u06FF\s]+$/.test(subject)) {
        modleUnSuccess(subjectInp ,"لطفاً موضوع را وارد کنید.");
        haveError = 1;
    } else if (!phoneNumber || !/^[\d\u06F0-\u06F9]{11}$/.test(phoneNumber)) {
        modleUnSuccess(phoneNumberInp ,"لطفاً شماره تلفن معتبر وارد کنید.");
        haveError = 1;
    } else if (!email || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        modleUnSuccess(emailInp ,"لطفاً ایمیل معتبر وارد کنید.");
        haveError = 1;
    } else if (!text || !/^[\u0600-\u06FF\s]+$/.test(text)) {
        modleUnSuccess(textInp ,"لطفاً پیام خود را وارد کنید.");
        haveError = 1;
    }
    if(haveError == 0){
        isCheck = true
        contentForm.classList.remove("grid");
        contentForm.classList.add("hidden");
        verifyContainer.classList.remove("hidden");
        verifyContainer.classList.add("block");
        sendCapCode(email,lastName,firstName)
    }
}

const sendCapCode = (email,lastName,firstName) => {

    capcodeRandom = Math.floor(Math.random()*1000000)
    let params = {
            username : `${firstName} ${lastName}`,
            useremail : `${email}`,
            capcode : `${capcodeRandom}`
        }
        emailjs.send("service_s4n3nsf", "template_yp0tw92", params)
        .then(() => {
          sendCapCode200.style.display = "flex";
          setTimeout(() => {
            sendCapCode200.style.display = "none";
          }, 6000);
        })
        .catch(() => { 
          sendMessage404.style.display = "block";
          setTimeout(() => {
            sendMessage404.style.display = "none";
          }, 6000);
        });
      
    
}

const verifyCapCode = () =>{
    const capCodeInp = capCodeEnter.value;
    
    if(capCodeInp == capcodeRandom){
        isVerify = true;
        getValue();
    }
}

const sendEmail = (text,email,subject,lastName,firstName,phoneNumber) => {

    let params = {
            name : `${firstName} ${lastName}`,
            email : `${email}`,
            subject : `${subject}`,
            number : `${phoneNumber}`,
            message : `${text}`
        }
                
    emailjs.send("service_s4n3nsf", "template_iv2j2gw", params)
        .then(() => {
          sendMessage200.style.display = "flex";
          formContainer.style.display = "block";
          verifyContainer.style.display = "none";
          clearForm();
          setTimeout(() => {
            sendMessage200.style.display = "none";
          }, 6000);
        })
        .catch(() => {
          sendMessage404.style.display = "block";
          setTimeout(() => {
            sendMessage404.style.display = "none";
          }, 6000);
        });
      
    
    
}

const clearForm = () => {
    textInp.value = "";
    emailInp.value = "";
    subjectInp.value = "";
    lastNameInp.value = "";
    firstNameInp.value = "";
    phoneNumberInp.value = "";
}

const getBackFunc = () => {
    contentForm.classList.remove("hidden")
    verifyContainer.classList.remove("block")
    contentForm.classList.add("grid")
    verifyContainer.classList.add("hidden")
}

const modleUnSuccess = (input , unsuccessText) => {
    sendMessage404.classList.add("bg-red-500")
    sendMessage404.innerHTML = unsuccessText
    sendMessage404.style.display = "grid"
    input.style.border = "1px solid red"
    setTimeout(() => {
        sendMessage404.style.display = "none"
    },6000)
}

function convertToPersianNumber(number) {
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return number.split('').map(char => {
        const index = englishDigits.indexOf(char);
        return index === -1 ? char : persianDigits[index];
    }).join('');
}
function convertToEnglishNumber(number) {
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return number.split('').map(char => {
        const index = persianDigits.indexOf(char);
        return index === -1 ? char : englishDigits[index];
    }).join('');
}

// set event
verifyBtn.addEventListener("click",verifyCapCode)
getBack.addEventListener("click",getBackFunc)
emailInp.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    e.target.value = convertToEnglishNumber(inputValue);
});
phoneNumberInp.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    e.target.value = convertToPersianNumber(inputValue);
});
// export
export {submitForm}