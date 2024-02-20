/* ---------- Contact ---------- */

function contact() {
	var nom = document.getElementById("nom").value;
    var prénom = document.getElementById("prénom").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if (nom == '') {
		Alert();
		
	} else if (prénom == '') {
		Alert();
		
	} else if (email == '') {
		Alert();

    } else if (message == '') {
		Alert();
	
	} else {

		var url = "https://discord.com/api/webhooks/1013789946345173022/wJ87qxQlb32z9Nx3lYl4F0ZAX4peXFB8iYIH2VN_4DprlRrwzvKt2MObDuvfCxEwpkXt";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader("Content-type", "application/json");

		var myEmbed = {
			"title": "Formulaire de contact de mon Portfolio",
			"color": 0xDA7426,
			"fields": [
				{
					"name": "Nom :",
					"value": nom,
				},
                {
					"name": "Prénom :",
					"value": prénom,
				},
				{
					"name": "Email :",
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
		
		document.getElementById("nom").value = "";
        document.getElementById("prénom").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
	}
}