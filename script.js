const email = document.getElementById("email-input");
const error = document.querySelector(".error-div");
const buttonSubmit = document.getElementById("submit-email");
const email1 = document.getElementById("email-input1");
const error1 = document.getElementById("error-div1");
const buttonSubmit1 = document.getElementById("submit-email1");




let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input, errorParam){

    if(mailRegex.test(input.value)){
        input.classList.add('success');
        input.classList.remove('error');
        errorParam.firstElementChild.style.display = "none";
        errorParam.lastElementChild.style.display = "block"; 

    } else if(!mailRegex.test(input.value)){
        input.classList.add('error');
        input.classList.remove('success');
        errorParam.firstElementChild.style.display = "block";
        errorParam.lastElementChild.style.display = "none"; 
        }
        
    }
    
buttonSubmit.addEventListener('click', (event)=> {
    event.preventDefault()
    testMail(email, error);
})


buttonSubmit1.addEventListener('click', (event)=> {
    event.preventDefault()
    testMail(email1, error1);
})