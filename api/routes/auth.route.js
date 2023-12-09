import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router=express.Router();

// router.get('/',test);
router.post("/signup",signup);

export default router;