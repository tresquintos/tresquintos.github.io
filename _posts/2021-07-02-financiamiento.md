---
title: "Financiamiento"
date: 2021-07-02
permalink: /posts/2021/07/financiamiento/
comments: true
tags:
  - Métodos
  - Financiamiento electoral
  - Convención Constitucional
---


Para la elección de la recién instalada Convención Constitucional se inauguró el sistema de aportes y financiamiento electoral online para patrocinar candidaturas. El mismo mecanismo se está usando actualmente para el financiamiento de las candidaturas a las primarias presidenciales de Apruebo Dignidad y de Chile Vamos.

En ambas elecciones el rango del financiamiento electoral entre los candidatos ha tenido altas variaciones, y en general, existe debate sobre la real incidencia de mayores niveles de financiamiento electoral sobre el rendimiento de los candidatos.  

**¿Mayor financiamiento de campaña aumenta la cantidad de votos?**  

*Por: [Sofía Contreras](https://twitter.com/SofiaContrerasU) y [Pablo Toro](https://twitter.com/pablotoro_)*

Si bien sabemos que en las elecciones legislativas de 2017 un mayor financiamiento ayudó a los candidatos a salir electos [ver aquí](https://www.servel.cl/ingresos-y-gastos-de-candidatos/), el cambio en la forma de realizar aportes electorales, así como las características particulares de la elección de constituyentes (pandemia, escaños reservados, paridad, listas de independientes) pueden haber tenido un efecto en la importancia del financiamiento en la obtención de votos.

Por ejemplo, René Cortázar (Lista del Apruebo) el candidato con mayor financiamiento de aportes a nivel nacional con $184.782.467, no resultó electo en el distrito 8. En la otra vereda, Rodrigo Rojas Vade (Independiente) quien compitió en el distrito 13 registró $0 de aportes, y resultó electo como Convencional.

Pero lo anterior, puede ser meramente [anecdótico](https://es.wikipedia.org/wiki/Relaci%C3%B3n_espuria). Por eso, para responder nuestra pregunta, recopilamos desde [Servel](https://www.servel.cl/) información sobre el financiamiento electoral de los 1.278 candidatos a la Convención Constitucional. También recopilamos la cantidad de votos que obtuvo efectivamente cada candidato en la elección del 15 y 16 de mayo.

![image](https://user-images.githubusercontent.com/64292382/124332803-62735100-db60-11eb-974f-ba3175f7e718.png)

Para evaluar el impacto en la relación entre financiamiento electoral y cantidad de votos usamos una [regresión lineal](https://es.wikipedia.org/wiki/Regresi%C3%B3n_lineal) ([con errores estándar robustos](https://es.wikipedia.org/wiki/Regresi%C3%B3n_robusta)).

Pasando a los datos duros acerca del financiamiento electoral de la elección de Convencionales, tenemos la Tabla de abajo, que muestra el TOP-10 de candidatos que recibieron menos votos por cada peso que juntaron para hacer campaña, donde ninguno de ellos resultó electo. Promediando entre los 10 $26.538 por voto.

![menor cantidad de votos por peso juntado](https://user-images.githubusercontent.com/64292382/124333100-3f956c80-db61-11eb-98c0-62e46575d807.PNG)

En una vereda completamente distinta, tenemos el financiamiento electoral de quienes recibieron más votos por cada peso que juntaron para hacer campaña y resultaron electos, sobre el total de 138 convencionales (para este ejercicio se descontaron los 17 Escaños Reservados, ya que contó con un sistema electoral diferente).

![mayor cantidad de votos por peso juntado](https://user-images.githubusercontent.com/64292382/124333112-4d4af200-db61-11eb-8bdc-3be6c5899f78.PNG)

En conclusión, y con los antecedentes antes mostrados considerando el contexto de cada elección, como también, los resultados de la elección de Convencionales, tenemos que, mayor financiamiento no es significativo al número total de votos obtenidos, por el contrario, ambas variables no se relacionan entre sí.

La elección de Convencionales nos dejó un sinfín de interrogantes que nos cambiaron la percepción de las fuerzas políticas, con la gran entrada de independientes y las nuevas formas de hacer política y campaña, no solo mirando el escenario sanitario, sino que también mirando las estrategias políticas de cada candidato.

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
