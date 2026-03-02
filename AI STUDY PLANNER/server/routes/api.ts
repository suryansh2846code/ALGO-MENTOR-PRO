import express from 'express';
import { User, StudyPlan } from '../models/index';

const router = express.Router();

// Auth Routes Placeholder
router.post('/register', async (req, res) => {
  res.json({ message: "Register endpoint" });
});

router.post('/login', async (req, res) => {
  res.json({ message: "Login endpoint" });
});

// Plan Routes Placeholder
router.post('/generate', async (req, res) => {
  res.json({ message: "Generate plan endpoint" });
});

router.get('/my-plans', async (req, res) => {
  res.json({ plans: [] });
});

export default router;
