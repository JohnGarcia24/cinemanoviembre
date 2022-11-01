let nombres =["juan","Esteban","Caballota","Yamile","Hector"]

//Escribir un cicloq ue repita una accion
for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}


//forma de reescribir un ciclo "for" con JS: Programacion declarativa
nombres.forEach(function(nombre){
    console.log(nombre)
})

//otra forma, funsion de flecha
nombres.forEach(nombre=>console.log(nombre))

let numeros=[1,2,3,4,5,6,7,8,9,10]

numeros.forEach(function(numero){
    console.log(numero*10)
})

let salarios=[3500000,5000000,8000000]

salarios.forEach(function(salario){
    console.log(salario-(salario*10/100))
})

let calificaciones=[3.5,4,2,1.5,3]
//sumar las notas y calcular el promedio de notas

let suma=0
calificaciones.forEach(function(calificacion){
   suma=suma+calificacion
})
console.log(suma/calificaciones.length)
