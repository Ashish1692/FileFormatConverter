import newModel from './dbSchema.mjs';
class RoutesFunctions {
    static register = async (req, res) => {

        try {
            const { fullname, email, password } = req.body;
            const doc = new newModel({
                fullname: fullname,
                email: email,
                password: password
            });
            if (!email && !fullname && !password) {
                return res.render('register', { msg: "Please fill the all details." })
            } else {
                await doc.save();
                res.redirect('/user')
            }
        } catch (error) {
            console.log(error);
        }
    }


    static homePage = async (req, res) => {
        res.render('index')
    }
    static dashboard = async (req, res) => {
        res.render('converterDashboard')
    }

}
export default RoutesFunctions;
// app.post('/index', async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password = req.body.password;

//         const userData = await newModel.findOne({ email: email }, (err, foundResult) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 if (foundResult.password === password) {
//                     res.render('converterDashboard');
//                 }
//                 else {
//                     res.render('index', { msg: 'email or password is incorrect!' })
//                 }
//             }
//         });

//     } catch (error) {
//         console.log(error);
//     }

// })
// app.get('/Dashboard', (req, res) => {
//     try {
//         newModel.find({}, (err, data) => {
//             if (data) {
//                 res.render('converterDashboard', {
//                     dbData: data
//                 });
//             } else {
//                 throw err;
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })
// app.get('/convert', (req, res) => {
//     res.render('fileDownload')
// })
// app.get('/register', (req, res) => {
//     res.render('register')
// })

