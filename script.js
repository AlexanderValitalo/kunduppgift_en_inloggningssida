/*************************Inloggningsuppgifter*************************/
const namn = "Bella"; //Skapar en konstant stringvariabel med användarnamnet
const lösenord = "qwe123"; //Skapar en konstant stringvariabel med lösenordet
/**********************************************************************/

/*************************Variabel till sista diven för placering av andra divs*************************/
const rulesDiv = document.getElementById("rules");  
/*******************************************************************************************************/

/*************************************************Inloggningsdiven*************************************************/
const logInDiv = document.createElement("div"); //Skapar åtkomst till diven som inloggninselementen ska ligga i
logInDiv.setAttribute("class", "logInDiv"); //Ger denna div klassen logInDiv
document.body.insertBefore(logInDiv, rulesDiv); //Lägger in den nya diven mellan de 2 andra

const logInH2 = document.createElement("h2"); //Skapar variabel till en rubrik för inloggningsdiven
const logInInputName = document.createElement("input"); //Skapar variabel till ett inputelement för namnet
const logInInputPassword = document.createElement("input"); //Skapar variabel till ett inputelement för lösenordet
const logInButton = document.createElement("button"); //Skapar variabel till inloggningsknappen

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
/*******************************************************************************************************************/

/*************************Välkomstdiven*************************/
const welcomeDiv = document.createElement("div");
welcomeDiv.setAttribute("class", "welcomeDiv");
welcomeDiv.classList.add("welcomeDivHide");
document.body.insertBefore(welcomeDiv, rulesDiv);

const welcomeP = document.createElement("p");
welcomeP.innerHTML = "Välkommen, du är nu inloggad"; 
welcomeDiv.appendChild(welcomeP);
/**************************************************************/

/*************************Medlemskapsdiven*************************/
const memberDiv = document.createElement("div");
memberDiv.setAttribute("class", "memberDiv");
memberDiv.classList.add("memberDivHide");
document.body.insertBefore(memberDiv, rulesDiv);

const memberH2 = document.createElement("h2");
const memberP = document.createElement("p");
const memberSignOutButton = document.createElement("button");

memberH2.innerHTML = "Hej " + namn + "!";
memberP.innerHTML = "Här kan du se ditt medlemskap";
memberSignOutButton.innerHTML = "Logga ut";

memberDiv.appendChild(memberH2);
memberDiv.appendChild(memberP);
memberDiv.appendChild(memberSignOutButton);
/******************************************************************/

/*************************Ogiltig inloggningsdiv*************************/
const invalidLogDiv = document.createElement("div");
invalidLogDiv.setAttribute("class", "invalidLogDiv");
invalidLogDiv.classList.add("invalidLogDivHide");
document.body.insertBefore(invalidLogDiv, logInDiv);

const invalidLogP = document.createElement("p");
invalidLogP.innerHTML = "Ogiltiga inloggningsuppgifter";
invalidLogP.setAttribute("id", "red");
invalidLogDiv.appendChild(invalidLogP);
/************************************************************************/

/****Lägger till en eventlyssnare till inloggningsknappen som inväntar att användaren klickar på den****/
logInButton.addEventListener("click", function(){
    //Om namnet och lösenordet är rätt så loggar vi in
    if(logInInputName.value === namn && logInInputPassword.value === lösenord){
        logInDisplay();
        
        localStorage.setItem("isLoggedIn", logInInputName.value); //namnet i inputelementets ruta sparas

        //Om vi inte har felmeddelandet gömd så gömmer vi den
        if(!invalidLogDiv.classList.contains("invalidLogDivHide")){
            invalidLogDiv.classList.add("invalidLogDivHide");
        }
    }
    //Om vi försöker logga in med felaktiga inloggningsuppgifter så visar vi felmeddelandet
    else if(invalidLogDiv.classList.contains("invalidLogDivHide")){
        invalidLogDiv.classList.remove("invalidLogDivHide");
    }  
});
/*******************************************************************************************************/

/****Lägger till en eventlyssnare till utloggningsknappen som inväntar att användaren klickar på den****/
memberSignOutButton.addEventListener("click", function(){
    //Raderna nedan återställer allt så att vi kommer tillbaka till "inloggssidan" igen
    welcomeDiv.classList.add("welcomeDivHide");
    memberDiv.classList.add("memberDivHide");
    logInDiv.classList.remove("logInDivHide");
    localStorage.clear();
    logInInputName.value = "";
    logInInputPassword.value = "";
});
/*******************************************************************************************************/

/**********Funktion för att visa sidans uttseende vid start**********/
function logInDisplay(){
    logInDiv.classList.add("logInDivHide");
    welcomeDiv.classList.remove("welcomeDivHide");
    memberDiv.classList.remove("memberDivHide");
}
/********************************************************************/

/*****Denna if:en kollar om vi är inloggade, och om vi är det så kör vi funktionen logInDisplay*****/
if(localStorage.getItem("isLoggedIn") !== null){
    logInDisplay();
}
/***************************************************************************************************/