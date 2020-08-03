# Dnrpa-Prende-Digital-api
Implementación en JS para la comunicación con el SOAP API de emisión de prenda digitales del DNRPA


## Firmando PDF
1. Se firman en: https://firmar.gob.ar/firmador/#/
#### http://www.afip.gob.ar/firmadigital/
¿Qué es la firma digital?
La firma digital es una herramienta tecnológica que permite garantizar la autoría e integridad de los documentos digitales, posibilitando que éstos posean la misma característica que la firma hológrafa (de puño y letra) exclusiva de los documentos en papel. Una firma digital es un conjunto de datos asociados a un mensaje digital que permite garantizar la identidad del firmante y la integridad del mensaje.

Cada titular de una firma digital posee un par de claves asociadas, una privada y otra pública, generada mediante un proceso matemático.

La CLAVE PRIVADA es utilizada por su titular para firmar digitalmente un documento o mensaje, es secreta y mantenida por ese titular bajo su exclusiva responsabilidad

La CLAVE PÚBLICA es utilizada por el receptor de un documento o mensaje firmado para verificar la integridad y la autenticidad, asegurando el “no repudio”.

Ambas claves se encuentran asociadas entre sí por las características especiales del proceso matemático.

La firma digital funciona utilizando complejos procedimientos matemáticos que relacionan el documento firmado con información propia del firmante, y permiten que terceras partes puedan reconocer la identidad del firmante y asegurarse que los contenidos no han sido modificados.

El firmante genera, mediante una función matemática, una huella digital del mensaje, la cual se cifra con la clave privada de éste. El resultado es lo que se denomina firma digital, que se enviará adjunta al mensaje original. De esta manera el firmante adjuntará al documento una marca que es única para dicho documento y que sólo él es capaz de producir.

Para realizar la verificación del mensaje, en primer término el receptor generará la huella digital del mensaje recibido, luego descifrará la firma digital del mensaje utilizando la clave pública del firmante y obtendrá de esa forma la huella digital del mensaje original; si ambas huellas digitales coinciden, significa que no hubo alteración y que el firmante es quien dice serlo.

El sistema opera de tal modo que la información cifrada con una de las claves sólo puede ser descifrada con la otra. De este modo si un usuario cifra determinada información con su clave privada, cualquier persona que conozca su clave pública podrá descifrar la misma.

En consecuencia, si es posible descifrar un mensaje utilizando la clave pública de una persona, entonces puede afirmarse que el mensaje lo generó esa persona utilizando su clave privada (probando su autoría).

Según la legislación argentina, si un documento firmado digitalmente es verificado correctamente, se presume, salvo prueba en contrario, que proviene del suscriptor del certificado asociado y que no fue modificado.

Por otra parte, para reconocer que un documento ha sido firmado digitalmente se requiere que el certificado digital del firmante haya sido emitido por un Certificador Licenciado (o sea que cuente con la aprobación del Ente Licenciante).

# Ente licenciante
https://www.argentina.gob.ar/modernizacion/administrativa/firmadigital/entelicenciante
https://firmar.gob.ar/firmador/#/
https://www.argentina.gob.ar/sites/default/files/firmador_pasoapaso.pdf
https://www.argentina.gob.ar/autoridad-certificante-de-la-administracion-publica/autoridades-de-registro
https://www.argentina.gob.ar/valida-los-documentos-electronicos-firmados-digitalmente
