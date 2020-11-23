---
layout: single
title: "Simulaciones"
permalink: /sx/
author_profile: true
---

En esta página podrás conocer los métodos que se utilizan para realizar simulaciones electorales. Primero, presenta una descripción general. Luego, describe la base de una simulación. Finalmente, usa la elección de constituyentes de 2021 para dar un ejemplo de una simulación compleja.


### ![ep](/images/pc.png){:height="4%" width="4%"} ¿Qué son las Sx?

Las simulaciones (**Sx**) son métodos para realizar proyecciones electorales en elecciones para las cuales se distribuye más de un escaño por distrito (e.g., concejales, diputados o senadores). Normalmente, estas simulaciones usan información de elecciones anteriores, a nivel de comuna/distrito/circunscripción, para proyectar resultados considerando cambios en las listas electorales.

A modo de ejemplo, si estuvieramos en 1996 y nos pidieran proyectar la elección de diputados de 1997, sería relativamente sencillo usar los datos de 1993 para hacerlo (con alta exactitud), pues entre ambas elecciones no hubo grandes cambios a nivel de listas electorales. Considerando que en 1997 tampoco habría elecciones presidenciales concurrentes, se podrían usar los resultados de 1996 redistribuidos considerando las listas electorales de 1997.

Ahora, supongamos que nos pidieran proyectar la elección de constituyentes de 2021. Aquí, el escenario es diferente. No solo porque el sistema electoral es distinto al de 1997, sino también porque las listas electorales han mutado significativamente. Dado que difícilmente se podría proyectar escaños para partidos que no existían en la elección anterior, hay que extender el número de supuestos para representar el nuevo contexto de mejor manera.

Lo anterior ilustra que no basta una aproximación parsimoniosa. Por supuesto que se puede usar los datos de 2017 para proyectar la elección de 2021, pero ¿sería metodológicamente correcto? Probablemente no. Por eso, habría que sacrificar generalidades para aumentar la cantidad de supuestos para sostener argumentos histórica y políticamente más consistentes.


### ![ep](/images/pc.png){:height="4%" width="4%"} La base de una simulación

Para explicar cómo funciona una simulación, usemos la elección de diputados de 2017 como base para simular la elección de constituyentes de 2021. En este caso, la idea es primero suponer que ciertos partidos que compitieron en 2017 van a formar ciertas listas en 2021. Este supuestos se puede hacer simplemente considerando el comportamiento anterior de los partidos y su aproximación ideológica. Por ejemplo, no sería sorpresa que la DC conforme una lista en conjunto con el PS.

Con los partidos redistribuidos en listas nuevas, se suman el total de votos de cada una de ellas. Con aquello, ya tenemos el listado de listas electorales, cada una con un porcentaje de votos. Con aquello, se simula la elección computacionalmente, usando los votos a favor de cada lista en conjunto con las reglas electorales que correspondan (en este caso el sistema D'Hondt en conjunto con el número de escaños a distribuir por cada distrito).


### ![ep](/images/pc.png){:height="4%" width="4%"} La simulación de **Tresquintos** para Convencionales 2021

Como se explicó más arriba, sencillamente traspasar los votos de 2017 a 2021 no es suficiente. En este caso en particular porque han pasado una serie de eventos entre ambas elecciones que simplemente rendirían el ejercicio fútil. Por aquello, agregamos una serie de factores intermedios para complejizar la simulación y hacerla metodológicamente más consistente con el nuevo contexto. Esta es la lista de pasos que seguimos:


1. Consideramos partidos (&kappa;) existentes de 2017 y nuevos de 2021;
2. Construimos listas (&lambda;) nuevas considerando información actualizada;
3. Distribuimos porcentaje de votos de 2017 (&alpha;);
4. Determinamos traspaso de votos entre partidos que salen/entran/permanecen y redistribuimos porcentaje de votos por partido (&beta;);
5. Determinamos traspaso de votos entre partidos por titulares que se cambian y redistribuimos porcentaje de votos por partido (&delta;);
6. Determinamos traspaso de votos entre listas por presencia de independientes y redistribuimos porcentaje de votos por lista (&epsilon;);
7. Determinamos impacto de crisis social/plebiscito y redistribuimos porcentaje de votos por lista (&sigma;);
8. Determinamos efecto específico del distrito por lista y redistribuimos porcentaje de votos por lista (&eta;);
9. Estimamos porcentaje de votos por lista (&gamma;);
11. Asignamos un margen de error por lista (&zeta;).


La siguiente fórmula representa la simulación de escaños:

**2021**&gamma;<sub>&lambda;i</sub> = &alpha;<sub>&lambda;i</sub> + &beta;<sub>&lambda;&iota;</sub> + &delta;<sub>&lambda;&iota;</sub> + &zeta;

donde &kappa;i está dado por:

**2021**&kappa;<sub>&kappa;i</sub> = &beta;<sub>&kappa;i</sub> + &delta;<sub>&kappa;i</sub>



### ![ep](/images/pc.png){:height="4%" width="4%"} Detalles técnicos

Como nota final, las simulaciones son experimentales. Son solo una aproximación "informada", y por ende inevitablemente conllevan error. Para ver un *sketch* conceptual, pincha [aquí](https://tresquintos.cl/posts/2020/03/caveat/).

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


<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#b91d47">
<meta name="theme-color" content="#ffffff">
