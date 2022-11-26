function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
};

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onButtonSubmit);

function onButtonSubmit(e) {
  e.preventDefault();
  const delay = e.currentTarget.elements.delay.value;
  const step = e.currentTarget.elements.step.value;
  const amount = e.currentTarget.elements.amount.value;

  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    let changingDelay =Number(delay)+Number(step)*i;

    createPromise(position,changingDelay);
  }
  
}