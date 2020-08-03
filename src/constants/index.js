module.exports = {
    TIPO_CONTRATO: {
        PRENDA: { value: "P".charCodeAt(0), name: "Prenda" },
        LEASING: { value: "L".charCodeAt(0), name: "Leasing" }
    },
    TIPO_OPERACION: {
        ALTA: { value: "A".charCodeAt(0), name: "Alta" },
        MODIFICACION: { value: "M".charCodeAt(0), name: "Modificación" }
    },
    TIPO_ANEXO: {
        CONDICIONAMIENTO: { value: "CN", name: "Condicionamiento" },
        CONSTANCIA_DE_INSCRIPCION: { value: "CI", name: "Constancia de inscripción" },
        FORMULARIO_03: { value: "03", name: "Formulario 08" },
        COMPLEMENTO_DEL_CONTRATO: { value: "CC", name: "Complemento del contrato" },
        ANEXO: { value: "AN", name: "Anexo" },
    },
    TIPO_PRENDA: {
        FIJA: { value: "FI", name: "Fija" },
        FLOTANTE: {value: "FL", name: "Flotante" },
    },
    CODIGO_MONEDA: {
        PESOS: { value: "P", name: "Pesos" },
        DOLARES: { value: "D", name: "Dólares" },
    },
    TIPO_CONCEPTO: {
        SALDO_DE_PRECIO: { value: "SP", name: "Saldo de Precio" },
        PRESTAMO: { value: "PR", name: "Préstamo" },
        GARANTIA: { value: "GA", name: "Garantía" },
    },
    COD_PROVINCA: {
        SALTA: { value: "A", name: "Salta"},
        BUENOS_AIRES: { value: "B", name: "Buenos Aires"},
        CABA: { value: "C", name: "CABA"},
        SAN_LUIS: { value: "D", name: "San Luis"},
        ENTRE_RIOS: { value: "E", name: "Entre Ríos"},
        LA_RIOJA: { value: "F", name: "La Rioja"},
        SGO_DEL_ESTERO: { value: "G", name: "Santiago del Estero"},
        CHACO: { value: "H", name: "Chaco"},
        SAN_JUAN: { value: "J", name: "San Juan"},
        CATAMARCA: { value: "K", name: "Catamarca"},
        LA_PAMPA: { value: "L", name: "La Pampa"},
        MENDOZA: { value: "M", name: "Mendoza"},
        MISIONES: { value: "N", name: "Misiones"},
        FORMOSA: { value: "P", name: "Formosa"},
        NEUQUEN: { value: "Q", name: "Neuquén"},
        RIO_NEGRO: { value: "R", name: "Rio Negro"},
        SANTA_FE: { value: "S", name: "Santa Fe"},
        TUCUMAN: { value: "T", name: "Tucumán"},
        CHUBUT: { value: "U", name: "Chubut"},
        T_DEL_FUEGO: { value: "V", name: "Tierra del Fuego"},
        CORRIENTES: { value: "W", name: "Corrientes"},
        CORDOBA: { value: "X", name: "Córdoba"},
        JUJUY: { value: "Y", name: "Jujuy"},
        SANTA_CRUZ: { value: "Z", name: "Santa Cruz"},
    },
    COD_PERSONA: {
        JURIDICA: { value: "J".charCodeAt(0), name: "Persona jurídica"},
        FISICA: { value: "F".charCodeAt(0), name: "Física"},
    },
    TIPO_DOCUMENTO: {
        DNI: { value: "1", name: "D.N.I."},
        LE: { value: "2", name: "L.E."},
        LC: { value: "3", name: "L.C."},
        DNI_EX: { value: "4", name: "D.N.I.Ex"},
        CED_EX: { value: "5", name: "Céd Ex"},
        PASAPORTE: { value: "6", name: "Pasaporte"},
        NO_CONSTA: { value: "7", name: "No Consulta"},
        CUIT_CUIL: { value: "8", name: "Cuit/ Cuil"},
    },
    SEXO: {
        MASCULINO: { value: "M", name: "Masculino"},
        FEMENINO: { value: "F", name: "Femenino"},
    },
    EST_CIVIL: {
        CASADO: { value: "C", name: "Casado"},
        SOLTERO: { value: "S", name: "Soltero"},
        VIUDO: { value: "V", name: "Viudo"},
        DIVORCIADO: { value: "D", name: "Divorciado"},
    },
    CARACTER: {
        CODEUDOR: { value: "C", name: "Co-deudor"},
        GARANTE: { value: "G", name: "Garante"},
    },
    RESP_CODIGOS: {
        OK: { value: 1, name: "OK"}
    },
    BOOLEANO : {
        SI: {value: true, name: "Si"},
        NO: {value: false, name: "No"}
    },
};
