// Elements
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const btn = document.querySelector(".btn");

// Generate Quote
function generateQuote() {
  let x = Math.floor(Math.random() * 501 + 1);
  quoteEl.innerHTML = quotes[x].en;
  authorEl.innerHTML = quotes[x].author;
}

// Initial quote
generateQuote();

// generate quote on btn click
btn.addEventListener("click", generateQuote);

// console.log(quotes[x]);
// console.log(x);
