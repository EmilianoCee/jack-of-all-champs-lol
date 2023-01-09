loadStorage();

function beginStorage () {
    for (z = 0; z < 162; z++)
    window.localStorage.setItem(JSON.stringify(z), "1");
    window.localStorage.setItem("begin", "none");
    document.getElementById("beginButton").style.display = localStorage.begin;
}

function loadStorage() {
    for (z = 0; z < 162; z++) {
        const value = localStorage.getItem(z);
        document.getElementById(z).style.opacity = value;
        if (value == ".25") {
            document.getElementById(z).classList.add("done");
        }
    }
    // document.getElementById("beginButton").style.display = localStorage.begin;
}

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
    checkRole();
}


function sortRole(clickedId) {
    let input = document.getElementById("search").value;
    let x = document.getElementById(clickedId);
    document.getElementById("search").value = x.innerText;
    
    searchChamp();
}

function changeop(clickedId) {
    var element = document.getElementById(clickedId)
    var op = element.style.opacity;
    console.log(op);
    if (op == 0.25) {
        element.style.opacity = "100%";
        localStorage.setItem(JSON.parse(element.id),  "1")
        element.classList.remove("done");
    } else {
        element.style.opacity = "25%";
        localStorage.setItem(JSON.parse(element.id),  ".25")
        element.classList.add("done");
    }
    toggle = !toggle;
}

function toggleVisibility() {
    for (z = 0; z < 162; z++) { 
        var value = localStorage.getItem(z);
        if (toggle === false ) {
            if (value == ".25") {
                value = "none";
                document.getElementById(z).style.display = value;
            }
        } else {
            value = "flex";
            document.getElementById(z).style.display = value;
            // document.getElementById("search").value = "";
            searchChamp();
        }
    } 
    toggle = !toggle;
}

// function visibilityButtonText() {
//     let button = document.getElementById("visiblity-button");
//     if (button.innerText == "Hide Completed") {
//         button.innerText = "Show Completed";
//     } else {
//         button.innerText = "Hide Completed";
//     }
// }

function toggleAll() {
    let x = document.getElementsByClassName("champion-icon")
    for (i = 0; i < x.length; i++) { 
        if (toggle === true ) {
            x[i].style.opacity = "100%";
            x[i].classList.remove("done");
            localStorage.setItem(JSON.parse(x[i].id), "1")
        }
        else {
            x[i].style.opacity = "25%";
            x[i].classList.add("done");
            localStorage.setItem(JSON.parse(x[i].id), ".25")
        }
    }
    toggle = !toggle;
}

// function enableButtonText() {
//     let button = document.getElementById("enable-button");
//     if (button.innerText == "Disable All") {
//         button.innerText = "Enable All";
//     } else {
//         button.innerText = "Disable All";
//     }
// }

function checkRole () {
    let input = document.getElementById("search").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("role");
      
    for (i = 0; i < x.length; i++) { 
        if (x[i].innerText == input) {
            x[i].style.opacity="100%";
            x[i].style.borderBottom = "solid 8px rgb(120, 90, 40)";
        }
        else {
            x[i].style.opacity = "35%";
            x[i].style.borderBottom = " solid 8px rgba(120, 90, 40, 0)";
        }
    }
}

// make sure index of champion grid does not change

function toggleColumns() {
    const stylesheet = document.styleSheets[0];
    let elementRules;
    elementRules = stylesheet.cssRules[2];
        if (toggle === true ) {
            elementRules.style.setProperty("grid-template-columns", "repeat(7, 1fr)");
            document.getElementById("column-button").innerText = "Max Columns";
        }
        else {
            elementRules.style.setProperty("grid-template-columns", "repeat(auto-fill, minmax(100px, 1fr))");
            document.getElementById("column-button").innerText = "Seven Columns";
        }
    toggle = !toggle;
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