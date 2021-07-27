##########################

TRESQUINTOS

Bases de Datos de Tresquintos
Serie: “Plebiscitos”
Base: "plebiscito_89"
Sitio: https://tresquintos.cl/datos

##########################

INFORMACIÓN

columnas: 15
filas: 13

##########################

VARIABLES 

id:
fecha: fecha de la votación, dd/mm/aaaa	
id_región:
región: nombre región
n_votos1: número de votos opción "Rechazo"
p_1: porcentaje de votos opción "Rechazo"
n_votos2: número de votos opción "Apruebo"
p_2: porcentaje de votos opción "Apruebo"
n_blancos: número de votos en blanco 
p_blancos: porcentaje de votos en blanco
n_nulos: número de votos nulos
p_nulos: porcentaje de votos nulos
n_válidos: número de votos válidos
n_emitidos: número total de votos emitidos

##########################

FUENTES

[1]  TribunalCalificador.cl: https://tribunalcalificador.cl/resultados-de-elecciones/

##########################

PATHS


### R
path <- 'https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_89.csv'
             
df <- read.csv(path, header =  TRUE, sep = ',', stringsAsFactors =FALSE)
length(df)

### Stata 
import delimited "https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_89.csv", encoding(utf8) clear

##########################

REFERENCIA

Tresquintos.cl

##########################

CONTACTO

nombre: Kenneth Bunker
email: kabunker [@] gmail [.] com

##########################