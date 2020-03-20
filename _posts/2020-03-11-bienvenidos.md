---
title: "¡Bienvenidos!"
date: 2020-03-11
permalink: /posts/2020/03/bienvenidos/
comments: true
tags:
  - Tresquintos
  - Métodos
  - Gráficos
  - Datos
  - Plebiscito Nacional 2020
  - Elección Constituyentes 2020
  - Elección Concejales 2020
  - Elección Alcaldes 2020
  - Elección Municipal 2020
  - Elección Diputados 2021
  - Elección Senadores 2021
  - Elección Legislativa 2021
  - Elección Presidencial 2021
---


Escribe Kenneth Bunker, creador y editor de **Tresquintos**. Es un placer darles la bienvenida al nuevo sitio web. Aquí podrán encontrar análisis político y pronósticos electorales para todas las elecciones de Chile. El objetivo de **Tresquintos** no es solo combatir información excesiva y contradictoria con datos y contexto, sino que además explicar fenómenos complejos y obscuros en formatos simples y asequibles. Mi objetivo personal es separar el ruido de la señal. Y para compensar por el hecho de que la verdad absoluta es irreverentemente inalcanzable, seré transparente en todos los razonamientos y métodos que fundamenten mis argumentos. Cuando sea necesario, subiré las bases de datos y los *scripts* requeridos para replicar mis resultados. Dejaré a juicio de los lectores la decisión de cuánta confianza poner en mis conclusiones.


### Principales cambios

A diferencia del sitio anterior, que estaba alojado en Wordpress, el sitio nuevo está integrado en [GitHub](https://github.com/). Hay varias diferencias. El sitio nuevo es automatizado. Entre otras cosas, los gráficos se cargan solos cada vez que se actualizan las bases de datos. Por ejemplo, cada vez que se publica una nueva encuesta, las líneas de tiempo y las distribuciones de probablidades se ajustan para reflejar los efectos de la nueva encuesta sobre la tendencia general. El sitio nuevo también es minimalista. Contiene menos información que el sitio anterior. Fue un *tradeoff*, pero me pareció que había que dejar algo atrás para poder crecer. Por ejemplo, en el sitio nuevo ya no voy a estar confeccionando listas de candidatos ni armando manuales de uso. Pero sí voy a estar describiendo y explicando en mucho mayor detalle los métodos, como por ejemplo las [simulaciones](https://tresquintos.cl/sx/) y los [pronósticos](https://tresquintos.cl/tsm/).

Un cambio notorio es el logo. No fue una decisión fácil. Pero después de 10 años, fue una decisión necesaria. El [logo antiguo](https://tresquintos.cl/images/logo_viejo.png) representaba la "binominalidad" del sistema político chileno (con un cuadrado dividido en dos partes iguales por una línea de 45 grados). Resaltaba el efecto político del quórum de los 3/5. Pero desde la reforma al sistema electoral, en 2015, las cosas han cambiado bastante. De hecho, [la evidencia muestra](https://kennethbunker.github.io/research-articles/2020/01/03/chile-fragmentation.html) que ya no existen tan solo dos coaliciones, sino que hay al menos cuatro de ellas. ¿Para qué hablar de lo que ha pasado desde el 18 de octubre de 2019? Las cosas han cambiado, y **Tresquintos** lo sabe. El nuevo logo acusa recibo de esto, pero también refleja el cambio propio. En esta vuelta a las canchas, mi foco de atención va estar puesto más en los métodos que en la política. Eso explica la referencia al cursor de programación en el [logo nuevo](https://tresquintos.cl/images/logo.png).

También hay cambios bajó el capó. **Tresquintos** vuelve con un nuevo paquete estadístico y con un método *2.0*. En cuanto a lo primero, me cambié de **R** a **Stata**. Si bien mi sector probablemente favorece el primero por sobre el segundo, consideré que las nuevas adiciones a **Stata** eran al menos suficientes para darle un vistazo. Así que lo probé. Me encantó. La versión nueva no solo tiene un motor mucho más potente, sino que además incluye una serie de funciones que antes no existían (ver [aquí](https://www.stata.com/new-in-stata/). Y si bien sigue teniendo varios *shortcomings*, los *pros* superan con creces los *cons*. En cuanto a lo segundo, desarrollé un método nuevo (llamado el **TSM**) significativamente más estable que el anterior. De hecho, me tomé el tiempo para escribir un *script* completamente nuevo y probar el método en 10 países de América Latina (3 elecciones en cada país). Los resultados fueron [notables](https://www.academia.edu/42049981/A_two-stage_model_to_forecast_elections_in_new_democracies).

Finalmente, en comparación al **Tresquintos** de la década pasada, hubo una notable reducción en el tamaño del equipo. En las versiones anteriores, siempre hubo varias personas colaborando. De hecho, en el peak de **Tresquintos** (para la elección presidencial de 2017), éramos 6 personas en total. No solo fue un lujo poder trabajar con todas ellas, pero además fue necesario para poder generar el impacto que tuvimos ese año. Ahora, comienzo desde cero. Por una parte, porque necesito recobrar control total sobre la producción. (Lo que implica que necesariamente manejar menos variables). Pero por otra parte, porque en esta vuelta no tengo financiamiento. Es decir, todo lo que se publiqué en este sitio será solamente mío. Al menos en esta primera etapa. La idea es crecer a través del tiempo, y que el sitio se vuelva autosustentable. Con ese fin, habilité un [sistema de donación-única](https://tresquintos.cl/faq/) para que los que quieran contribuir a mantener el sitio activo puedan hacerlo.


### Lo que viene

En los meses que vienen habrá más elecciones que en ningún otro periodo de la historia de Chile. En abril de 2020, se celebrará el plebiscito nacional, con dos boletas para dos preguntas (apruebo vs. rechazo; convención 100% elegida vs. convención mixta). En junio de 2020, habrá primarias municipales. En octubre de 2020, se celebrará la elección de concejales y alcaldes. El mismo día, probablemente, se celebrará la elección de gobernadores regionales y constituyentes. En junio de 2021, habrá primarias para legislativas y presidenciales. En noviembre de 2021, se celebrará la elección concurrente de consejeros regionales, diputados y senadores, además de la primera vuelta presidencial. Y como si fuera poco, en diciembre de 2021, habrá una segunda vuelta en el caso de que ninguno de los candidatos presidenciales obtenga más de 50% de los votos.

Es decir, hay mucho trabajo por hacer. Sobre todo ahora. Como comenté en el principio, en los tiempos que corren no solo hay cada vez más información, sino que hay cada vez más información contradictoria. Eso constituye un problema para votantes que quieren hacer su voto valer. Pues, para emitir un voto informado es importante tener "buena información". Y eso no solo aumenta la posibilidad de emitir un voto útil, o "estratégicamente correcto", sino que también contribuye a sostener la democracia. Entonces, ¿cómo lo hacemos? ¿Cómo podemos conocer el estado "verdadero" de una elección? ¿Miramos la última encuesta? ¿Miramos la encuesta que más "nos gusta"? ¿Cómo fijamos nuestros puntos cardinales para hacer nuestro voto valer? Esas son las preguntas que quiero ir resolviendo en este sitio. Y si bien las respuestas inevitablemente conllevarán error, confío en que los métodos en algo lo podrán compensar.

Con ese objetivo en mente, no solo iré publicando gráficos con [pronósticos](https://tresquintos.cl/tsm/) de intención de voto, sino también [simulaciones](https://tresquintos.cl/sx/) de resultados electorales. No tengo claridad con respecto a la frecuencia de las actualizaciones, pero en el fondo dependerá de la cantidad de datos que tenga. Mientras más datos tenga, más podré actualizar. Pero si hay pocos datos, no es mucho lo que podré hacer. A su vez, los gráficos irán acompañados de análisis en el blog. Casí nunca subiré un pronóstico o una proyección sin detallar su método, su implicancia, o aun más importante, su margen de error. Por eso, la carga del trabajo también caerá al lado del lector. Es fácil copiar los gráficos y postearlos en redes sociales. Es más difícil entenderlos y explicarlos. En ese sentido, **Tresquintos** se hace entre todos.

¿Cómo puedes contribuir? Hay varias formas. La primera es siguiendo a **Tresquintos** en todas sus plataformas. Además de los ya tradicionales [Twitter](https://www.twitter.com/tresquintos), [Facebook](https://wwww.facebook.com/3quintos) e [Instagram](https://www.instagram.com/tresquintos), en esta nueva etapa sumo [Twitch](https://www.twitch.tv/tresquintos) y [Youtube](https://www.youtube.com/channel/UCCote-kyiWk17x29X_0nsHw/). La última plataforma es especialmente importante, pues creo que será centrales en lo que viene. La idea es levantar un canal de análisis político donde pueda generar contenido original e independiente. Otra forma de contribuir es con una donación única. Puedes hacerlo vía [PayPal](https://www.paypal.me/tresquintos/) o por [Flow](https://www.flow.cl/btn.php?token=3vop8lw). Por lo demás, comentarios son siempre bienvenidos. En ese caso me puedes contactar directamente por [Twitter](https://www.twitter.com/kennethbunker). Y si simplemente te quieres informar de actualidad, métodos y su interacción, te puedes suscribir a la [lista de ditribución de **Tresquintos**](https://tresquintos.us15.list-manage.com/subscribe/post?u=3a6f5773bbbc78ea5a0003f67&amp;id=8c164eff0f) para recibir todos los contenidos directo en tu inbox (y WhatsApp, si quieres).

<span class="img-container">
  <img src="/images/nintendo.png" alt="usa el teclado" />
</span>

<script src="/js/topsecret.js"></script>
