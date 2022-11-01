let peliculas=[
    {
        nombre:"AVATAR EL CAMINO DEL AGUA",
        duracion:180,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/AVATARELCAMINODELAGUA1.jpg?alt=media&token=32665ae8-3192-4200-8e67-4f5252ad4a08"
    },
    {
        nombre:"Black Adam",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/Blackada.jpg?alt=media&token=c2942d36-d04c-4117-a156-0e1b3e16caa3"
    },
    {
        nombre:"LA JAURIA",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LA%20JAURIA.jpg?alt=media&token=4bb18ed1-2c5c-40e9-8336-75ab4f08f056"
    },
    {
        nombre:"LA LUZ DEL DIABLO",
        duracion:160,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LALUZDELDIABLOO1.jpg?alt=media&token=235a528b-ee59-4e4d-8b20-23013e573160"
    },
    {
        nombre:"LA MUJER REY",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/LAMUJERREY.jpg?alt=media&token=d0ad3647-2b95-4d06-8f3b-1f60bddfd833"
    },
    {
        nombre:"ONEPIECE",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/ONEPIECE1.jpg?alt=media&token=6d6292ca-c652-43d8-8807-b46437f54cff"
    },
    {
        nombre:"Hallowen",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/hallowen.jpg?alt=media&token=a00e3eac-3c5e-457e-a957-8d791c88e630"
    },
    {
        nombre:"Jeeppers",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/jeeppers.jpg?alt=media&token=38c8cee5-77da-47ee-b934-b92134ed8e50"
    },
    {
        nombre:"Jeeppers",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/jeeppers.jpg?alt=media&token=38c8cee5-77da-47ee-b934-b92134ed8e50"
    },
    {
        nombre:"Jeeppers",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/jeeppers.jpg?alt=media&token=38c8cee5-77da-47ee-b934-b92134ed8e50"
    },
    {
        nombre:"Jeeppers",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/jeeppers.jpg?alt=media&token=38c8cee5-77da-47ee-b934-b92134ed8e50"
    },
    {
        nombre:"Jeeppers",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/jeeppers.jpg?alt=media&token=38c8cee5-77da-47ee-b934-b92134ed8e50"
    },
    {
        nombre:"Jeeppers",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajohn-a6ab6.appspot.com/o/jeeppers.jpg?alt=media&token=38c8cee5-77da-47ee-b934-b92134ed8e50"
    }
    
]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)
})