//Création du menu central
function initMenu () {
    var myRequestMenu = new XMLHttpRequest();
    myRequestMenu.open('GET','javascript/donneemenu.json');

    myRequestMenu.onreadystatechange = function () {
        if(myRequestMenu.readyState === 4) {
            var menu = JSON.parse(myRequestMenu.responseText);
            var menuList = '<div id="contenu">';

            for (var i = 0; i < menu.length; i += 1) {
                menuList += '<div class="bloc button">';
                menuList += '<h3>' + menu[i].name + '</h3>';
                menuList += '<p>' + menu[i].accroche + '</p>';
                menuList += '<button onclick="sendTheAJAX' + [i] + '()" class="go">GO</button>';
                menuList += '</div>';
                menuList += '</div>';

            }
        }
        document.getElementById('container').innerHTML = menuList;
    };
    myRequestMenu.send();
}

initMenu();

//Envoi de la page n°0
function sendTheAJAX0() {
    var myRequestButton0 = new XMLHttpRequest();
    myRequestButton0.open('GET', 'html/connaissances.html');
    myRequestButton0.onreadystatechange = function () {
        if (myRequestButton0.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton0.responseText;
        }
    };
    myRequestButton0.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°1
function sendTheAJAX1() {
    var myRequestButton1 = new XMLHttpRequest();
    myRequestButton1.open('GET', 'html/entrainement.html');
    myRequestButton1.onreadystatechange = function () {
        if (myRequestButton1.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton1.responseText;
        }
          };
    myRequestButton1.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°2
function sendTheAJAX2() {
    var myRequestButton2 = new XMLHttpRequest();
    myRequestButton2.open('GET', 'html/communication.html');
    myRequestButton2.onreadystatechange = function () {
        if (myRequestButton2.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton2.responseText;
        }
          };
    myRequestButton2.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°3
function sendTheAJAX3() {
    var myRequestButton3 = new XMLHttpRequest();
    myRequestButton3.open('GET', 'html/management.html');
    myRequestButton3.onreadystatechange = function () {
        if (myRequestButton3.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton3.responseText;
        }
          };
    myRequestButton3.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°4
function sendTheAJAX4() {
    var myRequestButton4 = new XMLHttpRequest();
    myRequestButton4.open('GET', 'html/formateur.html');
    myRequestButton4.onreadystatechange = function () {
        if (myRequestButton4.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton4.responseText;
        }
          };
    myRequestButton4.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°5
function sendTheAJAX5() {
    var myRequestButton5 = new XMLHttpRequest();
    myRequestButton5.open('GET', 'html/autoconstruction.html');
    myRequestButton5.onreadystatechange = function () {
        if (myRequestButton5.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton5.responseText;
        }
          };
    myRequestButton5.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°6
function sendTheAJAX6() {
    var myRequestButton6 = new XMLHttpRequest();
    myRequestButton6.open('GET', 'html/webdeveloppement.html');
    myRequestButton6.onreadystatechange = function () {
        if (myRequestButton6.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton6.responseText;
        }
          };
    myRequestButton6.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°7
function sendTheAJAX7() {
    var myRequestButton7 = new XMLHttpRequest();
    myRequestButton7.open('GET', 'html/langues.html');
    myRequestButton7.onreadystatechange = function () {
        if (myRequestButton7.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton7.responseText;
        }
          };
    myRequestButton7.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°8
function sendTheAJAX8() {
    var myRequestButton8 = new XMLHttpRequest();
    myRequestButton8.open('GET', 'html/loisir.html');
    myRequestButton8.onreadystatechange = function () {
        if (myRequestButton8.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton8.responseText;
        }
          };
    myRequestButton8.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Envoi de la page n°9
function sendTheAJAX9() {
    var myRequestButton9 = new XMLHttpRequest();
    myRequestButton9.open('GET', 'html/contact.html');
    myRequestButton9.onreadystatechange = function () {
        if (myRequestButton9.readyState === 4) {
            document.getElementById('ajax-content').innerHTML = myRequestButton9.responseText;
        }
          };
    myRequestButton9.send();
    document.getElementById('ajax-content').style.display = 'inline-block';
    document.getElementById('menucontent').style.display = 'none';
}

//Retour au menu
function returnTheAJAX() {
    document.getElementById('menucontent').style.display = 'grid';
    document.getElementById('ajax-content').style.display = 'none';
    initMenu();
    }

//Menu Hamburger
function sendTheMenu() {
    document.getElementById('icon-hamburger').style.display = 'none';
    document.getElementById('site-menu').style.display = 'block';
    setTimeout(getTheMenuBack, 5000);
}

function getTheMenuBack() {
    document.getElementById('icon-hamburger').style.display = 'block';
    document.getElementById('site-menu').style.display = 'none';
}