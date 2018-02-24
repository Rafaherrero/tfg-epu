![](https://raw.githubusercontent.com/Rafaherrero/tfg-epu/master/img/Comilona.png)
Este repositorio contiene el código correspondiente a la aplicación Comilona, desarrollada para el Trabajo de Fin de Grado de Rafael Herrero Álvarez.

## TFG: Una aproximación al pensamiento computacional a través de la nutrición

En la actualidad, en estudios preuniversitarios se enseña computación siguiendo un modelo de alfabetización digital, es decir, se enseña como utilizar un procesador de texto, navegar por Internet, etc. Sin embargo, con este proyecto intentamos acercar conceptos más avanzados relacionados con el pensamiento computacional. En este caso buscamos enseñar conceptos de programación a través de la nutrición, utilizando un lenguaje de programación visual basado en Blockly.

La información completa se puede encontrar en la memoria de este trabajo, ubicado en la carpeta *mem*.

La estructura de este repositorio es la siguiente:

      .
      ├── bib          # Artículos relacionados con el proyecto
      ├── mem          # Memoria del trabajo
      ├── pres         # Presentación del trabajo
      └── code         # Código fuente 

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

## Uso de la versión portable

Actualmente Comilona se encuentra en modo portable para Windows y sistemas Linux tanto de 32 bits como de 64 bits. Por el momento no hay versión portable para macOS, aunque sí en modo de desarrollo. Esta versión te permite ejecutar Comilona sin tener que instalar nada en tu máquina. Simplemente descarga el archivo correspondiente a tu sistema, descomprímelo y ejecuta 'Comilona.exe' si estas en Windows, o 'Comilona' si estas en Linux. Puedes encontrar los enlaces a los ficheros en el apartado de [*releases*](https://github.com/Rafaherrero/tfg-epu/releases/tag/1.0), o bajo estas líneas.

* [Comilona Windows 64 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Windows.64bits.zip)
* [Comilona Windows 32 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Windows.32bits.zip)
* [Comilona Linux 64 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Linux.64bits.zip)
* [Comilona Linux 32 bits](https://github.com/Rafaherrero/tfg-epu/releases/download/1.0/Comilona.Linux.32bits.zip)
