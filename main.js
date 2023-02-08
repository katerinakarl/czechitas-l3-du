// Iniciály

let jmeno = document.querySelector ("#jmenoUzivatele");
let vstupUzivatelJMENO = prompt("Zadejte Vaše jméno");

jmenoUzivatele.innerHTML = vstupUzivatelJMENO;

let prijmeni = document.querySelector ("#prijmeniUzivatele");
let vstupUzivatelPrijmeni = prompt("Zadejte Vaše příjmení");

prijmeniUzivatele.innerHTML = vstupUzivatelPrijmeni;

let vek = document.querySelector ("#vekUzivatele");
let vstupUzivatelVek = Number(prompt("Zadejte Váš věk"));

vekUzivatele.innerHTML = vstupUzivatelVek;

let inicialyUzivatel = document.querySelector ("#InicialyUzivatele");

if (vstupUzivatelVek != null) {
    document.getElementById("InicialyUzivatele").innerText =
    vstupUzivatelJMENO + " " +  vstupUzivatelPrijmeni + " " + vstupUzivatelVek;
  }

// Barva

let barva = document.querySelector ("#oblibenabarva");
let vstupUzivatelBarva = prompt("Zadejte anglický název pro vaši oblíbenou barvu ");

oblibenabarva.innerHTML = vstupUzivatelBarva;

document.getElementById("mojeOblibenaBarva").style.color = vstupUzivatelBarva;




