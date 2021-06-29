// required to connect the MySQL database
const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT|| 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//also needed with top const to connect to MySQL
const db = mysql.createConnection( 
    {
        host: 'localhost',
        //your MySQL username
        user: 'root',
        //Your Mysql password
        password: '8410Ble$$',
        database: 'election'
    },
    console.log('Connected to the election Database')
);

//default response for any other request(Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//function that allows this app to listen and tell it to run
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});