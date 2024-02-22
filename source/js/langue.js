function changement_langue(){
    var langue = localStorage.getItem('langue');

	if (langue === 'FR') {
        localStorage.setItem('langue', 'EN');
        document.getElementById("langue").innerHTML = "FR";

        document.getElementById('modal1').innerHTML = "HOME";
        document.getElementById('modal2').innerHTML = "PROJECTS";
        document.getElementById('modal3').innerHTML = "ABOUT";

        document.getElementById('top1').innerHTML = "AVAILABLE FOR AN INTERNSHIP";

        document.getElementById('bottom1').innerHTML = "© 2024 Impierrooo • All rights reserved";
        document.getElementById('bottom2').innerHTML = "Web design and development";
	} else {
        localStorage.setItem('langue', 'FR');
        document.getElementById("langue").innerHTML = "EN";

        document.getElementById('modal1').innerHTML = "ACCUEIL";
        document.getElementById('modal2').innerHTML = "PROJETS";
        document.getElementById('modal3').innerHTML = "À PROPOS";

        document.getElementById('top1').innerHTML = "DISPONIBLE POUR UN STAGE";

        document.getElementById('bottom1').innerHTML = "© 2024 Impierrooo • Tous droits réservés";
        document.getElementById('bottom2').innerHTML = "Conception et développement web";
    }
}