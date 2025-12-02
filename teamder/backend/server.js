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
    database: 'teamder_db', 
    port: 3306
});

db.connect(err => {
    if (err) console.log('Error BD:', err);
    else console.log('¡Conectado a MySQL exitosamente!');
});

app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM Usuarios';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


app.post('/registrar', (req, res) => {
    const { nombre, correo, contraseña } = req.body;
    if (!nombre || !correo || !contraseña) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const checkSql = "SELECT * FROM Usuarios WHERE correo = ?";
    db.query(checkSql, [correo], (err, result) => {
        if (err) return res.status(500).json({ error: "Error al consultar la BD" });
        if (result.length > 0) return res.status(400).json({ error: "El correo ya está registrado" });

        const insertSql = "INSERT INTO Usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)";
        db.query(insertSql, [nombre, correo, contraseña], (err, result) => {
            if (err) return res.status(500).json({ error: "Error al guardar en BD" });
            return res.json({ mensaje: "Usuario registrado con éxito" });
        });
    });
});

app.post('/login', (req, res) => {
    const { correo, contraseña } = req.body;
    if (!correo || !contraseña) return res.status(400).json({ error: "Faltan datos" });

    const sql = "SELECT * FROM Usuarios WHERE correo = ? AND contraseña = ?";
    db.query(sql, [correo, contraseña], (err, result) => {
        if (err) return res.status(500).json({ error: "Error al consultar la BD" });
        if (result.length === 0) return res.status(400).json({ error: "Usuario o contraseña incorrectos" });
        return res.json({ mensaje: "Inicio de sesión exitoso", usuario: result[0] });
    });
});

app.listen(3001, () => {
    console.log("Servidor backend corriendo en puerto 3001");
});

app.put('/actualizar', (req, res) => {
    const { id, nombre, correo } = req.body;
    const sql = "UPDATE Usuarios SET nombre = ?, correo = ? WHERE id_usuario = ?";
db.query(sql, [nombre, correo, id], (err) => {
        if (err) return res.status(500).json({ error: "Error al actualizar" });
        return res.json({ mensaje: "Usuario actualizado correctamente" });
    });
});
app.delete('/eliminar/:id', (req, res) => {
    const { id } = req.params; 
    
    const sql = "DELETE FROM Usuarios WHERE id_usuario = ?";
    
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: "Error al eliminar" });
        return res.json({ mensaje: "Usuario eliminado con éxito" });
    });
});