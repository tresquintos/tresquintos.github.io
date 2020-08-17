##########################

TRESQUINTOS

Bases de Datos de Tresquintos
Serie: “Plebiscitos”
Base: "plebiscito_88"
Sitio: https://tresquintos.cl/datos

##########################

INFORMACIÓN

columnas: 17
filas: 340

##########################

VARIABLES 

id:	
fecha: fecha de la votación, dd/mm/aaaa	
id_región:
región: nombre región
comuna: nombre comuna
provincia: nombre provincia
n_votos1: número de votos opción "No"
p_1: porcentaje de votos opción "No"
n_votos2: número de votos opción "Si"
p_2: porcentaje de votos opción "Si"
n_blancos: número de votos en blanco
p_blancos: porcentaje de votos en blanco
n_nulos: número de votos nulos
p_nulos: porcetaje de votos nulos
n_válidos: número de votos válidos
n_emitidos: número total de votos emitidos

##########################

FUENTES

[1]  TribunalCalificador.cl: https://tribunalcalificador.cl/resultados-de-elecciones/

[2]  Servel.cl: https://servel.cl/

##########################

PATHS


### R
path <- 'https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_88.csv'
             
df <- read.csv(path, header =  TRUE, sep = ',', stringsAsFactors =FALSE)
length(df)

### Stata 
import delimited "https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_88.csv", encoding(utf8) clear

##########################

REFERENCIA

Tresquintos.cl

##########################

CONTACTO

nombre: Kenneth Bunker
email: kabunker [@] gmail [.] com

##########################