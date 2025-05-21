function berechneNoten() {
    const eingabe = prompt("Gib mehrere Noten durch Komma getrennt ein (z. B. 2,3,1,4):");

    if (!eingabe) {
        alert("Keine Eingabe gemacht.");
        return;
    }

    const notenArray = eingabe.split(",").map(n => parseFloat(n));

    if (notenArray.some(isNaN)) {
        alert("Ungültige Eingabe - bitte nur Zahlen getrennt durch Kommas.");
        return;
    }

    let summe = 0;
    for (let i = 0; i < notenArray.length; i++) {
        summe += notenArray[i];
    }

    const durchschnitt = Math.round((summe / notenArray.length) * 100) / 100;

    let bewertung = "";
    if (durchschnitt <= 1.5) {
        bewertung = "Sehr gut";
    } else if (durchschnitt <= 2.5) {
        bewertung = "Gut";
    } else if (durchschnitt <= 3.5) {
        bewertung = "Befriedigend";
    } else {
        bewertung = "Verbesserung nötig";
    }

    alert(`Durchschnitt: ${durchschnitt}\nBewertung: ${bewertung}`);
    console.log("Eingegebene Noten:", notenArray);
    console.log("Durchschnitt:", durchschnitt);
    console.log("Bewertung:", bewertung);
}

berechneNoten();