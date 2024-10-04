import { Router } from 'express';
import { UserController } from '../controllers/UserController';

// Import Swagger documentation
import '../swagger/userSwagger';
import '../swagger/productSwagger';

const router = Router();
const userController = new UserController();

router.post('/', userController.create.bind(userController));
router.get('/', userController.findAll.bind(userController));
router.get('/:id', userController.findOne.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.delete.bind(userController));

export default router;
