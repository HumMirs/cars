const sedan_cars = document.getElementById("sedan_cars");
const off_road_cars = document.getElementById("off_road_cars");
const van_cars = document.getElementById("van_cars");
const main_container = document.getElementById("main_container");

let cars = [];

sedan_cars.onclick = () => {
  main_container.innerHTML = "";

  const request = new XMLHttpRequest();
  request.open("GET", "n");
  request.onload = () => {
    cars = JSON.parse(request.responseText);

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].car_category == "Sedan") {
        const div = document.createElement("div");
        div.className = "inner-container";

        const img = document.createElement("img");
        img.src = cars[i].image_url;

        const h2 = document.createElement("h2");
        h2.innerText = cars[i].car_model;

        const h3 = document.createElement("h3");
        h3.innerText = cars[i].car_make;

        const p1 = document.createElement("p");
        p1.innerText = "Price: " + cars[i].car_price;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(p1);

        main_container.appendChild(div);
      }
    }
  };
  request.send();
};

off_road_cars.onclick = () => {
  main_container.innerHTML = "";
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/cars");
  request.onload = () => {
    cars = JSON.parse(request.responseText);
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].car_category == "Off-road") {
        const div = document.createElement("div");
        div.className = "inner-container";

        const img = document.createElement("img");
        img.src = cars[i].image_url;

        const h2 = document.createElement("h2");
        h2.innerText = cars[i].car_model;

        const h3 = document.createElement("h3");
        h3.innerText = cars[i].car_make;

        const p1 = document.createElement("p");
        p1.innerText = "Price: " + cars[i].car_price;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(p1);

        main_container.appendChild(div);
      }
    }
  };
  request.send();
};

van_cars.onclick = () => {
  main_container.innerHTML = "";
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/cars");
  request.onload = () => {
    cars = JSON.parse(request.responseText);
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].car_category == "Van") {
        const div = document.createElement("div");
        div.className = "inner-container";

        const img = document.createElement("img");
        img.src = cars[i].image_url;

        const h2 = document.createElement("h2");
        h2.innerText = cars[i].car_model;

        const h3 = document.createElement("h3");
        h3.innerText = cars[i].car_make;

        const p1 = document.createElement("p");
        p1.innerText = "Price: " + cars[i].car_price;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(p1);

        main_container.appendChild(div);
      }
    }
  };
  request.send();
};
