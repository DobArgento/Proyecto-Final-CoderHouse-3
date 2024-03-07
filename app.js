// JSON con las tasas de cambio
const rates = {
    "blue": {
        "ask": 990,
        "bid": 960
    }
};

// Función para convertir de Dólar Blue a ARS
function convertToARS() {
    const amount = parseFloat(document.getElementById('amount').value);
    const convertedAmount = amount * rates.blue.ask;
    const conversion = `${amount} USD = ${convertedAmount.toFixed(2)} ARS (Dólar Blue)`;

    // Mostrar el resultado y agregarlo al historial
    alert(conversion);
    addToHistory(conversion);
}

// Función para convertir de Dólar Blue a USD
function convertToUSD() {
    const amount = parseFloat(document.getElementById('amount').value);
    const convertedAmount = amount / rates.blue.bid;
    const conversion = `${amount} ARS = ${convertedAmount.toFixed(2)} USD (Dólar Blue)`;

    // Mostrar el resultado y agregarlo al historial
    alert(conversion);
    addToHistory(conversion);
}

// Función para agregar la conversión al historial
function addToHistory(conversion) {
    const conversionHistory = document.getElementById('conversionHistory');
    const listItem = document.createElement('li');
    listItem.textContent = conversion;
    conversionHistory.appendChild(listItem);
}

// Función para borrar el historial
function clearHistory() {
    const conversionHistory = document.getElementById('conversionHistory');
    conversionHistory.innerHTML = ''; // Borra todos los elementos dentro de la lista
}