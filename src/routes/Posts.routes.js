import { Router } from 'express';
import { PostsController } from '../controllers/Posts.controller.js';

export const PostsRouter = Router();

PostsRouter.get('/', PostsController.getAll);
PostsRouter.get('/:id', PostsController.getById);
PostsRouter.post('/', PostsController.create);
PostsRouter.put('/:id', PostsController.update);
PostsRouter.delete('/:id', PostsController.delete);