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

//default response for any other request(Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//function that allows this app to listen and tell it to run
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});