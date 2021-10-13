


function eleccion (select) {
    switch (select) {
        case "1" :
            const num = [];
            for (let i=1; i<=10; i++ ) {
                numero = parseFloat(prompt("Ingrese un numero del 1 al 100"))
                num.push(numero);
                
                }
                num.sort(function(a,b) {return b-a});
                console.log(num);
                alert("El orden de mayor a menor es: " + num);
                break;
        
        case "2":
            const num1 = [];
            for (let i=1; i<=10; i++ ) {
                numero1 = parseFloat(prompt("Ingrese un numero del 1 al 100"))
                num1.push(numero1);
                
                }
                num1.sort(function(a,b) {return a-b});
                console.log(num1);
                alert("El orden de menor a menor es: " + num1);
                break;

        
        case "3":
            const letras = [];
            for (let i=1; i<=5; i++) {
                caracter = prompt("Ingrese 5 Nombres")
                caracter = caracter.toUpperCase(); 
                letras.push(caracter);
                letras.sort();
                }
                console.log(letras);
                alert("El orden alfabetico en forma ascendente es " + letras)
                break;

        case "4":
            const letras1 = [];
            for (let i=1; i<=5; i++) {
                caracter1 = prompt("Ingrese 5 Nombres")
                caracter1 = caracter1.toUpperCase(); 
                letras1.push(caracter1);
                letras1.reverse();
                }
                console.log(letras1);
                alert("El orden alfabetico en forma descendente es " + letras1)
                break;
     }
} 

let selec = prompt("¿Que desea Ordenar? \n 1-Numeros de mayor a menor \n 2-Numeros de menor a mayor \n 3-Nombres de la A-Z \n 4-Nombres de la Z-A");

eleccion(selec);


