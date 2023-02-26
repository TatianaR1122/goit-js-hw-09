import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// let timerId = null;
// let futureTime = 0;

const refs = {
    input: document.querySelector('#datetime-picker'),
    start: document.querySelector('[data-start]'),
};

refs.start.setAttribute('disabled', true);

const inputDate = new Date(refs.input.value).getTime();
console.log(inputDate);

const currentDate = Date.now();
let userDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose([selectedDates]) {
        userDate = selectedDates;
        clearInterval(userDate);
        if (userDate - Date.now <=0) {
            alert('Please choose a future date!');
        }
   },
};

flatpickr('#datetime-picker', options);

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (isActive) {
            return;
        }
    this.isActive = true;
    this.intervalId = setInterval(() => {
        const deltaTime = selectedDate - currentDate;
        const {days, hours, minutes, seconds} = convertMs(deltaTime);
    }, 1000)    
    },

};

// refs.start.addEventListener('click', onStartBtnClick);

// function onStartBtnClick() {
    
//     userDate = setInterval(setRemaining, 1000);
// }

// function setRemaining() {
//     const currentDate = Date.now();
//     const timeRemaining = userDate - currentDate;
//     console.log(`timeRemaining(ms) = `, timeRemaining);
//     timeRemaining > 0
//       ? console.log(setMainTimer(timeRemaining))
//       : (clearInterval(userDate), (refs.start.disabled = true));
//   }
  function setMainTimer(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
  
    dayRemaining.textContent = addLeadingZero(days);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  
    hourRemaining.textContent = addLeadingZero(hours);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  
    minRemaining.textContent = addLeadingZero(minutes);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    secRemaining.textContent = addLeadingZero(seconds);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return value.toString().padStart(2, 0);
  }






// let timerId = null;
// // let futureTimerId = null;
// let futureTime = 0;

// const btnStartTimer = document.querySelector('button[data-start]');
// const dayRemaining = document.querySelector('.value[data-days]');
// const hourRemaining = document.querySelector('.value[data-hours]');
// const minRemaining = document.querySelector('.value[data-minutes]');
// const secRemaining = document.querySelector('.value[data-seconds]');

// btnStartTimer.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minDate: 'today',
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     futureTime = selectedDates[0].getTime();
//     clearInterval(timerId);
//     setMainTimer(0);
//     if (futureTime - Date.now() <= 0) {
//       alert('Please choose a future date!');
//     }
//     futureTime - Date.now() <= 0
//       ? (alert('Please choose a date in the future'),
//         (btnStartTimer.disabled = true))
//       : (btnStartTimer.disabled = false);
//   },
// };

// flatpickr('#datetime-picker', options);

// btnStartTimer.addEventListener('click', onStartBtnClick);

// function onStartBtnClick() {
//   btnStartTimer.disabled = true;
//   // console.log(`futureTime - realTime == `, futureTime - Date.now());
//   timerId = setInterval(setRemaining, 1000);
// }

// function setRemaining() {
//   const realTime = Date.now();
//   const timeRemaining = futureTime - realTime;
//   console.log(`timeRemaining(ms) = `, timeRemaining);
//   timeRemaining > 0
//     ? console.log(setMainTimer(timeRemaining))
//     : (clearInterval(timerId), (btnStartTimer.disabled = true));
// }

// function setMainTimer(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);

//   dayRemaining.textContent = addLeadingZero(days);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);

//   hourRemaining.textContent = addLeadingZero(hours);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);

//   minRemaining.textContent = addLeadingZero(minutes);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   secRemaining.textContent = addLeadingZero(seconds);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return value.toString().padStart(2, 0);
// }
