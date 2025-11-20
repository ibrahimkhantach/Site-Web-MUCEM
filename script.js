

// Pour charger la bonne page au démarrage (refresh)
document.addEventListener('DOMContentLoaded', () => {
    const pageSauvegardee = localStorage.getItem('page');
    getPage(pageSauvegardee);
});

const exposition = {
  "titre": "Voyage au Cœur de l’Art",
  "description": "Une exposition immersive qui dévoile des œuvres modernes et traditionnelles à travers un parcours visuel interactif, offrant aux visiteurs une découverte unique et inspirante."
};


function getexpositions() {

    let main = document.getElementById("main");

    main.innerHTML = `
                <h1 class="title">${exposition.titre}</h1>
                <p class="description">${exposition.description}</p>
            `
}


const faq = [
  {
    "question": "What is the purpose of this platform?",
    "answer": "The platform allows users to explore content, access services, and interact with various features designed to simplify their daily tasks."
  },
  {
    "question": "How can I create an account?",
    "answer": "You can create an account by clicking on the Sign Up button and filling out the required fields such as name, email, and password."
  },
  {
    "question": "Is my personal data secure?",
    "answer": "Yes, all personal data is encrypted and securely stored following industry security standards to protect your privacy."
  },
  {
    "question": "How do I reset my password?",
    "answer": "Go to the login page, click on 'Forgot Password', and follow the instructions to receive a password reset link by email."
  },
  {
    "question": "Can I access the platform on mobile?",
    "answer": "Yes, the platform is fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    "question": "Do you offer customer support?",
    "answer": "Yes, we provide 24/7 customer support through live chat, email, and our help center."
  },
  {
    "question": "How can I delete my account?",
    "answer": "You can delete your account from the Settings page under the 'Account Management' section."
  },
  {
    "question": "Are the services free to use?",
    "answer": "Many services are free, and some premium features require a subscription to access."
  },
  {
    "question": "How often is content updated?",
    "answer": "Content is updated weekly to ensure you always have the latest information."
  },
  {
    "question": "Can I submit feedback?",
    "answer": "Absolutely! You can send feedback through our feedback form located in the Support section."
  }
];

function getFaq() {

    let main = document.getElementById("main");

    main.innerHTML += `
        <div class="container">
        <h1 class="title">FAQ</h1>
    `+faq
        .map(element => {
            return `
                
                    <div class="question" onclick="show(this)"> ${element.question} <spna class="action"> + </span></div>
                    <div class="hidden"> ${element.answer} </div>
               
            `;
        })
        .join("")+`</div>`; // join all strings together
}


function show(question){

    let action = question.firstElementChild ;
    let answer = question.nextElementSibling ;

    if(action.innerHTML === "+"){
        action.innerHTML = "-"
        answer.classList.remove("hidden");
        answer.classList.add("show")

    }else{
        action.innerHTML = "+"
        answer.classList.add("hidden");
        answer.classList.remove("show")
    }

    
}

function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show2');
}

const imagesData = [
  {
    "title": "Exploration Urbaine",
    "description": "Photographie capturant la dynamique et l’énergie des rues modernes.",
    "image": "./images/img1.jpg"
  },
  {
    "title": "Lumières Nocturnes",
    "description": "Jeu de lumière et d’ombre dans un paysage urbain la nuit.",
    "image": "./images/img2.jpg"
  },
  {
    "title": "Forêt Enchantée",
    "description": "Une immersion au cœur d’une forêt mystique avec des couleurs vibrantes.",
    "image": "./images/img3.jpg"
  },
  {
    "title": "Rivière Tranquille",
    "description": "Paysage apaisant d’une rivière reflétant le ciel et les arbres alentours.",
    "image": "./images/img4.jpg"
  },
  {
    "title": "Architecture Contemporaine",
    "description": "Focus sur les formes géométriques et le design moderne des bâtiments.",
    "image": "./images/img5.jpg"
  },
  {
    "title": "Coucher de Soleil",
    "description": "Le ciel s’embrase de couleurs chaudes pendant le coucher du soleil.",
    "image": "./images/img6.jpg"
  },
  {
    "title": "Vie Sauvage",
    "description": "Instantané d’un animal dans son habitat naturel, capturant sa beauté sauvage.",
    "image": "./images/img7.jpg"
  },
  {
    "title": "Montagnes Majestueuses",
    "description": "Panorama grandiose de montagnes enneigées et paysages naturels.",
    "image": "./images/img8.jpg"
  },
  {
    "title": "Plage et Vagues",
    "description": "Beauté d’une plage au lever du soleil avec des vagues douces.",
    "image": "./images/img9.jpg"
  },
  {
    "title": "Art Abstrait",
    "description": "Composition artistique colorée inspirée de formes abstraites et textures variées.",
    "image": "./images/img10.jpg"
  }
];


function getGallery(){
    console.log("test")

    let main  = document.getElementById("main") ;

    main.innerHTML = `
    
        <h1 class="title">Gallery</h1>
        <div class="container-img">
    `+imagesData.map((image,index)=>{
        return`
            <img src="${image.image}" class="i${index} image"/>
        `
}).join("")+`</div>`;

}

// afficher page atelier
function getAtelier(){

    let main  = document.getElementById("main") ;

    main.innerHTML = `
      
      <h1 class="title">Inscription</h1>
      <form action="" class="form" onSubmit="Submit(event)">
        <label for="nom">Entrer nom : </label>
        <input type="text" name="nom" id="nom" class="input">
        <span class="hidden span">Le Nom est Obligatoire</span>

        <label for="Prenom">Entrer Prenom : </label>
        <input type="text" name="Prenom" id="Prenom" class="input">
        <span class="hidden span">Le PreNom est Obligatoire</span>

        <label for="cin">Entrer CIN : </label>
        <input type="text" name="cin" id="cin" class="input">
        <span class="hidden span">Le CIN est Obligatoire</span>

        <label for="email">Entrer Email : </label>
        <input type="email" name="email" id="email" class="input">
        <span class="hidden span">Email est Obligatoire</span>

        <label for="tel">Entrer Telephone : </label>
        <input type="tel span" name="tel" id="tel" class="input">
        <span class="hidden span">Le Numero de telephone est Obligatoire</span>

       <span class="hidden valide">Les Inforamations Valide</span>
        <input type="submit" value="Envoyer" >
        
    </form>
        
`;

}

function Submit(e){
    e.preventDefault();

    let input = document.querySelectorAll(".input")

    input.forEach( e=>{
        if(e.value === ""){
          e.nextElementSibling.style.display = "block"
           e.nextElementSibling.style.color = "red"
        }else{
           e.nextElementSibling.innerHTML = ""
        }
    });

    let Cin = document.getElementById("cin");

    let regexCin = /^([a-zA-Z]\d{6}|[a-zA-Z]{2}\d{5})$/ ;

    if(!regexCin.test(Cin.value) && Cin.value != ""){
        Cin.nextElementSibling.innerHTML = "Cette Cin Non Valide please entrer cin correct"
        Cin.nextElementSibling.style.display = "block"
        Cin.nextElementSibling.style.color = "red"
    }

    let Email = document.getElementById("email");

    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!regexEmail.test(Email.value) && Email.value != ""){
        Email.nextElementSibling.innerHTML = "Cette Email Non Valide please entrer cin correct"
        Email.nextElementSibling.style.display = "block"
        Email.nextElementSibling.style.color = "red"
    }

    let Phone = document.getElementById("tel");

    let regexPhone = /^0[6-7]\d{8}$/ ;

    if(!regexPhone.test(Phone.value) && Phone.value != ""){
        Phone.nextElementSibling.innerHTML = "Cette Email Non Valide please entrer cin correct"
        Phone.nextElementSibling.style.display = "block"
        Phone.nextElementSibling.style.color = "red"
    }

    let allSpan = document.querySelectorAll(".span");

    let spanValide = document.querySelector(".valide")

    let valide = true

    
    allSpan.forEach(e => {
        if(e.innerHTML != ""){
          console.log(e.innerHTML)
          valide = false;
          return 
        }

    });
    console.log(spanValide.innerHTML)
    console.log(valide)

    if(valide){
      spanValide.style.display = "block"
    }else{
      spanValide.style.display = "none"
    }
}



// 1. Initialisation : On ne set 'acceuil' que si rien n'est défini
if (localStorage.getItem('page')===null) {
    localStorage.setItem('page', 'acceuil');
}


function getPage(nomDeLaPage) {
    // 2. D'abord, on ENREGISTRE la nouvelle page demandée
    localStorage.setItem('page', nomDeLaPage);
    const nav = document.getElementById('nav-links');
      
    // 3. Ensuite, on compare (Utilisez ===)
    if (nomDeLaPage === "acceuil") {
        nav.classList.remove('show2');

        getexpositions();
        getFaq();
    } 
    else if (nomDeLaPage === "gallery") {
        nav.classList.remove('show2');
        getGallery();
    } 
    else if (nomDeLaPage === "atelier") {
        nav.classList.remove('show2');
        getAtelier();
    }
}

