const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}
function playTrack(trackId) {
    const template = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
    </iframe>
    `;
    document.querySelector("#artist").innerHTML = template;
}

async function getTracks(term) {
    //query spotify for tracks.// 
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const response = await fetch(url);
    const trackData = await response.json();
    //clear the previous search//
    document.querySelector('#tracks').innerHTML = "";
    //2. loop through track data and display first five tracks//
    for (let i = 0; i < 5; i++) {
        const track = trackData[i];
        const template = `
    <section class="track-item preview" onclick ="playTrack('${track.id}')">
    <img src="${track.album.image_url}">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>${track.name}</h2>
        <p>${track.artist.name}</p>
    </div>
</section>
`;
        document.querySelector("#tracks").innerHTML += template;
    }
}

async function getAlbums(term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist(term) {
    //1. query spotify for artist//
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const response = await fetch(url);
    const artistData = await response.json();
    console.log(artistData);
    const artist = artistData[0];

    //2. update the template with our artist//
    //3. display it to the screen//

    const template = `
    <section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
`;
    document.querySelector('#artist').innerHTML = template;
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}