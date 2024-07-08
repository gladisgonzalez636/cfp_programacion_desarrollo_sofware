Funcion suma<-sumar(a,b)
	suma(a+b)
FinFuncion
//Funcion resta<-resta(e,f)
//	resta(a-b)
//FinFuncion
//Funcion multi<-multi(a,b)
//	multi(a*b)
//FinFuncion
//Funcion div<-div(a,b)
//	div(a/b)
//FinFuncion
//Funcion modulo<-modulo(a,b)
//	modulo(a%b)
//FinFuncion

Algoritmo sin_titulo
	Definir num1,num2 Como Entero
	definir usuario Como Caracter
	Repetir
		Escribir 'num1'
		Leer num1
		Escribir 'num2'
		leer num2
		Escribir 'signo a ingresar +, -, *, /,% '
		Leer 
		si usuario == '+' Entonces
			Escribir 'resultado',suma = suma(num1,num2)
		FinSi
	Hasta Que 
FinAlgoritmo
