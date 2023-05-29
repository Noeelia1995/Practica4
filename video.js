document.addEventListener('DOMContentLoaded', function() {
    const btnPlay = document.getElementById('btn-play');
    const btnPause = document.getElementById('btn-pause');
    const video = document.getElementById('mivideo');
    const botonSubirVolumen = document.getElementById('subir-volumen');
    const botonBajarVolumen = document.getElementById('bajar-volumen');
    const inputVolumen = document.getElementById('volumen');
    const inputSeleccionarVideo = document.getElementById('seleccionar-video');
    const loadingMessage = document.getElementById('loading-message');
    const ad = document.getElementById('ad');
    const closeButton = document.getElementById('closeAd');
  
    inputSeleccionarVideo.addEventListener('change', (e) => {
      const archivoSeleccionado = e.target.files[0];
      console.log('Cargando video:', archivoSeleccionado.name);
      const urlArchivo = URL.createObjectURL(archivoSeleccionado);
      video.src = urlArchivo;
      btnPlay.disabled = true;
      btnPause.disabled = true;
    });
  
    video.addEventListener('loadeddata', function() {
      loadingMessage.style.display = 'none';
      btnPlay.disabled = false;
      btnPause.disabled = false;
    });
  
    btnPlay.addEventListener('click', () => {
      if (video.play || video.ended) {
        video.play();
        btnPlay.textContent = 'Reproducir';
      } else {
        video.play();
        btnPlay.textContent = 'Reproducir';
      }
    });
  
    btnPause.addEventListener('click', () => {
      if (video.pause || video.ended) {
        video.pause();
        btnPause.textContent = 'Pausar';
      } else {
        video.pause();
        btnPause.textContent = 'pause';
      }
    });
  
    botonSubirVolumen.addEventListener('click', () => {
      if (video.volume + 0.1 > 1) {
        video.volume = 1;
      } else {
        video.volume += 0.1;
      }
      inputVolumen.value = video.volume;
    });
  
    botonBajarVolumen.addEventListener('click', () => {
      if (video.volume - 0.1 < 0) {
        video.volume = 0;
      } else {
        video.volume -= 0.1;
      }
      inputVolumen.value = video.volume;
    });
  
    inputVolumen.addEventListener('input', () => {
      video.volume = inputVolumen.value;
    });
  
    closeButton.addEventListener('click', function() {
      ad.style.display = 'none';
    });
  });
  
  
  