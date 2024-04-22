import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CTHmZtPn*a6Iw5n0",
    database: "crud"
})