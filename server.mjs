import express from 'express';
const app = express();
import { join } from 'path';
import bodyParser from 'body-parser';
import hbs from 'hbs';

const port = process.env.PORT || 3000

import './src/dbConn.mjs';
// import newModel from './src/dbSchema.mjs';
import routes from './src/routes.mjs'


app.set('views', join(process.cwd(), 'templates/views'));
hbs.registerPartials(join(process.cwd(), 'templates/partials'));
app.set('view engine', 'hbs');

app.use('/user', express.static(join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ exptended: true }));
app.use(bodyParser.json());
app.use('/user', routes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
