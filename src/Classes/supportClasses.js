class Helper
{
    static toXmlArray(type, array){
        let values = [];
        // cada tanto recibía un objecto que tiene adentro un array
        if (!Array.isArray(array)) {
            array = array.string;
        }
        if (array) {
            array.forEach((elem) => {
                values.push({$value:elem});
            });
        }
        return {[type]: values};
    }

    static toBase64(input) {
        return Buffer.from(input).toString('base64');
    }

    static clone(arrayOfObjects) {
        return arrayOfObjects.map( x => JSON.parse(JSON.stringify(x)))
    }
}


module.exports.Helper = Helper;

module.exports.Acreedor = class
{
    constructor(Cuit, RazonSocial, NumeroInscripcionIgj, FechaInscripcionIgj, Calle,
                Nro, Piso, Depto, CodigoPostal, CodigoProvincia, Partido, Localidad,
                Barrio, Telefono, Mails, NombreApellidoFirmante, CargoFirmante) {
        this.Cuit = Cuit;
        this.RazonSocial = RazonSocial;
        this.NumeroInscripcionIgj = NumeroInscripcionIgj;
        this.FechaInscripcionIgj = FechaInscripcionIgj;
        this.Calle = Calle;
        this.Nro = Nro;
        this.Piso = Piso;
        this.Depto = Depto;
        this.CodigoPostal = CodigoPostal;
        this.CodigoProvincia = CodigoProvincia;
        this.Partido = Partido;
        this.Localidad = Localidad;
        this.Barrio = Barrio;
        this.Telefono = Telefono;
        this.Mails = Mails;
        this.NombreApellidoFirmante = NombreApellidoFirmante;
        this.CargoFirmante = CargoFirmante;
    }
};

module.exports.Certificado = class {
    constructor(cod_estado_certificado, des_estado_certificado, tipo_vehiculo, anio_certificado,
                descripcion_chasis, descripcion_marca, descripcion_modelo, descripcion_motor,
                descripcion_tipo, fecha_anulado, id_aduana, id_fabrica, id_marca,
                id_marca_chasis, id_marca_motor, id_modelo, id_tipo, numero_certificado,
                numero_chasis, numero_motor, tipo_certificado, bloqueado, observaciones) {
        this.cod_estado_certificado = cod_estado_certificado;
        this.des_estado_certificado = des_estado_certificado;
        this.tipo_vehiculo = tipo_vehiculo;
        this.anio_certificado = anio_certificado;
        this.descripcion_chasis = descripcion_chasis;
        this.descripcion_marca = descripcion_marca;
        this.descripcion_modelo = descripcion_modelo;
        this.descripcion_motor = descripcion_motor;
        this.descripcion_tipo = descripcion_tipo;
        this.fecha_anulado = fecha_anulado;
        this.id_aduana = id_aduana;
        this.id_fabrica = id_fabrica;
        this.id_marca = id_marca;
        this.id_marca_chasis = id_marca_chasis;
        this.id_marca_motor = id_marca_motor;
        this.id_modelo = id_modelo;
        this.id_tipo = id_tipo;
        this.numero_certificado = numero_certificado;
        this.numero_chasis = numero_chasis;
        this.numero_motor = numero_motor;
        this.tipo_certificado = tipo_certificado;
        this.bloqueado = bloqueado;
        this.observaciones = observaciones;
    }
};

module.exports.CodigoDescription = class
{
    constructor(Codigo, Descripcion) {
        this.Codigo = Codigo;
        this.Descripcion = Descripcion;
    }
};

module.exports.Contrato = class
{
    constructor(TipoPrenda, Condicionamiento, CodigoModena, Monto, ClausulaAjuste,
                Tasa, MontoCuota, CantidadCuotas, FechaPrimerVencimiento, FechaContrato,
                LugarDeCelebracion, Grado, Concepto) {
        this.TipoPrenda = TipoPrenda;
        this.Condicionamiento = Condicionamiento;
        this.CodigoModena = CodigoModena;
        this.Monto = Monto;
        this.ClausulaAjuste = ClausulaAjuste;
        this.Tasa = Tasa;
        this.MontoCuota = MontoCuota;
        this.CantidadCuotas = CantidadCuotas;
        this.FechaPrimerVencimiento = FechaPrimerVencimiento;
        this.FechaContrato = FechaContrato;
        this.LugarDeCelebracion = LugarDeCelebracion;
        this.Grado = Grado;
        this.Concepto = Concepto;
    }
};


module.exports.Descarga = class
{
    constructor(Resultado, Documento, Hash) {
        this.Resultado = Resultado;
        this.Documento = Documento;
        this.Hash = Hash;
    }
};

module.exports.Deudor = class
{
    constructor (CodigoPersona, Nombres, Apellido, RazonSocial, Cuit, TipoDocumento,
                 NumeroDocumento, Sexo, Nacionalidad, EstadoCivil, Profesion, FechaNacimiento,
                 Edad, Calle, Nro, Piso, Depto, CodigoPostal, CodigoProvincia, Partido, Localidad,
                 Barrio, NombreApellidoConyuge, Mails) {
        this.CodigoPersona = CodigoPersona;
        this.Nombres = Nombres;
        this.Apellido = Apellido;
        this.RazonSocial = RazonSocial;
        this.Cuit = Cuit;
        this.TipoDocumento = TipoDocumento;
        this.NumeroDocumento = NumeroDocumento;
        this.Sexo = Sexo;
        this.Nacionalidad = Nacionalidad;
        this.EstadoCivil = EstadoCivil;
        this.Profesion = Profesion;
        this.FechaNacimiento = FechaNacimiento;
        this.Edad = Edad;
        this.Calle = Calle;
        this.Nro = Nro;
        this.Piso = Piso;
        this.Depto = Depto;
        this.CodigoPostal = CodigoPostal;
        this.CodigoProvincia = CodigoProvincia;
        this.Partido = Partido;
        this.Localidad = Localidad;
        this.Barrio = Barrio;
        this.NombreApellidoConyuge = NombreApellidoConyuge;
        this.Mails = Mails;
    }
};

module.exports.GaranteCodeudor = class
{
    constructor(Caracter,
                NombreApellido,
                TipoDocumento,
                NumeroDocumento,
                Cuit) {
        this.Caracter = Caracter;
        this.NombreApellido = NombreApellido;
        this.TipoDocumento = TipoDocumento;
        this.NumeroDocumento = NumeroDocumento;
        this.Cuit = Cuit;
    }
};

module.exports.Prenda = class
{
    constructor(Cpd, ResultadoConsulta, DatosDelContrato, AcreedorPrendario, Deudores,
                GarantesCodeudores, DatosDelCertificado, Documentos) {
        this.Cpd = Cpd;
        this.ResultadoConsulta = ResultadoConsulta;
        this.DatosDelContrato = DatosDelContrato;
        this.AcreedorPrendario = AcreedorPrendario;
        this.Deudores = Deudores;
        this.GarantesCodeudores = GaranteCodeudores;
        this.DatosDelCertficado = DatosDelCertificado;
        this.Documentos = Documentos;
    }
};