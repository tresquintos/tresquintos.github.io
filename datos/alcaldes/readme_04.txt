##########################

TRESQUINTOS

Bases de Datos de Tresquintos
Serie: “Elecciones Alcaldes, 2004-2016”
Base: "alcaldes_04"
Sitio: https://tresquintos.cl/datos

##########################

INFORMACIÓN

columnas: 26
filas: 5.920

##########################

VARIABLES 

id:
tipo: tipo elección
cargo: tipo de cargo
fecha: fecha de la votación, dd/mm/aaaa
año: [aaaa]
periodo_inicio: [dd/mm/aaaa]
periodo_fin: [dd/mm/aaaa]
periodo: [dd/mm/aaaa] - [dd/mm/aaaa]
id_región:
región: nombre región
circunscripción_senatorial: número circunscripción
distrito: número distrito
comuna: nombre comuna
id_circunscripción: 
circunscripción: nombre circunscripción
sexo_mesa: sexo de la mesa escrutadora
candidato: nombre candidato
nombre: primer nombre
apellido1: primer apellido
apellido2: segundo apellido
sexo: sexo del candidato
resultado: electo/ no electo
partido: partido político del candidato 
sigla: sigla del partido político
lista: lista candidato
válidos: votos válidos

##########################

FUENTES

[1]  Servel.cl: https://servel.cl/resultados-en-excel/


##########################

PATHS


### R
path <- 'https://raw.githubusercontent.com/tresquintos/datos/master/alcaldes/alcaldes_04.csv'
             
df <- read.csv(path, header =  TRUE, sep = ',', stringsAsFactors =FALSE)
length(df)

### Stata 
import delimited "https://raw.githubusercontent.com/tresquintos/datos/master/alcaldes/alcaldes_04.csv", encoding(utf8) clear

##########################

REFERENCIA

Tresquintos.cl

##########################

CONTACTO

nombre: Kenneth Bunker
email: kabunker [@] gmail [.] com

##########################