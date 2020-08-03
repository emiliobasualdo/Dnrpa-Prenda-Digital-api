const soap = require('strong-soap').soap;
const request = require('request');
const {Helper} = require('./supportClasses');

/////////////     Private     /////////////
const TESTING_URL = "https://www.testing.dnrpa.gov.ar:4443/Ws-PrendaAutomotor/PrendaAutomotorWebService.svc?wsdl";
const PRODUCTION_URL = "https://www.servicios.dnrpa.gov.ar/Ws-PrendaDigital/PrendaAutomotorWebService.svc?wsdl";
const ERR_MSG = "Client not initialized";
const OK = 1;
const generateClient = async(passphrase, pfxPathFs, servUrl) => {
    const options = {
        request: request.defaults({
            agentOptions: {
                passphrase: passphrase,
                pfx: pfxPathFs
            }
        })
    };

    return await new Promise(resolve => {
        soap.createClient(servUrl, options, function (err, client) {
            if (err) throw Error(err);
            resolve(client);
        })
    });
};

const formatResponse = (data) => {
    let resp = {};
    if(data.ResultadoConsulta) {
        resp.status = {
            codigo: data.ResultadoConsulta.Codigo,
            descripcion: data.ResultadoConsulta.Descripcion
        };
        delete data.ResultadoConsulta;
    } else if(data.Resultado) {
        resp.status = {
            codigo: data.Resultado.Codigo,
            descripcion: data.Resultado.Descripcion
        };
        delete data.Resultado;
    } else if (data.Codigo) {
        resp.status = {
            codigo: data.Codigo,
            descripcion: data.Descripcion
        };
        delete data.Codigo;
        delete data.Descripcion;
    } else {
        resp.status = {
            codigo: OK,
            descripcion: ""
        };
    }
    resp.data = data;
    return resp;
};

/////////////////////////////////////////////

class Client  {

    /** Starts a connection with the soap api */
    async connect(username, passphrase, pfxPathFs, testing = null) {
        //setup
        this._username = username;
        this._passphrase = passphrase;
        this._pfxPathFs = pfxPathFs;

        //optionals
        this._servUrl = testing == null ? PRODUCTION_URL: TESTING_URL;

        this._client = await generateClient(this._passphrase, this._pfxPathFs, this._servUrl);
        return this;
    }

    /** string Echo(string word); */
    async echo(word) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            word: word
        };
        // las respuesta de este no se formatea porque no tiene el mismo formato que las demas
        return (await this._client['Echo'](args)).result['EchoResult'];
    }

    /** CodigoDescripcion AnularAnexo(int cpd, string cuitAcreedor, string indiceDocumental, string usuario); */
    async anularAnexo(cpd, cuitAcreedor, indiceDocumental) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            cpd: cpd,
            cuitAcreedor: cuitAcreedor,
            indiceDocumental: indiceDocumental,
            usuario: this._username
        };
        return formatResponse((await this._client['AnularAnexo'](args)).result['AnularAnexoResult']);
    }

    /** CodigoDescripcion AnularContrato(int cpd, string cuitAcreedor, string usuario); */
    async anularContrato(cpd, cuitAcreedor) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            cpd: cpd,
            cuitAcreedor: cuitAcreedor,
            usuario: this._username

        };
        return formatResponse((await this._client['AnularContrato'](args)).result['AnularContratoResult']);
    }

    /** Certificado ConsultaDatosVehiculoPorCPD(int cpd, string ultimas7Chasis, string usuario); */
    async consultaDatosVehiculoPorCPD(cpd, ultimas7Chasis) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            cpd: cpd,
            ultimas7Chasis: ultimas7Chasis,
            usuario: this._username

        };
        return formatResponse((await this._client['ConsultaDatosVehiculoPorCPD'](args)).result['ConsultaDatosVehiculoPorCPDResult']);
    }

    /** string ConsultaEstadoTramite(int cpd, string cuitAcreedor, string usuario); */
    async consultaEstadoTramite(cpd, cuitAcreedor) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            cpd: cpd,
            cuitAcreedor: cuitAcreedor,
            usuario: this._username

        };
        const resp = (await this._client['ConsultaEstadoTramite'](args)).result['ConsultaEstadoTramiteResult'];
        if (resp.Codigo) {
            // hubo un error
            return formatResponse(resp);
        } else {
            return formatResponse({
                ResultadoConsulta: {
                    Codigo: OK,
                    Descripcion: ""
                },
                estado_tramite: resp
            })
        }

    }

    /** Descarga DescargarAnexo(int cpd, string cuitAcreedor, string indiceDocumental, string usuario); */
    async descargarAnexo(cpd, cuitAcreedor, indiceDocumental) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            cpd: cpd,
            cuitAcreedor: cuitAcreedor,
            indiceDocumental: indiceDocumental,
            usuario: this._username

        };
        return formatResponse((await this._client['DescargarAnexo'](args)).result['DescargarAnexoResult']);
    }

    /** Descarga DescargarContrato(int cpd, string cuitAcreedor, string usuario); */
    async descargarContrato(cpd, cuitAcreedor) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            cpd: cpd,
            cuitAcreedor: cuitAcreedor,
            usuario: this._username

        };
        return formatResponse((await this._client['DescargarContrato'](args)).result['DescargarContratoResult']);
    }

    /** Prenda ObtenerDatosPrenda(int cpd, string cuitAcreedor, string usuario); */
    async obtenerDatosPrenda(cpd, cuitAcreedor) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            cpd: cpd,
            cuitAcreedor: cuitAcreedor,
            usuario: this._username

        };
        return formatResponse((await this._client['ObtenerDatosPrenda'](args)).result['ObtenerDatosPrendaResult']);
    }

    /** int ObtenerNuevoCPD(char tipoContrato, string numeroCertificado_o_numeroDn, string cuitAcreedor, string usuario); */
    async obtenerNuevoCPD(tipoContrato, numeroCertificado_o_numeroDn, cuitAcreedor) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            tipoContrato: tipoContrato,
            numeroCertificado_o_numeroDn: numeroCertificado_o_numeroDn,
            cuitAcreedor: cuitAcreedor,
            usuario: this._username

        };

        const resp = (await this._client['ObtenerNuevoCPD'](args)).result['ObtenerNuevoCPDResult'];
        return formatResponse({
            ResultadoConsulta: {
                Codigo: 1,
                Descripcion: "Operacion exitosa"
            },
            cpd: resp
        });
    }

    /** int ObtenerNuevoCPDPorDominio(char tipoContrato, string dominio, string ultimas7Chasis, string cuitAcreedor, string usuario); */
    async obtenerNuevoCPDPorDominio(tipoContrato, dominio, ultimas7Chasis, cuitAcreedor) {
        if (!this._client) throw Error(ERR_MSG);

        const args = {
            tipoContrato: tipoContrato,
            dominio: dominio,
            ultimas7Chasis: ultimas7Chasis,
            cuitAcreedor: cuitAcreedor,
            usuario: this._username

        };

        const resp = (await this._client['ObtenerNuevoCPDPorDominio'](args)).result['ObtenerNuevoCPDPorDominioResult'];
        return formatResponse({
            ResultadoConsulta: {
                Codigo: 1,
                Descripcion: "Operacion exitosa"
            },
            cpd: resp
        });
    }

    /** CodigoDescripcion SubirAnexo(int cpd, string cuitAcreedor, string tipoAnexo, base64Binary documentoFirmado, string hash, string usuario); */
    async subirAnexo(cpd, cuitAcreedor, tipoAnexo, documentoFirmado, hash) {
        if (!this._client) throw Error(ERR_MSG);
        const args = {
            cpd: cpd,
            cuitAcreedor: cuitAcreedor,
            tipoAnexo: tipoAnexo,
            documentoFirmado: Helper.toBase64(documentoFirmado),
            hash: hash,
            usuario: this._username
        };

        const resp = (await this._client['SubirAnexo'](args)).result['SubirAnexoResult'];
        if(resp.Codigo == OK) {
            return formatResponse({
                ResultadoConsulta: {
                    Codigo: resp.Codigo,
                    Descripcion: ""
                },
                indice_documental: resp.Descripcion
            });
        } else {
            return formatResponse(resp);
        }
    }

    /** CodigoDescripcion SubirContrato(int cpd, char tipoOperacion, Contrato contrato, Acreedor acreedor, ArrayOfDeudor deudores, ArrayOfGaranteCodeudor garantesCodeudores, base64Binary documentoFirmado, string hash, string usuario); */
    async subirContrato(cpd, tipoOperacion, contrato, acreedor, deudores, garantesCodeudores, documentoFirmado, hash) {
        if (!this._client) throw Error(ERR_MSG);
        // clonamos los campos que van a ser editados para no romperle el código al developer
        [contrato, acreedor, deudores, garantesCodeudores] = Helper.clone([contrato, acreedor, deudores, garantesCodeudores]);
        // editamos los campos
        acreedor.Mails = Helper.toXmlArray("string", acreedor.Mails);
        deudores.forEach((deudor) => {
            deudor.Mails = Helper.toXmlArray("string", deudor.Mails);
        });
        const args = {
            cpd: cpd,
            tipoOperacion: tipoOperacion,
            contrato: contrato,
            acreedor: acreedor,
            deudores: Helper.toXmlArray("Deudor", deudores),
            garantesCodeudores: Helper.toXmlArray("GaranteCodeudor",garantesCodeudores),
            documentoFirmado: Helper.toBase64(documentoFirmado),
            hash: hash,
            usuario: this._username
        };

        const resp = (await this._client['SubirContrato'](args)).result['SubirContratoResult'];
        if(resp.Codigo == OK) {
            return formatResponse({
                ResultadoConsulta: {
                    Codigo: resp.Codigo,
                    Descripcion: ""
                },
                indice_documental: resp.Descripcion
            });
        } else {
            return formatResponse(resp);
        }
    }

    /** Describes the current wsdl status*/
    describe() {
        let resp = "";
        let desc = this._client.describe();
        if (!desc || !desc.PrendaAutomotorWebService || !desc.PrendaAutomotorWebService.BasicHttpBinding_IPrendaAutomotorWebService) {
            return resp;
        }
        desc = desc.PrendaAutomotorWebService.BasicHttpBinding_IPrendaAutomotorWebService;
        for (let method_name in desc) {
            if (Object.prototype.hasOwnProperty.call(desc, method_name)) {
                const params = desc[method_name].input.body.elements.map(x => {
                    return x.type.name + " " + x.qname.name;
                });
                let out = "";
                if (desc[method_name].output.body.elements.length > 0) {
                    out = desc[method_name].output.body.elements[0].type.name;
                }
                resp = resp.concat(`${out} ${method_name}(${params.join(", ")});\n`);
            }
        }
        return resp;
    }

    getLastRequest(){
        return {
            body: this._client.lastRequest,
            head: this._client.lastRequestHeaders,
        };
    }

    getLastResponse(){
        return {
            body: this._client.lastResponse,
            head: this._client.lastResponseHeaders,
        };
    }
}

module.exports = new Client();