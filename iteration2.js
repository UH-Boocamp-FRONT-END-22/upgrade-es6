// 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

// const game = {
//   title: "The last us 2",
//   genre: ["action", "zombie", "survival"],
//   year: 2020,
// };

// let {title} = game;
// let {genre} = game;
// let {year} = game;

// console.log(`Este es el título del juego del objeto game: ${title}`);
// console.log(`Este es el género del juego del objeto game: ${genre}`);
// console.log(`Este es el año de publicación del juego del objeto game: ${year}`);

// // 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// // llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// // imprimelo por consola.

// const fruits = ['Banana', 'Strawberry', 'Orange'];

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

// console.log(`Esta es la primera fruta: ${fruit1}`);
// console.log(`Esta es la segunda fruta: ${fruit2}`);
// console.log(`Esta es la tercera fruta: ${fruit3}`);

// // 2.3 En base al siguiente javascript, usa destructuring para crear 2
// // variables igualandolo a la función e imprimiendolo por consola.

// const animalFunction = () => {
//     return {name: 'Bengal Tiger', race: 'Tiger'}
// };

// let {name, race} = animalFunction();

// console.log(name);
// console.log(race);

// 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name, itv} = car;

console.log(name);
console.log(itv);

let year1 = itv[0];
let year2 = itv[1];
let year3 = itv[2];

console.log(`Estos son los años en los que tienes que pasar la ITV: ${year1}, ${year2} y ${year3}`);