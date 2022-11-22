function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
    btnSrart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
};
function desactiveButtonOnStart() {
    refs.btnStop.setAttribute('disabled', null);   
};
desactiveButtonOnStart();

refs.btnSrart.addEventListener('click', onButtonClick);
refs.btnStop.addEventListener('click', onButtonClick);

function onButtonClick(e) {
    if (e.target.dataset.start === '') {
        console.log('start');
        changeActiveButton();
        startColorChanges();
        intervalId = setInterval(startColorChanges, 1000);
    };
    if (e.target.dataset.stop === '') {
        console.log('stop');
        changeActiveButton(); 
        clearInterval(intervalId);
    };
};

function changeActiveButton() {
    refs.btnSrart.toggleAttribute('disabled');
    refs.btnStop.toggleAttribute('disabled');
};

function startColorChanges() {
    document.body.style.backgroundColor = getRandomHexColor();
};


