##########################

TRESQUINTOS

Bases de Datos de Tresquintos
Serie: “Plebiscitos”
Base: "plebiscito_78"
Sitio: https://tresquintos.cl/datos

##########################

INFORMACIÓN

columnas: 13
filas: 294

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
n_votos2: número de votos opción "Sí"
p_2: porcentaje de votos opción "Sí"
n_blancosynulos: número de votos blancos y nulos
p_blancosynulos: porcentaje de votos blancos y nulos
n_emitidos: número total de votos emitidos

##########################

FUENTES

[1]  Archivo.Servel.cl: https://archivo.servel.cl/uploads/r/null/1/9/8/1987715a1969d0b298a6cdd615a353fbd004c0c3d1f1c6e1033342b3faa45d48/SFMI-10.pdf

##########################

PATHS


### R
path <- 'https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_78.csv'
             
df <- read.csv(path, header =  TRUE, sep = ',', stringsAsFactors =FALSE)
length(df)

### Stata 
import delimited "https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_78.csv", encoding(utf8) clear

##########################

REFERENCIA

Tresquintos.cl

##########################

CONTACTO

nombre: Kenneth Bunker
email: kabunker [@] gmail [.] com

##########################