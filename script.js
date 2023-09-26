const logInDiv = document.createElement("div"); //Skapar åtkomst till diven som inloggninselementen ska ligga i
logInDiv.setAttribute("class", "logInDiv"); //Ger denna div klassen logInDiv

const rulesDiv = document.getElementById("rules"); //Skapar åtkomst till den sista diven 
document.body.insertBefore(logInDiv, rulesDiv); //Lägger in den nya diven mellan de 2 andra

const logInH2 = document.createElement("h2"); //Skapar variabel till en rubrik för inloggningsdiven
const logInInputName = document.createElement("input"); //Skapar variabel till ett inputelement för namnet
const logInInputPassword = document.createElement("input"); //Skapar variabel till ett inputelement för lösenordet
const logInButton = document.createElement("button"); //Skapar variabel till inloggningsknappen

const namn = "Bella"; //Skapar string med användarnamnet
const lösenord = "qwe123"; //Skapar string med lösenordet

//Sätter in inställningar på items i diven logInDiv så som, klass, text, placeholder.
logInH2.innerHTML = "Logga In"; 
logInH2.setAttribute("class", "logInDiv-item");
logInInputName.setAttribute("type", "text");
logInInputName.setAttribute("placeholder", "namn");
logInInputName.setAttribute("class", "logInDiv-item");
logInInputPassword.setAttribute("type", "text");
logInInputPassword.setAttribute("placeholder", "lösenord");
logInInputPassword.setAttribute("class", "logInDiv-item");
logInButton.innerHTML = "Logga in";
logInButton.setAttribute("class", "logInDiv-item");

//Lägger in items i logInDiv:en
logInDiv.appendChild(logInH2);
logInDiv.appendChild(logInInputName);
logInDiv.appendChild(logInInputPassword);
logInDiv.appendChild(logInButton);

/**************************************************** */
const welcomeDiv = document.createElement("div");
welcomeDiv.setAttribute("class", "welcomeDiv");
welcomeDiv.classList.add("welcomeDivHide");
document.body.insertBefore(welcomeDiv, rulesDiv);

const welcomeP = document.createElement("p");
welcomeP.innerHTML = "Välkommen, du är nu inloggad";

welcomeDiv.appendChild(welcomeP);



//Lägger till en eventlyssnare till knappen som inväntar att användaren klickar på den 
logInButton.addEventListener("click", function(){
    if(logInInputName.value === namn && logInInputPassword.value === lösenord){
        logInDiv.classList.add("logInDivHide");
        welcomeDiv.classList.remove("welcomeDivHide");
        localStorage.setItem("userName", namn);
        localStorage.setItem("password", lösenord);
    }  
});
