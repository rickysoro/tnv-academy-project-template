import express from "express";

const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating } from "../controllers/ratings-controller.js";
import { getAllFavourite, getFavourite, addFavourite, deleteFavourite } from "../controllers/favourite-controller.js";

const router = express.Router();

router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);

router.get(`${API_ROOT}/favourite/:userId/:movieId`, getFavourite);
router.get(`${API_ROOT}/favourite/:userId`, getAllFavourite);
router.post(`${API_ROOT}/favourite`, addFavourite);
router.delete(`${API_ROOT}/favourite/:userId/:movieId`, deleteFavourite);


export default router;

