var toggle = false;

function searchChamp() {
    let input = document.getElementById("search").value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("champion-icon");
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            
        }
        else {
            x[i].style.display="flex";
        }
    }
}

// function sortRole() {
//     let input = document.getElementById("search").value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName("role");

//     if (toggle === true ) {
//         document.getElementById(clickedId).style.opacity = "100%"
//     } else {
//         document.getElementById(clickedId).style.opacity = "25%"
//     }
//     toggle = !toggle;
// }

function sortRole(clickedId) {
    let input = document.getElementById("search").value;
    let x = document.getElementById(clickedId);
    document.getElementById("search").value = x.innerText;
    searchChamp();
}



// Toggle for champ icons
// function gatherId(clickedId) {
//     changeop(clickedId)
// }


function changeop(clickedId) {
    if (toggle === true ) {
        document.getElementById(clickedId).style.opacity = "100%";
    } else {
        document.getElementById(clickedId).style.opacity = "25%";
    }
    toggle = !toggle;
}


// make sure index of champion grid does not change
function infColumns(){
    const stylesheet = document.styleSheets[0];
    console.log(stylesheet);
    let elementRules;

    elementRules = stylesheet.cssRules[2];

    elementRules.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(100px, 1fr))");
}

function sevenColumns(){
    const stylesheet = document.styleSheets[0];
    console.log(stylesheet);
    let elementRules;

    elementRules = stylesheet.cssRules[2];

    elementRules.style.setProperty("grid-template-columns", "repeat(7, 1fr)");
}

function toggleMenu() {
    const menu = document.querySelector(".menu");

    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        document.querySelector(".close-icon").style.display = "none";
        document.querySelector(".burger-icon").style.display = "block";
        menu.style.display = "none";
        document.styleSheets[0].cssRules[5].style.setProperty("display", "flex");
    } else {
        menu.classList.add("show-menu");
        document.querySelector(".close-icon").style.display = "block";
        document.querySelector(".burger-icon").style.display = "none";
        menu.style.display = "flex";
        document.styleSheets[0].cssRules[5].style.setProperty("display", "none");
    }
}


// fetch("http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json")
//     .then(res => res.json())
//     .then(data => console.log(data))
