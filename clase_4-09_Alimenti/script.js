// ===== PARTE 1: Preparamos el plantel =====
const contenedor = document.querySelector("#plantel");

const plantel = [
  {
    nombre: "Lionel Messi",
    posicion: "Delantero",
    seleccion: "Argentina",
    dorsal: 10,
    velocidad: 8,
    fortalezas: ["Definición", "Gambeta", "Pase"]
  },
  {
    nombre: "Julián Álvarez",
    posicion: "Delantero",
    seleccion: "Argentina",
    dorsal: 9,
    velocidad: 8,
    fortalezas: ["Velocidad", "Definición"]
  },
  {
    nombre: "Dibu Martínez",
    posicion: "Arquero",
    seleccion: "Argentina",
    dorsal: 23,
    velocidad: 5,
    fortalezas: ["Marca", "Cabezazo"]
  },
  {
    nombre: "Enzo Fernández",
    posicion: "Mediocampista",
    seleccion: "Argentina",
    dorsal: 24,
    velocidad: 7,
    fortalezas: ["Pase", "Marca"]
  }
];


// ===== PARTES 2, 3 y 4: Creamos las tarjetas =====
plantel.forEach((jugador, indice) => {
  // Parte 2: tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("ficha");

  // Parte 4: emoji según la posición, con if/else
  let emoji;
  if (jugador.posicion === "Delantero") {
    emoji = "⚽";
  } else if (jugador.posicion === "Arquero") {
    emoji = "🧤";
  } else if (jugador.posicion === "Defensor") {
    emoji = "🛡️";
  } else {
    emoji = "🎯"; // Mediocampista
  }

  // Parte 2: nombre (con el emoji al lado)
  const nombre = document.createElement("h2");
  nombre.textContent = emoji + " " + jugador.nombre;
  tarjeta.appendChild(nombre);

  // Parte 2: posición
  const posicion = document.createElement("p");
  posicion.textContent = jugador.posicion;
  tarjeta.appendChild(posicion);

  // Parte 3: dorsal
  const dorsal = document.createElement("p");
  dorsal.textContent = "Dorsal: " + jugador.dorsal;
  tarjeta.appendChild(dorsal);

  // Parte 4: selección
  const seleccion = document.createElement("p");
  seleccion.textContent = "Selección: " + jugador.seleccion;
  tarjeta.appendChild(seleccion);

  // Parte 4: fortalezas con join()
  const fortalezas = document.createElement("p");
  fortalezas.textContent = "Fortalezas: " + jugador.fortalezas.join(", ");
  tarjeta.appendChild(fortalezas);

  // Parte 3: destacado si la velocidad es 8 o más
  if (jugador.velocidad >= 8) {
    tarjeta.classList.add("destacado");
  }

  // Parte 3 (opcional): el primero del array es el capitán
  if (indice === 0) {
    tarjeta.classList.add("capitan");
  }

  // Por último, la tarjeta completa va al contenedor
  contenedor.appendChild(tarjeta);
});
