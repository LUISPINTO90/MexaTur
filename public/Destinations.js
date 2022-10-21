let products = {
  data: [
    {
      //1
      productName: "Comala",
      category: "Colima",
      price: "Ubicado en el estado de Colima",
      image: "/img/destinations/comala.png",
    },
    {
      //2
      productName: "Manzanillo",
      category: "Colima",
      price: "Ubicado en el estado de Colima",
      image: "/img/destinations/manzanillo.png",
    },
    {
      //3
      productName: "Tequila",
      category: "Jalisco",
      price: "Ubicado en el estado de Jalisco",
      image: "/img/destinations/tequila.png",
    },
    {
      //4
      productName: "Puerto Vallarta",
      category: "Jalisco",
      price: "Ubicado en el estado de Jalisco",
      image: "/img/destinations/puertoVallarta.png",
    },
    {
      //5
      productName: "Guadalajara (Centro)",
      category: "Jalisco",
      price: "Ubicado en el estado de Jalisco",
      image: "/img/destinations/guadalajaraCentro.png",
    },
    {
      //6
      productName: "Careyes",
      category: "Jalisco",
      price: "Ubicado en el estado de Jalisco",
      image: "/img/destinations/careyes.png",
    },
    {
      //7
      productName: "Monte Alban",
      category: "Oaxaca",
      price: "Ubicado en el estado de Oaxaca",
      image: "/img/destinations/monteAlban.png",
    },
    {
      //8
      productName: "Hierve el Agua",
      category: "Oaxaca",
      price: "Ubicado en el estado de Oaxaca",
      image: "/img/destinations/hierveElAgua.png",
    },
    {
      //9
      productName: "Mitla",
      category: "Oaxaca",
      price: "Ubicado en el estado de Oaxaca",
      image: "/img/destinations/mitla.png",
    },
    {
      //10
      productName: "Huatulco",
      category: "Oaxaca",
      price: "Ubicado en el estado de Oaxaca",
      image: "/img/destinations/huatulco.png",
    },
    {
      //11
      productName: "Oaxaca (Centro)",
      category: "Oaxaca",
      price: "Ubicado en el estado de Oaxaca",
      image: "/img/destinations/oaxacaCentro.png",
    },
    {
      //12
      productName: "Cascadas de Agua Azul",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/cascadasAguaAzul.png",
    },
    {
      //13
      productName: "Parque Nacional Cañon del Sumidero",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/canonDelSumidero.png",
    },
    {
      //14
      productName: "Parque Ecoturistico el Arcotete",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/elArcotete.png",
    },
    {
      //15
      productName: "Parque Nacional Lagunas de Montebello",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/lagunasDeMontebello.png",
    },
    {
      //16
      productName: "Centro Ecoturistico Cascadas el Chiflon",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/cascadasElChiflon.png",
    },
    {
      //17
      productName: "Parque Natural Montes Azules",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/montesAzules.png",
    },
    {
      //18
      productName: "San Cristobal de las Casas",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/sanCristobalDeLasCasas.png",
    },
    {
      //19
      productName: "Comitan de Dominguez",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/comitan.png",
    },
    {
      //20
      productName: "Chiapa de Corzo",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/chiapaDeCorzo.png",
    },
    {
      //21
      productName: "Zona Arqueologica de Palenque",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/palenque.png",
    },
    {
      //22
      productName: "Zona Arqueologica de Yaxchilan",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/yaxchilan.png",
    },
    {
      //23
      productName: "Bonampak",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/bonampak.png",
    },
    {
      //24
      productName: "Zona Arqueologica de Tenam Puente",
      category: "Chiapas",
      price: "Ubicado en el estado de Chiapas",
      image: "/img/destinations/tenamPuente.png",
    },
  ],
};

let counter = 0;

for (let i of products.data) {
  counter++;
  //Create Card
  let card = document.createElement(`div`);
  card.setAttribute("id", `${counter}`);
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h4");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("p");
  price.innerHTML = `<br />${i.price}`;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};

// LISTENERS TO REDIRECT EACH ID TO HIS HTML PAGE
document.getElementById("1").addEventListener("click", () => {
  window.location.href = "./destinations/colima/comala.html";
});
document.getElementById("2").addEventListener("click", () => {
  window.location.href = "./destinations/colima/manzanillo.html";
});
document.getElementById("3").addEventListener("click", () => {
  window.location.href = "./destinations/jalisco/tequila.html";
});
document.getElementById("4").addEventListener("click", () => {
  window.location.href = "./destinations/jalisco/puertoVallarta.html";
});
document.getElementById("5").addEventListener("click", () => {
  window.location.href = "./destinations/jalisco/guadalajaraCentro.html";
});
document.getElementById("6").addEventListener("click", () => {
  window.location.href = "./destinations/jalisco/careyes.html";
});
document.getElementById("7").addEventListener("click", () => {
  window.location.href = "./destinations/oaxaca/monteAlban.html";
});
document.getElementById("8").addEventListener("click", () => {
  window.location.href = "./destinations/oaxaca/hierveElAgua.html";
});
document.getElementById("9").addEventListener("click", () => {
  window.location.href = "./destinations/oaxaca/mitla.html";
});
document.getElementById("10").addEventListener("click", () => {
  window.location.href = "./destinations/oaxaca/huatulco.html";
});
document.getElementById("11").addEventListener("click", () => {
  window.location.href = "./destinations/oaxaca/oaxacaCentro.html";
});
document.getElementById("12").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/aguaAzul.html";
});
document.getElementById("13").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/canonDelSumidero.html";
});
document.getElementById("14").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/elArcotete.html";
});
document.getElementById("15").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/lagunasMontebello.html";
});
document.getElementById("16").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/cascadasElChiflon.html";
});
document.getElementById("17").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/montesAzules.html";
});
document.getElementById("18").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/sanCristobalCasas.html";
});
document.getElementById("19").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/comitanDominguez.html";
});
document.getElementById("20").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/chiapaDeCorzo.html";
});
document.getElementById("21").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/palenque.html";
});
document.getElementById("22").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/yaxchilan.html";
});
document.getElementById("23").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/bonampak.html";
});
document.getElementById("24").addEventListener("click", () => {
  window.location.href = "./destinations/chiapas/tenamPuente.html";
});
