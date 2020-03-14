---
layout: single
title: "Simulaciones"
permalink: /simulaciones/
author_profile: true
---

En esta página podrás conocer el método que se utiliza para realizar simulaciones legislativas. Primero, describe los dos métodos más utilizados. Luego, da un ejemplo a partir de una carrera con dos candidatos. Finalmente, sugiere algunos enclaces que se pueden seguir para encontrar información más detallada sobre los métodos presentados aquí.


### Qué son las Sx?

Las simulaciones (Sx) son métodos para realizar proyecciones electorales para elecciónes en cuales se distribuyen más de un escaño (como en elecciones de concejales, diputados o senadores). La selección del método especifico depende, escencialmente, en el contexto de la elección. Considerando que hay los escenarios políticos pueden varían significativamente de una elección a otra, hay dos alternativas:

1. Simulaciones micro (Sx1): Estas simulaciones buscan usar información de elecciones anteriores, a nivel de comuna/distrito/circunscripción para proyectar resultados considerando nuevos partidos y coaliciones. Este tipo de simulación normalmente se escoge cuando hay continuidad en el sistema político.

2. Simulaciones macro (Sx2): Estas simulaciones buscan usar información de elecciones anteriores, a nivel de sistema para proyectar resultados considerando nuevos partidos y coaliciones. Este tipo de simulación normalmente se escoge cuando hay una disrrupción en el sistema político.

A modo de ejemplo, si estuvieramos en 1996 y nos pidieran proyctar la elección de diputados de 1997, sería relativamente usar los datos de 1993 para hacerlo, pues entre ambas elecciones no hubo grandes cambios en los partidos o en las coaliciones. Tampoco habría elecciones presidenciales concurrentes en 1997 para esperar algun efecto inesperado. En este escenario, escogería Sx1.

Ahora supongamos que nos piden proyectar la elección de constituyentes de 2020. Las cosas han cambiado bastante. No solo porque el sistema electoral es distinto al de 1997, sino también porque las coaliciones han mutado significativamente. Este último punto es extremadamente relevante. No se pueden proyectar escaños para partidos en 2020 si no existían en 2017. En este escenario, escogería Sx2.

Antes de pasar a los detalles, la lección de lo anterior es que no bastan solo los datos. Por supuesto que se puede usar Sx1 para proyectar la elección de 2020, pero ¿sería metodológicamente correcto? No creo. Por eso, a veces es mejor tomar un *approach* más general y con mayor margen de error y minimizar la cantidad de supuestos que sostienen el argumento.


### Sx1

Lo anterior solo es posible cuando hay al menos 2 encuestas. A modo de ejemplo, supongamos que hay 2 encuestas que buscan pronosticar el resultado de una elección con dos candidatos (alternativas). Supongamos también que en una de esas dos encuestas se reporta que el candidato **A** obtiene 40% de las preferencias y el candidato **B** obtiene 35% de las preferencias. Esto significa que hay un total de 75% de preferencias validas.

Dado que esto no es un escenario viable, se opta por considerar solo las preferencias que son validas. Para hacer aquello, simplemente se "infla" el porcentaje de votos a 100%. Es decir, el candidato **A** automáticamente pasa a tener 53% y el candidato **B** automáticamente pasa a tener 47%. Si bien esta operación se basa en un "supuesto", es probablemente el mejor supuesto posible.

Una vez que ambas encuestas se "recalibran", se pueden ponderar los datos en base a los tres criterios mencionados arriba (pasos 3-5). En otras palabras, se pone más confianza en una encuesta que en promedio obtiene un puntaje más alto después de considerar su nivel de precisión en elecciones anteriores (su ranking), su margen de error (número de encuestados), y su antiguedad (distancia temporal).

Luego, se estima la probabilidad de que el pronóstico que propone la segunda encuesta sea "verdadera" en base al pronóstico que propone la primera encuesta. Esto resulta en un pronóstico final para cada candidato en carrera para la fecha en que se registró la segunda (o la más reciente) de las encuestas. Ese es el pronóstico "si la elección fuera hoy".

Para construir la serie de tiempo, supongamos ahora que tenemos diez encuestas. La idea es tratar de reemplazar cada uno de los puntos en que se hizo una encuesta por un pronóstico "si la elección fuera hoy". Para hacer eso, sencillamanete se repite el proceso completo, sequencialmente. Primero para las dos primeras encuestas, luego para las tres primeras, luego para las cuatro primeras. Y así sucesivamente hasta llegar a la décima.


### Detalles técnicos

Para ver los detalles técnicos del TSM, pincha [aquí](https://www.researchgate.net/publication/339442677_A_two-stage_model_to_forecast_elections_in_new_democracies). Para ver un ejemplo de la aplicación para el caso chileno en 2013, pincha [aquí](https://www.researchgate.net/publication/339677130_Electoral_forecasting_and_public_opinion_tracking_in_Latin_America_An_application_to_Chile). Para ver un ejemplo de su aplicación para el caso italiano en tres elecciones (2008, 2013 y 2017), pincha [aquí](https://www.researchgate.net/publication/336312679_Forecasting_elections_in_Italy).
