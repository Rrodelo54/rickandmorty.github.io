/*
const boton = document.querySelector('#miBoton');
let bot = 0;

boton.addEventListener('click', function() {
  bot++;

  const url = 'https://rickandmortyapi.com/api/character/?page='+ bot;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultado = data.results;
      const contenedor = document.getElementById("container_item");

      // Limpiar el contenido del contenedor antes de agregar nuevos elementos
      contenedor.innerHTML = '';

      resultado.forEach(element => {
        let name = element.name;
        let status = element.status;
        let specie = element.species;
        let tipe = element.type;
        let genero = element.gender;
        let imag = element.image;

        const imagen = document.createElement("img");
        imagen.setAttribute("src", imag);

        const title = document.createElement("h3");
        title.textContent = name;

        const statu = document.createElement("span");
        statu.textContent = "status: "+status;

        const especie = document.createElement("span");
        especie.textContent = "especie: "+specie;

        const gener = document.createElement("span");
        gener.textContent = "genero: "+genero;

        const tipo = document.createElement("span");
        tipo.textContent = "tipo: "+tipe;

        const item = document.createElement("div");
        item.classList.add("items");
        contenedor.appendChild(item);
        item.appendChild(imagen);
        item.appendChild(title);
        item.appendChild(statu);
        item.appendChild(especie);
        item.appendChild(gener);
        item.appendChild(tipo);
      });
    })
    .catch(error => console.error(error));
});
*/
const botonAumentar = document.querySelector('#botonAumentar');
const botonDisminuir = document.querySelector('#botonDisminuir');
let bot = 1;

botonAumentar.addEventListener('click', function() {
 if(bot < 42){
	bot++;
  cargarPersonajes();
 }
});

botonDisminuir.addEventListener('click', function() {
  if (bot > 1) {
    bot--;
    cargarPersonajes();
  }
});

function cargarPersonajes() {
  const url = 'https://rickandmortyapi.com/api/character/?page=' + bot;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultado = data.results;
      const contenedor = document.getElementById('container_item');
      contenedor.innerHTML = '';
	  console.log(bot);
      resultado.forEach(element => {
        let name = element.name;
        let status = element.status;
        let specie = element.species;
        let tipe = element.type;
        let genero = element.gender;
        let imag = element.image;

        const imagen = document.createElement('img');
        imagen.setAttribute('src', imag);

        const title = document.createElement('h3');
        title.textContent = name;

        const statu = document.createElement('span');
        statu.textContent = 'status: ' + status;

        const especie = document.createElement('span');
        especie.textContent = 'especie: ' + specie;

        const gener = document.createElement('span');
        gener.textContent = 'genero: ' + genero;

        const tipo = document.createElement('span');
        tipo.textContent = 'tipo: ' + tipe;

        const item = document.createElement('div');
        item.classList.add('items');
        contenedor.appendChild(item);
        item.appendChild(imagen);
        item.appendChild(title);
        item.appendChild(statu);
        item.appendChild(especie);
        item.appendChild(gener);
        item.appendChild(tipo);
      });
    })
    .catch(error => console.error(error));
}
cargarPersonajes();