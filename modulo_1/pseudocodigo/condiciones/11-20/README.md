<h2>Ejercicio 11</h2>
<h3>Número Positivo o negativo</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir numero_positivo Como Entero
            escribir'Escribe el número'
            Leer numero_positivo
            si (numero_positivo >= 0)Entonces
                Escribir 'Su número es positivo'
            SiNo
                Escribir 'Su número es negativo'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 12</h2>
<h3>Par o impar</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir numero_par Como Entero
            Escribir 'Número'
            Leer numero_par
            si (numero_par%2 = 0) Entonces
                Escribir ('Número par')
            SiNo
                Escribir ('Número impar')
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 13</h2>
<h3>Días de la semana</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir dia Como entero
            Escribir 'Dime un número del 1 al 7:'
            Leer dia
            si  (dia=1) Entonces
                Escribir 'Lunes'
            FinSi
            si (dia=2) Entonces
                Escribir 'Martes'
            FinSi
            si (dia=3) Entonces
                Escribir 'Miercoles'
            FinSi
            si(dia=4) Entonces
                Escribir 'Jueves'
            FinSi
            si(dia=5) Entonces
                Escribir 'Viernes'
            FinSi
            si(dia=6) Entonces
                Escribir 'Sábado'
            FinSi
            si (dia=7) Entonces
                Escribir 'Domingo'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 14</h2>
<h3>Mayor de tres números</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir uno,dos,tres Como Entero
            Escribir 'Primer número'
            Leer uno
            Escribir 'Segundo número'
            Leer dos
            Escribir 'Tercer número'
            Leer tres
            si (uno>dos y uno>tres) Entonces
                Escribir 'Tu primer número es el mayor'
            FinSi
            si (dos>uno y dos>tres) Entonces
                Escribir 'El segundo número es el mayor'
            FinSi
            si (tres>uno y tres>dos) Entonces
                Escribir 'El tercero es mayor'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 15</h2>
<h3>Aprobado o Reprobado</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir calificacion  Como Entero
            Escribir 'Nota'
            Leer calificacion
            si (calificacion>60) Entonces
                Escribir 'Aprobado'
            SiNo
                Escribir 'Reprobado'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 16</h2>
<h3>Rango de Números</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir rango Como Entero
            Escribir 'Número'
            Leer rango
            si (rango>=0 y rango<=10)
                Escribir 'Estas en el rango'
            SiNo
                Escribir 'Estas fuera del rango'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 17</h2>
<h3>Categoría de Edad</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir edad Como Entero
            Escribir 'Edad'
            Leer edad
            si (edad>=0) Entonces
                Escribir 'Eres niñ@'
            FinSi
            si (edad>=13 y edad<=17) Entonces
                Escribir 'Eres adolecente'
            FinSi
            si (edad>=18 y edad<64) Entonces
                Escribir 'Eres adult@'
            FinSi
            si (edad>=65 y edad<=150) Entonces
                Escribir 'Adulto mayor'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 18</h2>
<h3>Calculadora de Descuento</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir producto como real
            Escribir 'Dime el preoducto'
            Leer producto
            si producto>=100 Entonces
                resultado = producto-producto*10/100
                Escribir 'Precio con descuento ', resultado
            SiNo
                Escribir 'Producto sin descuento'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 19</h2>
<h3>Divisibilidad por 5 y 3</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir valor1 Como Entero
            Escribir 'Ingrese número'
            Leer valor1
            si (valor1%3=0) Entonces
                Escribir 'Número divisible dentro de 3'
            FinSi
            si (valor1%5=0) Entonces
                Escribir 'Número divisible dentro de 5'
            FinSi
            si (valor1%3=0 y valor1%5=0)
                Escribir 'Número divisible entre 3 y 5'
            FinSi
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 20</h2>
<h3>Día Hábil o Fin de Semana</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir dia Como entero
            Escribir 'Dime un número del 1 al 7'
            Leer dia
            si (dia=1) Entonces
                Escribir 'Día hábil'
            FinSi
            si (dia=2) Entonces
                Escribir 'Día hábil'
            FinSi
            si (dia=3) Entonces
                Escribir 'Día hábil'
            FinSi
            si (dia=4) Entonces
                Escribir 'Día hábil'
            FinSi
            si (dia=5) Entonces
                Escribir 'Día hábil'
            FinSi
            si (dia=6 o dia=7) Entonces
                Escribir 'Fin de semana'
            FinSi
        FinAlgoritmo
    </code>
</pre>






