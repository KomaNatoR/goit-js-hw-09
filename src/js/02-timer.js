// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

//  style="display: flex;flex-direction: column"
const bodyTimer = ({ days, hours, minutes, seconds }) => `
  <div class="field">
    <span class="value" data-days>${String(days).length < 2? '0'+days:days}</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>${String(hours).length < 2? '0'+hours:hours}</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>${String(minutes).length < 2? '0'+minutes:minutes}</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>${String(seconds).length < 2? '0'+seconds:seconds}</span>
    <span class="label">Seconds</span>
  </div>`;

const refs = {
    startBtn: document.querySelector('[data-start]'),
    mainDiv: document.querySelector('.timer'),
};

let userData = 0;
let newData = new Date();

// =================================== НЕ МОЄ =============================
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userData = selectedDates[0].getTime();
        // newData = new Date();
        if (userData < newData) {
            refs.startBtn.disabled = true;
            window.alert('Та ти успакойся!!!');
        } else {
            refs.startBtn.disabled= false;
        };

    // console.log(this.defaultDate);
    // console.log(selectedDates[0].getTime());
    },
};
const flatpickr = flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

// =================================== МОЄ ======================================
refs.startBtn.addEventListener('click', onStartClick);

function onStartClick() {
    toggleStartButton();
    intervaId = setInterval(() => {
        newData = new Date();
        const numberToCountTime = userData - newData;
        refs.mainDiv.innerHTML = bodyTimer(convertMs(numberToCountTime));
        if (numberToCountTime < 1000) {
            clearInterval(intervaId);
            refs.startBtn.disabled= false;
        }
    }, 1000);

    // console.log(convertMs(numberForCountTime));
    // console.log(numberForCountTime);
};

function toggleStartButton() {
    refs.startBtn.toggleAttribute('disabled');
};


// console.log(userData);