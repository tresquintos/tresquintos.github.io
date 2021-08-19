---
layout: single
title: "Fichajes"
permalink: /fichajes/
description: Información electoral + análisis político. Lista de renuncias y remociones.
author_profile: true
---

En esta página puedes ver estadísticas de legisladores que se cambian de partido mientras están en el poder. Hay datos generales, como el número de senadores y diputados que se cambian de partido mientras están en ejercicio, pero también datos más específicos, como la tendencia normalizada por periodo de gobierno. Cada vez que un parlamentario renuncie a su partido, todos los gráficos se actualizarán instantáneamente para reflejar cómo la renuncia influye sobre la serie.


### Renuncia de parlamentarios en ejercicio

Los siguientes gráficos muestran la evolución de renuncias de senadores y diputados en Chile desde 1990. Las líneas son acumulativas. Es decir, comienzan con cero renuncias el 11 de marzo de 1990, y van aumentado a medida que los parlamentarios van renunciando. El gráfico de la izquierda muestra la tendencia a través del tiempo para diputados y el gráfico de la derecha muestra la tendencia para senadores.


[![cc](/images/fichajes/chile_party_switchers.png){:height="46%" width="46%"}](https://tresquintos.cl/images/fichajes/chile_party_switchers.png) [![cc](/images/fichajes/chile_party_switchers2.png){:height="46%" width="46%"}](https://tresquintos.cl/images/fichajes/chile_party_switchers2.png)

---

<!-- NES -->
<style>
.aligncenter {
    text-align: center;
}
</style>
<p class="aligncenter">
    <img src="/images/nes.png" width="30" height="30" alt="konami" />
</p>
<script src="/js/topsecret.js"></script>


<!-- Popup -->
<script src="/sweetalerts2/dist/sweetalert2.all.min.js"></script>

<script type="text/javascript">

setTimeout(function(){Swal.fire({
  title: '¡Apoya a Tresquintos!',
  text: 'Ayúdanos a mantener el sitio activo e independiente',
  footer: '<a href="https://tresquintos.us15.list-manage.com/subscribe/post?u=3a6f5773bbbc78ea5a0003f67&id=8c164eff0f">Suscríbete al Newsletter Aquí</a>',
  imageUrl: '/images/pc.png',
  imageWidth: 80,
  imageHeight: 80,
  imageAlt: 'Custom image',
  timer: 45000,
  timerProgressBar: true,
  width: 500,
  showCloseButton: true,
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: `Una Vez`,
  denyButtonText: `Mensual`,
  cancelButtonText: `No por ahora`,
  }).then((result) => {
  if (result.isConfirmed) {
    window.open("https://tresquintos.cl/donaciones/")
  } else if (result.isDenied) {
    window.open("https://tresquintos.cl/donaciones/")
  }
  })
  },15000);
</script>


<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#b91d47">
<meta name="theme-color" content="#ffffff">
