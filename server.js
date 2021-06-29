// required to connect the MySQL database
const mysql = require('mysql2');
const express = require('express');
const { isBuffer } = require('util');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//also needed with top const to connect to MySQL
const db = mysql.createConnection({
        host: 'localhost',
        //your MySQL username
        user: 'root',
        //Your Mysql password
        password: '8410Ble$$',
        database: 'election'
    },
    console.log('Connected to the election Database')
);

//catchall routes to test database connection
/*db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});
*/

//GET route for a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
// if(err) {
// console.log(err);
// }
// console.log(row);
// });

//Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
// if(err) {
// console.log(err);
// }
// console.log(result);
// });

//Create a Candidate params of id first, last, connections all must match the params array below, the 4 ? are placeholders of the params until the params array is created
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                        VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
db.query(sql, params, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
});

//default response for any other request(Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//function that allows this app to listen and tell it to run
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});