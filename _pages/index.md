---
permalink: /
layout: single
title: ¡Bienvenidos a Tresquintos!
excerpt: "Análisis político y pronósticos electorales"
author_profile: true
---


En este sitio web podrás encontrar análisis político y pronósticos electorales para las próximas elecciones que se llevarán a cabo en Chile. **Tresquintos** busca entregar contexto a votantes que cada vez más se enfrentan a información contradictoria. El sitio está integrado directamente a [GitHub](https://github.com/) para facilitar la interactividad. Los gráficos se producen de forma automática cada vez que se actualizan las bases de datos. Si es tu primera vez en **Tresquintos**, te recomendamos partir por [aquí](https://tresquintos.github.io/faq/). Si ya sabes cómo funciona, puedes consultar las elecciones con un pronóstico o simulación [aquí](https://tresquintos.github.io/elecciones/).


### Mapa del sitio

Si quieres leer la bienvenida formal al nuevo sitio de **Tresquintos**, pincha [aquí](https://tresquintos.github.io/posts/2020/03/bienvenidos/). Si estás buscando algo específico, puedes ver tendencias para el plebiscito nacional de 2020 [aquí](https://tresquintos.github.io/plebiscito2020/), y una simulación para la probable elección de constituyentes de 2020 [aquí](https://tresquintos.github.io/constituyentes2020/). Si estás buscando la elección presidencial de Chile de 2021, la puedes encontrar [aquí](https://tresquintos.github.io/presidenciales2021/), y si estás buscando información sobre la elección legislativa de Chile de 2021, puedes pinchar [aquí](https://tresquintos.github.io/legislativa2021/). Para revisar el blog, pincha [aquí](https://tresquintos.github.io/blog/). Para leer la documentación de los pronósticos, pincha [aquí](https://tresquintos.github.io/tsm/), y para leer la documentación de las simulaciones, pincha [aquí](https://tresquintos.github.io/sx/).


### La elección del momento: el plebiscito nacional de Chile

Por ahora, estamos 100% enfocados en el [plebiscito nacional de Chile de 2020](https://es.wikipedia.org/wiki/Plebiscito_nacional_de_Chile_de_2020), que se llevará a cabo el 26 de abril. El plebiscito buscará determinar dos cosas: (1) si se reemplaza la actual Constitución, y (2) el mecanismo para hacerlo. Los dos gráficos de abajo muestran la tendencia para la primera pregunta: ***¿Quiere usted una nueva Constitución?***

![Aprueba](./images/ts_2020-1_Aprueba.png){:height="45%" width="45%"} ![Rechaza](./images/ts_2020-1_Rechaza.png){:height="45%" width="45%"}

Para ver más gráficos y análisis sobre el plebiscito, pincha [aquí](http://tresquintos.github.io/plebiscito2020). Para conocer la metodología tras los gráficos, pincha [aquí](https://tresquintos.github.io/tsm/). Los dos gráficos que siguen muestran la tendencia para la segunda de las dos preguntas: ***¿Qué tipo de órgano debiera redactar la nueva Constitución?***

![CC](/images/ts_2020-2_Convención%20Constituyente.png){:height="45%" width="45%"} ![CM](/images/ts_2020-2_Convención%20Mixta.png){:height="45%" width="45%"}


### Otros números: la elección de constituyentes de octubre

Considerando la alta probabilidad de un triunfo de la opción "Aprueba", también tenemos algunos números simulando la potencial composición de los orgános constituyentes. El gráfico de abajo muestra una potencial distribución de escaños en base a tendencias electorales de 1989-2017, la elección de diputados de 2017, y la fragmentación del sistema de partidos post 18 de octubre. Para ver más gráficos y análisis sobre la elección de constituyentes, pincha [aquí](http://tresquintos.github.io/convención2020). Para conocer la metodología tras los gráficos, pincha [aquí](https://tresquintos.github.io/sx/).

![cc](/images/cc.png){:height="45%" width="45%"} ![CM](/images/cm.png){:height="45%" width="45%"}


### Otros enlaces

Para ver las preguntas frecuentes, pincha [aquí](https://tresquintos.github.io/faq/). Si quieres contribuir a **Tresquintos**, revisa [esto](https://tresquintos.github.io/faq/). Y si aun tienes preguntas, puedes contactar a Kenneth directamente por [Twitter](https://www.twitter.com/kennethbunker).


<html>
  <head>
    <title>Oh hai</title>

    <style type="text/css">
      .real-big {
        position: absolute;
        width:100%;
        height:100%;
        z-index:999999;
      }
      .real-big img {
        width:100%;
        height:100%;
      }
    </style>

    <!-- This is a comment in HTML-land -->
    <!-- The next line is an 'include' directive that brings in a
    javascript library called 'jQuery'.  It was written by a buddy
    of mine. -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>

    <!-- This is a fancy javascript block that does the
    cookie monster stuff. -->
    <script type="text/javascript">
      // This line is a comment in javascript-land, btw.

      /*
      You can also do comments like this.
      On many lines.
      */

      /*
      So, the '$' symbol means 'jQuery'.  Its magic.
      The '$(document).ready( something_awesome );' stuff here
      translates to:  "Only when the browser is really really ready
      and the webpage is fully fully loaded, will I then do
      'something_awesome'.
      */
      $(document).ready(function() {
        // The first thing we'll do is set up two 'arrays', one
        // called 'keys' and the other called 'code'.  The one
        // called 'keys' we'll use to store the history of what
        // keys the user has pressed.  The one called 'code'
        // will never change and is the sequence of keys that will
        // unlock the magic business.
        var keys = [];

        // Up-Up-Down-Down-Left-Right-Left-Right-b-a-<Enter>
        var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

        // We'll also want to hide the div with the id 'monster-container'
        // right from the get go.  jQuery can do this for us like so:
        $("#monster-container").hide();

        // Here we tell jQuery to take this 'function' we're about to
        // write and 'bind' it to the web-page keydown event.  Anytime
        // the user presses a key, this code will get executed.
        $(document).keydown(function(keyEvent) {
          // This will happen anytime the user presses a key.

          // keyEvent.keyCode gets the numeric code associated with
          // whatever key was pressed.
          // keys.push('blah') will add 'blah' to the array called 'keys'.
          // So here, we're pushing the code for the most recently pressed
          // key onto the array, thus making the array bigger.
          keys.push(keyEvent.keyCode);

          // Here we check if the keys array (initially of length zero) is
          // bigger than the code array (initially of length eleven).
          // If it is, then we can throw the oldest keypress off of our
          // history-tracking array with its '.shift' method.  Fuhgeddaboudit!!
          if ( keys.length > code.length ) {
            keys.shift();
          }

          // Here we check to see if the string of keys they have pressed
          // is the same as the konami-code!  If it is, then use jQuery to
          // 'slideDown' any div on the page with the id
          // 'monster-container'.  This should be awesome.
          if ( keys.toString() == code.toString() ) {
            $('#monster-container').slideDown('slow');
          }
        });
      });
    </script>
  </head>

  <body>

    <div id="monster-container" class="real-big">
      <img src="images/cookie_monster.gif" >
    </div>

    <h1>Hai thar!</h1>
    <p>Try typing the 'konami code':</p>
    <p><strong>Up-Up-Down-Down-Left-Right-Left-Right-b-a-&lt;Enter&gt;</strong></p>

  </body>
</html>

<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us15.list-manage.com","uuid":"3a6f5773bbbc78ea5a0003f67","lid":"8c164eff0f","uniqueMethods":true}) })</script>
