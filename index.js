
// console.log("1");

// setTimeout(()=>{

//     console.log("2");


// },2000);

// console.log("3");
// console.log("4");

const getPelicula = () => new Promise((res, rej) => {
    res('Soy Leyenda');
});

const principal = film =>
    new Promise((bien, mal) => {
    film === 'Matrix' ? bien('Neo') : mal('404');
});


getPelicula()
    .then(parametroQueVieneDevuelto => principal(parametroQueVieneDevuelto))
    .then(parametroQueDevuelveLaOtra => console.log(parametroQueDevuelveLaOtra))
    .catch(error => console.log(error));

console.log("estamos vivos");