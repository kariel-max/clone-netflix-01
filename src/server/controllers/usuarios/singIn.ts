import { Request, Response } from "express";
import * as yup from "yup"
import { usuariosProvider } from "../../database/providers/usuarios";
import path from "path";


// construir uma validaçao de email e senha

const schema = yup.object().shape({
    Email: yup.string().required('campo obrigatório1').email("deve ser um Email válido"),
    senha: yup.string().required('campo obrigatório2').min(4, "deve ter no minimo 8 caracters")
})
//singIn
export const singIn = async (req: Request ,res: Response)=> {
    res.sendFile(path.join(__dirname,'../../../../pageLogin.html'))
    try {
         const usuario = await schema.validate(req.body)
         if (usuario) {
            const getUser = await usuariosProvider.getByUser(usuario.Email, usuario.senha)

            if (getUser instanceof Error) {
                return res.status(404).json({
                    errors: {
                        default: 'Email ou Senha inválido!'
                    }
                })
            }
            console.log(getUser instanceof Error)
         }
    }catch (error) {
        console.log('error em login', error)
    }
}
