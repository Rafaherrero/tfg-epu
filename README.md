

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/Comilona.png)
Este repositorio contiene el código correspondiente a la aplicación Comilona, desarrollada para el Trabajo de Fin de Grado de Rafael Herrero Álvarez.

# TFG: Una aproximación al pensamiento computacional a través de la nutrición

En la actualidad, en estudios preuniversitarios se enseña computación siguiendo un modelo de alfabetización digital, es decir, se enseña como utilizar un procesador de texto, navegar por Internet, etc. Sin embargo, con este proyecto intentamos acercar conceptos más avanzados relacionados con el pensamiento computacional. En este caso buscamos enseñar conceptos de programación a través de la nutrición, utilizando un lenguaje de programación visual basado en Blockly.

La información completa se puede encontrar en la memoria de este trabajo, ubicado en la carpeta *mem*.

La estructura de este repositorio es la siguiente:

      .
      ├── bib          # Artículos relacionados con el proyecto
      ├── code         # Código fuente
      ├── img          # Imágenes para la guía de este README
      ├── mem          # Memoria del trabajo
      └── pres         # Presentación del trabajo 

## Instalación y uso del modo desarrollador
En este apartado se describen los pasos para instalar todos los componentes necesarios para poder acceder al modo de desarrollo de Comilona. Sin embargo, si lo que quiere es simplemente utilizar Comilona, en este mismo repositorio se aloja la versión portable con la que no tendrá que instalar nada en su equipo. En el siguiente apartado se encuentran los enlaces al mismo.

### Instalación en Windows

Lo primero que tenemos que instalar es *Node.js*. Si no lo tenemos ya, podemos descargarlo e instalarlo desde la [página oficial](https://nodejs.org/es/). Elegiremos la opción que ponga LTS "Recomendado para la mayoría". Una vez se haya descargado el fichero, lo ejecutamos e instalamos sin cambiar ninguna de las opciones por defecto, salvo que sepamos que estamos cambiando.

Cuando hayamos instalado *Node.js* tendremos que descargar este repositorio. Para ello, pulsamos sobre el botón "Clone or download" y luego sobre "Download ZIP" para descargar todo como un archivo comprimido.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/cloneordownload.png)

Una vez descargado, descomprimimos el fichero y accedemos a la carpeta "tfg-epu-master" y dentro de ella a la carpeta "code". Ahora pulsamos sobre el menú "Archivo" y "Abrir Windows PowerShell".

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/windowspowershell.png)

Una vez tengamos la consola de PowerShell abierta, solo tenemos que ejecutar `npm install` . Si todo ha ido bien, veremos como va instalando todo lo necesario para que Comilona funcione. El resultado final tiene que ser algo parecido a lo que se muestra en la captura bajo estas líneas.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/windowspowershell2.png)

Ya tenemos todo instalado. Para probarlo, simplemente tenemos que ejecutar `npm start` o `electron .` con la PowerShell sobre el mismo directorio "code". Con ello se abrirá Comilona con su interfaz final como se muestra en la captura.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/interfazcomilona.png)

### Instalación en sistemas Linux

En caso de querer instalarlo en sistemas basados en Linux, también tendremos que instalar *Node.js* y descargar este repositorio haciendo uso del botón "Clone or download" y luego sobre "Download ZIP". Una vez tengamos Comilona en el fichero comprimido, simplemente lo descomprimimos y entramos en la carpeta "tfg-epu-master" y luego en "code". Abrimos una terminal en este lugar pulsando con el botón derecho dentro de la carpeta y seleccionando la opción "Abrir en Terminal". Instalamos *Node.js* utilizando un gestor de paquetes, en nuestro caso, apt. Para ello, simplemente ejecutamos `sudo apt install nodejs`. Si nos pide confirmación, pulsamos la tecla "y".

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/nodejsinstall.png)

En caso de contar con otro gestor de paquetes diferentes, desde la [siguiente página](https://nodejs.org/en/download/) puede consultarse información sobre como instalar *Node.js* con otros gestores. En caso de no utilizar gestores, desde [esta página](https://nodejs.org/en/download/) podemos encontrar los archivos binarios que necesitemos.

Una vez instalado *Node.js*, ejecutamos `npm install` para que se instalen los demás archivos necesarios. El resultado debe ser algo parecido a lo mostrado en la captura siguiente:

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/npminstall.png)

Una vez termine el proceso, podemos ejecutar Comilona con `npm start`.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/Comilonalinux.png)

### Instalación en macOS

Lo primero que tenemos que instalar es *Node.js*. Si no lo tenemos ya, podemos descargarlo e instalarlo desde la [página oficial](https://nodejs.org/es/). Elegiremos la opción que ponga LTS "Recomendado para la mayoría". Una vez se haya descargado el fichero, lo ejecutamos e instalamos sin cambiar ninguna de las opciones por defecto, salvo que sepamos que estamos cambiando.

Tras instalar *Node.js* tenemos que descargar Comilona usando el botón de "Clone or Download" y luego "Download ZIP". Una vez descargado, lo descomprimimos y abrimos la aplicación "Terminal". En ella nos desplazamos hasta nuestra carpeta de "tfg-epu-master/code" con el comando `cd` y ejecutamos `npm install` como se muestra en la captura.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/installmacos.png)

Cuando termine de instalar todo, simplemente tenemos que ejecutarlo con el comando `npm start`.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/ComilonamacOS.png)

### Organización de los ficheros

En los apartados anteriores se explicó como instalar todo lo necesario para utilizar Comilona en el 'modo de desarrollo'. En este caso, se explica el contenido del repositorio para que se pueda crear o modificar los niveles y ejercicios ya existentes.
	 
      .
      └── code             # Carpeta principal con el código
	  ├── blocks       # Contiene la definición de los bloques personalizados de Blocky
	  ├── css          # Contiene los ficheros de estilo CSS
	  ├── img          # Contiene los recursos relacionados con imágenes
	  ├── js           # Contiene todo lo relacionado con el código Javascript
	      ├── blocky   # Contiene los ficheros de Blockly
	      ├── js_int.  # Intérprete de Javascript
	      ├── level x  # Javascript para la corrección de los ejercicios
	  ├── json         # Textos mostrados en Comilona, tanto en español como en inglés
	  └── video        # Contiene los vídeos de los ejercicios

### Creación de bloques 

Si se quiere crear bloques personalizados, tenemos que hacer uso de la herramienta [Blockly Developer Tools](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html). En la guía realizada por Google sobre Blockly podemos encontrar toda la información que necesitemos, como puede ser la [creación de bloques personalizados](https://developers.google.com/blockly/guides/create-custom-blocks/overview).

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/blockly.png)

La captura anterior muestra como se define el bloque para poner verduras en el plato. Bajo el directorio "code/blocks" se encuentran dos ficheros ".xml" que contienen la definición de los bloques usados en Comilona, tanto en español como en inglés, y que podemos cargar en la herramienta [Blockly Developer Tools](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html) haciendo uso del botón "Import Block Library".

## Versión portable

Actualmente Comilona se encuentra en modo portable para Windows y sistemas Linux tanto de 32 bits como de 64 bits. Por el momento no hay versión portable para macOS, aunque sí en modo de desarrollo. Esta versión te permite ejecutar Comilona sin tener que instalar nada en tu máquina. Simplemente descarga el archivo correspondiente a tu sistema, descomprímelo y ejecutalo haciendo doble click sobre 'Comilona.exe' si estas en Windows, o 'Comilona' si estas en Linux. Puedes encontrar los enlaces a los ficheros en el apartado de [*releases*](https://github.com/Rafaherrero/tfg-epu/releases/tag/1.0), o bajo estas líneas.

* [Comilona Windows 64 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Windows.64bits.zip)
* [Comilona Windows 32 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Windows.32bits.zip)
* [Comilona Linux 64 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Linux.64bits.zip)
* [Comilona Linux 32 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Linux.32bits.zip)

## Uso de Comilona

El juego de Comilona es muy sencillo, pensado para niños de 8 a 12 años. La interfaz cuenta con tres partes como se muestra en la captura siguiente.
+ **A:** esta columna de la izquierda contiene el resultado formado por los bloques que se coloquen. Está dividida en 4 secciones:
   - La parte superior contiene información sobre el reto que se ha de superar en el ejercicio.
   - En la mitad encontramos el resultado gráfico del ejercicio.
   - En la parte inferior se encuentran algunas de las frutas y verduras que se utilizan en Comilona.
   - Por último, encontramos los botones de control:
     - **Anterior:** nos permite volver al ejercicio anterior.
     - **Play:** con el comprobamos la solución planteada.
     - **Repetición:** nos permite repetir el ejercicio.
     - **Siguiente:** avanza al siguiente ejercicio, o nivel, según si estamos ya en el último ejercicio de ese nivel.
     - **Ayuda:** muestra la ventana de información que aparece al comienzo de cada ejercicio.
+ **B:** esta es la sección principal de Comilona, ya que se trata del área de trabajo de Blockly. Está formada por dos partes, una columna a la izquierda que contiene todos los bloques que se pueden utilizar en ese ejercicio, y otra a la derecha en blanco que es donde se irán colocando los bloques, según se arrastren desde la zona de la izquierda.
+ **C:** la barra inferior de Comilona nos indica en todo momento en que nivel y ejercicio nos encontramos y cual es el idioma actual, así como cambiarlo cualquiera de estos datos en todo momento.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/ventanaprincipal.png)

Comilona tiene un total de 13 ejercicios divididos en 3 niveles. En el nivel 1 veremos conceptos de programación como las secuencias. Avanzando, encontramos los bucles/repeticiones en el nivel 2. Para terminar, en el nivel 3 se introducen las funciones y los condicionales, así como se proponen retos mezclando todos los conceptos que se trabajan en Comilona.

Para superar los ejercicios tenemos que arrastrar los bloques que se nos muestran en la columna de la derecha del área de trabajo (**B**), al área blanca justo a la derecha. Estos bloques tienen que ser los correctos, así como estar en el orden propuesto para dar por válida una solución, ya que no se mira únicamente el resultado sino también el procedimiento.

Una vez entramos a cualquier ejercicio, vemos una ventana informativa como la que se encuentra bajo estas líneas. Tendremos que cerrarla y resolver el ejercicio como se nos pide en dicha ventana, que podremos abrir en todo momento pulsando el botón '?'. Una vez terminemos, pulsamos sobre el botón '►' y Comilona se encargará de mostrarnos visualmente que salida produce nuestra propuesta. Al terminar, se muestra una ventana informativa que nos dirá si hemos superado el reto o no, dándonos la oportunidad de ir al ejercicio anterior, repetir este o ir al siguiente.

![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/ventanainformativa.png)

## Enlaces 

Además de esta guía, también se han elaborado una serie de vídeos y documentos relacionados con Comilona, su instalación, su uso, etc.
* [Descripción de Comilona](https://github.com/Rafaherrero/tfg-epu/raw/master/bib/TECNOEDU.%20Comilona.%20Rafael%20Herrero%20%C3%81lvarez.pdf): descripción del juego en español.
* [Vídeo demostrativo de uso](https://www.youtube.com/watch?v=owxvBwSDFY8): este vídeo sirve para enseñar cómo funciona Comilona como juego en versión portable y sin necesidad de instalar nada.
* [Vídeo demostrativo de instalación](https://www.youtube.com/watch?v=rRPOOkqhIFU): este vídeo muestra como instalar Comilona en nuestro ordenador si decidimos utilizarlo con fines de desarrollo.

## Contacto

LinkedIn: [Rafael Herrero Álvarez](https://www.linkedin.com/in/rafaherrero/)
