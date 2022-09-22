import express from 'express';
const app = express();
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const port = process.env.PORT || 3000
// import './src/dbConn.mjs';
// import newModel from './src/dbSchema.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(process.cwd(), 'templates/views'));
hbs.registerPartials(join(process.cwd(), 'templates/partials'));
app.set('view engine', 'hbs');

app.use('/', express.static(join(process.cwd(), 'public')))


app.get('/', (req, res) => {
    res.render('index')
    // try {
    //     const result = newModel.find()
    //     res.render('index', { data: result });
    // } catch (error) {
    //     console.log(error);
    // }
})
app.get('/converterDashboard', (req, res) => {
    res.render('converterDashboard')
})
app.get('/register', (req, res) => {
    res.render('register')
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
