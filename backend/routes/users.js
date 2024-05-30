import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({'users': ['Alice', 'Bob', 'Charlie']})
});

export default router;