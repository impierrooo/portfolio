function changement_langue(){
    var langue = localStorage.getItem('langue');
    var page = localStorage.getItem('page');
    var number = parseInt(page);
    console.log(page);

	if (langue === 'FR') {
        localStorage.setItem('langue', 'EN');
        document.getElementById("langue").innerHTML = "FR";

        document.getElementById('modal1').innerHTML = "HOME";
        document.getElementById('modal2').innerHTML = "PROJECTS";
        document.getElementById('modal3').innerHTML = "ABOUT";

        document.getElementById('top1').innerHTML = "AVAILABLE FOR AN INTERNSHIP";
        
        document.getElementById('bottom1').innerHTML = "© 2024 Impierrooo • All rights reserved";
        document.getElementById('bottom2').innerHTML = "Creative and original developer";
        
        if (number === 4) {
            document.getElementById('name_label').innerHTML = "<svg class='form_svg' viewBox='0 0 24 24'><path d='M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z'></path></svg> Name";
            document.getElementById('contact_button').innerHTML = "SEND";

            document.getElementById('alert_fill').innerHTML = "Please fill in all fields <img src='./source/assets/images/error.png' class='alert_icon'>";
            document.getElementById('alert_fill_background').style.width = "210.73px";
            document.getElementById('alert_sucess').innerHTML = "Message sent <img src='./source/assets/images/succes.png' class='alert_icon'>";
            document.getElementById('alert_sucess_background').style.width = "159.78px";
        }
	} else {
        localStorage.setItem('langue', 'FR');
        document.getElementById("langue").innerHTML = "EN";

        document.getElementById('modal1').innerHTML = "ACCUEIL";
        document.getElementById('modal2').innerHTML = "PROJETS";
        document.getElementById('modal3').innerHTML = "À PROPOS";

        document.getElementById('top1').innerHTML = "DISPONIBLE POUR UN STAGE";
        
        document.getElementById('bottom1').innerHTML = "© 2024 Impierrooo • Tous droits réservés";
        document.getElementById('bottom2').innerHTML = "Développeur créatif et original";

        if (number === 4) {
            document.getElementById('name_label').innerHTML = "<svg class='form_svg' viewBox='0 0 24 24'><path d='M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z'></path></svg> Nom";
            document.getElementById('contact_button').innerHTML = "ENVOYER";

            document.getElementById('alert_fill').innerHTML = "Veuillez compléter tous les champs <img src='./source/assets/images/error.png' class='alert_icon'>";
            document.getElementById('alert_fill_background').style.width = "315.66px";
            document.getElementById('alert_sucess').innerHTML = "Message envoyé <img src='./source/assets/images/succes.png' class='alert_icon'>";
            document.getElementById('alert_sucess_background').style.width = "180.83px";
        }
    }
}