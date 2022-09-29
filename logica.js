//Tarea #1
//1. Leer dos números enteros, presentar por pantalla el promedio de ellos.

// declaro las variables con los numeros, hago una funcion para calcular el promedio, imprimo en pantalla el resultado con document.write

//numero1 = 10;
//numero2 = 8;
//
//suma = numero1 + numero2
//promedio = suma / 2
//
//document.write(promedio)

//2. Convertir temperatura en grados Fahrenheit a grados centígrados. Presentar por
//pantalla ambos valores con sus unidades.
//T°C = 5/9 (T°F - 32)

//fahrenheit = 90;
//
//conversion = fahrenheit - 32
//celsius = conversion / 1.8
//
//resultado = `El valor en Fahrenheit de ${fahrenheit}, equivale a Celsius ${celsius}`
//
//document.write(resultado)

//3. Ingresar los lados de un rectángulo, presentar por pantalla su perímetro (suma de sus lados) y
//su superficie (base * altura).

//lados1 = 20
//lados2 = 40
//
//perimetro = lados1 + lados1 + lados2 + lados2
//superficie = lados1 * lados2
//
//resultado = `El perimetro del rectangulo es igual a ${perimetro} y la superficie es igual a ${superficie}`
//
//document.write(resultado)
//

//Tarea #2
//1. Ingresar dos números enteros, presentar por pantalla el mayor de ellos.

//num1 = 9
//num2 = 5
//
//if (num1 > num2){
//    document.write(`El numero mayor es ${num1}`)
//}

//2. Ingresar tres valores positivos, indicar si son lados de un triángulo rectángulo (3 lados
//iguales). Presentar por pantalla el mensaje correspondiente.

//lado1 = 10;
//lado2 = 5;
//lado3 = 10;
//
//if (lado1 == lado2 && lado2 == lado3){
//    document.write(`Es un triangulo equilatero`)
//}
//else{
//    document.write(`No es un triangulo equilatero`)
//}

//3. (opcional) Ingresar dos números, ordenarlos en forma ascendente y presentarlos por pantalla.
//En caso de ser iguales imprimir un mensaje que diga " Son Iguales".

//num1 = "3";
//num2 = "5";
//
//if (num1 > num2){
//    document.write(`Los numeros ordenados de forma ascendente: ${num1}, ${num2}`)
//}
//else if (num1 < num2){
//    document.write(`Los numeros ordenados de forma ascendente: ${num2}, ${num1}`)
//}
//else{
//    document.write(`Los numeros son iguales`)
//}

//Tarea #3
//1. Escribir un numero que presente por pantalla numeros del 1 al 20

//let numero = 0;
//
//while (numero < 20){
//    numero++;
//    document.write(numero + "<br>")
//}

//2. Ingresar 5 numeros pero guardarlos en una unica variable. Sumar todos y mostrar resultado por pantalla

//let numero = 0;
//let tot = 0;
//let unica = prompt("ingrese los numeros a sumar")
//
//while (numero < 5){
//
//}

//1. Ingresar N números, presentar por pantalla el promedio de ellos.

//let i = 0;
//let total = 0;
//let N = prompt("cantidad de numeros a promediar")
//
//while(i < N){
//    let numero = prompt("ingresar numero");
//    let num = parseInt(numero)
//    total = total + num;
//    i = i + 1;
//}
//
//let promedio = total / N;
//alert(promedio)

//let i = 0;
//let total = 0;
//let N = 3;
//
//while(i < N){
//    let numero = prompt("ingresar numero");
//    let num = parseInt(numero);
//    total = total + num;
//    i = i + 1;
//}
//
//let promedio = total / N;
//
//document.write(promedio)

//2. Se ingresan N valores numéricos. Se desea saber cuántos son positivos, cuántos negativos y
//cuántos iguales a cero.

//let i = 0;
//let N = 6;
//let positivos = 0;
//let negativos = 0;
//let cero = 0;
//
//while(i<N){
//    let numero = prompt("ingresar numero");
//    let num = parseInt(numero);
//    if (num>0){
//        positivos = positivos + 1;
//    }
//    else if(num<0){
//        negativos = negativos + 1;
//    }
//    else{
//        cero = cero + 1;
//    }
//    i = i +1;
//}
//
//document.write(`Numeros positivos: ${positivos}, <br> Numeros negativos: ${negativos}, <br> Numeros iguales a 0: ${cero}`)


//Tarea #4
//1. Rehacer los puntos 2 y 3 de la tarea #3, utilizando arreglos.

//4.2.1. Ingresar dos números enteros, presentar por pantalla el mayor de ellos.

//numeros = [8, 9]
//
//if (numeros [0] > numeros [1]){
//    document.write(`El numero mayor es ${numeros [0]}`)
//}
//else{
//    document.write(`El numero mayor es ${numeros [1]}`)
//}

//4.2.2. Ingresar tres valores positivos, indicar si son lados de un triángulo equilátero (3 lados
//iguales). Presentar por pantalla el mensaje correspondiente.

//triangulo = [2, 2, 2]
//
//if (triangulo [0] == triangulo [1] && triangulo [1] == triangulo [2]){
//    document.write(`Es un triangulo equilatero`)
//}
//else{
//    document.write(`No es un triangulo equilatero`)
//}

//4.2.3. (opcional) Ingresar dos números, ordenarlos en forma ascendente y presentarlos por pantalla.
//En caso de ser iguales imprimir un mensaje que diga " Son Iguales".

//numeros = [5, 2]
//
//if (numeros [0] < numeros [1]){
//    document.write(`Los numeros ordenados de forma ascendente: ${numeros [0]}, ${numeros [1]}`)
//    console.log(`Los numeros ordenados de forma ascendente: ${numeros [0]}, ${numeros [1]}`)
//}
//else if (numeros [1] < numeros [0]){
//    document.write(`Los numeros ordenados de forma ascendente: ${numeros [1]}, ${numeros [0]}`)
//    console.log(`Los numeros ordenados de forma ascendente: ${numeros [1]}, ${numeros [0]}`)
//}
//else{
//    document.write(`Los numeros son iguales`)
//    console.log(`Los numeros son iguales`)
//}

//4.3.1. Ingresar N números, presentar por pantalla el promedio de ellos.

//numero = [8, 9]
//
//suma = numero [0] + numero [1]
//promedio = suma / 2
//
//document.write(promedio)

//let promediar = [8, 9, 7];
//
//for (let i = 0; i < 1; i++){
//    document.write(promediar)
//}



//4.3.2. Se ingresan N valores numéricos. Se desea saber cuántos son positivos, cuántos negativos y
//cuántos iguales a cero.

