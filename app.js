const path = require('path');
const express = require('express');


const app = express();


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));



const port = 2010;


app.get('/', (req, res) => {
    res.send('<h1>This is the Homepage</h1>');
});


app.get('/about', (req, res) => {
    res.send('<h1>This is the About page</h1>');
});


app.get('/api', (req, res) => {
    res.send({ name: 'Olamide', location: 'canada' });
});


app.get('*', (req, res) => {
    res.send('<h1>Page not Found</h1>');
});


app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})
