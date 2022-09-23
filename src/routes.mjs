import express from "express";
export const router = express.Router();
import RoutesFunctions from './routeFunctions.mjs'

router.get('/', RoutesFunctions.homePage);
router.post('/register', RoutesFunctions.register);
router.get('/register', RoutesFunctions.register);
router.get('/dashboard', RoutesFunctions.dashboard);
router.post('/dashboard', RoutesFunctions.dashboard);
// router.post('/update/:id', CrudController.updateDocById);
// router.post('/delete/:id', CrudController.deleteDocById);


export default router
