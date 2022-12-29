// const champTemplate = document.querySelector("[champ-data-template]")
// const champContainer = document.querySelector("[data-container]")

// fetch("http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(champions => {
//             const champ = champTemplate.content.cloneNode(true).children[0]
//             const name = champ.querySelector("[data-name]")
//             name.textContent = champion.name
//             champContainer.append(champ)
//         })
//     })



// fetch("https://jsonplaceholder.typicode.com/users/")
//     .then(res => res.json())
//     .then(data => console.log(data))

// fetch("http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json")
//     .then(res => res.json())
//     .then(data => console.log(data))

// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")

// fetch("http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(user => {
//             const card = userCardTemplate.content.cloneNode(true).children[0]
//             const header = card.querySelector("[data-header]")
//             const body = card.querySelector("[data-body]")
//             header.textContent = user.name
//             body.textContent = user.email
//             userCardContainer.append(card)
//         })
//     })

// function removeClass() {
//     var element = document.getElementById("Aatrox");
//     element.classList.remove("active");
// }

// const searchInput = document.querySelector("[data-search")

// searchInput.addEventListener("input", e => {
//     const value = e.target.value
//     console.log(value)
// })

// let champs = []

// const collection = document.getElementsByClassName("champion-icon");
// console.log(collection[2].innerHTML);


// searchInput.addEventListener("input", e => {
//     const value = e.target.value
//     console.log(value)
// })

// let champs = []

// var collection = document.getElementsByClassName("champion-icon");
// console.log(collection[0].innerHTML);

// function champList() {
//     for ( var i = 0 ; i < collection.length ; i++ )
//         champs.push( collection[i].innerHTML );
// };

// console.log(champs[2])

function searchChamp() {
    let input = document.getElementById("search").value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("champion-icon");
    console.log(input)
      
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
//     let input = document.getElementById("top").innerText
//     let x = document.getElementsByClassName("champion-icon")
//     console.log(input)

//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="flex";                 
//         }
//     }
// }

function sortRole() {
    let input = document.getElementById("top").innerText
    input = document.getElementById("search").value;
}

// function sortRole() {
//     let input = document.getElementById("top").innerText
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName("champion-icon");
//     console.log(input)
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.opacity=".25";
            
//         }
//         else {
//             x[i].style.display="flex";     
//             console.log(x[i])          
//         }
//     }
// }



// function gatherId(clickedId) {
//     console.log(clickedId)
// }

// const icon = document.getElementById(9);

// let toggle = true;
// icon.addEventListener("click", function(){
    
//     toggle = !toggle;
//         if(toggle){
//             icon.style.opacity = "100%";
//         }else{
//             icon.style.opacity = "25%";
//         }
// })





// WORKING TOGGLE, cons: have to add function to every icon
function gatherId(clickedId) {
    console.log(clickedId)
    changeop(clickedId)
}

var toggle = false;

function changeop(clickedId) {
    if (toggle === true ) {
        document.getElementById(clickedId).style.opacity = "100%"
    } else {
        document.getElementById(clickedId).style.opacity = "25%"
    }
    toggle = !toggle;
}

