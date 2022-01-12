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

function createHtmlElement(element, classObj) {
  return ` 
  <div class="box ${classObj.type}">
    <div class="icon-space ${element.family} ${element.prefix}${element.name} color-${element.color}"></div>
    <div class="name-space">${element.name}</div>
  </div>
  `;
}

function selectElement(id, valueToSelect) {
  let element = document.querySelectorAll(id);
  element.value = valueToSelect;
}

let outputHtmlContainer = document.querySelector(".container-boxes");

boxes.forEach((icon) => {
  outputHtmlContainer.innerHTML += createHtmlElement(icon, icon);
});

const selectHtml = document.getElementById("select-category-item");

selectHtml.addEventListener("change", function () {
  let userVegetableDel = document.querySelectorAll("div.user, div.vegetable");

  let animalVegetableDel = document.querySelectorAll(
    "div.animal, div.vegetable"
  );

  let userAnimalDel = document.querySelectorAll("div.user, div.animal");

  let allSelect = document.querySelectorAll(
    "div.user, div.animal, div.vegetable"
  );

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
    }
  }
});
