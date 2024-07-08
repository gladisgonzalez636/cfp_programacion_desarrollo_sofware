//encontrar el numero mayor de un array
Algoritmo sin_titulo
	dimension array[5]
	array[1] = 5
	array[2] = 20
	array[3] = 13
	array[4] = 17
	array[5] = 8
	
	para i=1 Hasta 5 Con Paso 1 Hacer
		si mayornum<array[i] Entonces
			mayornum = array[i]
		FinSi
	FinPara
	Escribir mayornum

FinAlgoritmo
