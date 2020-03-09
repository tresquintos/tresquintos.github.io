---
layout: archive
title: "TSM"
permalink: /tsm/
author_profile: true
---

## Qué es el TSM?

El TSM (Two-Stage Model) es un método para realizar pronósticos electorales usando datos de encuestas que buscan estimar preferencias para cada uno de los candidatos (o opciones, en caso de un plebiscito) que están en carrera. Tal como su nombre lo indica, el proceso diferencia entre dos fases: una fase de *input* y una fase de *output*. En la primera de las dos fases:

1. Se determina las encuestas que se pueden agregar a la base de datos,
2. Se elimina los votos que no son válidos (e.g., no sabe, no responde),
3. Se pondera cada encuesta en base a su ranking de encuestas,
4. Se pondera cada encuesta en base a su margen de error estimado,
5. Se pondera cada encuesta en base a su distancia del día de la elección.

En la segunda de las dos fases, se toman los datos calibrados, y:

6. Se estima la probabilidad de cada pronóstico usando inferencia Bayesiana,
7. Se simula el resultado de la elección __50,000__ veces por medio de cadenas de Monte Carlo,
8. Se repite el proceso sequencialmente para observar la linea de tiempo.


## Un ejemplo

Lo anterior solo es posible cuando hay al menos dos encuestas. A modo de ejemplo, supongamos que hay dos encuestas que buscan pronosticar el resultado de una carrera con dos candidatos (opciones). Supongamos también que en una de esas dos encuestas se reporta que el candidato **A** obtiene 40% de las preferencias y el candidato **B** obtiene 35% de las preferencias. Esto significa que hay un total de 75% de preferencias validas.

Dado que esto no es un escenario viable, se escoge por eliminar las preferencias que no son validas. Para hacer aquello, simplemente se "infla" el pocentaje de votos a 100%. Es decir, el candidato **A** automáticamente pasa a tener 53% y el candidato **B** automáticamente pasa a tener 47%. Si bien esta operación es un "supuesto", es probablemente la mejor forma de diferenciar entre el ruido y la señal.

Una vez que ambas encuestas se recalibran, se pueden ponderar los datos en base a los tres criterios mencionados arriba (pasos 3-5). En otras palabras, se pone más confianza en una encuesta que en promedio obtiene un puntaje más alto después de considerar su rendimiento (nivel de precisión) en elecciones anteriores, su número de entrevistados (n), y su antiguedad (número de días).

De lo anterior, emerge una nueva base con pronósticos para cada uno de los candidatos. En la segunda fase, se estima la probabilidad de que el pronóstico que propone la segunda encuesta sea "verdadera" en base al pronóstico que propone la primera encuesta. Esto resulta en un pronóstico final para cada candidato en carrera para la fecha en que se registró la segunda (o la más reciente) de las encuestas. Ese es el pronóstico "si la elección fuera hoy".

Para construir la serie de tiempo, supongamos ahora que tenemos diez encuestas. La idea es tratar de reemplazar cada uno de los puntos en que se hizo una encuesta por un pronóstico "si la elección fuera hoy". Para hacer eso, sencillamanete se repite el proceso completo, sequencialmente. Primero para las dos primeras encuestas, luego para las tres priemra encuestas, luego para las cuatro primeras encuestas. Así sucesivamente hasta llegar a la décima.


## Detalles técnicos

Para ver los detalles técnicos del TSM, pincha [aquí](https://www.researchgate.net/publication/339442677_A_two-stage_model_to_forecast_elections_in_new_democracies). Para ver un ejemplo de la aplicación para el caso chileno en 2013, pincha [aquí](https://www.researchgate.net/publication/339677130_Electoral_forecasting_and_public_opinion_tracking_in_Latin_America_An_application_to_Chile). Para ver un ejemplo de su aplicación en el caso italiano de 2008, 2013 y 2017, pincha [aquí](https://www.researchgate.net/publication/336312679_Forecasting_elections_in_Italy).
