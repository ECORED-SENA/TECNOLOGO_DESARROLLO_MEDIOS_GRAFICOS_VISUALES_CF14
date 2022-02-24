<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producción
    p.mb-5 <i>ePub</i> cuenta con un archivo de formato de código abierto (<i>Open ebook OEB</i>), que permite normalizar la lectura de textos e imágenes, en dispositivos electrónicos, que se adaptan a diferentes tamaños de letra e imagen de una pantalla. 
      br
      br
      |Uno de los ejes fundamentales en la producción de formatos digitales, es tener en cuenta que el medio de salida es totalmente diferente al tradicional, por lo cual deberá estar en todo momento en línea, teniendo en cuenta el uso de diferentes lenguajes y herramientas que permitirán subir los componentes a la web. 
      br
      br
      |En el medio  de la producción editorial digital se puede encontrar diferentes tipos de elementos como por ejemplo:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10: img(src="@/assets/curso/0.svg")
    p.mb-5 Para realizar la publicación editorial en formatos digitales, se pueden utilizar dos grandes grupos de herramientas  para  llevar a cabo estas acciones. 
    #carouselExampleIndicators.carousel.slide.carrousel1(data-bs-interval="500" data-bs-pause="false").mb-5
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 1')
      .carousel-inner
        .row.justify-content-center
          .col-lg-10
            .carousel-item.active.bg--amarillo-claro
              .row
                .col-lg-6.p-4
                  h4 1. Página Web
                  p Se puede elaborar contenido digital  a través de la creación de una página web.
                    br
                    br
                    |Existen gran cantidad de herramientas gratuitas para diseñar páginas web, inclusive que  hoy en día dan al usuario, la posibilidad de generar contenido teniendo poco conocimiento de diseño web.
                .col-lg-6: img(src="@/assets/curso/0.jpg")
            .carousel-item.bg--amarillo-claro
              .row
                .col-lg-6.p-4
                  h4 2. Portales en línea
                  p En la actualidad hay muchos portales y sitios en línea con imágenes y lenguajes específicos, que dan la oportunidad de presentar contenido en línea para poder exhibirlo a los clientes. 
                    br
                    br
                    |Día a día con la adquisición del formato <i><b>ePub</b></i>, el lector tiene mayor campo de acción y posibilidades de encontrar información de manera fácil y accequible,  el cual puede desglosar capítulos y artículos, eligiendo lo que desea leer.
                .col-lg-6: img(src="@/assets/curso/1.jpg")
            .carousel-item.bg--amarillo-claro
              .row.justify-content-center.align-items-center
                .col-lg-6.p-4
                  h4 3. Proceso de producción
                  p El proceso de producción se descompone principalmente en <b>cinco pasos principales:</b>
                  ol.lista-ol--cuadro
                    li.mb-1 
                      .lista-ol--cuadro__vineta
                        span A
                      | Bocetos estáticos.
                    li.mb-1 
                      .lista-ol--cuadro__vineta
                        span B
                      | Maquetación.
                    li.mb-1 
                      .lista-ol--cuadro__vineta
                        span C
                      | Células. 
                    li.mb-1 
                      .lista-ol--cuadro__vineta
                        span D
                      | Desarrolladores.
                    li.mb-1 
                      .lista-ol--cuadro__vineta
                        span E
                      | Archivos específicos.
                .col-lg-6: img(src="@/assets/curso/2.jpg")
            .carousel-item.bg--amarillo-claro
              .row.justify-content-center.align-items-center
                .col-lg-6.p-4
                  h4 
                    span.bg--4.me-2 A.
                    | Bocetos estáticos 
                  p Al igual que cualquier proceso de diseño, el primer paso de creación en un <i>Ebook</i> es el de  la bocetación y en este punto se desarrollan los bocetos concernientes a todos los contenidos multimediales que van a componer el <i>Ebook</i>. 
                .col-lg-6: img(src="@/assets/curso/3.jpg")
            .carousel-item.bg--amarillo-claro
              .row.justify-content-center.align-items-center
                .col-lg-6.p-4
                  h4
                    span.bg--4.me-2 B. 
                    | Maquetación
                  p El proceso de maquetación, está más enfocado al todo de las partes, a cómo van a funcionar, la interacción entre las mismas.
                .col-lg-6: img(src="@/assets/curso/4.jpg")
            .carousel-item.bg--amarillo-claro
              .row.justify-content-center.align-items-center
                .col-lg-6.p-4
                  h4 
                    span.bg--4.me-2 C.
                    | Células
                  p Un producto como un <i>ebook</i>, necesita de la interacción y trabajo en diferentes fases, en las cuales se deben contemplar los diferentes componentes del mismo:
                  ul.lista-ul.icon-1
                    li 
                      i.fas.fa-circle.fa-xs
                      p <b>Producción fotográfica:</b> en este paso se deben encontrar y suministrar las  imágenes más adecuadas que cumplan con los requerimientos técnicos específicos, para así completar la galería necesaria. 
                    li 
                      i.fas.fa-circle.fa-xs
                      p <b>Producción sonora:</b> se deben suministrar los elementos sonoros necesarios de acuerdo a la producción para la cual se esté desarrollando el proyecto.
                    li 
                      i.fas.fa-circle.fa-xs
                      p <b>Producción animada:</b> se encarga de realizar los contenidos animados en 2d o 3d, de acuerdo también a los requerimientos establecidos.
                    li 
                      i.fas.fa-circle.fa-xs
                      p <b>Producción video gráfica:</b>  aquí se editan y arreglan todos los componentes que se necesitan para el proyecto.
                .col-lg-6.h-100: img(src="@/assets/curso/5.jpg")
            .carousel-item.bg--amarillo-claro
              .row.justify-content-center.align-items-center
                .col-lg-6.p-4
                  h4 
                    h4 
                    span.bg--4.me-2 D.
                    |  Desarrolladores
                  p En este punto los desarrolladores o expertos  integran todos los componentes que hasta el momento se han realizado por parte de las células, se unen y se empieza a dar forma a todo el <i>ebook</i>.
                .col-lg-6: img(src="@/assets/curso/6.jpg")
            .carousel-item.bg--amarillo-claro
              .row.justify-content-center.align-items-center
                .col-lg-6.p-4
                  h4 
                    h4 
                    span.bg--4.me-2 E.
                    | Archivos específicos
                  p La dirección del proyecto recibe del desarrollador cada uno de los archivos específicos planeados en la fase de preproducción, dependiendo de los dispositivos móviles en los cuales el libro interactivo se ejecutará. Los archivos están determinados por resoluciones, versiones, dispositivos.
                .col-lg-6: img(src="@/assets/curso/7.jpg")
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 1.1 Revisión 
    p.mb-5 Antes de generar un documento o cualquier tipo de elemento como un <i><b>ePub</b></i>, se hace necesario tener una revisión previa de los elementos que componen el mismo y de este modo publicar de una manera correcta y adecuada. 
      br
      br
      |A continuación se conocerán los elementos primordiales en una adecuada revisión:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--4-claro3")
      .row(titulo="Textos y páginas")
        .col-md-6.mb-4.mb-md-0
          p Estos deben contar un orden consecutivo de lectura lineal, por ello en el proceso de maquetación desarrollado por lo general en <i>Indesign</i>, se hace fundamental llevar a cabo una revisión previa en cuanto a cajas de texto, imágenes y demás elementos adicionales de la publicación, que cumplan y estén ordenados de manera lógica y consecutiva. 
        .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
          .imagen-adornos-flotantes
            img(src="@/assets/curso/8.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .row(titulo="Estilos")
        .col-md-6.mb-4.mb-md-0
          p El estilo de texto se puede definir como una colección guardada con elementos y parámetros específicos referentes a un texto, en cuanto a estilos de párrafo y carácter,  como el tamaño, características, interletreado, interlineado, entre otros muchos más.
            br
            br
            |Las características principales de estilo se generan principalmente de estilos de párrafo y de carácter:
          ul.lista-ul.icon-1.vineta
            li 
              i
              p <b>Estilos de párrafo:</b> El estilo de párrafo es atribuido a cada uno de los párrafos y contemplan elementos como el color, el tamaño, la posición, los espacios entre otros.
            li 
              i
              p <b>Estilos de carácter:</b> Los estilos de carácter se destinan principalmente a un grupo de palabra o letras, dando características como subrayados, negrita o cursiva. Los estilos se deben priorizar como elemento de jerarquía en la publicación.
        .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
          .imagen-adornos-flotantes
            img(src="@/assets/curso/9.svg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: -10% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .row(titulo="Corrección estructural")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de corrección se fundamenta en la corrección de posibles incoherencias en la estructura e información adquirida para los contenidos. 
        .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
          .imagen-adornos-flotantes
            img(src="@/assets/curso/10.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: -10% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .row(titulo="Imágenes")
        .col-md-6.mb-4.mb-md-0
          p En este aspecto las imágenes de libros electrónicos, podríamos decir que se perciben de una manera diferente a cuando las trabajamos para publicaciones impresas, más que tengan una excelente resolución o un gran tamaño, lo que se requiere es que la imagen sea nítida y cuando se escale a otra proporción en formato gif o jpg, conserve los detalles originales sin distorsión. 
        .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
          .imagen-adornos-flotantes
            img(src="@/assets/curso/11.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: -10% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 1.2 Maquetación y conceptualización
    p.mb-5 Para conocer las herramientas básicas de Maquetación, se presenta el siguiente video:
    .tarjeta.bg-container.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/56_dSe6wVU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 1.3 Software especializado y herramientas de <i>ePub</i>
    p.mb-5 A través del siguiente video se conocerá cómo realizar la exportación para <i>ePub</i> y las herramientas a utilizar
    .tarjeta.bg-container.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/56_dSe6wVU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 1.4 Plataformas y dispositivos de publicación
    .row.mb-5.align-items-center
      .col-lg-6(data-aos="fade-right")
        p Una plataforma digital (ver figura 1) es un sitio que alberga información de contendidos diversos que están a disposición de los consumidores y permiten la ejecución de varias aplicaciones y programas  a la vez,  utilizando la menor cantidad de recursos posibles. 
          br
          br
          |Existen diferentes tipos de plataformas que se clasifican de acuerdo a su uso y funcionalidad, las plataformas en donde se puede encontrar contenido <i>ePub</i>, principalmente son las siguientes:  
      .col-lg-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Plataformas digitales
        .imagen-adornos-flotantes
            img(src="@/assets/curso/12.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas educativas")
        .row
          .col-lg-6
            h4 Plataformas educativas
            p Las plataformas educativas son de gran importancia sobre todo en los contextos actuales, ya que simulan el proceso educativo presencial de manera virtual,  dan al consumidor las herramientas necesarias para que pueda llevar a cabo desde pequeños cursos, hasta una carrera profesional, ofreciendo por lo general gran cantidad de recursos como bibliotecas virtuales, <i>ePub</i> y material de apoyo de carácter educativo. 
          .col-lg-6: img(src="@/assets/curso/13.png" alt="")
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas de imágenes")
        .row
          .col-lg-6
            h4 Plataformas de imágenes
            p Este  tipo de plataformas tan útiles para cualquier diseñador, cuenta con bancos  extensos de imágenes, fotografías e ilustraciones, algunas de dominio público y otras con <i>copyright</i> o pago.
          .col-lg-6: img(src="@/assets/curso/14.png" alt="")
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas audiovisuales")
        .row
          .col-lg-6
            h4 Plataformas audiovisuales
            p Estas plataformas se dedican al contenido de videos de todos los temas de interés de los consumidores.
          .col-lg-6: img(src="@/assets/curso/15.png" alt="")
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas sociales")
        .row
          .col-lg-6
            h4 Plataformas sociales
            p Este tipo de plataformas están en auge y sirven específicamente para llevar a cabo interacciones sociales, basadas en intereses en común.
          .col-lg-6: img(src="@/assets/curso/16.png" alt="")
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas de comercio electrónico")
        .row
          .col-lg-6
            h4 Plataformas de comercio electrónico
            p Estas plataformas se dedican al comercio 24/7, aunque existen muchas páginas dedicadas a este tipo de negocios, también almacenes como supermercados y librerías han adoptado este modelo de negocio. 
          .col-lg-6: img(src="@/assets/curso/17.png" alt="")
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas bancarias")
        .row
          .col-lg-6
            h4 Plataformas bancarias
            p Todas las entidades bancarias tienen sus servicios disponibles para clientes, en sus plataformas virtuales, en donde adicionalmente se pueden hacer transacciones y operaciones que antes se hacían presencialmente.
          .col-lg-6: img(src="@/assets/curso/18.png" alt="")
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas de pago")
        .row
          .col-lg-6
            h4 Plataformas de pago
            p Estas plataformas permiten recibir y realizar pagos con dinero de manera virtual
          .col-lg-6: img(src="@/assets/curso/19.png" alt="")
      .tarjeta.color-acento-contenido--borde.bg--3-claro3.border-2.p-4(titulo="Plataformas de noticias")
        .row
          .col-lg-6
            h4 Plataformas de noticias
            p Este tipo de plataformas tiene como objetivo tener a la gente informada con las noticias minuto a minuto.
          .col-lg-6: img(src="@/assets/curso/20.png" alt="")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Dispositivos de publicación
    .row.mb-5.align-items-center
      .col-lg-6(data-aos="fade-right")
        p Dentro de los dispositivos en donde se pueden publicar este tipo de contenidos, se encuentran dispositivos comunes con los cuales se con vive todos los días y que gracias a su constante accesos a internet, permiten una interconexión en todo momento y todo lugar, lo cual en el caso de los <i>ebooks</i> es indispensable, por lo menos en un primer momento para poder bajar y manipular los contenidos. 
      .col-lg-6(data-aos="fade-left")
        .imagen-adornos-flotantes
            img(src="@/assets/curso/21.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Los dispositivos más utilizados para este fin son:
    .row.mb-5
      .col-lg-4
        .tarjeta-imagen.bg--1.p-5.h-100
          .tarjeta-imagen__img: img(src="@/assets/curso/25.jpg")(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/22.svg' alt='AvatarTop' style='width: 67px').mb-3
          h4 <i>Tablets</i>
          p.text-center Son ideales por su tamaño, su peso el cual simula el de un libro,  y su pantalla de gran resolución, generan que la lectura se vuelva fácil y mucho más cómoda que en otros dispositivos.
      .col-lg-4
        .tarjeta-imagen.bg--1.p-5.h-100
          .tarjeta-imagen__img: img(src="@/assets/curso/26.jpg")
          img(src='@/assets/curso/23.svg' alt='AvatarTop' style='width: 67px').mb-3
          h4 Dispositivos celulares
          p.text-center Tal vez es uno de los dispositivos más utilizados, ya que a diferencia de una <i>Tablet</i>, el celular se ha vuelto parte de nuestras vidas cotidianas. Tiene capacidad de procesamiento, de conexión a internet y con memoria que le permite llevar a cabo varias tareas.
      .col-lg-4
        .tarjeta-imagen.bg--1.p-5.h-100
          .tarjeta-imagen__img: img(src="@/assets/curso/27.jpg")
          img(src='@/assets/curso/24.svg' alt='AvatarTop' style='width: 67px').mb-3
          h4 Computadores o portátiles
          p.text-center Son utilizados en este tipo de actividades, sin embargo hay que decir que al igual que el libro de papel,  los lectores quieren tener la portabilidad de llevar el libro a todas partes, lo cual en un equipo de mesa no es posible, pero si en un computador portátil.
    p.mb-5 A pesar de esto se han diseñado dispositivos especializados como <i>Ebook</i> o <i>e-Reader</i> para llevar a cabo actividades de lectura, los cuales cuentan con pantallas de tinta electrónica, que permite una fácil lectura tanto en interiores como en exteriores, la luz emitida por el dispositivo es hacia la pantalla y no hacia los ojos del lector, materiales que imitan y simulan el papel. Estos dispositivos son utilizados especialmente para la lectura de los llamados <i>Fluid Layoute Pub</i>, cuyo contenido es más escrito que de carácter visual (ver figuras 2, 3 y 4). 
    .row.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Lector 1
        .tarjeta-imagen-scale: img(src="@/assets/curso/28.jpg")
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Lector reloj
        .tarjeta-imagen-scale: img(src="@/assets/curso/29.jpg")
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span Lector 2
        .tarjeta-imagen-scale: img(src="@/assets/curso/30.jpg")
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 1.5. Formatos y estructura <i>ePub</i>
    p.mb-5 El formato en diseño se refiere a la forma y dimensión física de una pieza gráfica, en este caso se hablará de los diferentes y más usados formatos en publicaciones <i>ePub</i>. 
      br
      br
      |Dentro de los formatos más utilizados para la creación de libros electrónicos se encuentran: 
    .row.mb-3
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/31.svg' alt='AvatarTop')
          .tarjeta.bg--2-claro3
            .p-4
              h4 PDF:
              p Acrónimo del inglés <i>portable document format</i>, formato de documento portátil), este formato desarrollado por la empresa <i>Adobe System</i>. Es multiplataforma, es decir, puede ser presentado por los principales sistemas operativos (<i>Windows, Unix/Linux o Mac</i>).
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/32.svg' alt='AvatarTop')
          .tarjeta.bg--1-claro2
            .p-4
              h4 <i>Mobipocket:</i>
              p Mobi es un formato para archivos de libros electrónicos creado por Mobipocket S.A. 
                br
                br
                |El formato .mobi esta basado en las especificaciones <i>Open eBook</i> con protección DRM.
    .row.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/33.svg' alt='AvatarTop')
          .tarjeta.bg--4-claro
            .p-4
              h4 Ms <i>Word</i> a <i>EPub</i> convertidor:
              p Esta herramienta específicamente lo que hace es convertir archivos de <i>Word</i> a extensión <i>EPub</i>. 
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100.align-items-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/34.svg' alt='AvatarTop')
          .tarjeta.bg--2-claro3
            .p-4
              h4 Sigil: 
              p Este es un creador para libro electrónico, que utiliza herramientas de muy fácil acceso y creación. 
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Estructura <i>ePub</i>
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p La estructura básica del <em>ePub</em> está conformada por un archivo comprimido en Zip, el cual puede descomprimirse con la extensión “.<em>ePub</em>”, para ver su contenido, se obtiene una estructura de carpetas que están compuestas de diversos archivos como por ejemplo:
        ul.lista-ul.icon-1
          li.vineta2 
            i
            p <b><em>Fonts:</em></b>  contiene las fuentes que hacen parte del <em>ePub</em>.
          li.vineta3 
            i
            p <b><em>Images:</em></b>  presenta el contenido de imágenes que se han utilizado dentro del <em>ePub</em>.
          li.vineta4 
            i
            p <b><em>Styles:</em> </b>  contiene todas las características de las hojas de estilo que hacen parte del archivo, dentro de estas se encuentran los estilos Css, que definen el color, tamaño, presentación entre otros.

          li.vineta4 
            i
            p <b><em>Text:</em> </b>  contiene los archivos HTML, particularmente archivos refertes a texto e imagen, principalmente.
      .col-lg-5(data-aos="fade-left")
        .imagen-adornos-flotantes
            img(src="@/assets/curso/35.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 1.6 Herramientas y elementos interactivos
    p.mb-5 Existe diversidad de herramientas existentes en línea que nos dan la posibilidad de desarrollar contenidos para crear un <i>ebook</i>, estas herramientas por lo general poseen gran cantidad de plantillas prediseñadas que están disponibles para sean editadas y ajustadas de acuerdo a las necesidades de cada persona, generalmente en formato pdf que posteriormente puede ser pasado a <i>ePub</i> y <i>Mobi</i>. 
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-10
        .contendor-c-bg.p-5
          .row
            .col-lg-10
              #carouselExampleIndicators2.carousel.slide.carrousel2(data-bs-interval="500" data-bs-pause="false").mb-5
                .carousel-indicators
                  button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
                  button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
                  button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
                  button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 4')
                  button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='4' aria-label='Slide 5')
                  button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='5' aria-label='Slide 1')
                .carousel-inner
                  .row.justify-content-center
                    .col-lg-9
                      .carousel-item.active.bg-white.p-4
                        .row.justify-content-center.align-items-center
                          .col-lg-3: img(src="@/assets/curso/36.png")
                          .col-lg-7
                            h4 <i>INDESIGN</i>
                            p <i>Indesign</i> es la más completa herramienta para diseñadores que desean empezar a diseñar libros de este tipo. 
                      .carousel-item.bg-white.p-4
                        .row.justify-content-center.align-items-center
                          .col-lg-3: img(src="@/assets/curso/37.png")
                          .col-lg-7
                            h4 <i>IBOOK</i>
                            p Esta es la aplicación para <i>Ebooks</i> más importante para formatos compatibles con <i>Apple</i>, permite el uso de recursos propios, pero también la creación de elementos nuevos. 
                      .carousel-item.bg-white.p-4
                        .row.justify-content-center.align-items-center
                          .col-lg-3: img(src="@/assets/curso/38.png")
                          .col-lg-7
                            h4 <i>BOOKSMART</i>
                            p Es una aplicación profesional para la realización de formatos <i>EPub</i>. 
                      .carousel-item.bg-white.p-4
                        .row.justify-content-center.align-items-center
                          .col-lg-3: img(src="@/assets/curso/39.png")
                          .col-lg-7
                            h4 <i>CANVA</i>
                            p Este <i>software</i> tan conocido no solo por la gran cantidad de elementos que podemos generar como <i>flayers</i>, tarjetas de presentación, elementos de diseño entre otros, permite generar la interacción para la creación de libros digitales. 
                      .carousel-item.bg-white.p-4
                        .row.justify-content-center.align-items-center
                          .col-lg-3: img(src="@/assets/curso/40.png")
                          .col-lg-7
                            h4 <i>DESIGNRR</i>
                            p Esta herramienta principalmente permite realizar Pdf, para luego ser exportados a <i>ePub</i>.
                button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
                  span.carousel-control-prev-icon(aria-hidden='true')
                  span.visually-hidden Previous
                button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
                  span.carousel-control-next-icon(aria-hidden='true')
                  span.visually-hidden Next
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Elementos interactivos
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p Cuando se desarrollan componentes que van a ir inmersos en una página web, se permite el uso de diversos elementos de tipo multimedia, interactivos.  Un elemento interactivo es aquel que puede cambiar dependiendo del uso que le dé el usuario. 
          br
          br
          |Estos elementos pueden cambiar, etiquetar, deslizar, llevar a un sitio, abrir algún elemento por ejemplo, abrir ventanas.  Dentro de los principales elementos interactivos se pueden encontrar por ejemplo los botones.
      .col-lg-5(data-aos="fade-left")
        .imagen-adornos-flotantes
            .titulo-sexto.color-acento-contenido
              h5 Figura 5.
              span Elementos interactivos
            img(src="@/assets/curso/41.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:20% ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
    h4 Hipervínculos, anclas y botones
    .row.mb-5
      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/42.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.w-100
            .text-center.p-4.mt-3
              h4.text-center Hipervínculos
              p Son objetos interactivos sobre  los que al hacer clic, conducen a otra parte de un documento, de otra página web en el mismo sitio o a otra página de internet, entre otras funciones.
      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/43.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.w-100
            .text-center.p-4.mt-3
              h4.text-center Anclas
              p Un ancla es un tipo de enlace HTML, es el inicio y destino del enlace que al pinchar sobre el mismo, lleva a la persona a  una parte de la propia web o de otra externa. 
                br
                br
                |Ayudan al navegante a encontrar gran cantidad de contenidos. 
      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/44.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.w-100
            .text-center.p-4.mt-3
              h4.text-center Botones
              p Los botones son elementos esencialmente que se utilizan en páginas y formularios que  al ser pinchados, por lo general generan algún tipo de interacción.
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p <b>Elementos multimedia:</b> animaciones, videos y <i>sliders</i>
        p Cuando se habla de elementos  multimedia (ver figura 6) se refiere a distintos medios integrados que se usan simultáneamente para transmitir un mensaje o algún tipo de información, por medio de diversos medios de comunicación como, imágenes, textos, fotografías, sonido y video entre otros. 
      .col-lg-5(data-aos="fade-left")
        .imagen-adornos-flotantes
            .titulo-sexto.color-acento-contenido
              h5 Figura 6.
              span Elementos multimedia
            img(src="@/assets/curso/45.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:20% ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Animaciones" :icono="require('@/assets/curso/47.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p La palabra animación proviene del latín ánima, que significa alma o espíritu, de allí que el proceso de animación en producción gráfica, busca crear y dar  la ilusión de movimiento y vida sobre objetos  inanimados como  imágenes y fotografías, entre otros.
              br
              br
              |Este proceso enlaza diferentes secuencias de  dibujos que al darles una velocidad de  movimiento constante, por lo general de 24 cuadros por segundo, dan la sensación de vida y movimiento a los objetos. 
              br
              br
              |Se pueden encontrar diferentes tipos de animación como por ejemplo:
            ul.lista-ul.icon-1
                    li 
                      i.fas.fa-circle.fa-xs
                      p.text-bl <i><b>Stop motion:</b></i>
                        br
                        | Este tipo de animación es muy conocida y se logra haciendo una gran cantidad de tomas consecutivas de un objeto, movilizando entre toma y toma, que al ser unidas dan la sensación de movimiento. 
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/46.svg" alt="Adornos flotantes")
      .py-4.py-md-5(titulo="Dibujos animados" :icono="require('@/assets/curso/48.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p La técnica de los dibujos animados es atribuida a Disney, y está dada por una sucesión de imágenes en dos dimensiones, a partir de fotogramas puestos en secuencia, que unidos dan la sensación de movimiento. 
          .col-md-6.mb-4.mb-md-0
            .tira_1
      .py-4.py-md-5(titulo="Plasmación" :icono="require('@/assets/curso/49.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p En esta técnica de animación se realizan y caracterizan personajes  principalmente en plastilina, los cuales se van moviendo muy lentamente de captura en captura. 
              br
              br
              |Dentro de algunas de las películas más importantes con esta técnica podemos encontrar, Pollitos en fuga y El extraño mundo de Jack. 
          .col-md-6.mb-4.mb-md-0
            .tira_2
      .py-4.py-md-5(titulo="Animación computarizada" :icono="require('@/assets/curso/50.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este tipo de animación ha tenido gran auge en la última década ya que su parecido con la realidad, es casi imperceptible y no solo se limita a la creación de personajes para películas sino también se utiliza en videojuegos entre otros. En su creación son utilizados diversos programas que permiten generar realidades en 3D y en 4D. 
          .col-md-6.mb-4.mb-md-0
            .tira_3
      .py-4.py-md-5(titulo="Videos" :icono="require('@/assets/curso/51.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p El video es un sistema que permite la grabación simultánea de imágenes y  sonidos, en algunos casos en una cinta magnética y en otros por medios digitales, por una secuencia de captura de fotogramas de imágenes que luego en secuencia y a una velocidad considerable, generan movimiento. 
          .col-md-6.mb-4.mb-md-0
            .tira_4
      .py-4.py-md-5(titulo="Sliders" :icono="require('@/assets/curso/52.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Un slider es un recurso en diseño web, el cual consiste en mostrar diferentes imágenes, sonidos e incluso videos que se van deslizando unas sobre otras. Se puede interpretar como un carrusel o deslizador de diapositivas, el cual va ubicado generalmente en una parte destacada de la web. 
          .col-md-6.mb-4.mb-md-0
            .tira_5
              img(src="@/assets/curso/slider.svg" alt="Adornos flotantes")
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        h4 <i>Html5, CSS, Java script, metadatos</i>
        p Cuando se desarrolla elementos para la web,  se necesitan diferentes tipos de lenguajes en común para que todos los navegadores lo interpreten de igual manera y se pueda visualizar de manera correcta al lector. <i>HTML, CSS, JAVA SCRIPT</i>, permiten dar un conjunto de órdenes, datos y acciones necesarias para ejecutar y desarrollar las herramientas necesarias que me permiten a un elemento estar en red.  
      .col-lg-5(data-aos="fade-left")
        .imagen-adornos-flotantes
            img(src="@/assets/curso/53.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 5% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0% ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 0% ; right: ; top: ; bottom: 5% ; width: 60px ")
    ImagenInfografica.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/54.svg', alt='Texto que describa la imagen')

      .tarjeta.bg--2-claro.p-3(x="20%" y="30%" numero="")
        .h5.mb-2 <i>HyperText Markup Language</i>
        p En lenguaje claro y coloquial, podemos definir <i>HTML5</i>, como un estándar que define la estructura y todo el contenido de una página <i>web</i>, por medio de la utilización de etiquetas. Una etiqueta de <i>HTML</i>, es un elemento que se encuentra escrito en códigos, los cuales generan una instrucción específica al navegador de como mostrar un elemento. 
          br
          br
          |Por ejemplo con el uso de una etiqueta de <i>HTML</i>, se pueden colocar los textos a cierto tamaño, subrayados, en cursiva, colocar encabezados, añadir imágenes y tener vínculos hacia otras páginas por ejemplo.
      .tarjeta.bg--2-claro.p-3(x="40%" y="20%" numero="")
        .h5.mb-2 <i>CSS</i>
        p <i>Css</i> en español ”Hojas de estilo en cascada”,  es un código que permite que cada sitio <i>web</i> tenga su propia personalidad y convierta la experiencia de usuario en la más adecuada,  trabaja de manera conjunta con <i>HTML</i>, con el fin y propósito de dar a cada etiqueta, su propio estilo y diseño característico, es decir maneja el diseño y presentación de cada sitio de principio a fin. 
          br
          br
          |Se les llama hojas de estilo en cascada, ya que se pueden tener varias hojas y una de ellas tener propiedades heredadas de otra página.  
          br
          br
          |Es como si el <i>HTML</i> fuese el esqueleto o soporte de todo sitio y <i>CSS</i>, aquel que define la parte externa del mismo,  principalmente nos ayuda a dar los parámetros de cómo va ser visualizada la página en elementos como por ejemplo, color, fuentes, tamaño etc. 
      .tarjeta.bg--2-claro.p-3(x="59%" y="17%" numero="")
        .h5.mb-2 <i>Java Script</i>
        p <i>Java script</i> es un lenguaje de programación utilizado para crear acciones, efectos  y  dar interactividad y dinamismo a las páginas <i>web</i>, permitiendo la mejora en la interfaz de usuario. Suele ser confundido con <i>Java</i>, aunque son elementos diferentes. 
      .tarjeta.bg--2-claro.p-3(x="75%" y="30%" numero="")
        .h5.mb-2 Metadatos
        p Metadatos “sobre datos”, los metadatos se refieren a aquellos datos que hablan de otros datos, describiendo la información de los mismos.
          br
          br
          b Los metadatos se caracterizan por:
          ul.lista-ul.icon-1
            li.vineta4 
              i
              p Ser datos altamente estructurados que describen características de los datos, como el contenido, calidad, información y otras circunstancias o atributos.
            li.vineta4 
              i
              p Presentan diferenciaciones que dependerán, en última instancia, de las reglas incluidas en las aplicaciones para determinar la estructura interna de los esquemas de datos.
            p Pueden clasificarse en función de distintos criterios, como su contenido, variabilidad o función.
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 1.7. Maquetación fija y adaptable
    p.mb-5 Este tipo de maquetación se encuentra presente en el programa de <i>Indesign</i>, y presenta algunas diferencias de uso:
    .row
      .col-lg-6
        .tarjeta.bg--1-claro.p-5.h-100
          img(src="@/assets/curso/55.svg" alt="Imagen de una tarjeta" style= 'width: 60px').mb-3
          h4 MAQUETACION AJUSTABLE O FLUIDA /<i>EPUB</i> 2.0.1
          p Este formato se utiliza en una gran variedad de dispositivos, permitiendo una maquetación que es reajustable, por lo que el lector puede optimizar el contenido en función de las características propias del dispositivo, adecuándose mejor a usuarios de dispositivos que tengan tinta electrónica. Si es necesario posteriormente cambiar la fuente y el tamaño del texto, es importante usar este formato.
            br
            br
            |Su utilidad es mayor en las novelas o los libros con pocas ilustraciones, en los que predomine el texto
          img(src="@/assets/curso/57.jpg" alt="Imagen de una tarjeta")
      .col-lg-6
        .tarjeta.bg--4-claro.p-5.h-100
          img(src="@/assets/curso/56.svg" alt="Imagen de una tarjeta" style= 'width: 60px').mb-3
          h4 MAQUETACION FIJA /<i>EPUB</i> 3.0
          p Fue aprobada por el <i>International Digital Publishing Forum</i> (IDPF). Consiste en la evolución tecnológica de la versión anterior (<i>ePub</i> 2.0.1), en la que se puede insertar audio, vídeo, javascript y textos verticales en japonés. Como la maquetación es fija, los textos y los elementos no refluyen al tamaño de la página, sino que conservan su diseño y maquetación original. Es necesario tener en cuenta que no funciona en dispositivos que no sean compatibles con este estándar. 
            br
            br
            | <i>ePub</i> 3.0, permite ver los libros en la <i>Tablet, Ipad</i> (especialmente el de <i>Apple</i> a través de <i>iBooks</i>), o <i>Smartphone</i> y en diversos ordenadores.
          img(src="@/assets/curso/58.jpg" alt="Imagen de una tarjeta")



































</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.hover-perspective
  transition: all 0.3s ease-in-out
  &:hover
    background-color: $color-primario !important
    position: relative
    transform: rotate(-2deg)
.contenedor-hover
  overflow: hidden
  width: 150%
  .contenedor-hover-cuadro
    border-radius: 20px
    width: 190px
    transition: all 0.3s ease-in-out
    &:hover
      background-color: $color-primario !important
      transform: rotate(-2deg)
.card-texture
  background-image: url('../assets/curso/card-texture.svg')
  background-repeat: repeat
  background-size: auto
  background-position: center
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
.lista-ol--cuadro__vineta
  background-color: $color-acento-botones
  color: $color-sistema-texto
  font-weight: bold
.icon-1
  li
    i
      color: $color-primario
.acordion__activo
  background-color: #A8EBF0
.vineta
  i:before
    content: url(../assets/curso/vineta.svg)
    width: 20px
    height: 20px
.vineta2
  i:before
    content: url(../assets/curso/vineta2.svg)
    width: 20px
    height: 20px
.vineta3
  i:before
    content: url(../assets/curso/vineta3.svg)
    width: 20px
    height: 20px
.vineta4
  i:before
    content: url(../assets/curso/vineta4.svg)
    width: 20px
    height: 20px
.tarjeta-imagen
  overflow: hidden
  height: 474px
  border-radius: 20px
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  .tarjeta-imagen__img
    transition: bottom .3s ease-in-out
    width: 100%
    height: auto
    position: absolute
    left: 0
    bottom: -200%
  &:hover
    .tarjeta-imagen__img
      bottom: 0
.tarjeta-imagen-scale
  overflow: hidden
  border-radius: 20px
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  img
    transition: transform 0.4s ease-in-out
  &:hover
    img
      transform: scale(1.1)
.contendor-c-bg
  background-image: url('../assets/curso/contenedor-c-bg.svg')
  background-repeat: repeat
  background-size: auto
  background-position: center
  min-height: 500px
.tira_1, .tira_2, .tira_3, .tira_4, .tira_5
  background-repeat: repeat
  background-size: auto
  background-position: start
  min-height: 297px
  animation: tira steps(1701) 8s  infinite
.tira
  &_1
    background-image: url('../assets/curso/tira-1.jpg')
  &_2
    background-image: url('../assets/curso/tira-2.jpg')
  &_3
    background-image: url('../assets/curso/tira-3.jpg')
  &_4
    background-image: url('../assets/curso/tira-4.jpg')
  &_5
    background-image: url('../assets/curso/tira-5.jpg')
@keyframes tira
    0%
      background-position: 1701px

    100%
      background-position: 0
.img-infografica__card
  width: 500px
.text-bl

  b, p
    color: $color-sistema-texto !important
</style>
