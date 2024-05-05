// Importamos los módulos necesarios
import express from "express";
import cookieParser from 'cookie-parser';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controllers.js"
import {methods as authorization} from "./middlewares/authorization.js";

// Creamos la aplicación Express
const app = express();

// Configuramos el puerto del servidor
app.set("port",4000);

// Iniciamos el servidor
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

// Configuramos los middlewares de Express
app.use(express.static(path.join(__dirname, '..', '..','Frontend', 'html_principal'))); // Para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', '..','Frontend', 'el_html_extras'))); // Para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', '..','Frontend', 'los_scripts'))); // Para servir archivos estáticos
app.use(express.json()); // Para parsear el cuerpo de las solicitudes como JSON
app.use(cookieParser()) // Para parsear las cookies

// Rutas a los archivos HTML
const rutaLoginHTML = path.join(__dirname, '..', '..','Frontend', 'html_principal', 'Login.html');
const rutaRegisterHTML = path.join(__dirname, '..','..', 'Frontend', 'html_principal', 'SignUp.html');
const rutaChartnHTML = path.join(__dirname, '..','..', 'Frontend', 'el_html_extras', 'INDEX_charts.html');
const indexPath = path.join(__dirname, '..','..', 'Frontend', 'html_principal', 'indexP.html');
console.log(rutaRegisterHTML);

// Definimos las rutas de la aplicación
//app.get('/admin', (req,res)=> res.sendFile(rutaLoginHTML)); // Página de inicio de sesión
app.get('/register', (req,res)=> res.sendFile(rutaRegisterHTML)); // Página de registro
app.get('/',(req,res)=> res.sendFile(indexPath)); // Página de aplicación
app.get('/admin', (req,res)=> res.sendFile(rutaChartnHTML)); // Página de administración
app.post('/api/login'); // Endpoint de inicio de sesión
app.post('/api/register' ); // Endpoint de registro