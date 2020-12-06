import routerx from 'express-promise-router';
import scraperController from '../controllers/ScraperController';

const router = routerx();

router.get('/query',scraperController.query);

export default router;