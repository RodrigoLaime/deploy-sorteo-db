## body-parser
-agregar a nuestro request el campo body de acuerdo al tipo de contenido (texto) enviado en las cabeceras http.

body-parser es un paquete de NPM que analiza los cuerpos de las solicitudes entrantes en un middleware antes que sus controladores, disponibles en la req.bodypropiedad.

-app.use(bp.json())analiza las solicitudes en las que Content-Type: application/jsonestá presente el encabezado y transforma la entrada JSON basada en texto en variables accesibles por JS en req.body. 
-app.use(bp.urlencoded({extended: true})hace lo mismo para las solicitudes codificadas en URL. precisa extended: true que el req.body objeto contendrá valores de cualquier tipo en lugar de solo cadenas.
## mongoose.Promise = global.Promise;
-Si queremos usar mongoose en una posición diferente dentro de los códigos, debe verse como modo global, es por eso que debemos configurar mongoose como:
-Por lo tanto, usé promise y global para usar mongoose en cualquier lugar como Async al escribir mongoose.

## 'useNewUrlParser', true
evitar advertencias de obsolescencia

El controlador MongoDB Node.js reescribe la herramienta que usa para analizar cadenas de conexión MongoDB . Debido a que este es un cambio tan grande, colocaron el nuevo analizador de cadenas de conexión detrás de una bandera. Para activar esta opción, pase la useNewUrlParseropción a mongoose.connect() o mongoose.createConnection().

"analiza cadenas de conexión MongoDB"

## cors
El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent (en-US) obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece. Un agente crea una petición HTTP de origen cruzado cuando solicita un recurso desde un dominio distinto, un protocolo o un puerto diferente al del documento que lo generó.

## 
El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.