import * as payment from "./payment"
import * as planform from "./planform"
import * as singIn from "./singIn"
import * as singUp from "./singUp"

export const usuariosControllers = {
    ...singIn,
    ...singUp,
    ...payment,
    ...planform
}