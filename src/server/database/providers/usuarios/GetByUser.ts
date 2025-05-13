import { IUsuario } from "../../models/usuario";

export const getByUser = async (email: string, senha: string): Promise<IUsuario | Error> => {
    try{
        const result = await IUsuario.findOne({
            where: {
                email: email,
                senha: senha
            }
        })
        if (result) return result

        return new Error('Registro não encotrado');
    } catch (error) {
        console.log(error);
        return new Error('Error ao consultar o registro');
    }
}