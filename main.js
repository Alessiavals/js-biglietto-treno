// Chiedere il numero di chilometri da percorrere
let kilometers = prompt ("Quanti chilometri vuoi percorrere?");

// Chiedere l'età del passeggero
let age = prompt ("Quanti anni hai?");

// Verificare se i dati inseriti sono validi

if (isNaN(kilometers) || kilometers <= 0 || isNaN(age) || age <= 0) {
    console.error("Inserisci valori validi per chilometri ed età.");
} else {
    // Calcolare il prezzo base
    const pricePerKm = 0.21;
    let basePrice = kilometers * pricePerKm;

    // Applicare gli sconti
    let discount = 0;
    if (age < 18) {
        discount = 0.2; // 20% di sconto per minorenni
    } else if (age > 65) {
        discount = 0.4; // 40% di sconto per over 65
    }

    let finalPrice = basePrice * (1 - discount);

    // Mostrare il prezzo finale con massimo due decimali
    finalPrice = finalPrice.toFixed(2);

    // Output del prezzo finale
    alert(`Il prezzo totale del viaggio è: €${finalPrice}`);
    console.log(`Prezzo base: €${basePrice.toFixed(2)}, Sconto applicato: ${discount * 100}%, Prezzo finale: €${finalPrice}`);
}
