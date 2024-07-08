//funcion que no retorna un valor
//Funcion saludar(nombre)
//	Escribir 'hola ',nombre
//FinFuncion
//funcion que retorna un valor
//Funcion area<-calcularArea(base,altura)
//	area<-(base*altura)/2
//	Escribir area
//FinFuncion
//funcion recursiva

Funcion resultado<-factorial(n)
	si n == 0 Entonces
		resultado=1
	SiNo
		resultado<-n*factorial(n-1)
	FinSi
	
FinFuncion
Algoritmo sin_titulo
	//	saludar('juan')
	Escribir factorial(5)
FinAlgoritmo

