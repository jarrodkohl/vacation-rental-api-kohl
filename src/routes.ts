// src/routes.ts
import { Router } from 'express';
import { createReservation } from './controllers/reservationController';

const router = Router();

router.post('/reservations', createReservation);

export default router;
