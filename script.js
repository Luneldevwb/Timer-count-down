window.addEventListener('DOMContentLoaded', function () {
    // Ici qu'on ecrira le script de notre page.
    'use strict';

    // Создаем таймер обратного отсчета на сайте

    // 1ere etape on cree une date limite    
    let deadline = '2023-05-05';

    // 2 etape on cree une qui nous permet d'obtenir et l'envoyer au span correspondant.

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        //hours =  Math.floor((t/1000/60/60) % 24) //les heures
        // days = Math.floor((t/(1000*60*60*24))) //pour les jours

        // on cree un object pour obtenir un resultat apres l'execution de la fonction.
        return {
            'total': t,
            'hours' : hours,
            'minutes': minutes,
            'seconds': seconds

        };
    }

    // 3 etape on cree une fonction pour rendre notre timer dynamique en creant une autre fonction.

    function setClock(id, endtime ) {   // ca prend deux areuments: 1.la boite ou se trouve notre timer et 2. l'argument qui est lie a la fonction compteur.

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'), // on prend la classe hours selon son parent direct qui est timer.
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        

        // 4 etape il faut creer une function qui mettra a jour notre timer chaque seconde en utilisant la methode setInterval.

        function updateClock() {
            // on cree un parametre de controle t
            let t = getTimeRemaining(endtime); // deadline vient en tant que argument dans endtime.
            
            // cette function nous donnera la possibilite de d'ajouter un zero devant les chiffres de 0 a 9

            function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes); // pour mettre a jour notre  timer(hours,minutes,seconds) on doit les obtenir de l'object t,car c'est labas que se trouve la maj de chaque h, m et s.

            seconds.textContent = addZero(t.seconds);
            
            // 4.1 etape il nous faut creer une condition pour arreter le timer une fois le temps epuiser.
            
            if(t.total <= 0) {
                clearInterval(timeInterval);

                //  on va ecrire un script pour avoir le format 00.00.00 a la fin du decompte.

                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } 


        }

        
    }       
    

    setClock('timer', deadline);

});
