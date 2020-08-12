##########################

TRESQUINTOS

Bases de Datos de Tresquintos
Serie: “Elecciones Presidenciales, 1989-2017”
Base: "presidenciales_99_1v"
Sitio: https://tresquintos.cl/datos

##########################

INFORMACIÓN

columnas: 25
filas: 8.128

##########################

VARIABLES 

id:
tipo: tipo de elección
cargo: tipo de cargo
fecha: fecha de la votación, dd/mm/aaaa
año: [aaaa]
periodo_inicio: [dd/mm/aaaa]
periodo_fin: [dd/mm/aaaa]
periodo: [dd/mm/aaaa] - [dd/mm/aaaa]
vuelta: primera/segunda
id_región:
región: nombre región
id_provincia:
provincia: nombre provincia
comuna: nombre comuna
circunscripción: nombre circunscripción
sexo_mesa: sexo de la mesa escrutadora
candidato: nombre del candidato presidencial
nombre: primer nombre
apellido1: segundo apellido
apellido2: segundo apellido
sexo: sexo del candidato presidencial
resultado: electo/no electo
partido: partido del candidato presidencial
sigla: sigla del partido
válidos: votos válidos

##########################

FUENTES

[1]  Servel.cl: https://servel.cl/resultados-en-excel/


##########################

PATHS


### R
path <- 'https://raw.githubusercontent.com/tresquintos/datos/master/presidenciales/presidenciales_99_1v.csv'                
df <- read.csv(path, header =  TRUE, sep = ',', stringsAsFactors =FALSE)
length(df)

### Stata 
import delimited "https://raw.githubusercontent.com/tresquintos/datos/master/presidenciales/presidenciales_99_1v.csv", encoding(utf8) clear

##########################

REFERENCIA

Tresquintos.cl

##########################

CONTACTO

nombre: Kenneth Bunker
email: kabunker [@] gmail [.] com

##########################