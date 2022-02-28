<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Antes de iniciar este componente formativo, es importante conocer que <i>ePub</i> es un formato de archivo que permite leer libros digitales y su extensión es “<i><b>.ePub</b></i>” y su traducción al inglés es <i>electronic publication</i> y este hace parte del ecosistema de producción editorial digital, el cual, hace referencia al conjunto de infraestructuras y prestaciones, tales como plataformas y dispositivos de acceso, que se vinculan en el suministro de contenidos y de servicios por medio de Internet.
    .tarjeta.bg-container.p-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/7rZ94kUDBzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


</template>

<script>
import BannerInterno from '@/components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
