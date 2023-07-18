const inputUser = document.getElementById("input-username");
inputUser.addEventListener(`keypress`, function(event) {
    if (event.key === "Enter") {
        getID(inputUser.value)
    }
})

const apiKey = 'RGAPI-35ab58c6-ef9a-4311-bf3a-2e1c4324da4a';
const matchId = 'MATCH_ID';

function getID(username) {
    const apiUrl = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${apiKey}`

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
        console.log(data);
        let puuid = data.puuid;
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
    });
}