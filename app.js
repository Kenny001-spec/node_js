const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { query } = require('express');


const app = express();
app.set('view engine', 'hbs')


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
// console.log(viewsPath);



const port = 2000;

// app.get('/', (req, res) => {
//     res.send('<h1>This is the Homepage</h1>');
// });

app.get('/', (req, res) => {
    res.render('index', {
        app: 'MISSION & VISSION STATEMENT 🌎✌',
        page: 'Im a web Developer ✍'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        app: 'Web Development Project Ideas 🌎💪',
        page: 'About page'
    });
})



// app.get('/about', (req, res) => {
//     res.send('<h1>This is the About page</h1>');
// });


app.get('/api', (req, res) => {
    if (!req.query.search) {
        res.send({
            err: 'You have to put a search term'
        })
    } else {
        // console.log(req.query.search);
        res.send({ name: 'Olamide', location: 'canada' });
    }

});


app.get('*', (req, res) => {
    res.send('<h1>Page not Found</h1>');
});


app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})
