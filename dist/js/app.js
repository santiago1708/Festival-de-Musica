document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
    navegacionFija()
})

function navegacionFija() {
    
}

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i=1; i <=CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galeria'

        //Event Handler
        imagen.onclick = () => {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galeria'

    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    
    //Boton cerrar modal
    const botonCerrarModal = document.createElement('BUTTON')
    botonCerrarModal.classList.add('bt-cerrar')
    botonCerrarModal.textContent = 'X'
    botonCerrarModal.onclick = cerrarModal
    
    modal.appendChild(imagen)
    modal.appendChild(botonCerrarModal)

    //Agregar al HTML 
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal?.remove()
        
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);
}

