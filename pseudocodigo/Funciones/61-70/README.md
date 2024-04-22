<h2>Ejercicio 61</h2> 
<h3>Suma de dos números</h3>
<pre>
    <code>
        Funcion resultado<-suma(num1,num2)
	        resultado = num1+num2
        FinFuncion
        Algoritmo sin_titulo
            resultado = suma(5,5)
            Escribir "resultado es ",resultado
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 62</h2>
<h3>Factorial de un número</h3>

<pre>
    <code>
        Funcion resultado<-factorial(num)
	        resultado = 1
	    Para i=1 Hasta num Con Paso 1 hacer
		    resultado = resultado*i
	    FinPara
        FinFuncion
        Algoritmo sin_titulo
            resultado = factorial(4)
            Escribir "resultado ",resultado
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 63</h2>
<h3>Mayor de tres números</h3>

<pre>
    <code>
        Funcion num_mayor(num1,num2,num3)
	        si num1>num2 y num1>num3 Entonces
		        Escribir num1
	        FinSi
	        si num2>num1 y num2>num3 Entonces
		        Escribir num2
	        FinSi
	        si num3>num2 y num3>num1 Entonces
		        Escribir num3
	        FinSi
        FinFuncion
        Algoritmo sin_titulo
            num_mayor(1,5,3)
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 64</h2>
<h3>Área de un círculo</h3> 
<pre>
    <code>
        Funcion resultado<-radio(num)
	        Escribir "Ingrese radio"
	        leer num
	        resultado = (num*num)*3.1416
        FinFuncion
        Algoritmo sin_titulo
            resultado = radio(num)
            Escribir resultado
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 65</h2>
<h3>Potencia de un número</h3> 

<pre>
    <code>
        Funcion resultado<-potencia(num1,num2)
            Escribir "ingrese primera base"
            leer num1
            Escribir "ingrese esponente"
            leer num2

            resultado=1
            Para i=1 hasta num2 Con Paso 1 Hacer
                resultado = num1*resultado
            FinPara		
        FinFuncion

        Algoritmo sin_titulo
            resultado  =potencia(num1,num2)
            Escribir resultado
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 66</h2>
<h3>Ordenamiento de una lista</h3> 

<pre>
    <code>

    </code>
</pre>
<br>

<h2>Ejercicio 67</h2>
<h3>Promedio de una lista</h3> 

<pre>
    <code>
        Funcion array(x,resultado,limite)
            si limite>0 Entonces
                resultado = resultado + x[limite]
                limite = limite - 1
                array(x,resultado,limite)
            SiNo
                Escribir resultado
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Dimension array2[4]
            array2[1] = 2
            array2[2] = 2
            array2[3] = 2
            array2[4] = 2
            array(array2 ,0, 4)
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 68</h2>
<h3>Inversión de una cadena</h3> 

<pre>
    <code>
        Funcion convertir(i,a,resultado)
            Para i= Longitud(a) Hasta 1 Con Paso -1 Hacer
                Escribir Subcadena(a, i,i ) Sin Saltar
            FinPara
            Escribir ""
        FinFuncion
        Algoritmo sin_titulo
            convertir(1,'hola',1)
            
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 69</h2>
<h3>Verificación de número primo</h3> 

<pre>
    <code>
        Funcion resultado<-primo(num)
            Definir divisor, limite Como Entero
            
            resultado = Verdadero
            limite = redon(raiz(num))
            divisor = 2
            
            si num <= 1 Entonces
                resultado = Falso
            SiNo
                Mientras resultado Y divisor <= limite Hacer
                    Si num % divisor == 0 Entonces
                        resultado = Falso
                    SiNo
                        divisor = divisor + 1
                    FinSi
                FinMientras
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Leer num
            Imprimir primo(num)
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 70</h2>
<h3>Conversión de grados Celsius a Fahrenheit</h3> 

<pre>
    <code>
        Funcion resultado= grados(grados1)
	        resultado = grados1*(9/5) + 32
        FinFuncion
        Algoritmo sin_titulo
            resultado=grados(50)
            Escribir 'su resultado es ',resultado
        FinAlgoritmo
    </code>
</pre>
