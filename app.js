function displayCountry(country) {
  const request = new XMLHttpRequest();

  request.open("GET", "https://restcountries.com/v3.1/name/" + country);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    setCountry(data[0]);
  });
}

function setCountry(data) {
  const html = `
    <div class ="col-3">
        <div class="card h-100">
            <img src = "${data.flags.png}" class = "card-img-top">
            <div class = "card-body">
                <h5 class = "card-title"> ${data.name.common}</h5>
            </div>
            <ul class = "list-group list-group-flush">
                <li class = "list-group-item">Population: ${(
                  data.population / 100000
                ).toFixed(1)} </li>
                <li class = "list-group-item">Capital: ${data.capital[0]} </li>
                <li class = "list-group-item">Language: ${Object.values(
                  data.languages
                )} </li>

            </ul>
        </div>
    </div>

    `;

  document
    .querySelector(".container .row")
    .insertAdjacentHTML("beforeend", html);
}

displayCountry("turkey");
displayCountry("italy");
displayCountry("Azerbaijan");
