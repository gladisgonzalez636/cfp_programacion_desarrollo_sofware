//factura con descuento de tres servicios
Funcion total<-factura(a,b)
	total=(a*b)/100
FinFuncion
Funcion total2<-factura2(a,b)
	total2=(a*b)/100
FinFuncion

Algoritmo sin_titulo
	Definir  usuario como entero
	Escribir 'numero de dpi'
	Leer usuario
	total = factura(10,750)
	total2 = factura2(5,930)
	precio_normal = 1200
	
	si usuario == 1234 o usuario == 5678 Entonces
		Escribir 'Total servicio de 30 megas con el 10% de descuento ',750-total
		Escribir 'Total servicio de 20 megas con el 5% de descuento ',930-total2
	FinSi
	si usuario == 91011 o usuario == 1213 Entonces
		Escribir 'Total servicio de 100 megas sin descuento, ',precio_normal
		Escribir 'Total servicio de 20 megas con el 5% de descuento ',930-total2
 	FinSi
	si usuario == 1516 Entonces
		Escribir 'Total servicio de 20 megas con el 5% de descuento ',930-total2

	FinSi
FinAlgoritmo
