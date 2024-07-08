//crear una linea diagonal en un array
Algoritmo sin_titulo
	Dimension array[6,6]
	array[1,1] = 2
	array[2,2] = 2
	array[3,3] = 2
	array[4,4] = 2
	array[5,5] = 2
	array[6,6] = 2

	Para fila = 1 Hasta 6 Con Paso 1 Hacer
		para columna =1 Hasta 6 Con Paso 1 Hacer
			Escribir array[fila,columna],'\' Sin Saltar
		FinPara
		Escribir ' '
	FinPara
FinAlgoritmo
