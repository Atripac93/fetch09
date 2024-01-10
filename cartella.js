const url = "https://api.pexels.com/v1/search?query=people";

let container = document.querySelector(".foto");
const fetchPrex = () => {
  fetch(url, {
    headers: {
      Authorization: "2eq7QOEwouZD1HsRvIoalGyIjWxhIGYCMQaA2Fsk6PgRXu03DJMCr6xH",
    },
  }).then((response) => {
    return response.json().then((data) => {
      console.log(data);
      const imageElements = data.photos.map((photo) => {
        return `<img src="${photo.src.medium}" alt="${photo.photographer}"/>
        <h3>${photo.photographer}<h3>
        `;
      });
      container.innerHTML = imageElements.join("");
    });
  });
};
fetchPrex();

const body = document.querySelector("body");
body.style.background = "red";
//
