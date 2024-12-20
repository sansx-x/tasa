document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Obtener valores de los campos de entrada
    const amountVef = parseFloat(document.getElementById('amount_vef').value);
    const bcvRate = parseFloat(document.getElementById('bcv_rate').value);
    const parallelRate = parseFloat(document.getElementById('parallel_rate').value);
    const promedioRate = parseFloat(document.getElementById('promedio_rate').value);

    // Calcular conversiones
    const usdBcv = amountVef / bcvRate;
    const usdParallel = amountVef / parallelRate;
    const usdPromedio = amountVef / promedioRate;

    // Mostrar resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Resultados:</h2>
        <p>Cantidad en VEF: ${amountVef}</p>
        <p>Conversión usando el tipo de cambio del BCV (${bcvRate}): ${usdBcv.toFixed(2)} USD</p>
        <p>Conversión usando el dólar paralelo (${parallelRate}): ${usdParallel.toFixed(2)} USD</p>
        <p>Conversión usando el dólar promedio (${promedioRate}): ${usdPromedio.toFixed(2)} USD</p>
    `;
});
