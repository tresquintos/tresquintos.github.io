---
layout: single
title: "TSM"
permalink: /tsm/
author_profile: true
---

En esta página podrás conocer el método que se utiliza para realizar pronósticos electorales. Primero, describe el modelo, y sus dos etapas sequenciales. Luego, da un ejemplo a partir de una carrera con dos candidatos. Finalmente, sugiere algunos enclaces que se pueden seguir para encontrar información más detallada sobre el modelo.

### Qué es el TSM?

El **TSM** (Two-Stage Model) es un método para realizar pronósticos electorales usando datos de encuestas que buscan estimar preferencias para cada uno de los candidatos (o opciones, en caso de un plebiscito) que están en carrera. Tal como su nombre lo indica, el proceso diferencia entre dos fases: una fase de *input* y una fase de *output*. En la primera de las dos fases:

1. Se determina las encuestas que se pueden agregar a la base de datos;
2. Se eliminan [preferencias inválidas](https://en.wikipedia.org/wiki/Spoilt_vote) (e.g., no sabe, no responde);
3. Se pondera cada encuesta en base a su puntaje en el ranking de encuestas;
4. Se pondera cada encuesta en base a su [margen de error](https://en.wikipedia.org/wiki/Margin_of_error) estimado;
5. Se pondera cada encuesta en base a su distancia del día de la elección usando una función de [media-vida](https://en.wikipedia.org/wiki/Half-life).

En la segunda de las dos fases, se toman los datos calibrados, y:

6. Se estima la probabilidad de cada pronóstico usando un proceso de [inferencia Bayesiana](https://en.wikipedia.org/wiki/Bayesian_inference);
7. Se simula el resultado de la elección **50,000** veces por medio de una [Cadena de Markov](https://en.wikipedia.org/wiki/Markov_chain) [Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method) ([MCMC](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo));
8. Se repiten los pasos anteriores (6-7) sequencialmente para generar la línea de tiempo.

Lo anterior resulta en un pronóstico para la elección "si fuera hoy". Pero no produce un margen de error asociado. Para computar ese margen de error, hay al menos dos alternativas. La primera es usar los parámetros generados por el MCMC (i.e., el [interválo de credibilidad](https://en.wikipedia.org/wiki/Credible_interval)). La segunda alternativa es construirlos a partir de una extensión de los argumentos que sostiene el MCMC.

En este caso, se opta por la segunda alternativa. Es decir, se extrae el resultado de las cadenas, y se computa una [curva Gaussiana](https://en.wikipedia.org/wiki/Normal_distribution). Esa curva constituye la [distribución de probabilidades](https://en.wikipedia.org/wiki/Probability_density_function) o [densidad de probabilidades](https://en.wikipedia.org/wiki/Kernel_density_estimation). De esa curva se cálcula el área dentro de la cual caen 80% de las simulaciones (ver [z-score](https://www.pindling.org/Math/Learning/Statistics/z_scores_table.htm)). Finalmente, se identifican los puntos más extremos y se asignan como los límites en el rango de resultados probables.

### Un ejemplo

Lo anterior solo es posible cuando hay al menos 2 encuestas. A modo de ejemplo, supongamos que hay 2 encuestas que buscan pronosticar el resultado de una elección con dos candidatos (alternativas). Supongamos también que en una de esas dos encuestas se reporta que el candidato **A** obtiene 40% de las preferencias y el candidato **B** obtiene 35% de las preferencias. Esto significa que hay un total de 75% de preferencias validas.

Dado que esto no es un escenario viable, se opta por considerar solo las preferencias que son validas. Para hacer aquello, simplemente se "infla" el porcentaje de votos a 100%. Es decir, el candidato **A** automáticamente pasa a tener 53% y el candidato **B** automáticamente pasa a tener 47%. Si bien esta operación se basa en un "supuesto", es probablemente el mejor supuesto posible.

Una vez que ambas encuestas se "recalibran", se pueden ponderar los datos en base a los tres criterios mencionados arriba (pasos 3-5). En otras palabras, se pone más confianza en una encuesta que en promedio obtiene un puntaje más alto después de considerar su nivel de precisión en elecciones anteriores (su ranking), su margen de error (número de encuestados), y su antiguedad (distancia temporal).

Luego, se estima la probabilidad de que el pronóstico que propone la segunda encuesta sea "verdadera" en base al pronóstico que propone la primera encuesta. Esto resulta en un pronóstico final para cada candidato en carrera para la fecha en que se registró la segunda (o la más reciente) de las encuestas. Ese es el pronóstico "si la elección fuera hoy".

Para construir la serie de tiempo, supongamos ahora que tenemos diez encuestas. La idea es tratar de reemplazar cada uno de los puntos en que se hizo una encuesta por un pronóstico "si la elección fuera hoy". Para hacer eso, sencillamanete se repite el proceso completo, sequencialmente. Primero para las dos primeras encuestas, luego para las tres primeras, luego para las cuatro primeras. Y así sucesivamente hasta llegar a la décima.


### Detalles técnicos

Como nota final, el TSM es experimental. Es solo una aproximación "informada", y por ende inevitablemente conlleva error. Para ver un *sketch* conceptual, pincha [aquí](https://tresquintos.cl/posts/2020/03/caveat/). Para ver los detalles técnicos del **TSM**, pincha [aquí](https://www.researchgate.net/publication/339442677_A_two-stage_model_to_forecast_elections_in_new_democracies). Para ver un ejemplo de la aplicación para el caso chileno en 2013, pincha [aquí](https://www.researchgate.net/publication/339677130_Electoral_forecasting_and_public_opinion_tracking_in_Latin_America_An_application_to_Chile). Para ver un ejemplo de su aplicación para el caso italiano en tres elecciones (2008, 2013 y 2017), pincha [aquí](https://www.researchgate.net/publication/336312679_Forecasting_elections_in_Italy).

<style>
.aligncenter {
    text-align: center;
}
</style>
<p class="aligncenter">
    <img src="/images/nes.png" width="30" height="30" alt="konami" />
</p>
<script src="/js/topsecret.js"></script>

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
