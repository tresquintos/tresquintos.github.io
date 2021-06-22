---
title: "Los tres Chiles"
date: 2021-06-23
permalink: /posts/2021/06/lostreschiles/
comments: true
tags:
  - Métodos
  - Participación Electoral
  - Sesgo Socioeconómico
---


*Por: [Kenneth Bunker](https://twitter.com/kennethbunker) y [Pablo Toro](https://twitter.com/pablotoro_)*

Se habla frecuentemente de que en Chile existe un sesgo socioeconómico en las elecciones. La hipótesis es que la participación electoral depende de la clase socioeconómica del votante. Es decir, que quienes pertenecen a clases socioeconómicas más privilegiadas votarían más que quienes pertenecen a clases socioeconómicas más vulnerables.

**¿Existe sesgo socioeconómico en la participación electoral?**

Esa pregunta es importante por dos motivos. Primero, naturalmente por el efecto democrático que tendría  el sesgo socioeconómico de ser cierto. Si las clases socioeconómicamente privilegiadas participan más, su nivel de representación sería relativamente mayor. Esto es un problema porque viola el principio democrático de una persona un voto.

Pero también es importante a la luz de los recientes hechos. En la segunda vuelta de la elección de gobernadores, votó solo un 19.6% del padrón electoral. A partir de aquello, se abrió un debate sobre la reposición del voto obligatorio. Entender la magnitud del voto socioeconómico, si existe, sirve para entender la urgencia de tal proyecto.

Evidencia circunstancial sugiere que sí existe un voto socioeconómico. Por ejemplo, para la segunda vuelta de la elección de gobernadores, en la comuna más vulnerable de la Región Metropolitana (La Pintana), votó solo un 16.1%. En contraste, en la comuna menos vulnerable de la Región Metropolitana (Lo Barnechea), votó un 47.1%. Es decir, una diferencia de 31%.

Obviamente, lo anterior es solo [anecdótico](https://es.wikipedia.org/wiki/Relaci%C3%B3n_espuria), y no puede ser usado para dibujar inferencias. Por aquello, para contestar la pregunta recopilamos información a nivel comunal de las 287 comunas del país que participaron en la elección. Mientras que la información electoral proviene de [Servel](https://www.servel.cl/), la información sobre vulnerabilidad socioeconómica proviene de la [encuesta Casen](http://observatorio.ministeriodesarrollosocial.gob.cl/encuesta-casen-2017).

En teoría, la variable participación varía entre 0 y 100%. En la práctica, la comuna con menor participación fue San Pedro con 14.1%, y la comuna con mayor participación fue Vitacura con 52.8%. La variable de vulnerabilidad se mide como el porcentaje de población de cada comuna en condición de pobreza por ingresos. Varía entre 0.1% (Vitacura) y 14.1% (La Pintana).

Para examinar el impacto de vulnerabilidad sobre la participación, usamos una [regresión lineal](https://es.wikipedia.org/wiki/Regresi%C3%B3n_lineal) (con [errores estándar robustos](https://es.wikipedia.org/wiki/Regresi%C3%B3n_robusta)). El objetivo es condicionar la relación entre las variables en base al contexto de las comunas. El marco teórico y las limitaciones metodológicas del ejercicio están discutidas en profundidad [aquí](https://www.cambridge.org/core/journals/latin-american-politics-and-society/article/abs/voter-equalization-and-turnout-bias-after-electoral-reform-evidence-from-chiles-voluntary-voting-law/1DA2E20B9160F972A76E4143A079FC7A), [aquí](https://scholar.google.com/scholar?q=Contreras,+Gonzalo,+and+Morales,+Mauricio.+2015.+El+sesgo+de+clase+existi%C3%B3+y+existe.+An%C3%A1lisis+de+la+participaci%C3%B3n+electoral+en+Chile+(municipales+2012+y+presidenciales+2013).+In+UNDP+2015.+79%E2%80%93114.) y [aquí](https://journals.sagepub.com/doi/abs/10.1177/1065912918763746).

La Figura de abajo muestra la relación entre vulnerabilidad (eje X) y participación (eje Y) en la elección de segunda vuelta de gobernadores para las 287 comunas que participaron en la elección (sólo están ausentes las comunas de Valparaíso, Aysén y Magallanes). La Figura muestra que sí existe un sesgo socioeconómico, pero depende del tipo de comuna.

El impacto más claro de la vulnerabilidad sobre la participación se da en la Región Metropolitana. La Figura sugiere que por cada 1% que aumenta la vulnerabilidad, la participación cae en 2%, un efecto estadísticamente significativo. La relación será representada por la línea azul, que muestra la pendiente más pronunciada de la Figura.

Ahora bien, dado que hay una serie de comunas que son [outliers](https://es.wikipedia.org/wiki/Valor_at%C3%ADpico), podría ser un error juntar a todas las comunas. Por eso, en un segundo escenario, restamos 6 comunas de las 52 de la Región Metropolitana, y repetimos el ejercicio. Esta vez, el efecto se atenúa. Sin considerar esas comunas, por cada 1% que aumenta la vulnerabilidad, la participación cae en 0.7%.

Quizás más interesante aún es que si se resta la región Metropolitana completa de la muestra, es decir solo se observa la interacción entre ambas variables en las 235 comunas que participaron de la elección, pero que no son de la Región Metropolitana, el efecto desaparece. De hecho, la relación no es siquiera significativa.


![socioeconomico](https://user-images.githubusercontent.com/85262128/122687752-061a4400-d1e6-11eb-87a2-46c5f9ede8ce.jpg)


De lo anterior podemos concluir que sí existe un sesgo socioeconómico, pero no existe a nivel transversal. El sesgo socioeconómico existe primordialmente en las comunas de la Región Metropolitana, una relación que a su vez está significativamente influenciada por las 6 comunas menos vulnerables del país.

El ejercicio muestra que, en términos de participación electoral y clases socioeconómicas, existen tres Chiles: la Región Metropolitana, las comunas de la zona oriente, y el resto del país. Para todos efectos prácticos, la zona oriente es a la Región Metropolitana lo que la Región Metropolitana es al resto de Chile.

Lo anterior no significa que no exista sesgo socioeconómico en regiones fuera de la Región Metropolitana. Simplemente significa que, como grupo, el sesgo primordialmente se da en esa zona. Esto confirma lo que la literatura ya ha propuesto como una relación mediada por variables como nivel de ruralidad, población y densidad.

Que el sesgo exista principalmente en la Región Metropolitana (zona urbana, altamente poblada y densa), y no en el resto del país no es un factor de alivio. Esto porque en la Región Metropolitana viven aproximadamente 7 millones de personas (37% del país), todas ellas potencialmente afectadas por los efectos negativos del voto socioeconómico.


### ![ep](/images/pc.png){:height="4%" width="4%"} Uso avanzado

Si quieres replicar estos gráficos, descarga las bases en formato CSV [**aquí**](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DZWXOG). Si usas **R** o **Stata** puedes importar el archivo directo con la dirección del enlace).


<style>
.aligncenter {
    text-align: center;
}
</style>
<p class="aligncenter">
    <img src="/images/nes.png" width="30" height="30" alt="konami" />
</p>
<script src="/js/topsecret.js"></script>
