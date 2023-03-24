const API_BASE = fetch('https://rickandmortyapi.com/api')
const API_CHARACTERS = fetch('https://rickandmortyapi.com/api/character')
const API_EPISODES = fetch('https://rickandmortyapi.com/api/episode')

const llamarAAPICharacters = API_CHARACTERS;
const llamarAAPIEpisodes = API_EPISODES;

llamarAAPICharacters
    .then((datac) => {
        return datac.json();
    })

    .then((data) => {
        console.log(data.results);
        const $container = document.getElementById('characters')
        const characters = data.results

        for (let i = 0; i < characters.length; i++) {
            $container.innerHTML += `
    <div class='card'>
    <img src=${characters[i].image} alt="" />
    <h3>Name: ${characters[i].name}</h3>
    <p>Gender:${characters[i].gender}</p>
    <p>Spiecie: ${characters[i].species}</p>
    <p>Status: ${characters[i].status}</p>
    <p>Origen: ${characters[i].origin.name}</p>
    </div>
    `
        }

    })

    .catch((err) => {
        console.log(err);
    })

llamarAAPIEpisodes
    .then((datae) => {
        return datae.json();
    })

    .then((data) => {
        console.log(data.results);
        const $container = document.getElementById('episodes')
        const episodes = data.results

        for (let i = 0; i < episodes.length; i++) {
            $container.innerHTML += `
    <div class='episode'>
    <div class="name_episode">
        <h3>Name episode</h3>
        <p>${episodes[i].name}</p>
</div>
<div class="air_date">
        <h4>Air Date</h4>
        <p>${episodes[i].air_date}</p>
</div>
<div class="season_episode">
        <h4>Season and episode number</h4>
        <p>${episodes[i].episode}</p>
</div>
    </div>
    `
        }

    })


    .catch((err) => {
        console.log(err);
    })