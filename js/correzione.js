const icons = [
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

function createBoxIcon(icon) {
  return `
  <div class="box ${icon.type} col-2">
    <div class="icon-space ${icon.family} ${icon.prefix}${icon.name} color-${icon.color}"></div>
    <div class="name-space"><strong>${icon.name}</strong></div>
  </div>
  `;
}

const containerHtml = document.querySelector(".container-boxes");
const selectElement = document.getElementById("select-category-item");

function showIcons(container, iconsList) {
  container.innerHTML = "";
  iconsList.forEach((icon) => {
    containerHtml.innerHTML += createBoxIcon(icon);
  });
}

showIcons(containerHtml, icons);

/* selectElement.addEventListener("change", function (event) {
  console.log(event.target.value); //mostra l'opzione che ho selezionato nella select
}); */ // Identico all'eventlistener sottostante

selectElement.addEventListener(
  "change",
  function () // NON USARE L'ARROW FUNCTION QUI - ALTRIMENTI PRENDE WINDOW
  {
    console.log(this.value); //mostra l'opzione che ho selezionato nella select

    //le arrowfunction mi permettono di accedere al this del parent e non al mio (Se si vuole usare this si usa questa sempre)
    const filteredIcons = icons.filter((icon) => {
      return this.value === "all" || icon.type === this.value;
    });

    showIcons(containerHtml, filteredIcons);
  }
);
