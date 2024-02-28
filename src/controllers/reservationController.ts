import { Request, Response } from 'express';
import { homes, reservations } from '../data';
import { Reservation } from '../models/Reservation';

export const createReservation = (req: Request, res: Response) => {
  const { homeId, startDate, endDate }: { homeId: number; startDate: Date; endDate: Date } = req.body;


  const home = homes.find(h => h.id === homeId);
  if (!home) {
    return res.status(404).send('Home not found');
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  if (start >= end) {
    return res.status(400).send('Invalid date range: End date must be after start date.');
  }
  const isOverlapping = reservations.some(reservation => {
    return reservation.homeId === homeId &&
           ((start <= new Date(reservation.endDate) && start >= new Date(reservation.startDate)) ||
           (end <= new Date(reservation.endDate) && end >= new Date(reservation.startDate)));
  });

  if (isOverlapping) {
    return res.status(400).send('This home is already reserved for the selected dates.');
  }

  const newReservation: Reservation = {
    id: reservations.length + 1,
    homeId,
    startDate: start,
    endDate: end,
  };

  reservations.push(newReservation);
  return res.status(201).json(newReservation);
};
