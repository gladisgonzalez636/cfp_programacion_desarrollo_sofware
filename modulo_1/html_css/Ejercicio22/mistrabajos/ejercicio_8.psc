funcion suma<-resultado(a,b)
	suma=(a+b)
FinFuncion
Funcion resta<-resta2(a,b)
	resta=(a-b)
FinFuncion
Funcion multi<-multi2(a,b)
	multi=(a*b)
FinFuncion
Funcion div<-div2(a,b)
	div=(a/b)
FinFuncion
Funcion modulo<-modulo2(a,b)
	modulo=(a%b)
FinFuncion

Algoritmo sin_titulo
	Definir num1,num2 Como Entero
	definir usuario Como Caracter
	
	Escribir 'para salir ingrese salir'
	Repetir
		Escribir 'num1'
		Leer num1
		Escribir 'num2'
		leer num2
		Escribir 'signo a ingresar +, -, *, /,% '
		Leer  usuario
		suma = resultado(num1,num2)
		resta = resta2(num1,num2)
		multi = multi2(num1,num2)
		div = div2(num1,num2)
		modulo = modulo2(num1,num2)
		
		si usuario == '+' Entonces
			Escribir 'resultado ',suma
		FinSi
		si usuario=='-' Entonces
			Escribir 'resultado ',resta
		FinSi
		Escribir 'para salir ingrese salir'
		si usuario=='*' Entonces
			Escribir 'resultado ',multi
		FinSi
		si usuario=='/' Entonces
			Escribir 'resultado ',div
		FinSi
		si usuario=='%' Entonces
			Escribir 'resultado ',modulo
		FinSi
	Hasta Que usuario = 'salir'
FinAlgoritmo
