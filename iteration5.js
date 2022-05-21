// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let adults = ages.filter((age) => age > 18);

console.log("Estos son los adultos del array", adults);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.

let par = ages.filter((age) => age % 2 == 0);

console.log("Este es el array con los valores pares", par);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let loleros = streamers.filter(game => game.gameMorePlayed === "League of Legends");

console.log("Estos son todos los loleros:", loleros);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.

let streamersWithU = streamers.filter(game => game.name.includes("u"));

console.log("Estos son todos los streamers en cuyo nombre hay una U:", streamersWithU);


// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

let streamersLegends = streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends")).map(streamerAge => {

  if(streamerAge.age > 35){
    streamerAge.gameMorePlayed = streamerAge.gameMorePlayed.toLocaleUpperCase();
  };

  return streamerAge;

})

console.log(streamersLegends);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

// let streamerSearch = document.querySelector('[data-function="toFilterStreamers"]');

// streamerSearch.addEventListener("keydown", event => {

//   if (event.key === "Enter" && streamerSearch.value != "") {

//     console.log(streamers.filter(streamer => streamer.name.includes(streamerSearch.value)));
//     streamerSearch.value = "";

//   };

// });

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.


let streamersInput = document.querySelector('[data-function="toFilterStreamers"]');

let filtrar = ourInput => {

  ourInput.addEventListener("keydown", event => {

    if (event.key === "Enter" && streamersInput.value != "") {

     console.log(streamers.filter(streamer => streamer.name.includes(streamersInput.value))); 
     streamersInput.value = "";
    }

  });
}

//Por hacer...

// let mostrar = ourFilter => {

//   ourFilter.addEventListener("click", event => {

    

//   })


// }


