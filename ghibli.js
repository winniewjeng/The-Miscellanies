const app = document.getElementById('root');
// console.log(app);

// create an img element for the website
const logo = document.createElement('img');
logo.src = '/images/ghibli_logo.png';

const id = document.createElement('id');
logo.id = 'ghibli-logo';

// create div element with set attributes
const container = document.createElement('div');
container.setAttribute('class','ghibli_container');

// append the elements to the website under id 'root'
app.appendChild(logo);
app.appendChild(container);


const url = `https://ghibliapi.herokuapp.com/films`;

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(movie => {
            // // Log each movie's title
            // console.log(movie.title)
            // console.log(movie.description)
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h2 = document.createElement('h2')
            h2.textContent = movie.title

            const p = document.createElement('p')
            // movie.description = movie.description.substring(0,300) // Limit to 300 chars
            p.textContent = `${movie.description}...` // End with an ellipses

            container.appendChild(card)
            card.appendChild(h2)
            card.appendChild(p)
        })
    })
    .catch(err => {
        const errorMessage = document.createElement('err')
        errorMessage.textContent("problem retrieveing Ghibli JSON file")
        app.appendChild(errorMessage)
        console.log("problem retrieveing Ghibli JSON file")

    })

