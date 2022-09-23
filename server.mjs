import express from 'express';
const app = express();
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const port = process.env.PORT || 3000

import './src/dbConn.mjs';
import newModel from './src/dbSchema.mjs';


app.set('views', join(process.cwd(), 'templates/views'));
hbs.registerPartials(join(process.cwd(), 'templates/partials'));
app.set('view engine', 'hbs');

app.use('/', express.static(join(process.cwd(), 'public')))
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.render('index')
});

// verify the token key with mongodb and then load dashboard page
app.post('/index', (req, res) => {
    const name = req.body;
    console.log(name);

})
app.get('/Dashboard', (req, res) => {
    try {
        newModel.find({}, (err, data) => {
            if (data) {
                res.render('converterDashboard', {
                    dbData: data
                });
            } else {
                throw err;
            }
        })
    } catch (error) {
        console.log(error);
    }
})
app.get('/convert', (req, res) => {
    res.render('fileDownload')
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const doc = new newModel({
            fullname: fullname,
            email: email,
            password: password
        });
        if (!email && !fullname && !password) {
            return res.render('register', { msg: "Please fill the all details.", data: email })
        } else {
            await doc.save();
            res.render('index')
        }
    } catch (error) {
        console.log(error);
    }
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
