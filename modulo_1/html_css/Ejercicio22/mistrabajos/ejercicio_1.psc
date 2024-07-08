//resta,suma,division y multiplicacion con dos numeros ingresados
Funcion suma<-num(a,b)
	suma = (a+b)
FinFuncion
Funcion resta<-num2(a,b)
	resta = (a-b)
FinFuncion
Funcion division<-num3(a,b)
	division = (a/b)
FinFuncion
Funcion multiplicacion<-num4(a,b)
	multiplicacion = (a*b)
FinFuncion
Algoritmo sin_titulo
	Escribir 'num 1'
	Leer num1
	Escribir 'num2'
	Leer num5
	suma = num(num1,num5)
	resta = num2(num1,num5)
	division = num3(num1,num5)
	multiplicacion = num4(num1,num5)
	Escribir 'suma de los numeros ', suma
	Escribir  'resta de los numeros ',resta
	Escribir 'division de los numeros ',division
	Escribir 'multiplicacion de los numeros ',multiplicacion
FinAlgoritmo
