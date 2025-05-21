const aktuellesJahr = 2025;

function berechneAlter(geburtsjahr) {
  return aktuellesJahr - geburtsjahr;
}

const input_name = prompt("Wie heißt du?");
const geburtsjahr = prompt("In welchem Jahr bist du geboren?");
const alter = berechneAlter(geburtsjahr);

console.log("Hallo " + input_name + ", du bist " + alter + " Jahre alt.");
alert("Hallo " + input_name + ", du bist " + alter + " Jahre alt.");