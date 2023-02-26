import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

let delay = Number(form.delay.value);
let step = Number(form.step.value);
let amount = Number(form.amount.value);

function onSubmit(e) {
  e.preventDefault();

    for (let i = 0; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
          );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
          );
      });
      delay += step;
    }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      if (shouldResolve) {
        resolve ({ position, delay });
        // Fulfill
      } else {
        reject ({ position, delay });
        // Reject
      }
    }, delay);
  })
  }
