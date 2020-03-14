---
layout: single
title: "Simulaciones"
permalink: /simulaciones/
author_profile: true
---

En esta página podrás conocer el método que se utiliza para realizar simulaciones legislativas. Primero, describe los dos métodos más utilizados para proyectar escaños. Luego, detalla con ejemplos cada uno de los dos métodos. Finalmente, sugiere algunos enclaces que se pueden seguir para encontrar información más detallada sobre los métodos presentados aquí.


### Qué son las Sx?

Las simulaciones (Sx) son métodos para realizar proyecciones electorales para elecciónes en cuales se distribuyen más de un escaño (como en elecciones de concejales, diputados o senadores). La selección del método especifico depende, escencialmente, en el contexto de la elección. Considerando que hay los escenarios políticos pueden varían significativamente de una elección a otra, hay dos alternativas:

1. Simulaciones micro (Sx1): Estas simulaciones buscan usar información de elecciones anteriores, a nivel de comuna/distrito/circunscripción para proyectar resultados considerando nuevos partidos y coaliciones. Este tipo de simulación normalmente se escoge cuando hay continuidad en el sistema político.

2. Simulaciones macro (Sx2): Estas simulaciones buscan usar información de elecciones anteriores, a nivel de sistema para proyectar resultados considerando nuevos partidos y coaliciones. Este tipo de simulación normalmente se escoge cuando hay una disrrupción en el sistema político.

A modo de ejemplo, si estuvieramos en 1996 y nos pidieran proyctar la elección de diputados de 1997, sería relativamente usar los datos de 1993 para hacerlo, pues entre ambas elecciones no hubo grandes cambios en los partidos o en las coaliciones. Tampoco habría elecciones presidenciales concurrentes en 1997 para esperar algun efecto inesperado. En este escenario, escogería Sx1.

Ahora supongamos que nos piden proyectar la elección de constituyentes de 2020. Las cosas han cambiado bastante. No solo porque el sistema electoral es distinto al de 1997, sino también porque las coaliciones han mutado significativamente. Este último punto es extremadamente relevante. Dificilmente se pueden proyectar escaños para partidos que no existían en la elección anterior. En este escenario, escogería Sx2.

Antes de pasar a los detalles, la lección de lo anterior es que no bastan solo los datos. Por supuesto que se puede usar Sx1 para proyectar la elección de 2020, pero ¿sería metodológicamente correcto? No creo. Por eso, a veces es mejor tomar un *approach* más general y con mayor margen de error y minimizar la cantidad de supuestos que sostienen los argumentos.


### Sx1

En el caso de una simulación micro, con un sistema de partidos relativamente estable, el objetivo es proyectar el número de escaños para cada lista (coalición o partido) en cada distrito usando datos de elecciones anteriroes. Estos son los pasos que siguen:

1. Notar inscripción de partidos (a nivel de distrito);
2. Suponer que ciertos partidos van a formar ciertas listas (a nivel de distrito);
3. Sumar total de votos por cada coalición, reasignando votos a listas (a nivel de distrito);
4. Simular la elección con nuevo total de votos usando criterios específicos de sistema electoral (a nivel de distrito);
5. Corregir considerando fenómenos locales, como independientes o listas locales (a nivel de distrito);
6. Sumar total de escaños por distrito por lista (a nivel nacional).


### Sx2

1. Notar inscripción de partidos (a nivel nacional);
2. Suponer que ciertos partidos van a formar ciertas coaliciones (a nivel nacional);
3. Sumar total de votos por cada coalición (a nivel nacional);
4. Redistribuir condierando entrada de nuevos partidos (a nivel nacional);
5. Observar resultados de elecciones anteriores para generar rango de votación para listas existentes y estimar rango de votación para listas nuevos (a nivel nacional);
6. Simular la elección suponiendo que hay estricta proporcionalidad: % de votos = % de escaños (a nivel nacional);
7. Determinar una cifra correctora en base a tamaño de lista (rango de votación);
8. Recalcular porcentaje de votos por coalición considerando la cifra correctora (a nivel nacional);
9. Recalcular número de escaños suponiendo que hay estricta proporcionalidad (a nivel nacional);


### Detalles técnicos

Para ver los detalles técnicos del TSM, pincha [aquí](https://www.researchgate.net/publication/339442677_A_two-stage_model_to_forecast_elections_in_new_democracies). Para ver un ejemplo de la aplicación para el caso chileno en 2013, pincha [aquí](https://www.researchgate.net/publication/339677130_Electoral_forecasting_and_public_opinion_tracking_in_Latin_America_An_application_to_Chile). Para ver un ejemplo de su aplicación para el caso italiano en tres elecciones (2008, 2013 y 2017), pincha [aquí](https://www.researchgate.net/publication/336312679_Forecasting_elections_in_Italy).
