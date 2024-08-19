## Historia de Usuario 1: Configuración Inicial y Estructura del Proyecto
### 1. Configuración del Proyecto

#### ¿Qué propósito cumple el archivo main.ts en un proyecto NestJS y por qué es crucial en la configuración inicial? 
R// Este es el punto de entrada, acà arrancamamos y configuramos el servidor de la aplicacion, para de esta forma orquestar la inicializacion de la aplicacion.
#### ¿Qué diferencia existe entre app.module.ts y app.controller.ts? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación?
R// El "app.controller.ts" se encarga de  ser un intermedio entre el exterior y la logica de negocio 
Mientras que  "app.module.ts" configura el ensamble de los modulos controladores y servicios

### 2. Creación de Módulos Básicos

#### ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?
R// Es importante porque hace que el código sea más fácil de entender, desarrollar, y mantener. De esta forma en cada modulo se mantiene una función específica, lo que permite trabajar en una parte sin afectar las demás.

#### ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
R// La modularidad afecta al momento de actualizar o corregir un módulo sin cambiar todo el sistema. Hace que sea más fácil agregar nuevas funciones aumentando su escalabilidad.

#### ¿Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?
R// Se generan archivos que contienen el codigo de cada modulo, Conteniendo controlador, servicios y otros componentes necesarios para que el modulo funcione. Relacionándose mediante Importaciones, para asi llamar codigo de otro modulo para aprovechar funcionalidades

### 3.Implementación de Controladores

#### ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?
R//  El endpoint podría no funcionar. devolviendo errores, no procesar los datos correctamente, o incluso no responder a las solicitudes. afectando la funcionalidad del endpoint porque el código no ejecuta la acción deseada.

#### ¿Por qué es importante manejar rutas dinámicas (por ejemplo, @Get(':id')) en aplicaciones que interactúan con bases de datos?
R//  Es importante, porque permiten acceder a datos específicos, como un registro por su ID. Esto es esencial para buscar, actualizar o eliminar datos precisos en la base de datos.

## Historia de Usuario 2: Implementación de la Lógica de Negocio y Seguridad

### 1.Desarrollo de Servicios

#### ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?
R//  Ayuda a mantener el código más organizado y limpio. Los controladores se enfocan solo en recibir y responder solicitudes, mientras que los servicios se encargan de la lógica compleja.

#### ¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?
R// La inyección de dependencias permite que los módulos trabajen juntos de manera flexible y ordenada. Facilita la modularidad al permitir que los módulos usen otros componentes sin estar fuertemente conectados entre sí. Esto también mejora la capacidad de prueba porque puedes reemplazar dependencias con versiones simuladas para hacer pruebas unitarias sin necesidad de usar el sistema completo.

### 2.Aplicación de Decoradores y Pipes

#### ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?
R// Cualquier error o dato incorrecto puede llevar a transacciones fallidas, fraudes, o pérdida de dinero. La validación asegura que solo los datos correctos y seguros se procesen, protegiendo tanto a los usuarios como a la empresa.

#### ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?
R// El endpoint podría comportarse de manera inesperada. Podría procesar datos incorrectos, no validar la información adecuadamente, o incluso fallar al ejecutar la operación. Esto puede causar errores en la lógica del negocio y afectar la seguridad y funcionalidad de la aplicación.

### 3.Configuración de Exception Filters

#### ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?
R// Proporcionando mensajes claros y comprensibles cuando algo sale mal, en lugar de errores confusos o fallos inesperados

#### ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?
R// Permite controlar cómo se gestionan los errores en toda la aplicación desde un solo lugar. Esto asegura consistencia en los mensajes de error, facilita el mantenimiento y mejora la seguridad, ya que puedes aplicar las mismas reglas de protección y manejo de errores en todos los módulos.