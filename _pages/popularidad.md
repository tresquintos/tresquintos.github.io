---
layout: single
title: "Popularidad Presidencial"
permalink: /popularidad/
description: Información electoral + análisis político. Tendencia de popularidad presidencial.
author_profile: true
---

En esta página puedes ver la tendencia de popularidad presidencial de Gabriel Boric.

<a href="https://twitter.com/tresquintos?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Sigue @tresquintos</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Tendencia

Abajo puedes ver un gráfico con los resultados de todas las encuestas de popularidad presidencial desde el 11 de marzo de 2022. Muestra aprobación y desaprobación. El gráfico se actualiza automáticamente cada vez que se ingresa una encuesta nueva a nuestra base de datos.

[![Top-3](/images/main graphs/pres_aprueba.png){:height="49%" width="49%"}](https://tresquintos.cl/popularidad/) [![Top-3](/images/main graphs/pres_rechaza.png){:height="49%" width="49%"}](https://tresquintos.cl/popularidad/)


---

<!-- NES -->
<script src="/js/topsecret.js"></script>


<!-- NES -->
<style>
.aligncenter {
    text-align: center;
}
</style>
<p class="aligncenter">
    <img src="/images/nes.png" width="30" height="30" alt="konami" />
</p>

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
    window.open("https://tresquintos.cl/donaciones/#donación-única")
  } else if (result.isDenied) {
    window.open("https://tresquintos.cl/donaciones/#donación-mensual")
  }
  })
  },35000);
</script>


<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#b91d47">
<meta name="theme-color" content="#ffffff">
