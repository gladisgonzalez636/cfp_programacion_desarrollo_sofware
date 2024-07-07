//calcular indice de masa corporal
Funcion indice<-corporal(kg,altura)
	indice = (kg/(altura*altura))
FinFuncion

Algoritmo sin_titulo
	Definir kilogramos Como entero
	Definir medida como entero
	Escribir 'peso en kilogramos'
	Leer kilogramos
	Escribir 'altura en centimetros'
	leer medida

	indice = corporal(kilogramos,medida)
	indice2 = ConvertirATexto(indice)
	longitudd = Longitud(indice2)
	
	Escribir 'indice de masa corporal menor a 18 desnutricion,indice menor a 24 peso saludable indice mayor a 25 sobrepeso'
	Escribir ' '
	Escribir 'indice de masa corporal ',SubCadena(indice2,5,5),SubCadena(indice2,6,6)
FinAlgoritmo
