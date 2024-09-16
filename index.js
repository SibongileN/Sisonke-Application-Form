
alert("Please ensure you have a gurdian or parent assisting you with the application.")


function welcomeReturner(event){
   
        alert("Welcome back to Sisonke!");
    
}
let returningResponse = document.querySelector("#returning-response") 
returningResponse.addEventListener("click", welcomeReturner)

welcomeReturner()