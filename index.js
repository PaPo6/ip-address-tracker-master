let input = document.querySelector('#add');
let button = document.querySelector('.ad-input-button');
let ipAdress1 = document.querySelector('.ip-adress1 span');
let place = document.querySelector('.location span');
let time = document.querySelector('.timezone span');
let protocol = document.querySelector('.isp span');
let mymap1 = L.map('mapid');



button.addEventListener('click', (f) => {
    let ipAdress = input.value;
    let url = `https://geo.ipify.org/api/v1?apiKey=at_n9NeWAzM0pOj9Jh9tnJ5vRslzmrCz&ipAddress=${ipAdress}`;
    fetch(url).then(
        response => response.json()

    ).then(data => {
        ipAdress1.innerText = data.ip;
        place.innerText = data.location.city;
        time.innerText = data.location.timezone;
        protocol.innerText = data.isp;
        mymap1.setView([data.location.lat, data.location.lng], 13);
        console.log(data);
        console.log(data.ip);
        console.log(ipAdress1);
        console.log(place);
        console.log(protocol);


    });
    console.log(url);
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap1);
// L.marker([51.5, -0.09]).addTo(mymap)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();