import {RequestHandler} from "express";
import * as yup from 'yup';
import { IUsuario } from "../../database/models/usuario";
import path from "path";

 const schema = yup.object().shape({
    Email: yup.string().required('Campo email é obrigatório').email("Deve ser um email válido"),
    Senha: yup.string().required("campo senha obrigatorio").min(4, "precisar de no mínimo 4 digítos")
 })

export const cadastro:RequestHandler = (req, res)=> {
    res.sendFile(path.join(__dirname,'../../../../cadastro.html'))
}

export const getForm:RequestHandler = (req, res)=> {
    res.sendFile(path.join(__dirname,'../../../../passo1.html'))
}

export const singUp:RequestHandler = async (req,res)=> {
   
    try{
        const dados: {Email: string, Senha: string} = await schema.validate(req.body)
        if (!dados || !dados.Email || !dados.Senha ) {
            return res.status(400).json({erro: "Email ou senha ausentes. certinfique-se de enviar ambos "})
        }
       
        const usuario = await IUsuario.create({
        email: dados.Email,
        senha: dados.Senha
        });
        
        if (usuario) {
            await usuario.save()
            res.redirect('https://move-dev-5ogn3.ondigitalocean.app/cadastro/autenticar')
            return
          } else {
            res.status(401).json({ erro: "Email ou senha inválidos!" });
            return
          }
    } catch (error) {
        console.log('error no servidor', error)
        res.status(500).json({erro: "erro interno no Servidor."});
    }
   
};


export const autenticar: RequestHandler = async (req, res) => {
    res.sendFile(path.join(__dirname,'../../../../autenticar.html'))
      
}