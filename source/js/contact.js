/* ---------- Contact ---------- */

function contact() {
	var nom = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
	var message = document.getElementById("message").value;
	
	if (nom == '') {
		my_sucess();
		document.getElementById("alert_fill").style.transform = "scale(1)";
		document.getElementById("alert_fill_background").style.transform = "scale(1)";
		setTimeout(my_fill, 5000);
		

	} else if (email == '') {
		my_sucess();
		document.getElementById("alert_fill").style.transform = "scale(1)";
		document.getElementById("alert_fill_background").style.transform = "scale(1)";
		setTimeout(my_fill, 5000);

    } else if (message == '') {
		my_sucess();
		document.getElementById("alert_fill").style.transform = "scale(1)";
		document.getElementById("alert_fill_background").style.transform = "scale(1)";
		setTimeout(my_fill, 5000);
	} else {

		my_fill();
		var url = "https://discord.com/api/webhooks/1013789946345173022/wJ87qxQlb32z9Nx3lYl4F0ZAX4peXFB8iYIH2VN_4DprlRrwzvKt2MObDuvfCxEwpkXt";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader("Content-type", "application/json");

		var myEmbed = {
			"title": "Formulaire de contact de mon Portfolio",
			"color": 0xDA7426,
			"fields": [
				{
					"name": "Name :",
					"value": nom,
				},
				{
					"name": "E-mail :",
					"value": email,
				},
				{
					"name": "Message :",
					"value": message
				}
			],
		}
		
		var params = {
        username: "Form Bot",
        embeds: [ myEmbed ]
		}
    
		request.send(JSON.stringify(params)); 
		
		document.getElementById("name").value = "";
		document.getElementById("mail").value = "";
		document.getElementById("message").value = "";

		document.getElementById("alert_sucess").style.transform = "scale(1)";
		document.getElementById("alert_sucess_background").style.transform = "scale(1)";
		setTimeout(my_sucess, 5000);
	}
}

function my_fill() {
    document.getElementById("alert_fill").style.transform = "scale(0)";
    document.getElementById("alert_fill_background").style.transform = "scale(0)";
}

function my_sucess() {
    document.getElementById("alert_sucess").style.transform = "scale(0)";
    document.getElementById("alert_sucess_background").style.transform = "scale(0)";
}