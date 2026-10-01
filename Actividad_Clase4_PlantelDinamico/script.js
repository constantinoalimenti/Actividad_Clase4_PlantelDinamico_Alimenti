const contenedor = document.querySelector("#plantel");

const plantel = [
  {
    nombre: "Lionel Messi",
    posicion: "Delantero",
    seleccion: "Argentina",
    dorsal: 10,
    velocidad: 8,
    fortalezas: ["Definicion", "Gambeta"]
  },
  {
    nombre: "Emiliano Martinez",
    posicion: "Arquero",
    seleccion: "Argentina",
    dorsal: 23,
    velocidad: 6,
    fortalezas: ["Reflejos", "Penales"]
  },
  {
    nombre: "Rodrigo De Paul",
    posicion: "Mediocampista",
    seleccion: "Argentina",
    dorsal: 7,
    velocidad: 7,
    fortalezas: ["Resistencia", "Recuperacion"]
  },
  {
    nombre: "Julian Alvarez",
    posicion: "Delantero",
    seleccion: "Argentina",
    dorsal: 9,
    velocidad: 9,
    fortalezas: ["Presion", "Desmarque"]
  }
];

plantel.forEach((jugador, indice) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("ficha");

  if (indice === 0) {
    tarjeta.classList.add("capitan");
  }

  if (jugador.velocidad >= 8) {
    tarjeta.classList.add("destacado");
  }

  let emoji = "";
  if (jugador.posicion === "Delantero") {
    emoji = "⚽ ";
  } else if (jugador.posicion === "Arquero") {
    emoji = "🧤 ";
  } else if (jugador.posicion === "Defensor") {
    emoji = "🛡 ";
  } else if (jugador.posicion === "Mediocampista") {
    emoji = "🧠 ";
  }

  const nombre = document.createElement("h2");
  nombre.textContent = emoji + jugador.nombre;

  const posicion = document.createElement("p");
  posicion.textContent = "Posicion: " + jugador.posicion;

  const dorsal = document.createElement("p");
  dorsal.textContent = "Dorsal: " + jugador.dorsal;

  const seleccion = document.createElement("p");
  seleccion.textContent = "Seleccion: " + jugador.seleccion;

  const fortalezas = document.createElement("p");
  fortalezas.textContent = "Fortalezas: " + jugador.fortalezas.join(", ");

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(posicion);
  tarjeta.appendChild(dorsal);
  tarjeta.appendChild(seleccion);
  tarjeta.appendChild(fortalezas);

  contenedor.appendChild(tarjeta);
});