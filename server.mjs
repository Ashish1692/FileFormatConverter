import express from 'express';
const app = express();
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(process.cwd(), 'templates/views'));
hbs.registerPartials(join(process.cwd(), 'templates/partials'));
app.set('view engine', 'hbs');

app.use('/', express.static(join(process.cwd(), 'public')))


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/converterDashboard', (req, res) => {
    res.render('converterDashboard')
})


app.listen(3000, () => {
    console.log('workd.');
})
