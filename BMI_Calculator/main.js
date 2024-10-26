const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // if (height === '' || height < 0 || isNaN(height)) {
  //   results.innerHTML = `please give a valid ${height}`;
  // }

  // if (weight === '' || weight < 0 || isNaN(weight)) {
  //   results.innerHTML = `please give a valid ${weight}`;
  // } else {
  //   const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //   results.innerHTML = `${bmi}`;
  // }

  switch (height) {
    case height === '' || height < 0 || isNaN(height):
      results.innerHTML = `please give a valid ${height}`;

    case weight === '' || weight < 0 || isNaN(weight):
      results.innerHTML = `please give a valid ${weight}`;

    default:
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `${bmi}`;
  }

  if (weight < 18.6) {
    weightguide.innerHTML = `you are under weight`;
  } else if (weight > 18.6 || weight < 24.9) {
    weightguide.innerHTML = `good you are fit and fine`;
  }

  if (weight > 24.9) {
    weightguide.innerHTML = `oops you are over weight`;
  }

  // switch (true) {
  //   case weight < 18.6 :
  //     weightguide.innerHTML = `you are under weight`;

  //   case weight > 18.6 || weight < 24.9 :
  //     weightguide.innerHTML = `good you are fit and fine`;

  //   case weight > 24.9 :
  //     weightguide.innerHTML = `oops you are over weight`;
  // };
});