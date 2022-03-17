
const app = new Vue(

    {
        el: '#app',
        data: {
                activeElement: 0,
                elements: [
                {
                    imageSrc: '-1637768345162.jpg',
                    title: 'Gino Spadaccino',
                    description: 'significativa immagine di Gino mentre pela le patate',
                },
                {
                    imageSrc: 'elden-ring-art.jpeg',
                    title: 'Marco ed il cane Ugo',
                    description: 'Marco che porta a spasso il cane, a sua insaputa però incombeva una giornata ventosa',
                },
                {
                    imageSrc: 'elden-ring-scaled-1.jpg',
                    title: 'Foto di Delfina e ricordi di un estate a Foggia',
                    description: 'Delfina ricordava bene quell\'estate, faceva un caldo torrido, tando che riuscì a fotografare un passante mentre duellava con il Caldo Torrido',
                },
                {
                    imageSrc: 'sf_wvns.jpg',
                    title: 'Pierino e la marachella ',
                    description: 'Pierino che viene rinproverato dalla madre per i suoi svariati giri di scommesse clandestine',
                },
                {
                    imageSrc: 'the-witcher-stagione-2-serie-2021-geralt.jpg',
                    title: 'Geralt e i postumi',
                    description: 'Geralt dopo una serata con gli elfi, non andata proprio benissimo ',
                },
                {
                    imageSrc: 'zV8oTyn3AEfXibuuFLKez8.jpg',
                    title: 'Geralt il Macellaio di Rivia',
                    description: 'Geralt in procinto di tagliare una libbra di carne alla signra Carmela',
                },
            ],
        },
        methods: {
            nextElement: function () {
                if (this.activeElement === this.elements.length - 1)
                    this.activeElement = 0;
                else {
                    this.activeElement++;
                }
            },
            //ma famolo col ternario
            prevElement: function () {
                (this.activeElement === 0) ? this.activeElement = this.elements.length - 1 : this.activeElement--;
            }
        },
    }

)


/* document.getElementById('my-after-carousel').innerHTML = `
    <button class="btn btn-dark" id="reverse-direction">Gira il Giro</button>
` */

/* document.querySelector('.my-next').addEventListener('click', next);
document.querySelector('.my-previous').addEventListener('click', prev); */

/* const directionLeft = setInterval(coldPursuit, 1000);
const directionRight = setInterval(hotPursuit, 1000);
directionRight;

document.querySelector('#reverse-direction').addEventListener('click', function () {

    setTimeout(clearInterval,10000,directionLeft)
    clearInterval(directionLeft);

    setTimeout(clearInterval,10000,directionRight)
})

function hotPursuit() {
    unactive();
    next();
    active();
}

function coldPursuit() {
    prev();
    unactive();
    prev();
    active();
} */

//| setTimeout(clearInterval, timeUser, directionRight);
//? carina






