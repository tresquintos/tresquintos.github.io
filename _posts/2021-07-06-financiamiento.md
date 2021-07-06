---
title: "La plata no asegura una victoria pero te ayuda bastante"
date: 2021-07-05
permalink: /posts/2021/07/financiamiento/
comments: true
tags:
  - Métodos
  - Financiamiento Electoral
  - Convención Constitucional
---


Largamente se ha debatido la real incidencia que tiene la plata en la política. Para la mayoría es intuitivo pensar que quienes tienen más recursos tienen más oportunidades de incidir en el proceso político. En particular, quienes tienen más recursos para hacer campañas tienen más posibilidades de ser elegidos.

La reciente elección de constituyentes es una oportunidad perfecta para testear esta hipótesis.  Dado que el sistema de aportes y financiamiento electoral se utilizó de forma online por primera vez, se emparejó la cancha para que todos los candidatos tuvieran la misma oportunidad de recibir financiamiento. 

**Entonces, ¿es verdad que mayor financiamiento electoral conlleva a una mejor votación?**

*Por: [Sofía Contreras](https://twitter.com/SofiaContrerasU) , [Pablo Toro](https://twitter.com/pablotoro_) y [Kenneth Bunker](https://twitter.com/kennethbunker)*

Si bien hay evidencia de que lo anterior es verdad (ver [aquí](https://www.servel.cl/ingresos-y-gastos-de-candidatos/)), el cambio en la forma de realizar aportes electorales, así como las características particulares de la elección de constituyentes (pandemia, escaños reservados, paridad, listas de independientes) pueden haber tenido un efecto en la importancia del financiamiento en la obtención de votos y la probabilidad de ser elegido. 

Por ejemplo, como muestra la siguiente Tabla, René Cortázar (Lista del Apruebo) fue el candidato con mayor financiamiento de la elección (con $184.782.467), pero no resultó elegido. En la vereda contraria, tres candidatos no obtuvieron ningún solo peso financiamiento electoral, sin embargo resultaron elegidos.


![tabla](https://user-images.githubusercontent.com/85262128/124525489-7bcd0500-ddcd-11eb-860b-06a46ad47b50.png)


Pero lo anterior puede ser meramente anecdótico. Por eso, para responder la pregunta, recopilamos información sobre el financiamiento electoral de los 1,278 candidatos que compitieron por uno de los 138 cupos a la Convención. También recopilamos el número y el porcentaje de votos que cada obtuvieron en la elección.

La primera pregunta es si mayor financiamiento electoral conlleva a una mayor votación. Para contestar eso debemos hacernos cargo de los distintos límites de financiamiento electoral, y número de votantes por distrito. Por eso, operacionalizamos financiamiento como el porcentaje de pesos recolectados del tope legal. Así mismo, usamos el porcentaje de votos (y no número).

La figura de abajo muestra un gráfico de dispersión con ambas variables. La línea roja representa una [regresión lineal](https://es.wikipedia.org/wiki/Regresi%C3%B3n_lineal) que, con [errores estándar robustos](https://es.wikipedia.org/wiki/Regresi%C3%B3n_robusta), es positiva y significativa. Es decir, mientras más recursos juntan los candidatos, más alta tiende a ser su votación. Por cada 10% de financiamiento adicional de un candidato (respecto al tope), su votación aumenta en promedio 1.3%.


![figura 1](https://user-images.githubusercontent.com/85262128/124525884-e7fc3880-ddce-11eb-8317-8a6c550cd71f.png)


Ahora, dado que por las particularidades del sistema electoral, más votos no siempre significa más probabilidad de ganar, pasamos a examinar una segunda pregunta, la cuál si la probabilidad de ganar aumenta dependiendo del financiamiento total. Aquí, usamos la misma variable independiente (financiamiento electoral) pero además observamos si el candidato ganó o no.

Luego de una [regresión logística](https://es.wikipedia.org/wiki/Regresi%C3%B3n_log%C3%ADstica), con [*odds ratio*](https://es.wikipedia.org/wiki/Raz%C3%B3n_de_momios), vemos que no solo es una relación positiva (más financiamiento conlleva a más probabilidades de ganar), sino que además vemos la forma de la curva (usando los valores predichos). La línea roja vertical marca el punto en que la probabilidad de ganar supera el 50% (alrededor del 32% de los votos).


![figura 2](https://user-images.githubusercontent.com/85262128/124526065-90aa9800-ddcf-11eb-9119-69333ba30f44.png)


De lo anterior concluimos dos cosas. Primero, que la relación entre financiamiento de campañas y resultados electorales observada en la elección de diputados de 2017 se mantiene. Al igual que esa vez, en la elección de constituyentes de 2021, más financiamiento también conlleva a un mayor porcentaje de votos, así como también a una mayor probabilidad de ganar. 

Segundo, concluimos que siempre hay excepciones a la regla ([*outliers*](https://es.wikipedia.org/wiki/Valor_at%C3%ADpico)). De hecho, la [regresión lineal](https://es.wikipedia.org/wiki/Regresi%C3%B3n_lineal) (simple y minimalista, en su espíritu exploratorio) muestra que el financiamiento sólo explica alrededor  de un 15% de la varianza en los resultados electorales. Aunque Cortázar hubiese juntado 100% de financiamiento, probablemente estaba condenado a perder desde antes. 

Finalmente, cabe recordar que este trabajo es solo exploratorio. Recomendamos a quienes están interesados en seguir investigando la relación entre plata y elecciones a complejizar los modelos con otras variables. También sería interesante comparar la magnitud de la relación entre tipo de elecciones; por ejemplo entre constituyentes y diputados. 


### ![ep](/images/pc.png){:height="4%" width="4%"} Uso avanzado

Si quieres replicar estos gráficos, descarga las bases en formato CSV [**aquí**](). Si usas **R** o **Stata** puedes importar el archivo directo con la dirección del enlace).


<style>
.aligncenter {
    text-align: center;
}
</style>
<p class="aligncenter">
    <img src="/images/nes.png" width="30" height="30" alt="konami" />
</p>
<script src="/js/topsecret.js"></script>





