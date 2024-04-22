<h2>Ejercicio 21<h2>
<h3>Contador Ascendente</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            num=0
            Mientras (num < 10) Hacer
                num<-num + 1
                Escribir num
            Fin Mientras
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 22<h2>
<h3>Contador Descendente</h3>
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

<h2>Ejercicio 23<h2>
<h3>Suma de Números Positivos</h3>
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

<h2>Ejercicio 24<h2>
<h3>Adivina el Número</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num, adivinar Como Entero
            adivinar = Azar(100);
            Repetir
                Escribir 'Número aletorio'
                Leer num
            Hasta Que num==adivinar
            Escribir 'Numero aletorio es ',num	        
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 25<h2>
<h3>Validación de Contraseña</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir contraseña Como caracter
            contraseña_usuario = 'vaca'
            Repetir
                Escribir 'Escriba su contraseña'
                Leer contraseña
            Hasta Que contraseña=contraseña_usuario
            Escribir 	'Acceso concedido'
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 26<h2>
<h3>Número Positivo</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como Entero
            Repetir
                Escribir 'Número positivo'
                Leer num
            Hasta Que num>=0
            Escribir num
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 27<h2>
<h3>Suma de Números Pares</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num,num2 Como entero
            Definir respuesta Como Caracter
            num2 = 0
            respuesta = 'si'
            Mientras respuesta = 'si' Hacer
                Escribir 'Ingresa numero'
                Leer num
                si num % 2 = 0 Entonces
                    num2= num2 + num
                
                FinSi
                Escribir 'desea continuar si/no'
                Leer respuesta
            FinMientras
            Escribir 'suma pares ',num2  
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 28<h2>
<h3>Adivina el Número (Repetir Hasta Acertar)</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num,adivinar Como Entero
            adivinar = Azar(5);
            contador = 0
            Repetir
                Escribir 'Adivina'
                Leer num
                contador = contador + num
            Hasta Que num == adivinar
            Escribir 'El ganador es ',num
            Escribir 'Intentos ',contador
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 29<h2>
<h3>Cálculo de Factorial</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como Entero
            contador = 0
            Escribir 'Escribir numero'
            Leer num
            Mientras contador < num
                si anterior == 0 Entonces
                    anterior = 1
                FinSi
                contador = contador + 1
                actual = contador
                resultado = anterior * contador
                anterior = resultado
                Escribir anterior
                //contador = contador*contador
            FinMientras
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 30<h2>
<h3>Validación de Entrada</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como caracter
            Repetir
                Escribir 'Contraseña'
                Leer num
                si Longitud(num) < 8 Entonces
                    Escribir 'contraseña de 8 caracteres'
                FinSi
            Hasta Que Longitud(num) = 8
            Escribir 'contraseña correcta'
        FinAlgoritmo
    </code>
</pre>




