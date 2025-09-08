# Laboratorio de módulos y exports

## Requisitos previos

Editor de código (ej. VS Code).

Node.js instalado (para ejecutar programas en la terminal).

## Preparación

Clonar el respositorio
```bash
git clone sshurl
```
Moverse al repositorio clonado
```bash
cd nombreDelRepo
```

Instalar las dependencias
```bash
npm install
```
Abrir en vscode
```bash
code .
```
Ejecutar el archivo para ver lo que hace tu código
```bash
node --watch nombreArchivo
```

## Instrucciones

Los módulos son archivos separados para contener código y datos. Puedes elegir importar todo, o especificar qué importar.

### Importante ⚠️⚠️⚠️

Para ejecutar y probar tus funciones deberas usar el index.js de la siguiente manera:

Por ejemplo para probar la función del archivo **task1.js**

```bash
node index.js 1 200
```
Donde el argumento después del archivo index.js es el número del task a ejecutar en el ejemplo sería task1.js

El argumento siguiente del número de archivo task a ejecutar, es el valor que pide como parametro tu función. 

Imagen de ejemplo:

![Imagen de ejemplo de ejecución del archivo index.js en la terminal](./image.png)

**¡Hoy, escribirás código que use módulos!**

Las clases, objetos y funciones para cada una de estas tareas se importarán en `index.js`. **¡Deben tener nombres específicos!**


## Tareas

1. María está calculando el costo de los pagos mensuales. Por cada transacción hay una tarifa de $3 y un interés del 1% (0.01).  
   * Dado un monto de transacción como entrada, exporta una función que devuelva el valor que ella debería pagar.  
     * Esta función debe poder tomar un número como entrada y devolver un número como salida.

3. Ed quiere una forma de ingresar los nombres de tres de sus amigos.  
   * Exporta una clase que tomará 3 argumentos para construir un objeto con 3 propiedades.  
     * Las 3 propiedades en el constructor deben llamarse `name1`, `name2` y `name3`.

4. Ed quiere una forma de calcular una edad a partir de una fecha de nacimiento dada.  
   * Exporta una función que tomará 3 argumentos - un **año**, un **mes** y un **día** - y luego devolverá una edad precisa.  
     * Por ejemplo, `ageCalculator(2000, 12, 25)` debería devolver la edad de alguien nacido el 25 de diciembre de 2000.

5. Ed quiere una forma de calcular las edades de sus amigos.  
   * Exporta una clase que devolverá una cadena con el nombre y la edad de un amigo dado. Debe:  
     * Tomar 4 argumentos - un **nombre**, un **año**, un **mes** y un **día** - y construir un objeto con esas 4 propiedades.  
     * Tener un método público llamado `returnAge()` que devolverá la siguiente cadena: `<name> tiene <age> hoy!`

## Tareas Extra

Si has completado las tareas anteriores, intenta las siguientes tareas extra:

5. Un profesor quiere crear una rúbrica para calificar a los estudiantes en base a una puntuación de 0 a 11.  
   * Un estudiante aprueba si tiene una puntuación mayor o igual a 5. Exporta una función que devuelva "Pass" o "Fail".

6. Un profesor también quiere marcar a los estudiantes que obtengan una puntuación alta de 9 o más.  
   * Extiende la función para que devuelva "Excellent" para puntuaciones mayores que 8.

7. Un profesor también quiere marcar a los estudiantes que obtengan una puntuación perfecta de 11.  
   * Extiende la función para que devuelva "Perfect" para una puntuación de 11.
