// require('./scss/main.scss');
import './scss/main.scss'
// import './images/favicon-32x32.png'

const elements = document.querySelectorAll('.accordion__item-header');

function showelement() {

    elements.forEach(element => {
        element.addEventListener('click', () => {
            if (element.classList.contains('show')) {
                element.classList.remove('show')
            }
            else {
                closeelements()
                element.classList.add('show')
            }
        })
    })
    
}

function closeelements() {
    elements.forEach(element => {
        //remueve todos los los show
        element.classList.remove('show')
    })
}

showelement()

console.log("Hola mundo2");
