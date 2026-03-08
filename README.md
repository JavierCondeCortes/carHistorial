# Trabajo de Fin de Grado

## ¿En qué consiste?

- Consiste en una aplicación donde se puede llevar un mantenimiento de nuestro vehículo, pasando de tener las libretas con los apuntes y los tickets y facturas guardadas en el coche a tener una web donde se puede administrar todos los gastos y mantenimientos que se le hacen al coche. Siendo así, una manera de cambiar el papel y la posibilidad de la pérdida de documentos, a tenerlo todo centralizado y ordenado en el servidor donde puedes consultar los archivos cuantas veces quieras sin que ocupen sitio.

## ¿Qué tiene de innovación?

- El sector de la mecánica a nivel de tecnologías y gestión es muy rudimentario. Sí es cierto que hay manuales para los coches online, pero recalco que la gestión es muy rudimentaria. Para ello, la web nos permite dar de alta el vehículo. En este se puede crear mantenimiento, crear compra de material, tipo de combustible, aceite, líquido de frenos, anticongelante, para que en el caso de que se te acabe y lo hayas tirado o tengas varios coches de diferentes características, sepas cuál es el producto que tiene que usar cada vehículo.

## ¿De dónde viene la idea?

- La idea proviene de los problemas que tenemos en casa a la hora del mantenimiento de los vehículos, como anteriormente expliqué. Al tener 4 coches, de diferentes años y diferentes tipos de combustible, usan productos que si se usan de mala manera pueden deteriorar el motor a medida del tiempo, pudiendo crear pasta en los líquidos e inhabilitar los radiadores y el aceite, llegando a sobrecalentamientos. Eso es solo un ejemplo de lo que puede suceder si no se lleva un mantenimiento con su respectivo material.

## ¿Cómo se va a estructurar?

- La estructura del proyecto se basará en una web con tecnologías como ``Laravel`` usado como back donde alojaremos las ``APIs`` que consumiremos en el front que usará ``React + NextJS`` para un mayor rendimiento ademas aprovechando para hacer la página multiLanguage, y ``TailwindCSS`` usado como framework de CSS/UI. Como base de datos se usará ``MySql`` para almacenar los datos del programa.

## Estructura de Datos

- Para la estructura de datos habra que tener en cuenta diversos factores.

### Preguntas a hacerse antes de crear la base de datos

- - ¿Como acreditamos que el coches es de mi propiedad?
- - ¿Como es el funcionamiento de los archivos subidos para tener el registro?
- - ¿Que formularios va a haber?
- - ¿Que datos de los usuarios son necesarios para crearlos?
- - ¿Como se relaciona el usuario con los vehiculos?
- - ¿Quiero implementar diferentes tipos de vehiculos?

### Respuesta a las preguntas

- Si es cierto que son varias preguntas, a lo largo del tiempo e estado pensando como se podria hacer. No aseguro tener los elementos marcados con `*` para la presentación del TFG.

> `*` Validación del vehiculo mediante los papeles del del coche, nº bastidor, y documentos del Propietario (que coincidan con los del coche), mediante la lectura de los documentos con una tecnologia similar a la de la validacion del dni mediante foto.

> Subir los archivos *(pdf,jpg,png...)* para poder guardar lo anteriormente comentado de las facturas, tickets, productos...

### Estructura de la base de datos

> Formularios a tener en cuenta para los datos:
> - Registro del Usuario
> - Registro del Vehiculo + Editar + eliminar
> - Formulario de Nuevo Mantenimiento + editar + eliminar
> - Formulario de liquidos (aquellos que tienen mas de 1 coche tienen mucha variedad de liquidos)

> Para el usuario necesitaremos los siguientes datos:
> - Nombre
> - Apellidos
> - Email
> - Contraseña
> - `*`Metodo de verificación para la confirmacion de propiedad del vehiculo

> Para el vehiculo necesitamos:
> - id_usuario
> - id_marca (tabla a parte)
> - - nombre
> - id_modelo (tabla a parte)
> - - nombre
> - - id_marca
> - id_tipo (tabla a parte)
> - - nombre (electrico ,combustion ,hibrido_enchufable, hibrido_no_enchufable)
> - - motorización (ej 1.9TDI, 1.6i)
> - - - tipoCombustible (tabla a parte)
> - - kilowatios (ej 87kW, 110kW)
> - - motorizacion (ej 1.6GDI, 1.2Turbo)
> - - - tipoCombustible (tabla a parte)
> - id_pegatina_medioambiental (tabla a parte)
> - - nombre (B,C,Eco,0)
> - color
> - fecha_creacion
> - fecha_primera_matriculacion (opcional)
> - plazas
> - kilometros_recorridos
> - ultima_fecha_itv (opcional)
> - matricula (opcional)
> - numero_bastidor (opcional)(`*`requerido para la verificacion de propiedad)

> Para el formulario de mantenimiento necesitamos:
> - id_tipo (tabla a parte)
> - - nombre (preventivo `liquidos, neumaticos, desgaste`, predictivo `electronica, vibraciones_ruidos, bateria`, correctivo `reparacion mecanica, sustitucion_rotura`)
> - descripcion
> - fecha_mantenimiento
> - productos_comprados (opcional)
> - precio
> - km
> - subida_archivos (ticket, factura, imagen del cambio...)

> formulario de liquidos:
> - aceite de motor (15.000 o 1año)
> - frenos (1año)
> - caja de cambios (1año)
> - anticongelante (1año)
> - direccion (1año)
> - limpia parabrisas

### Conclusion

- Nos centraremos en lo esencial para el TFG, teniendo en cuenta que me gustaria expandirlo para darle un uso profesional.
