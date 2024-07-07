Algoritmo sin_titulo
	definir num,num_menor Como Entero
	num_menor= 0
	Dimension num[6]
	num[1] = 2
	num[2] = 8
	num[3] = 6
	num[4] = 4
	num[5] = 1
	num[6] = 3

	Para i =1 Hasta 6 Con Paso 1 Hacer
		num_menor= num[i]
		Para p = i +1 Hasta 6 Con Paso 1 Hacer
		
			si num[i] > num[p] Entonces
				num[i] = num[p]
				num[p] = num_menor
				num_menor = num[i]
				
			FinSi
			
		FinPara
		Escribir num[i]
	FinPara
		
FinAlgoritmo
