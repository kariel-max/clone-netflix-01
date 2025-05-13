"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticar = exports.singUp = exports.getForm = exports.cadastro = void 0;
const yup = __importStar(require("yup"));
const usuario_1 = require("../../database/models/usuario");
const path_1 = __importDefault(require("path"));
const schema = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido"),
    Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
});
const cadastro = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../../../cadastro.html'));
};
exports.cadastro = cadastro;
const getForm = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../../../passo1.html'));
};
exports.getForm = getForm;
const singUp = async (req, res) => {
    try {
        const dados = await schema.validate(req.body);
        if (!dados || !dados.Email || !dados.Senha) {
            return res.status(400).json({ erro: "Email ou senha ausentes. certinfique-se de enviar ambos " });
        }
        const usuario = await usuario_1.IUsuario.create({
            email: dados.Email,
            senha: dados.Senha
        });
        if (usuario) {
            await usuario.save();
            res.redirect('https://move-dev-5ogn3.ondigitalocean.app/cadastro/autenticar');
            return;
        }
        else {
            res.status(401).json({ erro: "Email ou senha inválidos!" });
            return;
        }
    }
    catch (error) {
        console.log('error no servidor', error);
        res.status(500).json({ erro: "erro interno no Servidor." });
    }
};
exports.singUp = singUp;
const autenticar = async (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../../../autenticar.html'));
};
exports.autenticar = autenticar;
