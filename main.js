const starWars = document.querySelector('#swContainer')

fetch('https://swapi.co/api/people/44/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#name').innerHTML = data.name
        document.querySelector('#birth').innerHTML = "Birth Year: " + (data.birth_year)
        document.querySelector('#gender').innerHTML = "Gender: " + data.gender
        // document.getElementById('info').innerHTML = data.map(toHTML).join('\n')
    })

fetch('https://swapi.co/api/planets/36/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#home').innerHTML = "HomeWorld: " + data.name
    })

fetch('https://swapi.co/api/films/4/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#films').innerHTML = "Film(s): " + data.title
    })

fetch('https://swapi.co/api/species/22/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#species').innerHTML = "Species: " + data.name
    })

fetch('https://swapi.co/api/starships/41/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#starship').innerHTML = "Starship: " + data.name
    })