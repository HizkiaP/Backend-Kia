import express from 'express';
import userController from "../controller/user_profile.controller.js";
import recipeController from '../controller/recipe.controller.js';

const router = express.Router();

router.get('/user', userController.listUser)
router.post('/user', userController.createUser)
router.put('/user/:user_id', userController.updateUser)
router.delete('/user/:user_id', userController.deleteUser)

router.get('/recipe', recipeController.listUser)
router.post('/recipe', recipeController.createUser)
router.put('/recipe/:recipe_id', recipeController.updateUser)
router.delete('/recipe/:recipe_id', recipeController.deleteUser)

export default router;