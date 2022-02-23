export default {
  global: {
    componenteFormativo: 'Producción  <i>ePub</i>',
    descripcionCurso:
      'Las nuevas tecnologías han hecho que cambien los procesos y migren los procesos a otros medios diferentes a los conocidos hasta el día de hoy. <br><br>El  libro es uno de estos componentes que durante miles de años se habían producido en el formato tradicional de papel, sin embargo con la llegada de nuevas tecnologías y el internet, el libro migró sus componentes al medio tecnológico dando mayor interactividad y nuevos formatos, herramientas y medios de salida como tablets, celulares y equipos de cómputo entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Revisión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Maquetación y conceptualización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              '<i>Software</i> especializado y herramientas de <i>ePub</i>',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Plataformas y dispositivos de publicación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Formatos y estructura <i>ePub</i>',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Herramientas y elementos interactivos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Maquetación fija y adaptable',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'El formato <i>ePub</i> (s.f).',
      link: 'https://www.sinjania.com/el-formato-epub/',
    },
    {
      referencia:
        'Ingeniovirtual. (s.f). <i>Las extensiones de archivos para formato eBook y sus características.</i>',
      link:
        'https://www.ingeniovirtual.com/extensiones-de-archivos-para-formato-ebook/',
    },
    {
      referencia:
        '<i>Chip N Dale Stories.</i> (2015). <i>Mickey Mouse</i> en español latino capítulos completos, la caravana <i>mickey movie.</i> [video].',
      link:
        'https://www.youtube.com/watch?v=kIbqzo8Ic3U&list=PLLpJmQT2DNaIeRnsS-F1r1BH8nnT1kxLz',
    },
    {
      referencia:
        'Puente, L. (2015). <i>Cards: una de las últimas tendencias en diseño web.</i>',
      link:
        'https://info.netcommerce.mx/cards-una-de-las-ultimas-tendencias-en-diseno-web',
    },
    {
      referencia:
        'Real Academia Española. (2020). <i>Hipertexto. En diccionario dle.rae.es.</i>',
      link: 'https://dle.rae.es/hipertexto',
    },
    {
      referencia:
        'Sepulveda, E; Quinceno, C. (2016). <i>Ebooks interactivos diseño y producción.</i>',
      link:
        'https://www.researchgate.net/figure/Figura-1-Fase-de-preproduccion-de-material-editorial-interactivo_fig1_311193442',
    },
    {
      referencia:
        'TEC Perú. (2015, 26 abril). <i>Los mas sorprendentes videos en stop motion!</i> [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=NpnpAvAh8A0',
    },
    {
      referencia: 'Trioviño, J; Galliano, C. (s.f) Creación de Ebook.',
      link:
        'https://www.marketingcapacitacion.com/wp-content/uploads/2012/06/epub.pdf',
    },
  ],
  glosario: [
    {
      termino: 'E-reader ',
      significado: '  Lector de libros electrónicos. ',
    },
    {
      termino: 'Gif ',
      significado:
        'Formato gráfico digital utilizado ampliamente en la <i>World Wide Web</i>, tanto para imágenes como para animaciones.',
    },
    {
      termino: 'Jpg ',
      significado:
        'Estándar de compresión y codificación de archivos e imágenes fijas.',
    },
    {
      termino: 'Portales ',
      significado:
        'Sitio <i>web</i> que ofrece al usuario, de forma fácil e integrada, el acceso a una serie de recursos y de servicios relacionados con un mismo tema. Incluye: enlaces webs, buscadores, foros, documentos, aplicaciones, compra electrónica.',
    },
    {
      termino: 'TIFF',
      significado:
        'Formato de archivo informático para almacenar imágenes de mapa de bits.',
    },
  ],
  complementario: [
    {
      texto:
        'TEC Perú. (2015). Los más sorprendentes videos en stop motion!  [video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NpnpAvAh8A0',
    },
    {
      texto:
        '<i>Chip N Dale Stories.</i> (2015). <i>Mickey Mouse</i> en español latino capítulos completos, la caravana <i>mickey movie.</i> [video]. YouTube. ',
      tipo: 'Enlace',
      link:
        'https://www.youtube.com/watch?v=kIbqzo8Ic3U&list=PLLpJmQT2DNaIeRnsS-F1r1BH8nnT1kxLz',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González Tarazona',
        cargo: 'Instructor experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
