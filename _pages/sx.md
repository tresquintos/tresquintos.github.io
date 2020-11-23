---
layout: single
title: "Simulaciones"
permalink: /sx/
author_profile: true
---

En esta página podrás conocer los métodos que se utilizan para realizar simulaciones electorales. Primero, presenta una descripción general. Luego, describe los dos métodos más utilizados. Finalmente, usa la elección de constituyentes de 2021 para dar un ejemplo del uso del segundo de los dos métodos.


### ![ep](/images/pc.png){:height="4%" width="4%"} ¿Qué son las Sx?

Las simulaciones (**Sx**) son métodos para realizar proyecciones electorales en elecciones para las cuales se distribuye más de un escaño por distrito (e.g., concejales, diputados o senadores). Normalmente, estas simulaciones usan información de elecciones anteriores, a nivel de comuna/distrito/circunscripción, para proyectar resultados considerando cambios en las listas electorales.

A modo de ejemplo, si estuvieramos en 1996 y nos pidieran proyectar la elección de diputados de 1997, sería relativamente sencillo usar los datos de 1993 para hacerlo (con alta exactitud), pues entre ambas elecciones no hubo grandes cambios a nivel de listas electorales. Considerando que en 1997 tampoco habría elecciones presidenciales concurrentes, se podrían usar los resultados de 1996 redistribuidos considerando las listas electorales de 1997.

Ahora, supongamos que nos pidieran proyectar la elección de constituyentes de 2021. Aquí, el escenario es diferente. No solo porque el sistema electoral es distinto al de 1997, sino también porque las listas electorales han mutado significativamente. Dado que difícilmente se podría proyectar escaños para partidos que no existían en la elección anterior, hay que extender el número de supuestos para representar el nuevo contexto de mejor manera.

Lo anterior ilustra que no basta una aproximación parsimoniosa. Por supuesto que se puede usar los datos de 2017 para proyectar la elección de 2021, pero ¿sería metodológicamente correcto? Probablemente no. Por eso, habría que sacrificar generalidades para aumentar la cantidad de supuestos para sostener argumentos histórica y políticamente más consistentes.


### ![ep](/images/pc.png){:height="4%" width="4%"} La base de una simulación

Para explicar cómo funciona una simulación, usemos la elección de diputados de 2017 como base para simular la elección de constituyentes de 2021. En este caso, la idea es primero suponer que ciertos partidos que compitieron en 2017 van a formar ciertas listas en 2021. Este supuestos se puede hacer simplemente considerando el comportamiento anterior de los partidos y su aproximación ideológica. Por ejemplo, no sería sorpresa que la DC conforme una lista en conjunto con el PS.

Con los partidos redistribuidos en listas nuevas, se suman el total de votos de cada una de ellas. Con aquello, ya tenemos el listado de listas electorales, cada una con un porcentaje de votos. Con aquello, se simula la elección computacionalmente, usando los votos a favor de cada lista en conjunto con las reglas electorales que correspondan (en este caso el sistema dHondt en conjunto con el número de escaños a distribuir por cada distrito).

Con los totales de votos por cada lista, simplemente se reparten los escaños de forma proporcional. Pero como sabemos que todos los sistemas electorales distorsionan la traducción de votos a escaños, hay que determinar una cifra correctora. Para esto simplemente se observa el patrón histórico. En el caso chileno (y en otras democtacias que utilizan sistemas electorales similares), hay una tendencia a favorecer a las dos primeras listas, y castigar a la tercera. A su vez, este orden parece estar mediado por el porcentaje de votos de cada lista. En esa línea, se determina ciertos rangos de votación para generar "bonos" y "castigos". Por ejemplo, listas que obtienen el primer lugar con más de 40% de la votación son premiados con 6% más de escaños de lo que le correspondería estrictamente. Aquí están los parámetros:


### ![ep](/images/pc.png){:height="4%" width="4%"} Los pasos

En el caso de una micro simulación, con un sistema de partidos relativamente estable, el objetivo es proyectar el número de escaños para cada lista (coalición o partido) en cada distrito usando datos de elecciones anteriores. En esencia, se parte de la unidad electoral más pequeña y se trabaja hacia el total nacional. Estos son los pasos:

1. Notar inscripción de partidos (a nivel de distrito);
2. Suponer que ciertos partidos van a formar ciertas listas (a nivel de distrito);
3. Sumar total de votos por cada lista, reasignando votos a listas (a nivel de distrito);
4. Simular la elección con nuevo total de votos usando criterios específicos de sistema electoral (a nivel de distrito);
5. Corregir considerando fenómenos locales, como independientes o listas locales (a nivel de distrito);
6. Sumar total de escaños por distrito por lista (a nivel nacional).


### ![ep](/images/pc.png){:height="4%" width="4%"} Sx2 (macro simulaciones)

En el caso de una macro simulación, con un sistema de partidos fluctuante, el objetivo es proyectar el número de escaños para cada lista (coalición o partido) a nivel nacional usando datos de elecciones anteriores y calibrando por la entrada de nuevas fuerzas. En esencia, se comienza del total nacional más probable y se corrigen las cifras de acuerdo a distribuciones probables. Estos son los pasos:

1. Notar inscripción de partidos (a nivel nacional);
2. Suponer que ciertos partidos van a formar ciertas coaliciones (a nivel nacional);
3. Sumar total de votos por cada lista (a nivel nacional);
4. Redistribuir votos condierando entrada de nuevos partidos (a nivel nacional);
5. Observar resultados de elecciones anteriores para generar rango de votación para listas existentes y estimar rango de votación para listas nuevas (a nivel nacional);
6. Simular la elección suponiendo que hay estricta proporcionalidad: % de votos = % de escaños (a nivel nacional);
7. Determinar una cifra correctora en base a tamaño de lista (rango de votación);
8. Recalcular porcentaje de votos por lista considerando la cifra correctora (a nivel nacional);
9. Recalcular número de escaños suponiendo que hay estricta proporcionalidad (a nivel nacional).



### ![ep](/images/pc.png){:height="4%" width="4%"} Detalles técnicos

Como nota final, ambos métodos (**Sx1** y **Sx2**) son experimentales. Son solo una aproximación "informada", y por ende inevitablemente conllevan error. Para ver un *sketch* conceptual, pincha [aquí](https://tresquintos.cl/posts/2020/03/caveat/).

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
