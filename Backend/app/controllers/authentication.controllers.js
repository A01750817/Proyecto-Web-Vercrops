// Importamos la librería bcryptjs para encriptar contraseñas
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
let usuarios = [];

export async function getUsuarios() {
    const response = await fetch('https://sqjjdz5n-3000.usw3.devtunnels.ms/api/usuarios');
    usuarios = await response.json();
    return usuarios;
}

export { usuarios };

// Función para el inicio de sesión
async function login(req, res) {
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
async function register(req, res) {
    // Imprimimos el cuerpo de la solicitud
    console.log(req.body);
    // Extraemos los campos del cuerpo de la solicitud
    const { name, lastname, email, birthdate, CodigoPostal, phone, role, password, confirmPassword } = req.body;

    // Si alguno de los campos no existe, enviamos una respuesta con estado 400 y un mensaje de error
    if (!name || !lastname || !email || !birthdate || !CodigoPostal || !phone || !role || !password || !confirmPassword) {
        return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
    }

    // Comprobamos que las contraseñas coinciden
    if (password !== confirmPassword) {
        return res.status(400).send({ status: "Error", message: "Las contraseñas no coinciden" });
    }

    // Buscamos en la lista de usuarios si ya existe un usuario con el mismo correoElectronico
    const usuarios = await getUsuarios();
    const usuarioARevisar = usuarios.find(usuario => usuario.Correo === email);
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
        name, lastname, email, birthdate, CodigoPostal, phone, role, password: hashPassword
    }

    // Hacemos una petición POST a la API para crear el nuevo usuario
    const response = await fetch('https://sqjjdz5n-3000.usw3.devtunnels.ms/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
    });

    if (!response.ok) {
        return res.status(500).send({ status: "Error", message: "Error al crear el usuario" });
    }

    // Enviamos una respuesta con estado 201, un mensaje de éxito y una redirección
    return res.status(201).send({ status: "ok", message: `Usuario ${nuevoUsuario.email} agregado`, redirect: "/" });
}

export const methods = {
    login,
    register
  }