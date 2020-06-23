let body=document.querySelector("body");
body.style.overflowX="hidden";
/*systeme coordonnées*/
class Detail {
    constructor(nom, adresse, ville, telephone, mail, age, github, etat) {
        this.nom = nom;
        this.adresse = adresse;
        this.ville = ville;
        this.telephone = telephone;
        this.mail = mail;
        this.age = age;
        this.github = github;
        this.etat = etat;
    }
    afficher() {
        let paragraphe0 = document.getElementById("donne");
        let titre = document.createElement("h2");
        let div = document.createElement("div");
        let paragraphe1 = document.createElement("p");
        let paragraphe2 = document.createElement("p");
        let paragraphe3 = document.createElement("p");
        let paragraphe4 = document.createElement("a");
        paragraphe4.setAttribute("href", "mailto:mhedot@neuf.fr");
        let paragraphe5 = document.createElement("p");
        let paragraphe6 = document.createElement("p");
        let paragraphe7 = document.createElement("p");
        titre.style.color = '#A63535';
        titre.style.fontSize = '1.25em';
        paragraphe1.style.fontSize = '0.75em';
        paragraphe2.style.fontSize = '1em';
        paragraphe3.style.fontSize = '1em';
        paragraphe4.style.fontSize = '1em';
        paragraphe5.style.fontSize = '1em';
        paragraphe6.style.fontSize = '1em';
        paragraphe7.style.fontSize = '1em';
        paragraphe1.style.color = '#A63535';
        paragraphe2.style.color = '#A63535';
        paragraphe3.style.color = '#A63535';
        paragraphe4.style.color = '#A63535';
        paragraphe5.style.color = '#A63535';
        paragraphe6.style.color = '#A63535';
        paragraphe7.style.color = '#A63535';
        titre.style.marginLeft = "10%";
        div.style.marginLeft = '10%';
        titre.textContent = this.nom;
        paragraphe1.textContent = this.adresse;
        paragraphe2.textContent = this.ville;
        paragraphe3.textContent = this.telephone;
        paragraphe4.textContent = this.mail;
        paragraphe5.textContent = this.age;
        paragraphe6.textContent = this.github;
        paragraphe7.textContent = this.etat;
        paragraphe0.appendChild(titre);
        titre.appendChild(div);
        div.appendChild(paragraphe1);
        div.appendChild(paragraphe2);
        div.appendChild(paragraphe3);
        div.appendChild(paragraphe4);
        div.appendChild(paragraphe5);
        div.appendChild(paragraphe6);
        div.appendChild(paragraphe7);
    };

};

let requete = document.getElementById("requete");
requete.addEventListener("click", function () {
    donnees();
});

function donnees() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", './coordonnees.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        let paragraphe0 = document.getElementById("donne");
        paragraphe0.innerHTML = "";

        let donJson = this.response;

        donJson.forEach(element => {
            let coor = new Detail(element.nom, element.adresse, element.ville, element.telephone, element.mail, element.github, element.etat);
            coor.afficher();
        });
    });
    xhr.send();
};
/*systeme heure*/
let heure = document.getElementById("heure");
heure.addEventListener('mouseenter', function () {
    setInterval(function () {
        let data = new Date();
        heure.innerText = data.toLocaleTimeString();
    }, 1000);

});
heure.style.marginLeft = "10%";
heure.style.paddingTop = "1%";
heure.style.paddingLeft = "1%";

heure.fontSize = "3em";


/* systeme  compétences humaines*/

let info = document.getElementById("CompetenceHum");
info.addEventListener("mouseenter", function () {
    let message = "les notes correspondant à des points ont été données sur 100 mais ne représentents pas un %"
    console.log(message);
    alert(message);
});
let article3 = document.getElementById("art3");
article3.addEventListener("mouseenter", function () {
    let ang = document.getElementById('angl');
    ang.innerText = 50;
    ang.style.color = "white";
    ang.style.marginLeft = "-5%";
    ang.style.fontSize = "1.5em";
    let fiab = document.getElementById("fiab");
    fiab.innerText = 50;
    fiab.style.color = "white";
    fiab.style.fontSize = "1.5em";
    fiab.style.marginLeft = "-5%";
    let cur = document.getElementById("cur");
    cur.innerText = 50;
    cur.style.color = "white";
    cur.style.fontSize = "1.5em";
    cur.style.marginLeft = "-5%";
    let auton = document.getElementById("auton");
    auton.innerText = 50;
    auton.style.color = "white";
    auton.style.fontSize = "1.5em";
    auton.style.marginLeft = "-5%";
    let lead = document.getElementById("lead");
    lead.innerText = 50;
    lead.style.color = "white";
    lead.style.fontSize = "1.5em";
    lead.style.marginLeft = "-5%";
    let equip = document.getElementById('Equip');
    equip.innerText = 100;
    equip.style.color = "white";
    equip.style.fontSize = "1.5em";
    equip.style.marginLeft = "-5%";
    let adap = document.getElementById('adap');
    adap.innerText = 100;
    adap.style.color = "white";
    adap.style.fontSize = "1.5em";
    adap.style.marginLeft = "-5%";
    let socia = document.getElementById('socia');
    socia.innerText = 80;
    socia.style.color = "white";
    socia.style.fontSize = "1.5em";
    socia.style.marginLeft = "-5%";
    let secu = document.getElementById('secu');
    secu.innerText = 50;
    secu.style.color = "white";
    secu.style.fontSize = "1.5em";
    secu.style.marginLeft = "-5%";
});

article3.addEventListener("mouseleave", function () {
    let ang = document.getElementById('angl');
    ang.innerText = "?";
    ang.style.color = "white";
    ang.style.marginLeft = "5%";
    ang.style.fontSize = "1.5em";
    let fiab = document.getElementById("fiab");
    fiab.innerText = "?";
    fiab.style.color = "white";
    fiab.style.fontSize = "1.5em";
    fiab.style.marginLeft = "5%";
    let cur = document.getElementById("cur");
    cur.innerText = "?";
    cur.style.color = "white";
    cur.style.fontSize = "1.5em";
    cur.style.marginLeft = "5%";
    let auton = document.getElementById("auton");
    auton.innerText = "?";
    auton.style.color = "white";
    auton.style.fontSize = "1.5em";
    auton.style.marginLeft = "5%";
    let lead = document.getElementById("lead");
    lead.innerText = "?";
    lead.style.color = "white";
    lead.style.fontSize = "1.5em";
    lead.style.marginLeft = "5%";
    let equip = document.getElementById('Equip');
    equip.innerText = "?";
    equip.style.color = "white";
    equip.style.fontSize = "1.5em";
    equip.style.marginLeft = "5%";
    let adap = document.getElementById('adap');
    adap.innerText = "?";
    adap.style.color = "white";
    adap.style.fontSize = "1.5em";
    adap.style.marginLeft = "5%";
    let socia = document.getElementById('socia');
    socia.innerText = "?";
    socia.style.color = "white";
    socia.style.fontSize = "1.5em";
    socia.style.marginLeft = "5%";
    let secu = document.getElementById('secu');
    secu.innerText = "?";
    secu.style.color = "white";
    secu.style.fontSize = "1.5em";
    secu.style.marginLeft = "5%";
});
/*possible fonction pour simplifier: demander?
let article3= document.getElementById("art3");
article3.addEventListener("mouseenter",function(id,value,color,margin,size){
    let ang= document.getElementById(this.id);
    ang.innerText=this.value;
    ang.style.color=this.color;
    ang.style.marginLeft="this.margin";
    ang.style.fontSize="this.size";});



let article3= document.getElementById("art3");demander?
article3.addEventListener("mouseleave",function(id,value,color,margin,size){
    let ang= document.getElementById(this.id);
    ang.innerText=this.value;
    ang.style.color=this.color;
    ang.style.marginLeft="this.margin";
    ang.style.fontSize="this.size";
});    


*/
/*systeme competences metiers*/


let caption=document.getElementById("caption");
caption.addEventListener("click",function(){
    
let tablefront= document.getElementById("tablefront");
tablefront.marginLeft='100%';
let xhr = new XMLHttpRequest();
    xhr.open('GET','./competence_metier_front.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
       let donneJson = this.response;
        console.log(donneJson);
        
        donneJson.forEach(element => {
         let tr = document.createElement("tr");
            let tdint=document.createElement('td');
            tdint.textContent= element.competences;
           tr.appendChild(tdint);
          tr=affichertd(tr,element.evaluer);
            tr=affichertd(tr,element.dupliquer);
           tr=affichertd(tr,element.analyser);
            tr=affichertd(tr,element.comprendre);
            tr=affichertd(tr,element.concevoir);
           tr=affichertd(tr,element.inventer);
            tablefront.appendChild(tr);
    });
       
    });
    xhr.send();

    function affichertd(tr,niveau) {
        let td= document.createElement("td"); 
        let madiv=document.createElement("div");
        madiv.setAttribute("class","rond");
   if (niveau =="compris"){
            madiv.style.backgroundColor ="#3D3434";}
            else if(niveau =="moyennement_compris") {
            madiv.style.backgroundColor = "#732A2A";
        } else if(niveau =="pas_compris") {
            madiv.style.backgroundColor = "#A63535";
        } else (div.style.backgroundColor = "white");
        td.appendChild(madiv);
        tr.appendChild(td);
       return tr;
}
});
let captionback=document.getElementById("captionback");
captionback.addEventListener('click',function () {
    

let tableback= document.getElementById("tableback");
tableback.marginLeft='-5%';
let xhr1 = new XMLHttpRequest();
    xhr1.open('GET','./competence_metier_back.json');
   xhr1.responseType = 'json';
    xhr1.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
       let donneJson = this.response;
        console.log(donneJson);
        
        donneJson.forEach(element => {
         let tr = document.createElement("tr");
            let tdint2=document.createElement('td');
            tdint2.textContent= element.competences;
           tr.appendChild(tdint2);
           tr=affichertd(tr,element.evaluer);
            tr=affichertd(tr,element.dupliquer);
           tr=affichertd(tr,element.analyser);
            tr=affichertd(tr,element.comprendre);
            tr=affichertd(tr,element.concevoir);
            tr=affichertd(tr,element.inventer);
            tableback.appendChild(tr);
    });
       
    });
xhr1.send();

    function affichertd(tr,niveau) {
        let td= document.createElement("td"); 
        let madiv=document.createElement("div");
        madiv.setAttribute("class","rond");
        if (niveau =="compris"){
            madiv.style.backgroundColor ="#3D3434";}
            else if(niveau =="moyennement_compris") {
            madiv.style.backgroundColor = "#732A2A";
        } else if(niveau =="pas_compris") {
            madiv.style.backgroundColor = "#A63535";
        } else (madiv.style.backgroundColor = "white");
        td.appendChild(madiv);
        tr.appendChild(td);
       return tr;
}

});

/*table back
let tableback= document.getElementById("tableback");
let xhr = new XMLHttpRequest();
    xhr.open('GET','./competence_metier_back.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        console.log(donneJson);
        
        donneJson.forEach(element => {
            let tr = document.createElement("tr");
            let tdint=document.createElement('td');
            tdint.textContent= element.competences;
            tr.appendChild(tdint);
            tr=affichertd(tr,element.evaluer);
            tr=affichertd(tr,element.dupliquer);
            tr=affichertd(tr,element.analyser);
            tr=affichertd(tr,element.comprendre);
            tr=affichertd(tr,element.concevoir);
            tr=affichertd(tr,element.inventer);
            tableback.appendChild(tr);
        });
       
    });
    xhr.send();

    function affichertd(tr,niveau) {
        let td= document.createElement("td"); 
        let div=document.createElement("div");
        div.setAttribute("class","rond");
        if (niveau =="compris"){
            div.style.backgroundColor ="#3D3434";}
            else if(niveau =="moyennement_compris") {
            div.style.backgroundColor = "#732A2A";
        } else if(niveau =="pas_compris") {
            div.style.backgroundColor = "#A63535";
        } else (div.style.backgroundColor = "white");
        td.appendChild(div);
        tr.appendChild(td);
        return tr;
}*/
/*systeme competences techniques*/
/*cas html*/

class Technologie {
    constructor(competence, evaluer, dupliquer, analyser, comprendre, concevoir, inventer) {
        this.competence = competence;
        this.evaluer=evaluer  ;
        this.dupliquer=dupliquer;
        this.analyser=analyser;
        this.comprendre=comprendre;
        this.concevoir=concevoir;
        this.inventer= inventer  ;
    }
    afficher() {
        console.log(this);
        let technique = document.getElementById("technique");
        technique.innerHTML = this.competence;

        let star1 = document.getElementById("star1");
        if (this.evaluer =="compris"){
            star1.style.backgroundColor ="#3D3434";}
            else if(this.evaluer =="moyennement_compris") {
            star1.style.backgroundColor = "#732A2A";
        } else if (this.evaluer =="non_compris") {
            star1.style.backgroundColor = "#A63535";
        } else (star1.style.backgroundColor = "white");

        let star2 = document.getElementById("star2");
        if (this.dupliquer =="compris") {
            star2.style.backgroundColor ="#3D3434";
        } else if (this.dupliquer =="moyennement_compris") {
            star2.style.backgroundColor ="#732A2A";
        } else if (this.dupliquer =="non_compris") {
            star2.style.backgroundColor ="#A63535";
        } else (star2.style.backgroundColor ="white");

        let star3 = document.getElementById("star3");
        if (this.analyser =="compris") {
            star3.style.backgroundColor = "#3D3434";
        } else if (this.analyser =="moyennement_compris") {
            star3.style.backgroundColor ="#732A2A";
        } else if (this.analyser =="non_compris") {
            star3.style.backgroundColor ="#A63535";
        } else (star3.style.backgroundColor ="white");

        let star4 = document.getElementById("star4");
        if (this.comprendre == "compris") {
            star4.style.backgroundColor ="#3D3434";
        } else if (this.comprendre =="moyennement_compris") {
            star4.style.backgroundColor = "#732A2A";
        } else if (this. comprendre=="non_compris") {
            star4.style.backgroundColor ="#A63535";
        } else (star4.style.backgroundColor ="white");

        let star5 = document.getElementById("star5");
        if (this.concevoir =="compris") {
            star5.style.backgroundColor ="#3D3434";
        } else if (this.concevoir =="moyennement_compris") {
            star5.style.backgroundColor ="#732A2A";
        } else if (this.concevoir =="non_compris") {
            star5.style.backgroundColor ="#A63535";
        } else (star5.style.backgroundColor ="white");

        let star6 = document.getElementById("star6");
        if (this.inventer =="compris") {
            star6.style.backgroundColor ="#3D3434";
        } else if (this.inventer =="moyennement_compris") {
            star6.style.backgroundColor ="#732A2A";
        } else if (this.inventer =="non_compris") {
            star6.style.backgroundColor ="#A63535";
        } else (star6.style.backgroundColor ="white");
    }
}
let tech1 = document.getElementById("Chtml");
tech1.addEventListener("click", function () {
    technique();
});
function technique() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './competence_html.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        donneJson.forEach(element => {
            var techno = new Technologie(element.competences, element.evaluer, element.dupliquer, element.analyser, element.comprendre, element.concevoir, element.inventer);//instance de class et element.titre=titreJSON, element.contenu=textJSOn
            console.log("techno");
            console.log(element.competences);
            console.log(techno.competences);
            techno.afficher();   
        });
        console.log(xhr.response);
        console.log(typeof xhr.response);
    });
    xhr.send();
};
/*cas javascript*/
class Technologie1 {
    constructor(competence, evaluer, dupliquer, analyser, comprendre, concevoir, inventer) {
        this.competence = competence;
        this.evaluer=evaluer  ;
        this.dupliquer=dupliquer;
        this.analyser=analyser;
        this.comprendre=comprendre;
        this.concevoir=concevoir;
        this.inventer= inventer  ;
    }
    afficher() {
        console.log(this);
        let technique = document.getElementById("technique");
        technique.innerHTML = this.competence;

        let star1 = document.getElementById("star1");
        if (this.evaluer =="compris"){
            star1.style.backgroundColor ="#3D3434";}
            else if(this.evaluer =="moyennement_compris") {
            star1.style.backgroundColor = "#732A2A";
        } else if (this.evaluer =="non_compris") {
            star1.style.backgroundColor = "#A63535";
        } else (star1.style.backgroundColor = "white");

        let star2 = document.getElementById("star2");
        if (this.dupliquer =="compris") {
            star2.style.backgroundColor ="#3D3434";
        } else if (this.dupliquer =="moyennement_compris") {
            star2.style.backgroundColor ="#732A2A";
        } else if (this.dupliquer =="non_compris") {
            star2.style.backgroundColor ="#A63535";
        } else (star2.style.backgroundColor ="white");

        let star3 = document.getElementById("star3");
        if (this.analyser =="compris") {
            star3.style.backgroundColor = "#3D3434";
        } else if (this.analyser =="moyennement_compris") {
            star3.style.backgroundColor ="#732A2A";
        } else if (this.analyser =="non_compris") {
            star3.style.backgroundColor ="#A63535";
        } else (star3.style.backgroundColor ="white");

        let star4 = document.getElementById("star4");
        if (this.comprendre == "compris") {
            star4.style.backgroundColor ="#3D3434";
        } else if (this.comprendre =="moyennement_compris") {
            star4.style.backgroundColor = "#732A2A";
        } else if (this. comprendre=="non_compris") {
            star4.style.backgroundColor ="#A63535";
        } else (star4.style.backgroundColor ="white");

        let star5 = document.getElementById("star5");
        if (this.concevoir =="compris") {
            star5.style.backgroundColor ="#3D3434";
        } else if (this.concevoir =="moyennement_compris") {
            star5.style.backgroundColor ="#732A2A";
        } else if (this.concevoir =="non_compris") {
            star5.style.backgroundColor ="#A63535";
        } else (star5.style.backgroundColor ="white");

        let star6 = document.getElementById("star6");
        if (this.inventer =="compris") {
            star6.style.backgroundColor ="#3D3434";
        } else if (this.inventer =="moyennement_compris") {
            star6.style.backgroundColor ="#732A2A";
        } else if (this.inventer =="non_compris") {
            star6.style.backgroundColor ="#A63535";
        } else (star6.style.backgroundColor ="white");
    }
}
let tech2 = document.getElementById("Javascript");
tech2.addEventListener("click", function () {
    technique2();
});
function technique2() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './competence_javascript.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        donneJson.forEach(element => {
            var techno = new Technologie1(element.competences, element.evaluer, element.dupliquer, element.analyser, element.comprendre, element.concevoir, element.inventer);//instance de class et element.titre=titreJSON, element.contenu=textJSOn
            console.log("techno");
            console.log(element.competences);
            console.log(techno.competences);
            techno.afficher();   
        });
        console.log(xhr.response);
        console.log(typeof xhr.response);
    });
    xhr.send();
};

/*cas php*/
class Technologie2 {
    constructor(competence, evaluer, dupliquer, analyser, comprendre, concevoir, inventer) {
        this.competence = competence;
        this.evaluer=evaluer  ;
        this.dupliquer=dupliquer;
        this.analyser=analyser;
        this.comprendre=comprendre;
        this.concevoir=concevoir;
        this.inventer= inventer  ;
    }
    afficher() {
        console.log(this);
        let technique = document.getElementById("technique");
        technique.innerHTML = this.competence;

        let star1 = document.getElementById("star1");
        if (this.evaluer =="compris"){
            star1.style.backgroundColor ="#3D3434";}
            else if(this.evaluer =="moyennement_compris") {
            star1.style.backgroundColor = "#732A2A";
        } else if (this.evaluer =="non_compris") {
            star1.style.backgroundColor = "#A63535";
        } else (star1.style.backgroundColor = "white");

        let star2 = document.getElementById("star2");
        if (this.dupliquer =="compris") {
            star2.style.backgroundColor ="#3D3434";
        } else if (this.dupliquer =="moyennement_compris") {
            star2.style.backgroundColor ="#732A2A";
        } else if (this.dupliquer =="non_compris") {
            star2.style.backgroundColor ="#A63535";
        } else (star2.style.backgroundColor ="white");

        let star3 = document.getElementById("star3");
        if (this.analyser =="compris") {
            star3.style.backgroundColor = "#3D3434";
        } else if (this.analyser =="moyennement_compris") {
            star3.style.backgroundColor ="#732A2A";
        } else if (this.analyser =="non_compris") {
            star3.style.backgroundColor ="#A63535";
        } else (star3.style.backgroundColor ="white");

        let star4 = document.getElementById("star4");
        if (this.comprendre == "compris") {
            star4.style.backgroundColor ="#3D3434";
        } else if (this.comprendre =="moyennement_compris") {
            star4.style.backgroundColor = "#732A2A";
        } else if (this. comprendre=="non_compris") {
            star4.style.backgroundColor ="#A63535";
        } else (star4.style.backgroundColor ="white");

        let star5 = document.getElementById("star5");
        if (this.concevoir =="compris") {
            star5.style.backgroundColor ="#3D3434";
        } else if (this.concevoir =="moyennement_compris") {
            star5.style.backgroundColor ="#732A2A";
        } else if (this.concevoir =="non_compris") {
            star5.style.backgroundColor ="#A63535";
        } else (star5.style.backgroundColor ="white");

        let star6 = document.getElementById("star6");
        if (this.inventer =="compris") {
            star6.style.backgroundColor ="#3D3434";
        } else if (this.inventer =="moyennement_compris") {
            star6.style.backgroundColor ="#732A2A";
        } else if (this.inventer =="non_compris") {
            star6.style.backgroundColor ="#A63535";
        } else (star6.style.backgroundColor ="white");
    }
}
let tech3 = document.getElementById("php");
tech3.addEventListener("click", function () {
    technique3();
});
function technique3() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './competence_php.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        donneJson.forEach(element => {
            var techno = new Technologie2(element.competences, element.evaluer, element.dupliquer, element.analyser, element.comprendre, element.concevoir, element.inventer);//instance de class et element.titre=titreJSON, element.contenu=textJSOn
            console.log("techno");
            console.log(element.competences);
            console.log(techno.competences);
            techno.afficher();   
        });
        console.log(xhr.response);
        console.log(typeof xhr.response);
    });
    xhr.send();
};
/*MysQL*/
class Technologie3 {
    constructor(competence, evaluer, dupliquer, analyser, comprendre, concevoir, inventer) {
        this.competence = competence;
        this.evaluer=evaluer  ;
        this.dupliquer=dupliquer;
        this.analyser=analyser;
        this.comprendre=comprendre;
        this.concevoir=concevoir;
        this.inventer= inventer  ;
    }
    afficher() {
        console.log(this);
        let technique = document.getElementById("technique");
        technique.innerHTML = this.competence;

        let star1 = document.getElementById("star1");
        if (this.evaluer =="compris"){
            star1.style.backgroundColor ="#3D3434";}
            else if(this.evaluer =="moyennement_compris") {
            star1.style.backgroundColor = "#732A2A";
        } else if (this.evaluer =="non_compris") {
            star1.style.backgroundColor = "#A63535";
        } else (star1.style.backgroundColor = "white");

        let star2 = document.getElementById("star2");
        if (this.dupliquer =="compris") {
            star2.style.backgroundColor ="#3D3434";
        } else if (this.dupliquer =="moyennement_compris") {
            star2.style.backgroundColor ="#732A2A";
        } else if (this.dupliquer =="non_compris") {
            star2.style.backgroundColor ="#A63535";
        } else (star2.style.backgroundColor ="white");

        let star3 = document.getElementById("star3");
        if (this.analyser =="compris") {
            star3.style.backgroundColor = "#3D3434";
        } else if (this.analyser =="moyennement_compris") {
            star3.style.backgroundColor ="#732A2A";
        } else if (this.analyser =="non_compris") {
            star3.style.backgroundColor ="#A63535";
        } else (star3.style.backgroundColor ="white");

        let star4 = document.getElementById("star4");
        if (this.comprendre == "compris") {
            star4.style.backgroundColor ="#3D3434";
        } else if (this.comprendre =="moyennement_compris") {
            star4.style.backgroundColor = "#732A2A";
        } else if (this. comprendre=="non_compris") {
            star4.style.backgroundColor ="#A63535";
        } else (star4.style.backgroundColor ="white");

        let star5 = document.getElementById("star5");
        if (this.concevoir =="compris") {
            star5.style.backgroundColor ="#3D3434";
        } else if (this.concevoir =="moyennement_compris") {
            star5.style.backgroundColor ="#732A2A";
        } else if (this.concevoir =="non_compris") {
            star5.style.backgroundColor ="#A63535";
        } else (star5.style.backgroundColor ="white");

        let star6 = document.getElementById("star6");
        if (this.inventer =="compris") {
            star6.style.backgroundColor ="#3D3434";
        } else if (this.inventer =="moyennement_compris") {
            star6.style.backgroundColor ="#732A2A";
        } else if (this.inventer =="non_compris") {
            star6.style.backgroundColor ="#A63535";
        } else (star6.style.backgroundColor ="white");
    }
}
let tech4 = document.getElementById("mysql");
tech4.addEventListener("click", function () {
    technique4();
});
function technique4() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./competence_mysql.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        donneJson.forEach(element => {
            var techno = new Technologie3(element.competences, element.evaluer, element.dupliquer, element.analyser, element.comprendre, element.concevoir, element.inventer);//instance de class et element.titre=titreJSON, element.contenu=textJSOn
            console.log("techno");
            console.log(element.competences);
            console.log(techno.competences);
            techno.afficher();   
        });
        console.log(xhr.response);
        console.log(typeof xhr.response);
    });
    xhr.send();
};
/*angular*/
class Technologie4 {
    constructor(competence, evaluer, dupliquer, analyser, comprendre, concevoir, inventer) {
        this.competence = competence;
        this.evaluer=evaluer  ;
        this.dupliquer=dupliquer;
        this.analyser=analyser;
        this.comprendre=comprendre;
        this.concevoir=concevoir;
        this.inventer= inventer  ;
    }
    afficher() {
        console.log(this);
        let technique = document.getElementById("technique");
        technique.innerHTML = this.competence;

        let star1 = document.getElementById("star1");
        if (this.evaluer =="compris"){
            star1.style.backgroundColor ="#3D3434";}
            else if(this.evaluer =="moyennement_compris") {
            star1.style.backgroundColor = "#732A2A";
        } else if (this.evaluer =="non_compris") {
            star1.style.backgroundColor = "#A63535";
        } else (star1.style.backgroundColor = "white");

        let star2 = document.getElementById("star2");
        if (this.dupliquer =="compris") {
            star2.style.backgroundColor ="#3D3434";
        } else if (this.dupliquer =="moyennement_compris") {
            star2.style.backgroundColor ="#732A2A";
        } else if (this.dupliquer =="non_compris") {
            star2.style.backgroundColor ="#A63535";
        } else (star2.style.backgroundColor ="white");

        let star3 = document.getElementById("star3");
        if (this.analyser =="compris") {
            star3.style.backgroundColor = "#3D3434";
        } else if (this.analyser =="moyennement_compris") {
            star3.style.backgroundColor ="#732A2A";
        } else if (this.analyser =="non_compris") {
            star3.style.backgroundColor ="#A63535";
        } else (star3.style.backgroundColor ="white");

        let star4 = document.getElementById("star4");
        if (this.comprendre == "compris") {
            star4.style.backgroundColor ="#3D3434";
        } else if (this.comprendre =="moyennement_compris") {
            star4.style.backgroundColor = "#732A2A";
        } else if (this. comprendre=="non_compris") {
            star4.style.backgroundColor ="#A63535";
        } else (star4.style.backgroundColor ="white");

        let star5 = document.getElementById("star5");
        if (this.concevoir =="compris") {
            star5.style.backgroundColor ="#3D3434";
        } else if (this.concevoir =="moyennement_compris") {
            star5.style.backgroundColor ="#732A2A";
        } else if (this.concevoir =="non_compris") {
            star5.style.backgroundColor ="#A63535";
        } else (star5.style.backgroundColor ="white");

        let star6 = document.getElementById("star6");
        if (this.inventer =="compris") {
            star6.style.backgroundColor ="#3D3434";
        } else if (this.inventer =="moyennement_compris") {
            star6.style.backgroundColor ="#732A2A";
        } else if (this.inventer =="non_compris") {
            star6.style.backgroundColor ="#A63535";
        } else (star6.style.backgroundColor ="white");
    }
}
let tech5 = document.getElementById("ang");
tech5.addEventListener("click", function () {
    technique5();
});
function technique5() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./competence_angular.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        donneJson.forEach(element => {
            var techno = new Technologie4(element.competences, element.evaluer, element.dupliquer, element.analyser, element.comprendre, element.concevoir, element.inventer);//instance de class et element.titre=titreJSON, element.contenu=textJSOn
            console.log("techno");
            console.log(element.competences);
            console.log(techno.competences);
            techno.afficher();   
        });
        console.log(xhr.response);
        console.log(typeof xhr.response);
    });
    xhr.send();
};
/*symfony*/
class Technologie5 {
    constructor(competence, evaluer, dupliquer, analyser, comprendre, concevoir, inventer) {
        this.competence = competence;
        this.evaluer=evaluer  ;
        this.dupliquer=dupliquer;
        this.analyser=analyser;
        this.comprendre=comprendre;
        this.concevoir=concevoir;
        this.inventer= inventer  ;
    }
    afficher() {
        console.log(this);
        let technique = document.getElementById("technique");
        technique.innerHTML = this.competence;

        let star1 = document.getElementById("star1");
        if (this.evaluer =="compris"){
            star1.style.backgroundColor ="#3D3434";}
            else if(this.evaluer =="moyennement_compris") {
            star1.style.backgroundColor = "#732A2A";
        } else if (this.evaluer =="non_compris") {
            star1.style.backgroundColor = "#A63535";
        } else (star1.style.backgroundColor = "white");

        let star2 = document.getElementById("star2");
        if (this.dupliquer =="compris") {
            star2.style.backgroundColor ="#3D3434";
        } else if (this.dupliquer =="moyennement_compris") {
            star2.style.backgroundColor ="#732A2A";
        } else if (this.dupliquer =="non_compris") {
            star2.style.backgroundColor ="#A63535";
        } else (star2.style.backgroundColor ="white");

        let star3 = document.getElementById("star3");
        if (this.analyser =="compris") {
            star3.style.backgroundColor = "#3D3434";
        } else if (this.analyser =="moyennement_compris") {
            star3.style.backgroundColor ="#732A2A";
        } else if (this.analyser =="non_compris") {
            star3.style.backgroundColor ="#A63535";
        } else (star3.style.backgroundColor ="white");

        let star4 = document.getElementById("star4");
        if (this.comprendre == "compris") {
            star4.style.backgroundColor ="#3D3434";
        } else if (this.comprendre =="moyennement_compris") {
            star4.style.backgroundColor = "#732A2A";
        } else if (this. comprendre=="non_compris") {
            star4.style.backgroundColor ="#A63535";
        } else (star4.style.backgroundColor ="white");

        let star5 = document.getElementById("star5");
        if (this.concevoir =="compris") {
            star5.style.backgroundColor ="#3D3434";
        } else if (this.concevoir =="moyennement_compris") {
            star5.style.backgroundColor ="#732A2A";
        } else if (this.concevoir =="non_compris") {
            star5.style.backgroundColor ="#A63535";
        } else (star5.style.backgroundColor ="white");

        let star6 = document.getElementById("star6");
        if (this.inventer =="compris") {
            star6.style.backgroundColor ="#3D3434";
        } else if (this.inventer =="moyennement_compris") {
            star6.style.backgroundColor ="#732A2A";
        } else if (this.inventer =="non_compris") {
            star6.style.backgroundColor ="#A63535";
        } else (star6.style.backgroundColor ="white");
    }
}
let tech6 = document.getElementById("symfony");
tech6.addEventListener("click", function () {
    technique6();
});
function technique6() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./competence_symfony.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        donneJson.forEach(element => {
            var techno = new Technologie5(element.competences, element.evaluer, element.dupliquer, element.analyser, element.comprendre, element.concevoir, element.inventer);//instance de class et element.titre=titreJSON, element.contenu=textJSOn
            console.log("techno");
            console.log(element.competences);
            console.log(techno.competences);
            techno.afficher();   
        });
        console.log(xhr.response);
        console.log(typeof xhr.response);
    });
    xhr.send();
};

/*equivalence en fonction voire avec prof:

let techX = document.getElementById("X");
techX.addEventListener("click", function () {
    technique(URL);
});
function technique(URL) {
        class Technologie {
        constructor(competence, evaluer, dupliquer, analyser, comprendre, concevoir, inventer) {
            this.competence = competence;
            this.evaluer=evaluer  ;
            this.dupliquer=dupliquer;
            this.analyser=analyser;
            this.comprendre=comprendre;
            this.concevoir=concevoir;
            this.inventer= inventer  ;
        }
        afficher() {
            console.log(this);
            let technique = document.getElementById("technique");
            technique.innerHTML = this.competence;

             let star1 = document.getElementById("star1");
            if (this.evaluer =="compris"){
            star1.style.backgroundColor ="#3D3434";}
            else if(this.evaluer =="moyennement_compris") {
            star1.style.backgroundColor = "#732A2A";
            } else if (this.evaluer =="non_compris") {
            star1.style.backgroundColor = "#A63535";
            } else (star1.style.backgroundColor = "white");

             let star2 = document.getElementById("star2");
            if (this.dupliquer =="compris") {
            star2.style.backgroundColor ="#3D3434";
            } else if (this.dupliquer =="moyennement_compris") {
            star2.style.backgroundColor ="#732A2A";
            } else if (this.dupliquer =="non_compris") {
            star2.style.backgroundColor ="#A63535";
            } else (star2.style.backgroundColor ="white");

            let star3 = document.getElementById("star3");
            if (this.analyser =="compris") {
            star3.style.backgroundColor = "#3D3434";
            } else if (this.analyser =="moyennement_compris") {
            star3.style.backgroundColor ="#732A2A";
            } else if (this.analyser =="non_compris") {
            star3.style.backgroundColor ="#A63535";
            } else (star3.style.backgroundColor ="white");

            let star4 = document.getElementById("star4");
            if (this.comprendre == "compris") {
            star4.style.backgroundColor ="#3D3434";
            } else if (this.comprendre =="moyennement_compris") {
            star4.style.backgroundColor = "#732A2A";
            } else if (this. comprendre=="non_compris") {
            star4.style.backgroundColor ="#A63535";
            } else (star4.style.backgroundColor ="white");

            let star5 = document.getElementById("star5");
            if (this.concevoir =="compris") {
            star5.style.backgroundColor ="#3D3434";
            } else if (this.concevoir =="moyennement_compris") {
            star5.style.backgroundColor ="#732A2A";
            } else if (this.concevoir =="non_compris") {
            star5.style.backgroundColor ="#A63535";
            } else (star5.style.backgroundColor ="white");

            let star6 = document.getElementById("star6");
            if (this.inventer =="compris") {
            star6.style.backgroundColor ="#3D3434";
            } else if (this.inventer =="moyennement_compris") {
            star6.style.backgroundColor ="#732A2A";
            } else if (this.inventer =="non_compris") {
            star6.style.backgroundColor ="#A63535";
            } else (star6.style.backgroundColor ="white");
        }
    }
let xhr = new XMLHttpRequest();
    xhr.open('GET','URL');
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
        //let donneJson = JSON.parse(xhr.response);//transformation d'un tableau de chaine de caractère en objet
        let donneJson = this.response;
        donneJson.forEach(element => {
            var techno = new Technologie(element.competences, element.evaluer, element.dupliquer, element.analyser, element.comprendre, element.concevoir, element.inventer);//instance de class et element.titre=titreJSON, element.contenu=textJSOn
            console.log("techno");
            console.log(element.competences);
            console.log(techno.competences);
            techno.afficher();   
        });
        console.log(xhr.response);
        console.log(typeof xhr.response);
    });
    xhr.send();
};
}

/*systeme des barres de progressions*/
let bar = document.querySelector("footer");
bar.addEventListener("mouseover", function () {
    let barint1 = document.getElementById("barint1");
    let barint2 = document.getElementById("barint2");
    let barint3 = document.getElementById("barint3");
    let width = 0;
    let taille = 0;
    let long = 0;
    let X = setInterval(croissance, 1);
    let y = setInterval(mouve, 1);
    let z = setInterval(bouge, 1);
    function croissance() {
        if (width >= 25) {
            clearInterval(X);
        } else {
            width++;
            barint1.style.width = width + "%";
            barint1.innerHTML = width * 1 + "%";
        }
    }
    function mouve() {
        if (taille >= 10) {
            clearInterval(y);
        } else {
            taille++;
            barint2.style.width = taille + "%";
            barint2.innerHTML = taille * 1 + "%";
        }
    }
    function bouge() {
        if (long >= 66) {
            clearInterval(z);
        } else {
            long++;
            barint3.style.width = long + "%";
            barint3.innerHTML = long * 1 + "%";
        }
    }
});
bar.addEventListener("mouseleave", function () {
    let barint1 = document.getElementById("barint1");
    barint1.style.width = 0 + "%";
    barint1.innerHTML = 0 + "%";
    barint1.style.backgroundColor = "#3D3434";
    let barint2 = document.getElementById("barint2");
    barint2.style.width = 0 + "%";
    barint2.innerHTML = 0 + "%";
    barint2.style.backgroundColor = "#3D3434";
    let barint3 = document.getElementById("barint3");
    barint3.style.width = 0 + "%";
    barint3.innerHTML = 0 + "%";
    barint3.style.backgroundColor = "#3D3434";
});
