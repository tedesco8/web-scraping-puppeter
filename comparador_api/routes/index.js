import routerx from 'express-promise-router';
import usuarioRouter from './usuarioRoute';
import scraperRouter from './scraperRoute';

const router = routerx();

router.use('/usuario', usuarioRouter);
router.use('/comparar', scraperRouter);

export default router;