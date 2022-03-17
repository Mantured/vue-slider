
const app = new Vue(

    {
        el: '#app',
        data: {
                setSlideLeft: 0,
                setSlide: 0,
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
            //ma famolo col ternario
            nextElement: function () {
                (this.activeElement === this.elements.length - 1) ? this.activeElement = 0 : this.activeElement++;
            },
            prevElement: function () {
                (this.activeElement === 0) ? this.activeElement = this.elements.length - 1 : this.activeElement--;
            },

            /**
             *
             * @param {*} elementIndex index of element (sostanzialmente l'indice che gli passo col v for)
             */
            selectElement: function (elementIndex) {
                this.activeElement = elementIndex;
            },

            autoSlideElement() {
                this.setSlide = setInterval(() => {
                    this.nextElement();
                    console.log(this); //!parent undefine? vedi il perchè anche se ha nextElement
                }, 3000);
            },
            stopAutoSlideElement() {
                clearInterval(this.setSlide);
                this.setSlide = 0;
            },
            autoSlideElementLeft() {
                this.setSlideLeft = setInterval(() => {
                    this.prevElement();
                },3500)
            },
            stopAutoSlideElementLeft() {
                clearInterval(this.setSlideLeft);
                this.setSlideLeft = 0;
            }
        },
    }

)







