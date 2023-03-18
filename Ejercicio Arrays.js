/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */
let clasificaciones = [
  "Marcos",
  "Franco",
  "Agostina",
  "Leon",
  "Juan Cruz",
  "Eduardo",
];
/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
document.write("<h1>punto 2 :</h1> </br>");
function mostrarClasificacion() {
  clasificaciones.forEach((element) => {
    document.write(element + "</br>");
  });
}
mostrarClasificacion();

//opcional ForEach (ojo tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */
function cambiaPosiciones(persona1, persona2) {
  const p1 = clasificaciones.indexOf(persona1);
  const p2 = clasificaciones.indexOf(persona2);
  if (p1 !== -1 && p2 !== -1) {
    const pAux = clasificaciones[p1];
    clasificaciones[p1] = clasificaciones[p2];
    clasificaciones[p2] = pAux;
    document.write("<h1>punto 3a :</h1> </br>");
    mostrarClasificacion();
  } else {
    document.write(
      "<h1>punto 3a :</h1> </br> Una o ambas personas no se encontraron </br>"
    );
  }
}
cambiaPosiciones("Leon", "Agostina");

/* b)Eduardo es descalificado y se elimina del concurso */

function descalificar(persona) {
  const indice = clasificaciones.indexOf(persona);
  if (indice !== -1) {
    const eliminado = clasificaciones.splice(indice, 1);
    document.write("<h1>punto 3b :</h1> </br>");
    mostrarClasificacion();
  } else {
    document.write("<h1>punto 3b :</h1> </br> No se encontro la persona </br>");
  }
}
descalificar("Eduardo");

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

function insertaDetrasDe(persona, nuevo1, nuevo2) {
  const indice = clasificaciones.indexOf(persona);
  if (indice !== -1) {
    clasificaciones.splice(indice + 1, 0, nuevo1, nuevo2);
    document.write("<h1>punto 3c :</h1> </br>");
    mostrarClasificacion();
  } else {
    document.write("<h1>punto 3c :</h1> </br> No se encontro la persona </br>");
  }
}
insertaDetrasDe("Marcos", "Julieta", "Martina");

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

function insertaPrimero(persona) {
  clasificaciones.unshift(persona);
  document.write("<h1>punto 3d :</h1> </br>");
  mostrarClasificacion();
}
insertaPrimero("Alicia");
/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */
document.write("<h1>punto 3e :</h1> </br>");
mostrarClasificacion();
