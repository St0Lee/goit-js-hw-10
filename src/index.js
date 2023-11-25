// my API live_KU0Qe9KHnq99rvPgJXQRdi5sSvOfKJruKivdtOLWo0cPlA1aSBCHlEzeEXPKjn3v//
import { fetchCats, fetchCatByBreed } from "./cat-api.js";
import Notiflix from 'notiflix';
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_KU0Qe9KHnq99rvPgJXQRdi5sSvOfKJruKivdtOLWo0cPlA1aSBCHlEzeEXPKjn3v";

const catsSelector = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const catLoader = document.querySelector(".loader");
const errMsg = document.querySelector(".error");



catsSelector.addEventListener("change", handleChange);
errMsg.style.display = "none"
catsSelector.style.display = "none"

function addCatsToDropdown(catsData) {
  catsData.forEach(function (cat, i) {
    const option = document.createElement("option");
    option.value = cat.id; 
    option.text = cat.name; 
    catsSelector.appendChild(option);
  });
  catsSelector.style.display = "block";
  catLoader.style.display = "none";
};

function createMarkUp(arr) {
  catInfo.innerHTML = `
  <img src="${arr[0].url}" alt="Cat Image" width = 1000/>
  <h2>${arr[0].breeds[0].name}</h2>
  <p>${arr[0].breeds[0].description}</p>
  <p><h3>Temperament:</h3> ${arr[0].breeds[0].temperament}</p>
`;
catLoader.style.display = "none";
}
  
function handleChange(event){
  const selectedOption = event.currentTarget.value;
  catLoader.style.display = "block";
  errMsg.style.display = "none";
 
  fetchCatByBreed(selectedOption)
  .then((data) => {
    createMarkUp(data)
  
  })
  .catch((err) => {
    Notiflix.Notify.failure(errMsg.textContent);
    catLoader.style.display = "none";
  })
}

fetchCats()
.then((data) => {
    const catsData = data;
   return addCatsToDropdown(catsData);
   
  })
  .catch((err) => {(Notiflix.Notify.failure(`${errMsg.textContent}`))
  catLoader.style.display = "none";});

