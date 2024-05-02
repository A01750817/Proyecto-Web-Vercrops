// Importa el framework Express.js
import express from 'express'; 
// Importa el módulo `path` para manipular rutas de archivos
import path from 'path'; 
// Importa la función `fileURLToPath` del módulo `url`
import { fileURLToPath } from 'url'; 
// Importa las funciones del controlador de autenticación
import { login, register } from './controllers/authentication.controllers.js'; 
// Importa las funciones del middleware de autorización
import { soloAdmin, soloPublico } from './middlewares/authorization.js'; 
// Importa el módulo `cookieParser` para analizar cookies
import cookieParser from 'cookie-parser'; 

// Define la ruta del directorio dos niveles arriba
const __dirname = path.resolve(fileURLToPath(import.meta.url), '../../../'); 

// Crea una instancia de la aplicación Express
const app = express(); 
// Establece el puerto del servidor en 4000
app.set('port', 4000); 
// Inicia el servidor y lo pone a la escucha en el puerto especificado
app.listen(app.get('port')); 
// Imprime un mensaje en la consola indicando que el servidor está en ejecución
console.log('Server on port', app.get('port')); 

// Configuración
app.use(express.static(path.join(__dirname, 'Frontend', 'html_principal')));
// Analiza los cuerpos de las peticiones JSON entrantes
app.use(express.json()); 
// Analiza las cookies enviadas por el cliente
app.use(cookieParser()); 

// Rutas
const rutaLoginHTML = path.join(__dirname, 'Frontend', 'html_principal', 'Login.html');
app.get('/', soloPublico, (req, res) => res.sendFile(rutaLoginHTML));

const rutaRegisterHTML = path.join(__dirname, 'Frontend', 'html_principal', 'SignUp.html');
app.get('/register', soloPublico, (req, res) => res.sendFile(rutaRegisterHTML));

const rutaAdminHTML = path.join(__dirname, 'Frontend', 'html_principal', 'indexP.html');
console.log(rutaAdminHTML);
app.get('/admin', soloAdmin, (req, res) => res.sendFile(rutaAdminHTML));

app.get('/app', (req, res) => {
    // Ruta al archivo INDEX_charts.html
    const indexPath = path.join(__dirname, 'Frontend', 'el_html_extras', 'INDEX_charts.html');
    
    // Envía el archivo como respuesta
    res.sendFile(indexPath);
});

app.use(express.static(path.join(__dirname, 'Frontend', 'el_html_extras'))); // Servir archivos estáticos desde la carpeta 'el_html_extras'
// Rutas para API
app.post('/api/login', login); // Ruta para la autenticación de usuario (login)
app.post('/api/register', register); // Ruta para el registro de nuevo usuario
