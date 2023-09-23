import express from "express";
import { userData, createSensor, deleteSensor, getAllSensor, getSensor, getUpdatedSensor, updateSensor, userRegister, getInitialSensor } from "../controllers/sensor.js";

const router = express.Router();

//register
router.post('/register',userRegister);

//login 
router.post('/login',userData);

//create
router.get('/new',createSensor);

//update
router.put('/:id',updateSensor);

//delete
router.delete('/:id',deleteSensor);

//get
router.get('/find/:id',getSensor);

//getAll
router.get('/find',getAllSensor);

//getinitial
router.get('/initial',getInitialSensor);

//getUpdatedSensor
router.get('/updated',getUpdatedSensor);

export default router;