
function insertarProductos() {

    let contenedor = document.querySelector(".productos")

    fetch("productos.json")
        .then(data => data.json())
        .then(json => {

            json.productos.forEach(producto => {
                console.log(producto)

                let elemento = `

                <div class="tarjeta" >

                    <div class="textoTarjeta">
                        
                        <p>${producto.nombre}</p>
                        
                    </div>

                   
                    <img src="${producto.imagen}" alt="">
                    
                    
                    <div class="seccionBotonOrdenar">

                        <button onclick="identificar(this)" >Ordenar</button>

        
                    </div>

                </div>
            `
            contenedor.innerHTML += elemento

            })
        })





}

insertarProductos()

function restar(boton) {
    
    // console.log(boton);
    let padre = boton.parentElement;
    //console.log(padre);

    let hijos = padre.children;
    let parrafo = hijos[1];

    let numero = parseInt(parrafo.textContent, 10); // Asegúrate de convertir el texto a un número

    if (numero <= 0) {
        padre.remove(); // Utiliza el método remove para eliminar el elemento padre
        numero = 0

    } else {
        parrafo.textContent = --numero;
    }
}


function sumar(boton) {

    //console.log(boton);
    let padre = boton.parentElement;
    //console.log(padre);

    let hijos = padre.children;
    let parrafo = hijos[1]
    parrafo.textContent = ++numero
}


function identificar(boton) {
    //console.log(boton);
    let padre = boton.parentElement.parentElement;

    //console.log(padre);
    let padreCercano = boton.parentElement

    //console.log(padreCercano)

    if (padreCercano.children.length <= 1) {
        numero = 0
        boton.style.display = "none"
        let seccionBotones =
            `
            <button onclick="restar(this)" >Retirar</button>
            <p>0</p>
            <button onclick="sumar(this)" >Añadir</button>
        `;

        let div = document.createElement("div");

        div.setAttribute("class", "seccionBotones");
        div.innerHTML = seccionBotones; // Utiliza innerHTML para asignar el contenido HTML

        boton.parentElement.appendChild(div); // Usa parentElement para acceder al padre del botón

        // Alternativamente, si quieres agregar el div como el último hijo del padre, puedes usar:
        // padre.appendChild(div);



    } else {
        boton.style.display = "flex"
    }



}



