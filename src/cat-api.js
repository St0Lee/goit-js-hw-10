import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_KU0Qe9KHnq99rvPgJXQRdi5sSvOfKJruKivdtOLWo0cPlA1aSBCHlEzeEXPKjn3v";

const catsURL = "https://api.thecatapi.com/v1";

  export function fetchCats() {
    return axios.get(`${catsURL}/breeds`)
      .then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${catsURL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}



// const myAPIkey = "live_KU0Qe9KHnq99rvPgJXQRdi5sSvOfKJruKivdtOLWo0cPlA1aSBCHlEzeEXPKjn3v";
// const catsURL = "https://api.thecatapi.com/v1";

// export function fetchCats() {
//   return fetch(`${catsURL}/breeds`, {
//     headers: {
//       "x-api-key": myAPIkey
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(${errMsg});
//     }
//     return response.json();
//   })
//   .then(data => data);
// }

// export function fetchCatByBreed(breedId) {
//   return fetch(`${catsURL}/images/search?breed_ids=${breedId}`, {
//     headers: {
//       "x-api-key": myAPIkey
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(${errMsg});
//     }
//     return response.json();
//   })
//   .then(data => data);
// };

// const catsURL = "https://api.thecatapi.com/v1/breeds";

// fetch(catsURL)
// .then((response) => {
//   if(!response.ok){
//     throw new Error (errMsg.textContent)
//   }

//   return response.json();
// })
// .then((data) => {
//   const catsData = data;
//   console.log(catsData)
//  return addCatsToDropdown(catsData);
 
// })
// .catch((err) => (Notiflix.Notify.failure(`${err}`)));