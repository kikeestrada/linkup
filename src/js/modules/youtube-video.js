/**
*   @fileoverview
*     Componente para incrustar un video de YouTube en nuestro sitio web cuando la resolución es mayor a 64em (1024px), cuando es menor se agrega un enlace al video
*     Dependencias: font-awesome
*
*   @param {String} id, id del video de YouTube, se define en el archivo pug
*   @param {String} $video-width, anchura del contenedor del video, se define en el archivo scss
*
*   @returns {void} no retorna nada
*
*   @author Jonathan MirCha <jonmircha@gmail.com>
*   @version 1.0.0
*/
export default function youtubeVideo () {
    const d = document,
      w = window,
      mq = w.matchMedia('(min-width: 64em)'),
      youtube = d.querySelectorAll('.Youtube'),
      youtubeWrapper =d.querySelectorAll('.Youtube-wrapper'),
      youtubeIds = [],
      youtubeIframe = []
  
    youtube.forEach((video, index) => youtubeIds[index] = video.id)
  
    console.log( youtubeIds )
  
    function showVideo (mq) {
      if (mq.matches) {
        youtubeWrapper.forEach((video, index) => {
          video.innerHTML = `<iframe src="https://www.youtube.com/embed/${youtubeIds[index]}" frameborder="0"></iframe>`
        })
      } else {
        youtubeWrapper.forEach((video, index) => {
          video.innerHTML = `<a href="https://www.youtube.com/watch?v=${youtubeIds[index]}" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>`
        })
      }
    }
  
    mq.addListener(showVideo);
    showVideo(mq);
  }