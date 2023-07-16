const inputUser = document.getElementById("input-username");
inputUser.addEventListener(`keypress`, function(event) {
    if (event.key === "Enter") {
        console.log(inputUser.value)
        beginData(inputUser.value)
    }
})

const apiKey = 'RGAPI-f08e0c4f-81ab-4ce5-b897-5d3407545fe6';
const matchId = 'MATCH_ID';

function beginData(username) {
    const apiUrl = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/NA1?api_key=${apiKey}`;

    fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the response as JSON
        } else {
            throw new Error('Error: ' + response.status);
        }
    })
    .then(data => {
        // Process the retrieved match data
        // console.log(data);
        document.querySelector(`.header h1`).innerText = data.gameName;
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
    });
}
