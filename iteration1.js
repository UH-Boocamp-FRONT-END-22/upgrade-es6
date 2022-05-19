// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.

const a = 10;

const b = 5;

const sum = (num1, num2) => {
    console.log(`Este es el número 1: ${num1}`);
    console.log(`Este es el número 2: ${num2}`);
    return 'El resultado de la suma de los dos números es', num1 + num2;
};

sum(a, b);


// 1.1 Ejecuta esta función sin pasar ningún parametro

const sum2 = (num1, num2) => {
    console.log(`Este es el número 1: ${num1}`);
    console.log(`Este es el número 2: ${num2}`);
    return 'El resultado de la suma de los dos números es', num1 + num2;
};

sum2();

// 1.2 Ejecuta esta función pasando un solo parametro

const sum3 = (num1, num2) => {
    console.log(`Este es el número 1: ${num1}`);
    console.log(`Este es el número 2: ${num2}`);
    return 'El resultado de la suma de los dos números es', num1 + num2;
};

sum3(a);

// 1.3 Ejecuta esta función pasando dos parametros

const sum4 = (num1, num2) => {
    console.log(`Este es el número 1: ${num1}`);
    console.log(`Este es el número 2: ${num2}`);
    return 'El resultado de la suma de los dos números es', num1 + num2;
};

sum4(b);