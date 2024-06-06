import { Router } from 'express';

const router = Router();

router.use('/', (req, res, next) => {
    res.status(200).send({ message: "hello world"});
    return next();
});

export default router;
