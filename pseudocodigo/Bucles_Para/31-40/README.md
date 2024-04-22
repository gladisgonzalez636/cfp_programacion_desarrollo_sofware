<h2>Ejercicio 31<h2>
<h3>Suma de Números</h3>
<pre>
    <code>
    Algoritmo sin_titulo
        Definir num Como Entero
        Para i=1 Hasta 10 Con Paso 1 Hacer
            resultado=resultado+i
            Escribir resultado
	    FinPara
    FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 32<h2>
<h3>Tabla de Multiplicar</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como entero
            Escribir 'Número que desees ingresar del 1 al 10'
            Leer num
            Para i=0 Hasta 10 Con Paso 1 Hacer
                Escribir num 'x' i '=' num * i
            FinPara 
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 33<h2>
<h3>Factorial</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num, resultado Como Entero
            resultado = 1
            Escribir 'Numero'
            Leer num
            Para i=1 Hasta num Con Paso 1 Hacer
                resultado = resultado * i
            FinPara
            Escribir resultado      
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 34<h2>
<h3>Contador Regresivo</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como Entero
            contador = 11
            Para i=1 Hasta contador Con Paso 1 Hacer
                contador=contador-1
                Escribir contador
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 35<h2>
<h3>Impresión de Caracteres</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir asterisco Como Caracter
            Para i=1 Hasta 5 Con Paso 1 Hacer
                linea = "* "+linea
            FinPara
            Escribir linea
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 36<h2>
<h3>Potencias de 2</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como entero
            num = 2
            resultado = 1
            Para i=0 Hasta 4 Con Paso 1 Hacer
                Escribir num, ' potencia ', i, " = ", resultado
                resultado = resultado*num
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 37<h2>
<h3>Suma de Números Pares</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como Entero
            resultado= 0
            Para i=2 Hasta 20 Con Paso 2 Hacer
                resultado = resultado+i
                Escribir resultado
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 38<h2>
<h3>Contador de Dígitos</h3>
<pre>
    <code>
        Algoritmo sin_titul
            Definir num Como entero
            Escribir 'Ingrese un número'
            Leer num
            resultado = longitud(ConvertirATexto(num))
            contador = 0
            
            Para i=1 Hasta resultado Con Paso 1 Hacer
                contador=contador + 1
            FinPara
	         Escribir 'La longitud',contador
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 39<h2>
<h3>Secuencia Fibonacci</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir anterior,actual como real
            Para i=0 hasta 10 Con Paso 1 Hacer
                Si (i=0) Entonces
                    anterior = 0
                    actual = 1
                SiNo
                    resultado = actual + anterior
                    anterior = actual
                    actual = resultado
                Fin Si
                Escribir actual
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 40<h2>
<h3>Patrón Numérico: Imprimir</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como entero
            Para i=1 hasta 4 Con Paso 1 Hacer
                resultado = Concatenar(resultado,ConvertirATexto(i))
                resultado = Concatenar(resultado,',')
                Escribir resultado
            FinPara
        FinAlgoritmo
    </code>
</pre>
