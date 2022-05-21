// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let totalScore = exams.reduce((index, testScore) => {

    return index + testScore.score;
    
}, 0);

console.log("Esta es la suma de todas las notas de los examenes", totalScore);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

let onlyPassed = exams.filter(exam => exam.score > 4);

console.log("Estos son los alumnos que están aprobados:", onlyPassed);

let totalPassedScore = onlyPassed.reduce((index, testScore) => {

    return index + testScore.score;

}, 0);

console.log("Y esta es el total de todas las notas de los aprobados:", totalPassedScore);


// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

//Voy a "rescatar" la variable totalScore de la iteración 7.1

let avgScore = totalScore / exams.length;

console.log("Y esta de aquí, es la media de todas las notas de clase:", avgScore);