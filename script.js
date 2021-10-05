let myForm = document.getElementById("myForm");
let victory = document.getElementById("victory");
victory.hidden = true;

myForm.addEventListener("submit" ,function(e){

    let myInputUser = document.getElementById("username");
    let myRegExpUser = /^[\w]{6,12}$/;

    let myInputMail = document.getElementById("mail");
    let myRegExpMail = /^[\S]{1,56}@(\w){1,67}.[A-Za-z]{2,3}$/;

    let myInputDateNaiss = document.getElementById("datenaiss");
    let myRegExDateNaiss = /^[0-3][0-9]\/[0-1][0-9]\/([0-9]){4}$/;

    let myIntputNum = document.getElementById("num");
    let myRegExNum = /^0[67]( ?\d){8}$/;

    // VÉRIFICATION USERNAME
    if(myInputUser.value.trim() == ""){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Le champs pseudonyme est requis !</h3>";
        myError.style.color = 'red';
        e.preventDefault();
        
    }else if(myRegExpUser.test(myInputUser.value.trim()) == false){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Merci de rentrer un caractère alphabétiques</h3>";
        myError.style.color = 'red';
        e.preventDefault();
    }

    //VÉRIFICATION MAIL
    if(myInputMail.value.trim() == ""){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Le champs mail est requis !</h3>";
        myError.style.color = 'red';
        e.preventDefault();
        
    }else if(myRegExpMail.test(myInputMail.value.trim()) == false){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Merci de rentrer une adresse mail correct</h3>";
        myError.style.color = 'red';
        e.preventDefault();
    }

    //VÉRIFICATION DATE DE NAISSANCE
    if(myInputDateNaiss.value.trim() == ""){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Le champs date de naissance est requis !</h3>";
        myError.style.color = 'red';
        e.preventDefault();
        
    }else if(myRegExDateNaiss.test(myInputDateNaiss.value.trim()) == false){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Merci de rentrer une date de naissance sous le format JJ/MM/AAAA</h3>";
        myError.style.color = 'red';
        e.preventDefault();
    }

        //VÉRIFICATION DATE DE NAISSANCE
    if(myInputDateNaiss.value.trim() == ""){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Le champs date de naissance est requis !</h3>";
        myError.style.color = 'red';
        e.preventDefault();
        
    }else if(myRegExDateNaiss.test(myInputDateNaiss.value.trim()) == false){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Merci de rentrer une date de naissance sous le format JJ/MM/AAAA</h3>";
        myError.style.color = 'red';
        e.preventDefault();
    }

        //VÉRIFICATION NUMÉRO
    if(myInputDateNaiss.value.trim() == ""){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Le champs numéro de téléphone est requis !</h3>";
        myError.style.color = 'red';
        e.preventDefault();
        
    }else if(myRegExNum.test(myIntputNum.value.trim()) == false){
        let myError = document.getElementById("error");
        myError.innerHTML = "<h3>Merci de rentrer un numéro de téléphone correct</h3>";
        myError.style.color = 'red';
        e.preventDefault();
    }


});


function TestRegex(){
    let zone = document.getElementById("zone").value.trim();
    let regex = new RegExp(zone);

    let zoneTest = document.getElementById("zoneJeu");

    if(regex.test(zoneTest.value.trim()) != false){
        let result = document.getElementById("Jeu");
        result.innerHTML = "<h3>Fonctionnel !</h3>";
        result.style.color = 'green';
        victory.hidden = false;
    }else{
        let result = document.getElementById("Jeu");
        result.innerHTML = "<h3>Non Fonctionnel !</h3>";
        result.style.color = 'red';
        victory.hidden = true;
    }
}