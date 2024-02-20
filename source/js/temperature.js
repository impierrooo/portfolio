/* ---------- Température ---------- */
function gettemperature() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rennes&appid=05b191e4a9a4dba81127092dec6161d8&units=metric')
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp.toFixed(1);
            document.getElementById('temperatureVille').textContent = temperature + '°C';
        })
        .catch(error => {
            document.getElementById('temperatureVille').textContent = '00,0°C';
        });
}

gettemperature();

setInterval(gettemperature, 600000);