const btnSwitchMode = document.getElementById('switch-mode');
const bodyColor = document.getElementById('body-color');
const mainSection = document.getElementsByClassName('main-section');
const articleSection = document.getElementsByClassName('article-section');
const numberFollowers = document.getElementsByClassName('number-followers');
const figure = document.getElementsByClassName('figure');
const item = document.getElementsByClassName('item');
const buttonText = document.getElementsByClassName('button-text');
const buttonContain = document.getElementsByClassName('button-contain');


let darkMode = 0;

btnSwitchMode.addEventListener('click', () => 
    {

        if(bodyColor.style.backgroundColor === '')
        {
            bodyColor.style.backgroundColor = '#20222F';
            bodyColor.style.color = '#8C98C6';
            bodyColor.childNodes[1].childNodes[1].childNodes[1].style.color = '#fff';
            bodyColor.childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.color = '#8C98C6';
            bodyColor.childNodes[1].childNodes[11].childNodes[1].style.color = '#fff';

            Array.from(numberFollowers).forEach( (item) =>  item.style.color = '#fff' );
            Array.from(figure).forEach( (item) =>  item.style.color = '#fff' );

            btnSwitchMode.childNodes[0].style.transform = 'translateX(-0.6875rem)';
            btnSwitchMode.style.background = 'linear-gradient( 45deg, #388FE7,  #40DB82)';

            item[0].style.backgroundColor = '#333A55';

            Array.from(mainSection).forEach( (item) => item.style.backgroundColor = '#252B42');
            Array.from(articleSection).forEach( (item) => item.style.backgroundColor = '#252B42');

            darkMode = 1;

        }
        else
        {
            bodyColor.style.backgroundColor = '';
            bodyColor.style.color = '';
            bodyColor.childNodes[1].childNodes[1].childNodes[1].style.color = '#1D1F29';
            bodyColor.childNodes[1].childNodes[11].childNodes[1].style.color = 'inherit';
            bodyColor.childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.color = '#63687D';

            Array.from(numberFollowers).forEach( (item) =>  item.style.color = '#1D1F29' );
            Array.from(figure).forEach( (item) =>  item.style.color = '#1D1F29' );

            btnSwitchMode.childNodes[0].style.transform = 'translateX(0.6875rem)'; 
            btnSwitchMode.style.background = '';

            item[0].style.backgroundColor = '#fff';

            Array.from(mainSection).forEach( (item) => item.style.backgroundColor = '#F1F3FA');
            Array.from(articleSection).forEach( (item) => item.style.backgroundColor = '#F1F3FA');

            buttonText[0].style.color = 'inherit';

            darkMode = 0;

        }

    }
);



btnSwitchMode.addEventListener('mouseenter', () => 
    {

        if(darkMode === 1)
        {
            buttonText[0].style.color = '#fff';                
        }

    }
);


btnSwitchMode.addEventListener('mouseout', () =>   
    {

        if(darkMode === 1)
        {
            buttonText[0].style.color = 'inherit';
        }

    }
);

 



