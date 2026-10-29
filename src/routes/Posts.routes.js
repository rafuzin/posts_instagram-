import { Router } from 'express';
import { postsController } from '../controllers/Posts.controller.js';

export const PostsRouter = Router();

PostsRouter.get('/', postsController.getAll);
PostsRouter.get('/:id', postsController.getById);
PostsRouter.post('/', postsController.create);
PostsRouter.put('/:id', postsController.update);
PostsRouter.delete('/:id', postsController.delete);