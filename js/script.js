// Message de bienvenue
alert("Bienvenue sur le CV de Nicole Benty Gomis !");

// Message dans la console
console.log("CV chargé avec succès.");

// Mise à jour automatique de l'année dans le footer
const footer = document.querySelector("footer p");
const annee = new Date().getFullYear();

footer.innerHTML = `© ${annee} - Tous droits réservés - Nicole Benty Gomis`;

// Animation au survol des sections
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.transform = "scale(1.02)";
    });

    section.addEventListener("mouseleave", () => {
        section.style.transform = "scale(1)";
    });

});

// Affichage de l'heure de consultation
const heure = new Date().toLocaleTimeString();
console.log("CV consulté à :", heure);

// Validation du formulaire

const formulaire = document.getElementById("contact-form");

formulaire.addEventListener("submit", function(event){

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(nom === "" || email === "" || message === ""){
        event.preventDefault();
        alert("Veuillez remplir tous les champs.");
    }
    else if(!emailValide.test(email)){
    event.preventDefault();
    alert("Veuillez saisir une adresse e-mail valide.");
}
    else{
        alert("Message envoyé avec succès !");
    }

});

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        btnTop.style.display = "block";
    }else{
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const barres = document.querySelectorAll(".progress-bar");

barres.forEach(barre => {
    barre.style.transition = "width 2s";
});
const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", function(){

    menu.classList.toggle("active");

});