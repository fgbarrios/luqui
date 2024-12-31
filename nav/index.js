
//correr este codigo apenas termine de cargar la pagina
window.addEventListener("load", () => {

    let elem = document.querySelector('.slider');
    let flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      imagesLoaded: true,
      autoPlay: 1500,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false
    });

});

