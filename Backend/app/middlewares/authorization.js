import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getUsuarios } from "../controllers/authentication.controllers.js";

dotenv.config();

// Función para verificar la cookie JWT
async function revisarCookie(req) {
    try {
        const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
        const decodificada = jsonwebtoken.verify(cookieJWT, process.env.JWT_SECRET);
        console.log(decodificada);
        const usuarios = await getUsuarios();
        const usuarioARevisar = usuarios.find(usuario => usuario.Correo === decodificada.correoElectronico);
        console.log(usuarioARevisar);
        if (!usuarioARevisar) {
            return false;
        }
        return true;
    } catch {
        return false;
    }
}

// Middleware para permitir solo acceso a usuarios autenticados como administradores
export const soloAdmin = async (req, res, next) => {
    const logueado = await revisarCookie(req);
    if (logueado) return next();
    return res.redirect("/");
};

// Middleware para permitir solo acceso a usuarios autenticados
export const soloPublico = async (req, res, next) => {
    const logueado = await revisarCookie(req);
    if (!logueado) return next();
    return res.redirect("/admin");
};
