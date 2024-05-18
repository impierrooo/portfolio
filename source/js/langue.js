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

        if (number === 1) {
            document.getElementById('index_header_text1').innerHTML = "HOME";

            document.getElementById('text1').innerHTML = "Hello, I'm Impierrooo <svg class='index_hand' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--emojione-monotone' preserveAspectRatio='xMidYMid meet'><path d='M41.947 6.448l-4.239 17.348l-3.521-17.588C32.948-.625 22.796 1.504 24.21 8.004l2.538 12.911c-2.579-.902-6.947 1.289-6.585 5.322c-1.525-2.258-8.707-1.605-8.13 5.009c0 0 .588 4.507.666 6.018c.139 2.711-.058 7.696.374 10.853c1.278 9.344 9.804 13.702 17.686 13.877c.165.004.331.006.498.006c8.112 0 16.932-4.377 18.747-14.301c1.313-7.192-1.115-10.431-4.473-12.896l6.307-26.16c1.54-6.096-8.346-8.544-9.891-2.195m-16.302.675c-.708-3.589 5.104-4.256 5.8-.612l4.625 24.222c-.869.11-2.555.861-4.619.972l-.74-6.522c-.153-1.38-1.282-3.009-2.259-3.782L25.645 7.123m.393 15.645c1.542.738 2.123 1.244 2.813 8.957c-2.021 0-3.669 1.863-3.669 4.076c-1.269 0-2.018-1.302-2.433-2.669c-.607-1.993-1.066-4.982-1.271-6.633c-.411-3.338 2.963-4.496 4.56-3.731m-6.255 7.029c.264.993 1.612 6.069 1.189 8.328c-.713 3.794-6.514 2.976-6.956-.932l-.749-6.405c-.426-3.838 5.256-5.74 6.516-.991M45.49 51.308c-4.947 8.254-15.265 9.729-22.2 6.778c-5.976-2.543-10.273-6.653-9.306-17.753c1.155 1.772 7.868 3.514 9.473-3.146c.634.393 1.33.616 2.028.683c1.02 2.681 4.297 3.508 5.336 3.711c-2.165 1.231-3.906 3.627-2.847 7.533c-.085-6.451 6.764-8.293 7.755-7.931c1.148.421 2.615 2.486 2.965 3.596c.137.438.166 1.833.166 1.833s.403-1.4.338-1.872c-.201-1.448-2.061-4.218-3.426-4.756c-1.623-.637-5.77-.234-7.321-1.03c-3.106-1.594-2.059-6.249.496-5.974c2.893.311 4.528-.192 5.958-.597c1.654-.468 3.104-.903 4.559.188c1.518 1.137 4.818 3.575 5.813 4.559c3.26 3.224 2.507 10.349.213 14.178m3.465-42.225l-5.683 24.21c-2.169-1.342-3.209-2.388-4.153-2.45l-.8-3.889L43.398 6.6c.834-3.417 6.589-1.554 5.557 2.483' fill='#37fff5'></path></svg>";
            document.getElementById('text2').innerHTML = "Creative and ambitious developer.";
            document.getElementById('text3').innerHTML = "My tools & skills";
            document.getElementById('text4').innerHTML = "With over three years of experience in the field of computer development, I am a passionate creative. My expertise ranges from web development to programming in C, as well as mobile application design. I appreciate every opportunity to apply my skills to create innovative and effective solutions.";
            document.getElementById('text5').innerHTML = "Redcode Corewar is a variant of the original Corewar where programs, called champions, are written in Redcode language. Champions are loaded into a virtual arena where they battle for control of memory. Players must design warriors capable of surviving and prevailing in a competitive environment using advanced strategies and creative programming techniques.";
            document.getElementById('index_button').innerHTML = "DISCOVER THE PROJECT";
        }

        if (number === 2) {
            document.getElementById('index_header_text1').innerHTML = "PROJECTS";

            document.getElementById('description1').innerHTML = "Redcode Corewar is a variant of the original Corewar where programs, called champions, are written in the Redcode language. These champions are loaded into a virtual arena where they battle for control of memory. Players must design champions capable of surviving and winning in a competitive environment by utilizing advanced strategies and creative programming techniques.";
            document.getElementById('description2').innerHTML = "The 42sh project at Epitech is a command interpreter (shell) written in C, adhering to POSIX standards. It allows for the execution of simple or complex commands, handling pipes, file redirections, and logical operators. Advanced features include managing environment variables and built-in commands. The project aims to provide a robust and efficient implementation of the UNIX shell, adhering to coding conventions and ensuring proper memory management.";


            document.getElementById('data1').innerHTML = "Language : C";
            document.getElementById('data2').innerHTML = "Duration : 4 weeks";
            document.getElementById('data3').innerHTML = "Role : Developer";
            document.getElementById('data4').innerHTML = 'Visualization : <a class="slide_box_link" href="https://github.com/impierrooo/corewar" target="_blank">Github</a>';

            document.getElementById('data5').innerHTML = "Language : C";
            document.getElementById('data6').innerHTML = "Duration : 4 weeks";
            document.getElementById('data7').innerHTML = "Role : Developer";
            document.getElementById('data8').innerHTML = 'Visualization : <a class="slide_box_link" href="https://github.com/impierrooo/42sh" target="_blank">Github</a>';

            document.getElementById('data9').innerHTML = "Language : Lorem ipsum";
            document.getElementById('data10').innerHTML = "Duration : Lorem ipsum";
            document.getElementById('data11').innerHTML = "Role : Lorem ipsum";
            document.getElementById('data12').innerHTML = 'Visualization : <a class="slide_box_link" href="https://loremipsum.io/" target="_blank">Lorem ipsum</a>';

            document.getElementById('data13').innerHTML = "Language : Lorem ipsum";
            document.getElementById('data14').innerHTML = "Duration : Lorem ipsum";
            document.getElementById('data15').innerHTML = "Role : Lorem ipsum";
            document.getElementById('data16').innerHTML = 'Visualization : <a class="slide_box_link" href="https://loremipsum.io/" target="_blank">Lorem ipsum</a>';

            document.getElementById('data17').innerHTML = "Language : Lorem ipsum";
            document.getElementById('data18').innerHTML = "Duration : Lorem ipsum";
            document.getElementById('data19').innerHTML = "Role : Lorem ipsum";
            document.getElementById('data20').innerHTML = 'Visualization : <a class="slide_box_link" href="https://loremipsum.io/" target="_blank">Lorem ipsum</a>';

            document.getElementById('last1').innerHTML = "If you'd like to learn more about me, feel free to check out my";
            document.getElementById('last2').innerHTML = "ABOUT";
        }

        if (number === 3) {
            document.getElementById('index_header_text1').innerHTML = 'ABOUT';
            document.getElementById('index_header_text2').innerHTML = '<a href="./source/assets/documents/CV_Pierre_Montaret.pdf" target="_blank" class="under_slide_hover">Resume</a>';

            document.getElementById('quote').innerHTML = "In programming, every line is an opportunity to create something extraordinary.";

            document.getElementById('text1').innerHTML = "I am Pierre Montaret, and I am seeking a 4 to 6-month internship starting from July 2024 to enhance my journey. Currently undergoing training at Epitech in Rennes, I am passionate about information technology and software development. My academic journey is marked by stimulating projects, such as reproducing commands in C and dynamic graphical projects, demonstrating my ability to tackle technical challenges with creativity and rigor.";
            document.getElementById('text2').innerHTML = "Outside of my studies, I have developed an interest in investment and cryptocurrencies, showcasing my willingness to explore new fields and tackle complex challenges. My involvement in diverse activities, such as horseback riding and video games, highlights my balance between work and leisure, as well as my ability to effectively manage my time and resources.";
            document.getElementById('text3').innerHTML = "With the acquisition of my driver's license in 2023, I have gained autonomy that is also reflected in my soft skills, such as creativity, adaptability, and teamwork. These transferable skills, combined with my expertise in computer science and my passion for intellectual challenges, make me an ideal candidate to contribute meaningfully to any project I engage in.";
            document.getElementById('text4').innerHTML = "As I shared my passions and hobbies, my journey took shape progressively. From my childhood to my teenage years, each step contributed to shaping my path toward the future.";

            document.getElementById('title1').innerHTML = "My first computer";
            document.getElementById('title2').innerHTML = "Discovery of programming";
            document.getElementById('title3').innerHTML = "My specialization in NSI";
            document.getElementById('title4').innerHTML = "My beginnings in web development";
            document.getElementById('title5').innerHTML = "My journey at Epitech";

            document.getElementById('description1').innerHTML = "At the age of 11, I acquired my first computer, marking the beginning of a fascination with the digital world.";
            document.getElementById('description2').innerHTML = "In second grade, I had my first encounter with programming, a revelation that sparked a passion for coding and algorithms.";
            document.getElementById('description3').innerHTML = "In high school, I chose the NSI specialty, thus consolidating my knowledge in computer science and laying the groundwork for my future in the technology field.";
            document.getElementById('description4').innerHTML = "As an independent, I began creating websites, exploring my creativity and honing my technical skills to bring my ideas to life online.";
            document.getElementById('description5').innerHTML = "Joining Epitech, the school of computer science, was a crucial step in my journey, providing me with specialized training and opening doors to an exciting career in technology.";

            document.getElementById('date1').innerHTML = "December 2016";
            document.getElementById('date2').innerHTML = "March 2021";
            document.getElementById('date3').innerHTML = "September 2021";
            document.getElementById('date4').innerHTML = "February 2022";
            document.getElementById('date5').innerHTML = "September 2023";

            document.getElementById('last1').innerHTML = 'If you appreciate my creations and journey, you can follow me on';
            document.getElementById('last2').innerHTML = 'and';
            document.getElementById('last3').innerHTML = 'or even';
            document.getElementById('last4').innerHTML = 'CONTACT ME';
        }
        
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

        if (number === 1) {
            document.getElementById('index_header_text1').innerHTML = "ACCUEIL";

            document.getElementById('text1').innerHTML = "Salut, je suis Impierrooo <svg class='index_hand' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--emojione-monotone' preserveAspectRatio='xMidYMid meet'><path d='M41.947 6.448l-4.239 17.348l-3.521-17.588C32.948-.625 22.796 1.504 24.21 8.004l2.538 12.911c-2.579-.902-6.947 1.289-6.585 5.322c-1.525-2.258-8.707-1.605-8.13 5.009c0 0 .588 4.507.666 6.018c.139 2.711-.058 7.696.374 10.853c1.278 9.344 9.804 13.702 17.686 13.877c.165.004.331.006.498.006c8.112 0 16.932-4.377 18.747-14.301c1.313-7.192-1.115-10.431-4.473-12.896l6.307-26.16c1.54-6.096-8.346-8.544-9.891-2.195m-16.302.675c-.708-3.589 5.104-4.256 5.8-.612l4.625 24.222c-.869.11-2.555.861-4.619.972l-.74-6.522c-.153-1.38-1.282-3.009-2.259-3.782L25.645 7.123m.393 15.645c1.542.738 2.123 1.244 2.813 8.957c-2.021 0-3.669 1.863-3.669 4.076c-1.269 0-2.018-1.302-2.433-2.669c-.607-1.993-1.066-4.982-1.271-6.633c-.411-3.338 2.963-4.496 4.56-3.731m-6.255 7.029c.264.993 1.612 6.069 1.189 8.328c-.713 3.794-6.514 2.976-6.956-.932l-.749-6.405c-.426-3.838 5.256-5.74 6.516-.991M45.49 51.308c-4.947 8.254-15.265 9.729-22.2 6.778c-5.976-2.543-10.273-6.653-9.306-17.753c1.155 1.772 7.868 3.514 9.473-3.146c.634.393 1.33.616 2.028.683c1.02 2.681 4.297 3.508 5.336 3.711c-2.165 1.231-3.906 3.627-2.847 7.533c-.085-6.451 6.764-8.293 7.755-7.931c1.148.421 2.615 2.486 2.965 3.596c.137.438.166 1.833.166 1.833s.403-1.4.338-1.872c-.201-1.448-2.061-4.218-3.426-4.756c-1.623-.637-5.77-.234-7.321-1.03c-3.106-1.594-2.059-6.249.496-5.974c2.893.311 4.528-.192 5.958-.597c1.654-.468 3.104-.903 4.559.188c1.518 1.137 4.818 3.575 5.813 4.559c3.26 3.224 2.507 10.349.213 14.178m3.465-42.225l-5.683 24.21c-2.169-1.342-3.209-2.388-4.153-2.45l-.8-3.889L43.398 6.6c.834-3.417 6.589-1.554 5.557 2.483' fill='#37fff5'></path></svg>";
            document.getElementById('text2').innerHTML = "Développeur créatif et ambitieux.";
            document.getElementById('text3').innerHTML = "Mes outils & compétences";
            document.getElementById('text4').innerHTML = "Fort d'une expérience de plus de trois ans dans le domaine du développement informatique, je suis un créatif passionné. Mon expertise s'étend du développement web à la programmation en C, en passant par la conception d'applications mobiles. J'apprécie chaque opportunité de mettre en œuvre mes compétences pour créer des solutions innovantes et efficaces.";
            document.getElementById('text5').innerHTML = "Le Redcode Corewar est une variante du Corewar original où les programmes, appelés champions, sont écrits en langage Redcode. Les champions sont chargés dans une arène virtuelle où ils s'affrontent pour le contrôle de la mémoire. Les joueurs doivent concevoir des guerriers capables de survivre et de vaincre dans un environnement compétitif en utilisant des stratégies avancées et des techniques de programmation créatives.";
            document.getElementById('index_button').innerHTML = "DÉCOUVRIR LE PROJET";
        }

        if (number === 2) {
            document.getElementById('index_header_text1').innerHTML = "PROJECT";

            document.getElementById('description1').innerHTML = "Le Redcode Corewar est une variante du Corewar original où les programmes, appelés champions, sont écrits en langage Redcode. Les champions sont chargés dans une arène virtuelle où ils s'affrontent pour le contrôle de la mémoire. Les joueurs doivent concevoir des champions capables de survivre et de vaincre dans un environnement compétitif en utilisant des stratégies avancées et des techniques de programmation créatives.";
            document.getElementById('description2').innerHTML = "Le projet 42sh d'Epitech est un interpréteur de commandes (shell) en langage C, respectant les normes POSIX. Il permet l'exécution de commandes simples ou complexes, la gestion des pipes, des redirections de fichiers et des opérateurs logiques. Les fonctionnalités avancées incluent la manipulation des variables d'environnement et des commandes intégrées. Le projet vise à fournir une implémentation robuste et efficace du shell UNIX, en se conformant aux conventions de codage et en garantissant une bonne gestion de la mémoire.";
            

            document.getElementById('data1').innerHTML = "Langage : C";
            document.getElementById('data2').innerHTML = "Durée : 4 semaines";
            document.getElementById('data3').innerHTML = "Rôle : Développeur";
            document.getElementById('data4').innerHTML = 'Visualisation : <a class="slide_box_link" href="https://github.com/impierrooo/corewar" target="_blank">Github</a>';

            document.getElementById('data5').innerHTML = "Langage : C";
            document.getElementById('data6').innerHTML = "Durée : 4 semaines";
            document.getElementById('data7').innerHTML = "Rôle : Développeur";
            document.getElementById('data8').innerHTML = 'Visualisation : <a class="slide_box_link" href="https://github.com/impierrooo/42sh" target="_blank">Github</a>';

            document.getElementById('data9').innerHTML = "Langage : Lorem ipsum";
            document.getElementById('data10').innerHTML = "Durée : Lorem ipsum";
            document.getElementById('data11').innerHTML = "Rôle : Lorem ipsum";
            document.getElementById('data12').innerHTML = 'Visualisation : <a class="slide_box_link" href="https://loremipsum.io/" target="_blank">Lorem ipsum</a>';

            document.getElementById('data13').innerHTML = "Langage : Lorem ipsum";
            document.getElementById('data14').innerHTML = "Durée : Lorem ipsum";
            document.getElementById('data15').innerHTML = "Rôle : Lorem ipsum";
            document.getElementById('data16').innerHTML = 'Visualisation : <a class="slide_box_link" href="https://loremipsum.io/" target="_blank">Lorem ipsum</a>';

            document.getElementById('data17').innerHTML = "Langage : Lorem ipsum";
            document.getElementById('data18').innerHTML = "Durée : Lorem ipsum";
            document.getElementById('data19').innerHTML = "Rôle : Lorem ipsum";
            document.getElementById('data20').innerHTML = 'Visualisation : <a class="slide_box_link" href="https://loremipsum.io/" target="_blank">Lorem ipsum</a>';

            document.getElementById('last1').innerHTML = "Si tu as envie d'en savoir plus sur moi, je te laisse regarder mon";
            document.getElementById('last2').innerHTML = "À PROPOS";
        }

        if (number === 3) {
            document.getElementById('index_header_text1').innerHTML = 'À PROPOS';
            document.getElementById('index_header_text2').innerHTML = '<a href="./source/assets/documents/CV_Pierre_Montaret.pdf" target="_blank" class="under_slide_hover">Curriculum Vitae</a>';

            document.getElementById('quote').innerHTML = "En programmation, chaque ligne est une opportunité de créer quelque chose d'extraordinaire.";

            document.getElementById('text1').innerHTML = "Je suis Pierre Montaret, et je suis à la recherche d'un stage de 4 à 6 mois à partir de juillet 2024 pour enrichir mon parcours. Actuellement en formation à Epitech à Rennes, je me passionne pour les technologies de l'information et la conception de logiciels. Mon parcours académique est marqué par des projets stimulants, comme la reproduction de commandes en C et des projets graphiques dynamiques, démontrant ma capacité à relever des défis techniques avec créativité et rigueur.";
            document.getElementById('text2').innerHTML = "En dehors de mes études, j'ai développé un intérêt pour l'investissement et les cryptomonnaies, illustrant ma volonté d'explorer de nouveaux domaines et de relever des défis complexes. Mon engagement dans des activités variées, telles que l'équitation et les jeux vidéo, met en lumière mon équilibre entre le travail et les loisirs, ainsi que ma capacité à gérer efficacement mon temps et mes ressources.";
            document.getElementById('text3').innerHTML = "Avec l'obtention de mon permis de conduire en 2023, j'ai acquis une autonomie qui se reflète également dans mes soft skills, telles que la créativité, l'adaptabilité et le travail en équipe. Ces compétences transversales, combinées à mon expertise en informatique et à ma passion pour les défis intellectuels, font de moi un candidat idéal pour contribuer de manière significative à tout projet dans lequel je m'engage.";
            document.getElementById('text4').innerHTML = "Alors que je partageais mes passions, mon parcours prenait forme de manière progressive. De mon enfance à mes années d'adolescence, chaque étape contribuait à forger mon chemin vers l'avenir.";

            document.getElementById('title1').innerHTML = "Mon premier ordinateur";
            document.getElementById('title2').innerHTML = "Découverte de la programmation";
            document.getElementById('title3').innerHTML = "Ma spécialisation en NSI";
            document.getElementById('title4').innerHTML = "Mes débuts en création web";
            document.getElementById('title5').innerHTML = "Mon parcours à Epitech";

            document.getElementById('description1').innerHTML = "À l'âge de 11 ans, j'ai fait l'acquisition de mon premier ordinateur, marquant le début d'une fascination pour le monde numérique.";
            document.getElementById('description2').innerHTML = "En seconde, j'ai eu ma première rencontre avec la programmation, une révélation qui a déclenché une passion pour le codage et les algorithmes.";
            document.getElementById('description3').innerHTML = "Au lycée, j'ai choisi la spécialité NSI, consolidant ainsi mes connaissances informatiques et préparant le terrain pour mon avenir dans le domaine de la technologie.";
            document.getElementById('description4').innerHTML = "En tant qu'indépendant, j'ai commencé à créer des sites web, explorant ma créativité et développant mes compétences techniques pour donner vie à mes idées en ligne.";
            document.getElementById('description5').innerHTML = "Intégrer Epitech, l'école d'informatique, a été une étape cruciale dans mon parcours, me fournissant une formation spécialisée et ouvrant les portes à une carrière passionnante dans la technologie.";

            document.getElementById('date1').innerHTML = "Décember 2016";
            document.getElementById('date2').innerHTML = "Mars 2021";
            document.getElementById('date3').innerHTML = "Septembre 2021";
            document.getElementById('date4').innerHTML = "Février 2022";
            document.getElementById('date5').innerHTML = "Septembre 2023";

            document.getElementById('last1').innerHTML = 'Si vous appréciez mes créations et mon parcours, vous pouvez me suivre sur';
            document.getElementById('last2').innerHTML = 'et';
            document.getElementById('last3').innerHTML = 'ou même';
            document.getElementById('last4').innerHTML = 'ME CONTACTER';
        }

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