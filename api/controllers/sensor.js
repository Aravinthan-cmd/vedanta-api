import sensor from "../model/sensorModel.js"
import User from "../model/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//Register
export const userRegister = async (req, res) => {
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            email: req.body.email,
            password: newPassword,
        })
        res.json({status: 'ok'})
    } catch (error) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
}

//login
export const userData = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })
    if(!user) {
        return {status: 'error', error: 'Invalid User'}
    }
    const isPasswordVaild = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (isPasswordVaild) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email
            },
            'secret123'
        )
        return res.json({status: 'ok', user: token})
    } else {
        return res.json({status: 'error', user: false})
    }
}

//Create
export const createSensor = async(req,res)=>{
    const {id, sensor1, sensor2, sensor3, sensor4, sensor5, sensor6, sensor7, sensor8, sensor9, sensor10,
        // sensor11, sensor12, sensor13, sensor14, sensor15, sensor16, sensor17, sensor18, sensor19, sensor20,
        // sensor21, sensor22, sensor23, sensor24, sensor25, sensor26, sensor27, sensor28, sensor29, sensor30,
        // sensor31, sensor32, sensor33, sensor34, sensor35, sensor36, sensor37, sensor38, sensor39, sensor40,
        // sensor41, sensor42, sensor43, sensor44, sensor45, sensor46, sensor47, sensor48, sensor49, sensor50,
        // sensor51, sensor52, sensor53, sensor54, sensor55, sensor56, sensor57, sensor58, sensor59, sensor60,
        // sensor61, sensor62, sensor63, sensor64, sensor65, sensor66, sensor67, sensor68, sensor69, sensor70,
        // sensor71, sensor72, sensor73, sensor74, sensor75, sensor76, sensor77, sensor78, sensor79, sensor80,
        // sensor81, sensor82, sensor83, sensor84, sensor85, sensor86, sensor87, sensor88, sensor89, sensor90,
        // sensor91, sensor92, sensor93, sensor94, sensor95, sensor96, sensor97, sensor98, sensor99, sensor100,
        // sensor101, sensor102, sensor103, sensor104, sensor105, sensor106, sensor107, sensor108
     } = req.query;

    try {
        const newSensor = new sensor({
            id: Number(id),
            sensor1: Number(sensor1),
            sensor2: Number(sensor2),
            sensor3: Number(sensor3),
            sensor4: Number(sensor4),
            sensor5: Number(sensor5),
            sensor6: Number(sensor6),
            sensor7: Number(sensor7),
            sensor8: Number(sensor8),
            sensor9: Number(sensor9),
            sensor10: Number(sensor10),

            // sensor11: Number(sensor11),
            // sensor12: Number(sensor12),
            // sensor13: Number(sensor13),
            // sensor14: Number(sensor14),
            // sensor15: Number(sensor15),
            // sensor16: Number(sensor16),
            // sensor17: Number(sensor17),
            // sensor18: Number(sensor18),
            // sensor19: Number(sensor19),
            // sensor20: Number(sensor20),

            // sensor21: Number(sensor21),
            // sensor22: Number(sensor22),
            // sensor23: Number(sensor23),
            // sensor24: Number(sensor24),
            // sensor25: Number(sensor25),
            // sensor26: Number(sensor26),
            // sensor27: Number(sensor27),
            // sensor28: Number(sensor28),
            // sensor29: Number(sensor29),
            // sensor30: Number(sensor30),

            // sensor31: Number(sensor31),
            // sensor32: Number(sensor32),
            // sensor33: Number(sensor33),
            // sensor34: Number(sensor34),
            // sensor35: Number(sensor35),
            // sensor36: Number(sensor36),
            // sensor37: Number(sensor37),
            // sensor38: Number(sensor38),
            // sensor39: Number(sensor39),
            // sensor40: Number(sensor40),

            // sensor41: Number(sensor41),
            // sensor42: Number(sensor42),
            // sensor43: Number(sensor43),
            // sensor44: Number(sensor44),
            // sensor45: Number(sensor45),
            // sensor46: Number(sensor46),
            // sensor47: Number(sensor47),
            // sensor48: Number(sensor48),
            // sensor49: Number(sensor49),
            // sensor50: Number(sensor50),

            // sensor51: Number(sensor51),
            // sensor52: Number(sensor52),
            // sensor53: Number(sensor53),
            // sensor54: Number(sensor54),
            // sensor55: Number(sensor55),
            // sensor56: Number(sensor56),
            // sensor57: Number(sensor57),
            // sensor58: Number(sensor58),
            // sensor59: Number(sensor59),
            // sensor60: Number(sensor60),

            // sensor61: Number(sensor61),
            // sensor62: Number(sensor62),
            // sensor63: Number(sensor63),
            // sensor64: Number(sensor64),
            // sensor65: Number(sensor65),
            // sensor66: Number(sensor66),
            // sensor67: Number(sensor67),
            // sensor68: Number(sensor68),
            // sensor69: Number(sensor69),
            // sensor70: Number(sensor70),

            // sensor71: Number(sensor71),
            // sensor72: Number(sensor72),
            // sensor73: Number(sensor73),
            // sensor74: Number(sensor74),
            // sensor75: Number(sensor75),
            // sensor76: Number(sensor76),
            // sensor77: Number(sensor77),
            // sensor78: Number(sensor78),
            // sensor79: Number(sensor79),
            // sensor80: Number(sensor80),

            // sensor81: Number(sensor81),
            // sensor82: Number(sensor82),
            // sensor83: Number(sensor83),
            // sensor84: Number(sensor84),
            // sensor85: Number(sensor85),
            // sensor86: Number(sensor86),
            // sensor87: Number(sensor87),
            // sensor88: Number(sensor88),
            // sensor89: Number(sensor89),
            // sensor90: Number(sensor90),

            // sensor91: Number(sensor91),
            // sensor92: Number(sensor92),
            // sensor93: Number(sensor93),
            // sensor94: Number(sensor94),
            // sensor95: Number(sensor95),
            // sensor96: Number(sensor96),
            // sensor97: Number(sensor97),
            // sensor98: Number(sensor98),
            // sensor99: Number(sensor99),
            // sensor100: Number(sensor100),

            // sensor101: Number(sensor101),
            // sensor102: Number(sensor102),
            // sensor103: Number(sensor103),
            // sensor104: Number(sensor104),
            // sensor105: Number(sensor105),
            // sensor106: Number(sensor106),
            // sensor107: Number(sensor107),
            // sensor108: Number(sensor108),
        });

        const saveSensor = await newSensor.save();
        res.status(200).json(saveSensor);
    } catch (error) {
        res.status(500).json(error);
    }
};

//update
export const updateSensor = async(req,res)=>{
    try {
        const updatesensor = await sensor.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true});
            res.status(200).json(updatesensor);
    } catch (error) {
        res.status(500).json(error);
    }
};

//delete
export const deleteSensor = async(req,res)=>{
    try {
        const deletesensor = await sensor.findByIdAndDelete(
            req.params.id);
            res.status(200).json(deletesensor);
    } catch (error) {
        res.status(500).json(error);
    }
}

//get
export const getSensor = async(req,res)=>{
    try {
        const getsensor= await sensor.findById(req.params.id);
        res.status(200).json(getsensor);
    } catch (error) {
        res.status(500).json(error);
    }
};

//getAll
export const getAllSensor = async(req,res)=>{
    try {
        const getallsensor= await sensor.find();
        res.status(200).json(getallsensor);
    } catch (error) {
        res.status(500).json(error);
    }
};

//getsensor
export const getUpdatedSensor = async(req,res)=>{
    try {
        const getupdatedsensor = await sensor.find().sort({updatedAt:-1}).limit(1);
        res.status(200).json(getupdatedsensor);
    } catch (error) {
        res.status(500).json(error);
    }
}