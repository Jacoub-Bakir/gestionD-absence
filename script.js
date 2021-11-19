const menuSectionsList = document.querySelectorAll('.menuSections');
const mainContainer = document.querySelector('.container__main > section');
const childs = mainContainer.children;


// pour rester dans la meme section dans la page
window.onload = function(){
    if(localStorage.getItem("showedSection") === null){
        localStorage.setItem("showedSection",0);
    }
    let j = 0;
    while(j<menuSectionsList.length){
        menuSectionsList[j].className = 'menuSections';
        childs[j].className = 'Section';
        j++;
    }
    menuSectionsList[localStorage.getItem("showedSection")].className = 'menuSections active';
    childs[localStorage.getItem("showedSection")].className = 'Section show';
}



//changement du section par sidebar-nav 
for(let i=0; i< menuSectionsList.length; i++){

    menuSectionsList[i].addEventListener("click" , function(){
        localStorage.setItem("showedSection",i);
        let j = 0;
        while(j<menuSectionsList.length){
            menuSectionsList[j].className = 'menuSections';
            childs[j].className = 'Section';
            j++;
        }
        menuSectionsList[i].className = 'menuSections active';
        childs[i].className = 'Section show';
    });
}

// les informations d'utilisateur dans la section modifier
function update_txt(obj){
    if(obj.selectedIndex==0){
        document.getElementById('nom').value = "";
        document.getElementById('prenom').value = "";
        document.getElementById('email').value = "";
        document.getElementById('level').value = "";
        document.getElementById('phone').value = "";
    }else{
        document.getElementById('nom').value = obj.options[obj.selectedIndex].getAttribute('data-nom');
        document.getElementById('prenom').value = obj.options[obj.selectedIndex].getAttribute('data-prenom');
        document.getElementById('email').value = obj.options[obj.selectedIndex].getAttribute('data-email');
        document.getElementById('level').value = obj.options[obj.selectedIndex].getAttribute('data-level');
        document.getElementById('phone').value = obj.options[obj.selectedIndex].getAttribute('data-phone');
    }
}

function ajouter(element){
    console.log(element.name.value);
    var nom = element.name.value;
    var prenom = element.prenom.value;
    var email = element.email.value;
    var level = element.level.value;
    var phone = element.phone.value;
    var modifierSelect = document.getElementById('modifierUtilisateur');
    var supprimerSelect = document.getElementById('supprimerUtilisateur');
   
    //ajouter dans selection du modifier
    var modifieropt = document.createElement('option');
    modifieropt.setAttribute("data-nom",nom);
    modifieropt.setAttribute("data-prenom",prenom);
    modifieropt.setAttribute("data-email",email);
    modifieropt.setAttribute("data-level",level);
    modifieropt.setAttribute("data-phone",phone);
    modifieropt.innerHTML =prenom+" "+nom ;
    modifierSelect.appendChild(modifieropt);
    
    //ajouter dans selection du supprimer
    var supprimeropt = document.createElement('option');
    supprimeropt.setAttribute("data-nom",nom);
    supprimeropt.setAttribute("data-prenom",prenom);
    supprimeropt.setAttribute("data-email",email);
    supprimeropt.setAttribute("data-level",level);
    supprimeropt.setAttribute("data-phone",phone);
    supprimeropt.innerHTML =prenom+" "+nom ;
    supprimerSelect.appendChild(supprimeropt);

    // ajouter dans table d'utilisateur
    var table = document.getElementById( 'tableUtilisateur' );
    row = table.insertRow(table.rows.length);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);

    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = prenom;
    cell3.innerHTML = nom;
    cell4.innerHTML = level;
}




