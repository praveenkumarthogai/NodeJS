const express = require('express');
const router = express.Router();
const loginController = require('../controllers/auth.controller');


/**
 * @swagger
 * /api/login/:
 *   get:
 *     summary: Get Access Toekn
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: Access token received
 *         content:
 *           application/json
 *       404:
 *         description: bad request
 *       500:
 *         description:Internal server error
 */
router.get('/', loginController.login);


router.post('/register',loginController.register)


module.exports = router;