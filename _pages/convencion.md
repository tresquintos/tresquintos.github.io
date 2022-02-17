---
layout: single
title: "Convención Constitucional"
permalink: /convencion/
description: Información electoral + análisis político. Votación general y particular de la Convención Constitucional.
author_profile: true
redirect_from:
  - /convencionales2021/
  - /constituyentes2021/
---

En esta sección puedes ver un registro de las votaciones en la Convención Constitucional. La primera sección muestra el total de votaciones y votos registrados. La segunda sección usa los datos del pleno para mostrar el ordenamiento ideológico de las coaliciones y los partidos. La tercera sección usa los datos del pleno para mostrar e ordenamiento de los colectivos. Si quieres usar estos datos para reportajes de prensa o investigación académica, puedes descargar los datos individuales y el Codebook [**aquí**](https://tresquintos.cl/datos).

<a href="https://twitter.com/tresquintos?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Sigue @tresquintos</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Votación Pleno

![cc](/images/rollcall graphs/votaciones.png){:height="49%" width="49%"} ![cc](/images/rollcall graphs/votos.png){:height="49%" width="49%"}

---

### Posicionamiento de colectivos (una dimensión)

![cc](/images/posicionamiento/puntos_ideales_colectivo3.png){:height="100%" width="100%"}


### Posicionamiento de colectivos (dos dimensiones)

![cc](/images/posicionamiento/puntos_ideales_cajas_dosdimensiones.png){:height="100%" width="100%"}


### Posicionamiento de coaliciones y partidos

![cc](/images/posicionamiento/puntos_ideales_coalicion.png){:height="49%" width="49%"}
![cc](/images/posicionamiento/puntos_ideales_partido.png){:height="49%" width="49%"}



---

### ![ep](/images/pc.png){:height="4%" width="4%"} Uso avanzado

Si quieres usar estos datos en tu procesados, puedes descargar los datos en formato tabulado [**aquí**](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/JLTSRL). Si quieres importar los datos en formato CSV directamente a **R**, **Python** o **Stata**, lo puedes hacer pinchando [**aquí**](https://raw.githubusercontent.com/tresquintos/legislativo/main/votaci%C3%B3n%20particular.csv).



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
    window.open("https://tresquintos.cl/donaciones/")
  } else if (result.isDenied) {
    window.open("https://tresquintos.cl/donaciones/")
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
