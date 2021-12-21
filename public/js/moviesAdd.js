window.addEventListener("load", () => {

    let titulo = document.querySelector(".moviesAddTitulo");
    let formulario = document.querySelector("#formulario");
    let article = document.querySelector("article");




    titulo.innerHTML = "AGREGAR PELÍCULAS";
    titulo.classList.add("titulo")
    article.classList.add("fondoTransparente");
    formulario.classList.add("fondoCRUD");

})