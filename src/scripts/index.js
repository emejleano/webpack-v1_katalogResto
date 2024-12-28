import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import dataRestorant from "../public/data/DATA.json";

// Memperbarui daftar restoran menggunakan DOM
const listPost = document.querySelector(".post");
let listRest = "";

dataRestorant.restaurants.forEach((dataRest) => {
  listRest += `
    <article tabindex="0" class="post-item">
      <img src="${dataRest.pictureId}" alt="Restoran ${dataRest.name}" />
      <div class="post-item-description">
        <h2>${dataRest.name}</h2>
        <h4>Kota: ${dataRest.city} | Rating: ${dataRest.rating}</h4>
        <p>${dataRest.description}</p>
      </div>
    </article>
  `;
});

listPost.innerHTML = listRest;
