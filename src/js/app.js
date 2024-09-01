document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
    navegacionFija()
    resaltarEnlaces()
    scrollNav()
})

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}

function resaltarEnlaces() {
    document.addEventListener('scroll', () => {
        const  section = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        section.forEach(element => {
            const sectionTop = element.offsetTop
            const sectionHeight = element.clientHeight

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = element.id
            }

        })
        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
            }
        })

    })
}

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', () => {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('header-fixed')
        }else {
            header.classList.remove('header-fixed')
        }
    } )
}

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i=1; i <=CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
            <source srcset="dist/img/gallery/thumb/${i}.avif" type="image/avif">
            <source srcset="dist/img/gallery/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="dist/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
        `;

        //Event Handler
        imagen.onclick = () => {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('PICTURE');
    imagen.innerHTML = `
            <source srcset="dist/img/gallery/full/${i}.avif" type="image/avif">
            <source srcset="dist/img/gallery/full/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="dist/img/gallery/full/${i}.jpg" alt="imagen galeria">
        `;

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

