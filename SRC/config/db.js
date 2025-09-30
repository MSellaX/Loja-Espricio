const sql = require("mssql");

const config = {
    user: 'sa',
    password:'123456789',
    server:'localhost',
    database:'lojaDB',
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}

async function getConnection() {
    try{

        const pool = await sql.connect(config);
        return pool;

    } catch(error) {
        console.error("erro na conexão", error);
    }
}

module.exports = {sql, getConnection};