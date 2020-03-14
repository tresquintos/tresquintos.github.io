---
layout: single
title: "Simulaciones"
permalink: /simulaciones/
author_profile: true
---

En esta página podrás conocer los métodos que se utilizan para realizar simulaciones en elecciones donde se reparte más de un escaño por unidad electoral (distrito). Primero, presenta una descripción general. Luego, describe los dos métodos más utilizados. Luego, usa la elección de constituyentes de 2020 para dar un ejemplo del uso del segundo de los dos métodos.


### ¿Qué son las Sx?

Las simulaciones (Sx) son métodos para realizar proyecciones electorales para elecciones en las cuales se distribuye más de un escaño por distrito (e.g., concejales, diputados o senadores). La selección del método depende, escencialmente, del contexto de la elección. Considerando que los escenarios políticos pueden varían significativamente de una elección a otra, hay dos alternativas:

1. Micro simulaciones (Sx1): Estas simulaciones usan información de elecciones anteriores, a nivel de comuna/distrito/circunscripción, para proyectar resultados considerando la nueva conformación de listas. Este tipo de simulación normalmente se escoge cuando hay continuidad en el sistema de partidos.

2. Macro simulaciones (Sx2): Estas simulaciones usan información de elecciones anteriores, a nivel de sistema, para proyectar resultados considerando la nueva conformación de listas. Este tipo de simulación normalmente se utiliza cuando hay una disrrupción importante al sistema de partidos.

A modo de ejemplo, si estuvieramos en 1996 y nos pidieran proyectar la elección de diputados de 1997, sería relativamente simple usar los datos de 1993 para hacerlo, pues entre ambas elecciones no hubo grandes cambios a nivel de lista electoral. Considerando que en 1997 tampoco habría elecciones presidenciales concurrentes, sería recomendable usar Sx1.

Ahora supongamos que nos pidieran proyectar la elección de constituyentes de 2020. Aquí, el escenario es diferente. No solo porque el sistema electoral es distinto al de 1997, sino también porque las coaliciones han mutado significativamente. Dado que difícilmente se podría proyectar escaños para partidos que no existían en la elección anterior, sería recomendable usar Sx2.

Lo anterior ilustra que no basta la riqueza de información. Por supuesto que se puede usar Sx1 para proyectar la elección de 2020, pero ¿sería metodológicamente correcto? No creo. Por eso, a veces es mejor tomar una aproximación general con mayor margen de error que minimiza la cantidad de supuestos que sostienen los argumentos que una aproximación meticulosa que miniza el margen de error pero aumenta la cantidad de supuestos que sostienen los argumentos.


### Sx1 (micro simulaciones)

En el caso de una micro simulación, con un sistema de partidos relativamente estable, el objetivo es proyectar el número de escaños para cada lista (coalición o partido) en cada distrito usando datos de elecciones anteriores. En esencia, se parte de la unidad electoral más pequeña y se trabaja hacia el total nacional. Estos son los pasos:

1. Notar inscripción de partidos (a nivel de distrito);
2. Suponer que ciertos partidos van a formar ciertas listas (a nivel de distrito);
3. Sumar total de votos por cada lista, reasignando votos a listas (a nivel de distrito);
4. Simular la elección con nuevo total de votos usando criterios específicos de sistema electoral (a nivel de distrito);
5. Corregir considerando fenómenos locales, como independientes o listas locales (a nivel de distrito);
6. Sumar total de escaños por distrito por lista (a nivel nacional).


### Sx2 (macro simulaciones)

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


### Un ejemplo

Dado que Sx1 es la forma más tradicional de realizar simulaciones electorales, es más útil explicar los detalles del método menos frecuente. Para explicar cómo funciona Sx2, usemos la elección de constituyentes de 2020 como ejemplo. En este caso, la idea es primero suponer que ciertos partidos van a formar ciertas listas. Esto se puede hacer simplemente considerando el comportamiento anterior de los partidos y su aproximación ideológica. Por ejemplo, no sería sorpresa que la DC forme una coalición con Ciudadanos, dado que ambos se ubican en el centro. En cualquier caso, las listas se pueden ir corrigiendo a medida que pasa el tiempo. (Una vez que se inscriban las listas, se proyectan los resultados en una simulación definitiva).

Con todas las listas identificadas, se suman los votos para cada una de ellas a nivel nacional. Para las listas existentes se estima una votación en base a su rendimiento anterior, corrigiendo por caídas o alazas en su aprobación. Una lista que obtuvo 40% en la elección anterior pero ha tenido mal rendimiento (caída en popularidad) en el último tiempo es castigada proprocionalmente. Para las listas nuevas, se redistribuye la diferencia. Por ejemplo, el Partido Humanista (PH) normalmente obtiene en torno al 5% de los votos. Ese 5% en 2017 contribuyó a la lista del Frente Amplio (FA). Pero dado que el PH se salió del FA en 2019, ese porcentaje se redistribuye a la nueva lista del PH. En ese caso, puede ser a una lista propia del PH o una lista con otros partidos.

Con los totales de votos por cada lista, simplemente se reparten los escaños de forma proporcional. Pero como sabemos que todos los sistemas electorales distorsionan la traducción de votos a escaños, hay que determinar una cifra correctora. Para esto simplemente se observa el patrón histórico. En el caso chileno (y en otras democtacias que utilizan sistemas electorales similares), hay una tendencia a favorecer a las dos primeras listas, y castigar a la tercera. A su vez, este orden parece estar mediado por el porcentaje de votos de cada lista. En esa línea, se determina ciertos rangos de votación para generar "bonos" y "castigos". Por ejemplo, listas que obtienen el primer lugar con más de 40% de la votación son premiados con 6% más de escaños de lo que le correspondería estrictamente. Aquí están los parámetros:


```html
40% > 31%	= +6
30% > 21%	= +3
20% > 11%	= -4
10% > 05%	= -2
04% > 00%	= 00
```

> 40% > 31%	= +6
> 30% > 21%	= +3
> 20% > 11%	= -4
> 10% > 05%	= -2
> 04% > 00%	= 00

Finalmente, se usa la cifra correctora para "corregir" la repartición proporcional del sexto paso. Con eso, tenemos cada una de las listas con un total de votos a nivel nacional. Luego, sencillamente se presume una repartición proporcional. (Esto solo es posible porque se realizó la corrección anterior. De lo contrario sería un error). Finalmente, se corrige la cantidad de escaños en los casos en que falta o sobra un escaño considerando los decimales. Se asignan o se quitan escaños a las listas que obtiene los decimales más altos (o bajos) en la tabla comparativa. En un esfuerzo por comprobar la robustez del método, se aplicó a elecciones anteriores. Naturalmente funciona bien en elecciones estables, como la de 1997, pero también produjo resultados dentro de los rangos esperados para elecciones menos estables, como la de 2017.

Como nota final, ambos métodos (Sx1 y Sx2) son experimentales. Son solo una aproximación "informada", y por ende inevitablemente conllevan error.
