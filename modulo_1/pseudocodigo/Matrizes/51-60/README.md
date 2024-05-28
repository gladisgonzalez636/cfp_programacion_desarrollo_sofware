<h2>Ejercicio 51</h2> 
<h3></h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension fila[3,3]
            Dimension columna[3,3]
            fila[1,1] = 1
            fila[1,2] = 2
            fila[1,3] = 3
            fila[2,1] = 4
            fila[2,2] = 5
            fila[2,3] = 6
            fila[3,1] = 7
            fila[3,2] = 8
            fila[3,3] = 9
            columna[1,1] = 1
            columna[1,2] = 2
            columna[1,3] = 3
            columna[2,1] = 4
            columna[2,2] = 5
            columna[2,3] = 6
            columna[3,1] = 7
            columna[3,2] = 8
            columna[3,3] = 9
            Para f=1 Hasta 3 Con Paso 1 Hacer
                Para c=1 Hasta 3 Con Paso 1 Hacer
                    si fila[f,1] = columna[c,1] Entonces
                        resultado = fila[f,1]+columna[c,1]
                        Escribir fila[f,1],'+',columna[c,1],'=', resultado
                        si fila[f,2] = columna[c,2] Entonces
                            resultado = fila[f,2]+columna[c,2]
                            Escribir fila[f,2],'+',columna[c,2],'=', resultado
                        FinSi
                        si fila[f,3] = columna[c,3] Entonces
                            resultado = fila[f,3]+columna[c,3]
                            Escribir fila[f,3],'+',columna[c,3],'=', resultado
                        FinSi
                    FinSi
                FinPara
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 52</h2>
<h3></h3>
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension promedio[3,4]
            promedio[1,1] = 10
            promedio[1,2] = 20
            promedio[1,3] = 30
            promedio[1,4] = 40
            promedio[2,1] = 50
            promedio[2,2] = 60
            promedio[2,3] = 70
            promedio[2,4] = 80
            promedio[3,1] = 10
            promedio[3,2] = 20
            promedio[3,3] = 30
            promedio[3,4] = 40
            Para f=1  hasta 4 Con Paso 1 Hacer
                Para j = 1 Hasta 3 Con Paso 1 Hacer
                    total = total + promedio[j,f]
                FinPara
                Escribir total/3
                total = 0
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 53</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension posicion[5,5]
            resultado=0
            posicion[1,1] = 10
            posicion[1,2] = 25
            posicion[1,3] = 30
            posicion[1,4] = 40
            posicion[1,5] = 50	
            posicion[2,1] = 10
            posicion[2,2] = 25
            posicion[2,3] = 30
            posicion[2,4] = 40
            posicion[2,5] = 50	
            posicion[3,1] = 10
            posicion[3,2] = 25
            posicion[3,3] = 10
            posicion[3,4] = 40
            posicion[3,5] = 50
            posicion[4,1] = 10
            posicion[4,2] = 25
            posicion[4,3] = 30
            posicion[4,4] = 40
            posicion[4,5] = 50	
            posicion[5,1] = 10
            posicion[5,2] = 25
            posicion[5,3] = 30
            posicion[5,4] = 40
            posicion[5,5] = 50	
            Para f=1 Hasta 5 Con Paso 1 hacer
                resultado = resultado+posicion[f,f]
                resultado2 = resultado2+posicion[f,6 -f]		
            FinPara
            Escribir resultado
            Escribir resultado2	
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 54</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension posicion[4,3]	
            posicion[1,1] = 10
            posicion[1,2] = 20
            posicion[1,3] = 30 
            posicion[2,1] = 50
            posicion[2,2] = 60
            posicion[2,3] = 70  
            posicion[3,1] = 10
            posicion[3,2] = 20
            posicion[3,3] = 30    
            posicion[4,1] = 50
            posicion[4,2] = 60
            posicion[4,3] = 70
            para f=1 Hasta 4 Con Paso 1 hacer
                Para c=1 Hasta 3 Con Paso 1 Hacer
                    Escribir posicion[f,c]
                FinPara
            FinPara
            Para fila=1 Hasta 4 Con Paso 1 Hacer
                maximo = posicion[fila,1]
                Para columna=1 Hasta 3 Con Paso 1
                    si posicion[fila,columna]>maximo Entonces
                        maximo=posicion[fila,columna]
                    FinSi
                FinPara
                Escribir 'Fila ',fila,': ',maximo
	        FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 55</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Dimension posicion[4,4]
            posicion[1,1] = 10
            posicion[1,2] = 25
            posicion[1,3] = 30
            posicion[1,4] = 40	
            posicion[2,1] = 10
            posicion[2,2] = 25
            posicion[2,3] = 30
            posicion[2,4] = 40	
            posicion[3,1] = 10
            posicion[3,2] = 25
            posicion[3,3] = 10
            posicion[3,4] = 40	
            posicion[4,1] = 10
            posicion[4,2] = 25
            posicion[4,3] = 30
            posicion[4,4] = 40	
            Para fila=1 hasta 4 Con Paso 1 Hacer
                Para columna = 4 hasta 1 Con Paso -1 Hacer
                    Escribir posicion[fila,columna] ' ' Sin Saltar
                FinPara
                Escribir ' '
            FinPara
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 56</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Definir laberinto, menu Como caracter
            Definir fila_usuario, columna_usuario Como Entero
            Dimension laberinto[10,10]	
            fila_usuario = 1
            columna_usuario = 7	
            laberinto[1,7] = " "
            laberinto[1,6] = " "
            laberinto[2,6] = " "
            laberinto[3,5] = " "
            laberinto[3,6] = " "
            laberinto[4,5] = " "
            laberinto[5,5] = " "
            laberinto[6,5] = " "
            laberinto[7,5] = " "
            laberinto[8,5] = " "
            laberinto[9,6] = " "
            laberinto[9,5] = " "
            laberinto[10,6] = " "	
            Repetir
                Limpiar Pantalla
                Escribir fila_usuario
                Escribir columna_usuario
                Para fila = 1 Hasta 10 Con Paso 1 Hacer
                    Para columna = 1 hasta 10 Con Paso 1 Hacer
                        Si laberinto[fila, columna] == " " Entonces
                            Si fila  = fila_usuario Y columna = columna_usuario Entonces
                                laberinto[fila,columna] = "8"
                            FinSi
                        SiNo
                            Si laberinto[fila,columna] <> '8' Entonces
                                laberinto[fila,columna] = "1"
                            SiNo
                                Si fila  = fila_usuario Y columna = columna_usuario Entonces
                                    laberinto[fila,columna] = "8"
                                SiNo
                                    laberinto[fila,columna] = " "
                                FinSi
                            FinSi					
                        FinSi
                        Escribir laberinto[fila,columna],'  'Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara
                menu = 'Seleccione una opción 1.arriba 2.abajo 3.izquierda 4.derecha'
                Escribir menu
                Leer menu
                si menu = '1' Y laberinto[fila_usuario,columna_usuario+1] = ' ' Entonces
                    fila_usuario=fila_usuario-1
                FinSi
                Si menu = '3' Y laberinto[fila_usuario,columna_usuario-1] = ' ' Entonces
                    columna_usuario = columna_usuario -1;
                FinSi
                si menu = '2' Y laberinto[fila_usuario+1,columna_usuario] = ' ' Entonces
                    fila_usuario = fila_usuario+1
                FinSi
                si menu = '4' Y laberinto[fila_usuario,columna_usuario+1] = ' ' Entonces
                    columna_usuario=columna_usuario+1
                FinSi
            Hasta Que fila_usuario = 10 y columna_usuario= 6
            Limpiar Pantalla
            Escribir 'Felicidad has ganado'	
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 57</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Definir menu,cantidad_minas Como entero
            Definir fin_juego Como Logico
            Dimension juego[10,10]	
            Para fila=1 Hasta 10 Con Paso 1 hacer
                Para columna=1 Hasta 10 Con Paso 1 Hacer
                    si juego[fila,columna] <> 0 Entonces
                        juego[fila,columna] = 0
                    FinSi			
                    Escribir juego[fila,columna],' 'Sin Saltar
                FinPara
                Escribir ' '		
            FinPara	
            cantidad_minas= Aleatorio(3,5)	
            Para mina = 1 Hasta  cantidad_minas Con Paso 1 Hacer
                fila_aletoria = Aleatorio(3,5)
                columna_aleatoria = Aleatorio(3,5)
                juego[fila_aletoria,columna_aleatoria] = 5			
            FinPara	
            Repetir
                contador  = 0
                Escribir  'Escribe la posición que quieres cambiar'
                leer menu
                Para fila =1 hasta 10 Con Paso 1 Hacer
                    Para columna=1 hasta 10 Con Paso 1 Hacer
                        contador= contador + 1
                        si menu = contador Entonces
                            si juego[fila,columna] = 5 Entonces
                                fin_juego = Verdadero
                            SiNo
                                juego[fila,columna] = 1
                            FinSi					
                        FinSi	
                        Escribir juego[fila,columna],' 'Sin Saltar
                    FinPara	
                    Escribir ''
                FinPara	
            Hasta Que fin_juego == Verdadero
            Limpiar Pantalla
            Escribir 'perdiste'		
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 58</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Definir laberinto, menu Como caracter
            Definir fila_usuario, columna_usuario Como Entero
            Dimension laberinto[10,10]
            fila_usuario = 1
            columna_usuario = 7	
            laberinto[1,7] = " "
            laberinto[1,8] = " "
            laberinto[1,9] = " "
            laberinto[1,6] = " "
            laberinto[2,6] = " "
            laberinto[2,8] = " "
            laberinto[3,1] = " "
            laberinto[3,2] = " "
            laberinto[3,3] = " "
            laberinto[3,4] = " "
            laberinto[3,5] = " "
            laberinto[3,6] = " "
            laberinto[3,8] = " "
            laberinto[4,5] = " "
            laberinto[4,8] = " "
            laberinto[5,5] = " "
            laberinto[5,8] = " "
            laberinto[6,5] = " "
            laberinto[6,8] = " "
            laberinto[7,5] = " "
            laberinto[7,8] = " "
            laberinto[8,8] = " "
            laberinto[8,5] = " "
            laberinto[9,6] = " "
            laberinto[9,5] = " "
            laberinto[9,8] = " "
            laberinto[10,5] = " "
            laberinto[10,6] = " "
            laberinto[10,8] = " "	
            Repetir
                Limpiar Pantalla
                Escribir fila_usuario
                Escribir columna_usuario
                Para fila = 1 Hasta 10 Con Paso 1 Hacer
                    Para columna = 1 hasta 10 Con Paso 1 Hacer
                        Si laberinto[fila, columna] == " " Entonces
                            Si fila  = fila_usuario Y columna = columna_usuario Entonces
                                laberinto[fila,columna] = "8"
                            FinSi
                        SiNo
                            Si laberinto[fila,columna] <> '8' y  laberinto[fila,columna] <> 'm'  Entonces
                                laberinto[fila,columna] = "1"
                            SiNo
                                Si fila  = fila_usuario Y columna = columna_usuario Entonces
                                    laberinto[fila,columna] = "8"
                                SiNo
                                    laberinto[fila,columna] = " "
                                FinSi
                            FinSi
                            si laberinto[3,1] == " " Entonces
                                laberinto[3,1] = "m" 
                            FinSi
                            si laberinto[1,9] == " " Entonces
                                laberinto[1,9] = "m" 
                            FinSi
                            si laberinto[10,5] == " " Entonces
                                laberinto[10,5] = "m" 
                            FinSi
                        FinSi
                        Escribir laberinto[fila,columna],'  'Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara
                menu = 'Seleccione una opción 1.arriba 2.abajo 3.izquierda 4.derecha'
                Escribir menu
                Leer menu
                si menu = '1' Y laberinto[fila_usuario,columna_usuario+1] = ' ' Entonces
                    fila_usuario=fila_usuario-1
                FinSi
                Si menu = '3' Y laberinto[fila_usuario,columna_usuario-1] = ' ' Entonces
                    columna_usuario = columna_usuario -1;
                FinSi
                si menu = '2' Y laberinto[fila_usuario+1,columna_usuario] = ' ' Entonces
                    fila_usuario = fila_usuario+1
                FinSi
                si menu = '4' Y laberinto[fila_usuario,columna_usuario+1] = ' ' Entonces
                    columna_usuario=columna_usuario+1
                FinSi
            Hasta Que fila_usuario = 10 y columna_usuario= 6 o fila_usuario = 10 y columna_usuario = 8
            Limpiar Pantalla
            Escribir 'Felicidad has ganado'
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 59</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Definir existe_numero Como Logico
            Definir menu,posicion Como Entero
            Dimension rompecabeza[4,4]
            contador = 0	
            Para recorrer=1 Hasta 15 Con Paso 1 Hacer
                Repetir
                    existe_numero = Verdadero
                    fila_aleatoria= Aleatorio(1,4)
                    columna_aleatoria = Aleatorio(1,4)
                    Si rompecabeza[fila_aleatoria,columna_aleatoria] = 0 Entonces
                        rompecabeza[fila_aleatoria,columna_aleatoria]  = recorrer
                        existe_numero = Falso
                    FinSi
                Hasta Que existe_numero = Falso
            FinPara	
            para fila = 1 Hasta 4 Con Paso 1 Hacer
                Para columna=1 Hasta 4 Con Paso 1 Hacer
                    Escribir rompecabeza[fila,columna],'  |  ' Sin Saltar
                FinPara
                Escribir ' '
            FinPara	
            Repetir
                Escribir 'ingrese posicion'
                leer posicion
                para fila = 1 Hasta 4 Con Paso 1 Hacer
                    Para columna=1 Hasta 4 Con Paso 1 Hacer
                        si posicion== rompecabeza[fila,columna] Entonces
                                //arriba
                                si fila-1 <= 4 y rompecabeza[fila-1,columna] == 0 Entonces
                                    rompecabeza[fila-1,columna] = posicion
                                    rompecabeza[fila,columna] = 0
                                    fila = 5
                                    columna = 5
                                SiNo
                                    //abajo
                                    si fila+1 <= 4 y rompecabeza[fila+1,columna] == 0 Entonces
                                        rompecabeza[fila+1,columna] = posicion
                                        rompecabeza[fila,columna] = 0
                                        fila = 5
                                        columna = 5
                                    SiNo
                                        //izquierda
                                        si  columna-1 >= 1 y rompecabeza[fila,columna-1] == 0 Entonces
                                            rompecabeza[fila,columna-1] = posicion
                                            rompecabeza[fila,columna] = 0
                                            fila = 5
                                            columna = 5
                                        SiNo
                                            //derecha
                                            si columna+1 <= 4 y rompecabeza[fila,columna+1] == 0 Entonces
                                                rompecabeza[fila,columna+1] = posicion
                                                rompecabeza[fila,columna] = 0
                                                fila = 5
                                                columna = 5
                                            FinSi
                                        FinSi
                                    Finsi
                                FinSi
                            FinSi
                    FinPara
                FinPara		
                para fila = 1 Hasta 4 Con Paso 1 Hacer
                    Para columna=1 Hasta 4 Con Paso 1 Hacer
                        Escribir rompecabeza[fila,columna],' | ' Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara
            Hasta Que posicion = 100
        FinAlgoritmo
    </code>
</pre>
<br>

<h2>Ejercicio 60</h2>
<h3></h3> 
<pre>
    <code>
        Algoritmo sin_titulo
            Definir num, inicio_fila, inicio_columna, sudoku Como Entero
            Definir existe Como Logico
            Dimension sudoku[9,9]
            Para f=1 hasta 9 con paso 1 Hacer
                para c=1 Hasta 9 Con Paso 1 Hacer			
                    para num=1 Hasta 9 Con Paso 1 Hacer
                        existe = Falso
                        Repetir					
                            Para vc = 1 Hasta 9 Con Paso 1 Hacer
                                si num == sudoku[f,vc] Entonces
                                    existe=Verdadero
                                    vc = 9
                                FinSi
                            FinPara					
                            Para vf = 1 Hasta 9 Con Paso 1 Hacer
                                si num == sudoku[vf,c] Entonces
                                    existe=Verdadero
                                    vf = 9
                                FinSi
                            FinPara					
                            si f>=1 y f<=3 Entonces
                                inicio_fila = 1
                            SiNo
                                si f>=4 y f<=6 Entonces
                                    inicio_fila = 4
                                SiNo
                                    inicio_fila = 7
                                FinSi
                            FinSi					
                            si c>=1 y c<=3 Entonces
                                inicio_columna = 1
                            SiNo
                                si c>= 4 y c<=6 Entonces
                                    inicio_columna = 4
                                SiNo
                                    inicio_columna = 7
                                FinSi
                            FinSi					
                            Para i = inicio_fila hasta inicio_fila+2 Con Paso 1 Hacer
                                Para j = inicio_columna Hasta inicio_columna+2 Con Paso 1 Hacer
                                    si num == sudoku[i,j] Entonces
                                        existe = Verdadero
                                        i = inicio_fila+2
                                        j = inicio_columna+2								
                                    FinSi
                                FinPara
                            FinPara					
                            si existe == Falso Entonces
                                sudoku[f,c] = num
                                num = 9
                            FinSi					
                        Hasta Que existe == Verdadero				
                    FinPara
                    si sudoku[f,c] == 0 Entonces
                        f = 1
                        c = 1
                    FinSi			
                FinPara		
            FinPara	
            Para fila=1 hasta 9 Con Paso 1 Hacer
                Para columna=1 hasta 9 Con Paso 1 Hacer
                    si columna<>3 y columna<>6 Entonces
                        separador = ' '
                    SiNo
                        separador='|'
                    FinSi 
                    Escribir sudoku[fila,columna],separador Sin Saltar
                FinPara
                Escribir ' '
                si fila == 3 o fila==6 Entonces
                    Escribir '-----------------'
                FinSi
            FinPara
        FinAlgoritmo
    </code>
</pre>
