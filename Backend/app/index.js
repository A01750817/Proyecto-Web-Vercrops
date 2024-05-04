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
app.use(express.json()); // Para parsear el cuerpo de las solicitudes como JSON
app.use(cookieParser()) // Para parsear las cookies

// Rutas a los archivos HTML
const rutaLoginHTML = path.join(__dirname, '..', '..','Frontend', 'html_principal', 'Login.html');
const rutaRegisterHTML = path.join(__dirname, '..','..', 'Frontend', 'html_principal', 'SignUp.html');
//const rutaAdminHTML = path.join(__dirname, '..','..', 'Frontend', 'html_principal', 'admin.html');
const indexPath = path.join(__dirname, '..','..', 'Frontend', 'html_principal', 'indexP.html');
console.log(rutaRegisterHTML);

// Definimos las rutas de la aplicación
app.get('/', authorization.soloPublico, (req,res)=> res.sendFile(rutaLoginHTML)); // Página de inicio de sesión
app.get('/register', authorization.soloPublico,(req,res)=> res.sendFile(rutaRegisterHTML)); // Página de registro
app.get('/app', authorization.soloAdmin,(req,res)=> res.sendFile(indexPath)); // Página de aplicación
//app.get('/admin', authorization.soloAdmin,(req,res)=> res.sendFile(rutaAdminHTML)); // Página de administración
app.post('/api/login', authentication.login); // Endpoint de inicio de sesión
app.post('/api/register', authentication.register); // Endpoint de registro