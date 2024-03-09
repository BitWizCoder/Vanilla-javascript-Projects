// Get Elemets
const dateEl = document.getElementById("date");
const ageEl = document.querySelector(".age");

// Get toadyas date
// Get user birth date
// minus todays date with users birth date

// Calculate Age
const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

function dateLog() {
  //   console.log(dateEl.value);

  const age = getAge(dateEl.value);

  age ? (ageEl.innerHTML = age) : (ageEl.innerHTML = "00");
}

// console.log(getAge("1998-08-7"));
