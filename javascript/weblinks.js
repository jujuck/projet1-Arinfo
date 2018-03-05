// List of links to show. Each link has:
// - a title
// - a URL
// - an author (the person who added it)
//Création d'une variable compteur du nombre de lien ajouté
var x = 2;
var counter = 0;

var linkList = [
    {
        title: "Kottke",
        url: "http://kottke.org",
        author: "brett.suggs"
    },
    {
        title: "National Geographic",
        url: "http://www.nationalgeographic.com",
        author: "jessica"
    },
    {
        title: "American Museum of Natural History",
        url: "http://www.amnh.org",
        author: "aurora.nicole"
    }
];

function createLinkElement(link) {
    var linktitle = document.createElement("a");
    linktitle.href = link.url;
    linktitle.style.color = "#428bca";
    linktitle.style.textDecoration = "none";
    linktitle.style.marginRight = "5px";
    linktitle.appendChild(document.createTextNode(link.title));

    var linkUrl = document.createElement("span");
    linkUrl.appendChild(document.createTextNode(link.url));

    var titleLine = document.createElement("h4");
    titleLine.style.margin = "0px";
    titleLine.appendChild(linktitle);
    titleLine.appendChild(linkUrl);

    var detailsLine = document.createElement("span");
    detailsLine.appendChild(document.createTextNode("Added by " + link.author));

    var linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.appendChild(titleLine);
    linkDiv.appendChild(detailsLine);

    return linkDiv;
}

var content = document.getElementById("content");
linkList.forEach(function (link) {
    var linkElement = createLinkElement(link);
    content.appendChild(linkElement);
});

//Mise en place du formulaire d'ajout de lien
var myRequest = new XMLHttpRequest();
initNewRequest(myRequest);

function initNewRequest() {
    myRequest.open('GET', 'html/addLink.html');
    myRequest.onreadystatechange = function () {
        if (myRequest.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequest.responseText;
            x ++;
        }
    };
}

//Envoi du formulaire
function sendTheFormular() {
    myRequest.send();
    document.getElementById('newLien').style.display = 'none';
}

//Fonction de création du lien
var NewLinks = {
    initNewLinks: function (title, url, author) {
        this.title = title;
        this.url = url;
        this.author = author;
    }, 
}

//Création du nouveau lien et ajout à la liste
function sendTheFormular2() {
    
    var nom = document.getElementById("nom").value;
    var titre = document.getElementById("titre").value;
    var lien = document.getElementById("lien").value;

    //Vérification du formulaire
    if (titre == "") {
        alert ("Vous devez remplir le champ titre");
        return false;
    } else if (lien == "") {
        alert ("Vous devez remplir le champ Lien");
        return false;
    } else if (nom == "") {
        alert ("Vous devez remplir le champ Nom-Prénom");
        return false;
    }

     //Vérification du lien
    var adresseRegex = /http:./;
    var adresseRegexBis = /https:./;
    if (adresseRegex.test(lien) === false || adresseRegexBis.test(lien) === false) {
        lien = "https://" + lien;
    }

    //Mise en majuscule du titre
    titre = titre.charAt(0).toUpperCase() + titre.substring(1).toLowerCase();

    //Création du lien
    var newLink = Object.create(NewLinks);
    newLink.initNewLinks(titre, lien, nom);
    linkList.push(newLink);
    
    //Mise à jour affichage
    document.getElementById('formulaire').style.display = 'none';
    linkElement = createLinkElement(linkList[x]);
    content.appendChild(linkElement);
    var affichageLink = document.getElementById('lien-content');
    affichageLink.classList.add("confirmation");
    document.getElementById("lien-content").style.display = "inline";
    affichageLink.textContent = ("The link " + titre + " (" + lien + ") was sucessfully upload! ");

    //Action sur affichage précedent
    document.getElementById('newLien').style.display = "inline";
    document.getElementById('ajax-content').innerHTML = "";
    initNewRequest(myRequest);

    // Suppression affichage après 2 secondes et retour au début.
    setTimeout(affichageNewLink, 2000);
    function affichageNewLink() {
            clearTimeout();
            document.getElementById('lien-content').style.display = "none";
    }   
}






