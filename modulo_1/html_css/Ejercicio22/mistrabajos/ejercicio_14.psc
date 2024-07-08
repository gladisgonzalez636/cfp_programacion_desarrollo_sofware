
//calcular sueldo de un trabajador
funcion sueldo<-dias(a,b)
	sueldo = (a*b)
FinFuncion
Algoritmo sin_titulo
	definir usuario_dias,salario Como Entero
	Escribir 'cuantos dias trabajas a la semana'
	Leer usuario_dias
	Escribir 'salario de un dia'
	Leer salario
	sueldo = dias(usuario_dias,salario)
	Escribir 'cantidad de dinero por dias trabajados Q',sueldo
FinAlgoritmo
