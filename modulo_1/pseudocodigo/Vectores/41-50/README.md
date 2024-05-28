<h2>Ejercicio 41<h2>
<h3>Suma de Elementos</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num1,num2,num3,num4,num5 Como Entero
            Escribir 'primer numero'
            Leer num1
            Dimension uno[1]
            uno[1] = num1
            Escribir uno[1]
            Escribir 'segundo numero'
            Leer num2
            Dimension dos[2]
            dos[2] = num2
            Escribir dos[2]
            Escribir 'Tercer numero'
            Leer num3
            Dimension tres[3]
            tres[3] = num3
            Escribir 'cuarto numero'
            Leer num4
            Dimension cuatro[4]
            cuatro[4] = num4
            Escribir cuatro[4]  
            Escribir 'quinto numero'
            Leer num5
            Dimension cinco[5]
            cinco[5] = num5
            Escribir cinco[5]
            Escribir 'suma ',num1+num2+num3+num4+num5
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 42<h2>
<h3>Mayor y Menor en un Array</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension nota[10]
            Definir num,promedio Como Real
            Escribir 'Ingrese notas'
            Para i=1 hasta 10 con paso 1 Hacer
                Escribir 'ingresar nota'
                Leer nota[i]
            FinPara
            suma = 0
            Para i = 1 Hasta 10 Con Paso 1 Hacer
                suma = suma + nota[i]
            FinPara
            promedio = suma/10
            Escribir 'promedio ',promedio
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 43<h2>
<h3>Promedio de Notas</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension nota[10]
            Definir num,promedio Como Real
            Escribir 'Ingrese notas'
            Para i=1 hasta 10 con paso 1 Hacer
                Escribir 'ingresar nota'
                Leer nota[i]
            FinPara
            suma = 0
            Para i = 1 Hasta 10 Con Paso 1 Hacer
                suma = suma + nota[i]
            FinPara
            promedio = suma/10
            Escribir 'promedio ',promedio
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 44<h2>
<h3>Contador de Números Pares</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como Entero
            Dimension num[6]
            Para i = 1 Hasta 6 Con Paso 1 Hacer
                si i%2 == 0 Entonces
                    resultado = resultado + [1]
                    Escribir i
                FinSi
            FinPara
            Escribir 'Cantidad de pares ', resultado
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 45<h2>
<h3>Búsqueda de Elemento</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como caracter
            Escribir 'Letra'
            Leer num
            Dimension abecedario[7]
            abecedario[1] = 'a'
            abecedario[2] = 'b'
            abecedario[3] = 'c'
            abecedario[4] = 'd'
            abecedario[5] = 'e'
            abecedario[6] = 'f'
            abecedario[7] = 'g'
            Para i =1 Hasta 7 Con Paso 1 Hacer
                si num == abecedario[i] Entonces
                    Escribir 'caracter encontrado ',num	
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 46<h2>
<h3>Inversión de un Array</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num Como Entero
            Dimension num[10]
            Para i=10 Hasta 1 Con Paso -1 Hacer
                num[i] = i
                Escribir num[i]
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 47<h2>
<h3>Contador de Ocurrencias</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir ingresar Como caracter
            Definir contador Como Entero
            Escribir 'Ingrese letra'
            Leer ingresar
            Dimension num[15]
            num[1] = 'a'
            num[2] = 'b'
            num[3] = 'c'
            num[4] = 'd'
            num[5] = 'e'
            num[6] = 'f'
            num[7] = 'g'
            num[8] = 'h'
            num[9] = 'i'
            num[10] = 'j'
            num[11] = 'a'
            num[12] = 'b'
            num[13] = 'c'
            num[14] = 'd'
            num[15] = 'e'
            contador = 0
            Para i=1 Hasta 15 Con Paso 1 Hacer
                si num[i] = ingresar Entonces
                    contador=contador+1
                FinSi
            FinPara
            Escribir 'El caracter ',ingresar,' aparece ', contador,' veces'
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 48<h2>
<h3>Cálculo de Descuento por Categoría</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension producto[2,3]
            Dimension categoria[3,2]
            producto[1,1] = 'pantalon'
            producto[1,2] = '100'
            producto[1,3] = 'A'            
            producto[2,1] = 'Camisa'
            producto[2,2] = '85'
            producto[2,3] = 'B'          
            categoria[1,1] = 'A'
            categoria[1,2] = '10'           
            categoria[2,1] = 'B'
            categoria[2,2] = '5'          
            categoria[3,1] = 'C'
            categoria[3,2] = '0'          
            Para f=1 Hasta 2 Con Paso 1 Hacer   
                Para fc =1 Hasta 3 Con Paso 1 Hacer
                    si producto[f,3] = categoria[fc,1] Entonces
                        descuento = ConvertirANumero(producto[f,2]) * ConvertirANumero(categoria[fc,2])/100
                        resultado = ConvertirANumero(producto[f,2]) - descuento
                        Escribir producto[f,1], '|', producto[f,2],'|', categoria[fc,1],'|', descuento,'|', resultado
                    FinSi
                FinPara
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 49<h2>
<h3>Ordenamiento de Array</h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Definir numA Como Entero
            Dimension numA[6]
            numA[1] = 2
            numA[2] = 8
            numA[3] = 6
            numA[4] = 4
            numA[5] = 1
            numA[6] = 3
            Para i=1 Hasta 6 Con Paso 1 Hacer
                num_menor = numA[i]
                Para p =i +1 Hasta 6 Con Paso 1 Hacer
                    si numA[i]>numA[p] Entonces
                        numA[i]=numA[p] 
                        numA[p] = num_menor
                        num_menor = numA[i]
                    finsi        
                FinPara
                Escribir num_menor
            FinPara   
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 50<h2>
<h3>Eliminación de Duplicados</h3>
<pre>
    <code>       
        Algoritmo sin_titulo
            Definir numA,numB,ultima_posicion Como Entero
            existe = falso
            ultima_posicion = 1
            Dimension numB[12]
            Dimension numA[12]
            numA[1] = 1
            numA[2] = 2
            numA[3] = 3
            numA[4] = 2
            numA[5] = 5
            numA[6] = 2
            numA[7] = 7
            numA[8] = 8
            numA[9] = 9
            numA[10] = 10
            numA[11] = 2
            numA[12] = 3
            Para i=1 Hasta 12 con paso 1 Hacer
                Para p = 1 Hasta 12 Con Paso 1 Hacer
                    si numB[p] = numA[i]
                        existe = Verdadero
                        p = 12
                    SiNo
                        existe=falso
                    FinSi
                FinPara
                si existe = falso
                    Escribir numA[i]
                    numB[ultima_posicion] = numA[i]
                    ultima_posicion= ultima_posicion+1
                FinSi    
            FinPara
        FinAlgoritmo
    </code>
</pre>