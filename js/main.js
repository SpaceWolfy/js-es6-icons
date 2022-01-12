const boxes = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

/* Functions */
function createHtmlElement(element, classObj) {
  return ` 
  <div class="box ${classObj.type} col-2">
    <div class="icon-space ${element.family} ${element.prefix}${element.name} color-${element.color}"></div>
    <div class="name-space"><strong>${element.name}</strong></div>
  </div>
  `;
}

/* RandomColorSelector */
function randomColorGenerator() {
  //16777215 è il numero di colori esistenti in rgb dal nero (#000000), al bianco (#ffffff)
  let colorGen = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return colorGen;
}
/* ------------------- */

/* -------------------------------------------------------------------------------------------- */

/* ForEach - Print on page */
let outputHtmlContainer = document.querySelector(".container-boxes");

boxes.forEach((boxOfIcon) => {
  outputHtmlContainer.innerHTML += createHtmlElement(boxOfIcon, boxOfIcon);
});
/* ---------------------------- */

const selectHtml = document.getElementById("select-category-item");

selectHtml.addEventListener("change", function () {
  /* addEventListener - variables setted*/

  let userVegetableDel = document.querySelectorAll("div.user, div.vegetable");

  let animalVegetableDel = document.querySelectorAll(
    "div.animal, div.vegetable"
  );

  let userAnimalDel = document.querySelectorAll("div.user, div.animal");

  let allSelect = document.querySelectorAll(
    "div.user, div.animal, div.vegetable"
  );
  /* ------------------------------------- */

  /* addEventListener - conditions */
  if (selectHtml.value == "animal") {
    for (let i = 0; i < userVegetableDel.length; i++) {
      userAnimalDel[i].classList.remove("displaynone");
      userVegetableDel[i].classList.add("displaynone");
    }
  } else if (selectHtml.value == "vegetable") {
    for (let i = 0; i < userAnimalDel.length; i++) {
      animalVegetableDel[i].classList.remove("displaynone");
      userAnimalDel[i].classList.add("displaynone");
    }
  } else if (selectHtml.value == "user") {
    for (let i = 0; i < animalVegetableDel.length; i++) {
      userAnimalDel[i].classList.remove("displaynone");
      animalVegetableDel[i].classList.add("displaynone");
    }
  } else {
    for (let i = 0; i < animalVegetableDel.length; i++) {
      allSelect[i].classList.remove("displaynone");
      userAnimalDel[i].classList.remove("displaynone");
    }
  }
  /* ---------------------------------------------- */
});

//Bonus
for (let i = 0; i < boxes.length; i++) {
  outputHtmlContainer = document.querySelectorAll(".box");
  outputHtmlContainer[i].style.color = randomColorGenerator();
  outputHtmlContainer = document.querySelectorAll(".icon-space");
  outputHtmlContainer[i].style.color = randomColorGenerator();
}
