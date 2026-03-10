const main = document.getElementById("main-contact");
const form = document.getElementById("form");
const nom = document.getElementById("name");
const prenom = document.getElementById("surname");
const adresse = document.getElementById("adresse");
const city = document.getElementById("city");
const agree = document.getElementById("accept");
const resultat = document.getElementById("resultat");
const fieldset = document.querySelector("fieldset");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomValue = nom.value;
    const prenomValue = prenom.value;
    const adresseValue = adresse.value;
    const cityValue = city.value;
    const agreeValue = agree.value;

    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Votre commande"

    const pNom = document.createElement("p");
    pNom.textContent = `Votre nom est : ${nomValue}`;

    const pPrenom = document.createElement("p");
    pPrenom.textContent = `Votre prenom est : ${prenomValue}`;

    const pAdresse = document.createElement("p");
    pAdresse.textContent = `Votre adresse est : ${adresseValue}`;

    const pCity = document.createElement("p");
    pCity.textContent = `Votre lieu est : ${cityValue}`;

    const pAgree = document.createElement("p");
    pAgree.textContent = `Vous avez accepté les condition générales : ${agreeValue}`;

    div.appendChild(h1);
    div.appendChild(pNom);
    div.appendChild(pPrenom);
    div.appendChild(pAdresse);
    div.appendChild(pCity);
    div.appendChild(pAgree);

    resultat.appendChild(div);
    div.className = "menu-commande"

    resultat.style.margin = "50px 0 0 0";

    fieldset.style.display = "none"

    div.style.display = "flex";
    div.firstElementChild.style.alignItems = "center";
    div.style.flexDirection = "column";
    div.style.padding = "50px";

    pNom.style.fontSize = "25px";
    pPrenom.style.fontSize = "25px";
    pAdresse.style.fontSize = "25px";
    pCity.style.fontSize = "25px";
    pAgree.style.fontSize = "25px";

    pNom.style.padding = "25px";
    pPrenom.style.padding = "25px";
    pAdresse.style.padding = "25px";
    pCity.style.padding = "25px";
    pAgree.style.padding = "25px";



    form.reset();
})

