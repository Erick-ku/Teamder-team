import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teamder_bd', 
    port: 3300 
});

db.connect(err => {
    if (err) console.log('Error BD:', err);
    else console.log('¡Conectado a MySQL exitosamente!');
});

app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/registrar', (req, res) => {
    const { nombre, correo, carrera, semestre, id_interes } = req.body;
    if(!nombre || !correo) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    const sql = "INSERT INTO usuario (nombre, correo, carrera, semestre, id_interes) VALUES (?, ?, ?, ?, ?)";
    const interesFinal = id_interes || 1;

    db.query(sql, [nombre, correo, carrera, semestre, interesFinal], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al guardar en BD" });
        }
        console.log("Resultado del registro:", result); 
        
        res.json({ mensaje: "Usuario registrado con éxito" });
    });
});

app.listen(3001, () => {
    console.log("Servidor backend corriendo en puerto 3001");
});