/* ---------- Heure de Paris ---------- */
function timeparis() {
    var date = new Date();
    var options = { timeZone: 'Europe/Paris', hour12: false, hour: '2-digit', minute: '2-digit' };
    var heureParis = date.toLocaleTimeString('fr-FR', options);
    document.getElementById('time').textContent = heureParis;
}

setInterval(timeparis, 1000);

timeparis();