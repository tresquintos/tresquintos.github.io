##########################

TRESQUINTOS

Bases de Datos de Tresquintos
Serie: “Plebiscitos”
Base: "plebiscito_80"
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
n_votos1: número de votos opción "No"
p_1: porcentaje de votos opción "No"
n_votos2p: número de votos opción "Si" parcial
p_2p: porcentaje de votos opción "Si" parcial
n_blancos: número total de votos blancos 
p_blancos: porcentaje total de votos blancos
n_votos2: número total de votos opción "Si" (sumado los votos blancos)
p_2: porcentaje total de votos opción "Si" (sumado los votos blancos)
n_nulos: número de votos nulos
p_nulos: porcentaje de votos nulos
n_válidos: número de votos válidos
n_emitidos: número de votos emitidos

##########################

FUENTES

[1]  Archivo.Servel.cl: https://archivo.servel.cl/uploads/r/null/d/b/8/db8e1c5bec4514bd8ed6fc1ff9dc6fb13c3d8760983d0807188675ad18e9e955/SFMI-16.pdf


##########################

PATHS


### R
path <- 'https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_80.csv'
             
df <- read.csv(path, header =  TRUE, sep = ',', stringsAsFactors =FALSE)
length(df)

### Stata 
import delimited "https://raw.githubusercontent.com/tresquintos/datos/master/plebiscitos/plebiscito_80.csv", encoding(utf8) clear

##########################

REFERENCIA

Tresquintos.cl

##########################

CONTACTO

nombre: Kenneth Bunker
email: kabunker [@] gmail [.] com

##########################