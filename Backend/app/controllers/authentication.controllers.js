// Importamos la librería bcryptjs para encriptar contraseñas
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

// Función para obtener usuarios desde la API
export async function getUsuarios() {
    const response = await fetch('http://localhost:3000/api/Usuarios/');
    const usuarios = await response.json();
    return usuarios;
}

// Función para el inicio de sesión
export async function login(req, res) {
    console.log(req.body);
    const correoElectronico = req.body.correoElectronico;
    const password = req.body.password;
    if (!correoElectronico || !password) {
        return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
    }
    const usuarios = await getUsuarios();
    const usuarioARevisar = usuarios.find(usuario => usuario.Correo === correoElectronico);
    if (!usuarioARevisar) {
        return res.status(400).send({ status: "Error", message: "Error durante el inicio de sesión" });
    }
    const loginCorrecto = await bcrypt.compare(password, usuarioARevisar.Contrasena);
    if (!loginCorrecto) {
        return res.status(400).send({ status: "Error", message: "Error durante el inicio de sesión" });
    }
    const token = jsonwebtoken.sign(
        { correoElectronico: usuarioARevisar.Correo },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION });

    const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        path: "/"
    }
    res.cookie("jwt", token, cookieOption);
    res.send({ status: "ok", message: "Usuario loggeado", redirect: "/admin" });
}

// Función para el registro de usuarios
export async function register(req, res) {
    // Imprimimos el cuerpo de la solicitud
    console.log(req.body);
    // Extraemos los campos correoElectronico, password y email del cuerpo de la solicitud
    const correoElectronico = req.body.correoElectronico;
    const password = req.body.password;
    const email = req.body.email;

    // Si alguno de los campos no existe, enviamos una respuesta con estado 400 y un mensaje de error
    if (!correoElectronico || !password || !email) {
        return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
    }
    // Buscamos en la lista de usuarios si ya existe un usuario con el mismo correoElectronico
    const usuarios = await getUsuarios();
    const usuarioARevisar = usuarios.find(usuario => usuario.Correo === correoElectronico);
    // Si el usuario ya existe, enviamos una respuesta con estado 400 y un mensaje de error
    if (usuarioARevisar) {
        return res.status(400).send({ status: "Error", message: "El usuario ya existe" });
    }

    // Generamos una "sal" para encriptar la contraseña
    const salt = await bcrypt.genSalt(5);
    // Encriptamos la contraseña
    const hashPassword = await bcrypt.hash(password, salt);
    // Creamos un nuevo usuario con los datos proporcionados y la contraseña encriptada
    const nuevoUsuario = {
        correoElectronico, email, password: hashPassword
    }
    // Enviamos una respuesta con estado 201, un mensaje de éxito y una redirección
    return res.status(201).send({ status: "ok", message: `Usuario ${nuevoUsuario.correoElectronico} agregado`, redirect: "/" });
}
