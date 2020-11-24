---
layout: single
title: "Simulaciones"
permalink: /sx/
author_profile: true
---

En esta página podrás conocer los métodos que se utilizan para realizar simulaciones electorales. Primero, presenta una descripción general. Luego, describe la base de una simulación. Finalmente, usa la elección de convencionales constituyentes de 2021 para dar un ejemplo de una simulación compleja.


### ![ep](/images/pc.png){:height="4%" width="4%"} ¿Qué son las Sx?

Las simulaciones (**Sx**) son métodos para realizar proyecciones electorales en elecciones para las cuales se distribuye más de un escaño por distrito (e.g., concejales, diputados o senadores). Normalmente, estas simulaciones usan información de elecciones anteriores, a nivel de comuna/distrito/región, para proyectar resultados en una elección futura.

A modo de ejemplo, si estuvieramos en 1996 y nos pidieran proyectar la elección de diputados de 1997, sería relativamente sencillo usar los datos de 1993 para hacerlo (con alta exactitud), pues entre ambas elecciones no hubo grandes cambios a nivel de listas electorales, ni tampoco hubo mayores cambio a nivel cultural o social.

Ahora, supongamos que estamos en 2020 y nos pidieran proyectar la elección de constituyentes de 2021. Aquí, el escenario es diferente. No solo porque el sistema partidos es distinto al de la elección anterior (2017), sino también porque las listas electorales mutaron significativamente--además de otras cosas a nivel más general.

En el segundo ejemplo, entonces, queda claro que difícilmente se podrían proyectar escaños para partidos que no existían en la elección anterior, usando el método utilizado en el primer ejemplo. Por ende, hay que extender el número de supuestos para representar el nuevo contexto.

Esto ilustra que no siempre basta una aproximación parsimoniosa. No basta *enchufar* los resultados de una elección anterior a las listas de la elección que viene. Por supuesto, se pueden usar los datos de 2017 para proyectar la elección de 2021, pero ¿sería metodológicamente suficiente? Probablemente no.

En lo que sigue proponemos un método en que sacrificamos inferencias generales simples y aumentamos la cantidad de supuestos complejos, para sostener lo que nosotros pensamos es una aproximación argumentativa más consistente con la historia política contextual.


### ![ep](/images/pc.png){:height="4%" width="4%"} La base de una simulación

Para explicar cómo funciona la base de una simulación, usemos el segundo caso mencionado arriba. Ese ejemplo supone usar los resultados de la elección de diputados de 2017 como base para simular la elección de convencionales constituyentes de 2021. En este caso, basta determinar (1) el nombre de los partidos que compitieron en 2017, (2) si van a competir otra vez, y (3) si van a competir en la misma lista o se van a cambiar de lista.

Con los partidos redistribuidos en las listas nuevas, se suma el total de votos para cada una de ellas y se simula la elección computacionalmente usando los votos a favor de cada lista en conjunto con las reglas electorales que correspondan a la elección en particular (en este caso, considerando el sistema D'Hondt y la magnitud de distrito). Luego, basta sumar los escaños para cada lista en cada distrito y *voilà*!


### ![ep](/images/pc.png){:height="4%" width="4%"} La simulación de **Tresquintos** para Convencionales 2021

Ahora bien, como se sugirió más arriba, traspasar los resultados de 2017 a las listas de 2021 sería probablemente insuficiente. En este caso en particular porque han pasado una serie de eventos entre ambas elecciones que simplemente rendirían el ejercicio fútil. Por aquello, agregamos una serie de factores intermedios para complejizar la simulación y hacerla metodológicamente más consistente con el nuevo contexto. Esta es la lista de pasos que seguimos:


1. Consideramos los partidos existentes en 2017 y los nuevos de 2021;
2. Construimos listas nuevas considerando información actualizada;
3. Distribuimos el porcentaje de votos de 2017;
4. Determinamos el traspaso de votos por partidos que salen/entran/permanecen y redistribuimos el porcentaje de votos por partido;
5. Determinamos el traspaso de votos por diputados titulares que se cambian y redistribuimos el porcentaje de votos por partido;
6. Determinamos el impacto de independientes y redistribuimos el porcentaje de votos por lista;
7. Determinamos el impacto de la crisis social y redistribuimos el porcentaje de votos por lista;
8. Determinamos el efecto específico de cada distrito y redistribuimos el porcentaje de votos por lista;
9. Estimamos el número de escaños por lista;
10. Asignamos un margen de error por lista.


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
