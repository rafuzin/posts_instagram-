import { postsServices } from '../service/Posts.service.js';

class PostsController {
    async getAll(_req, res) {
        try {
            return res.json(await postsServices.getall());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao procurar Posts.' });
        }
    }

    async getById(req, res) {
        try {
            const Posts = await postsServices.getById(req.params.id);
            if (!Posts) return res.status(404).json({ erro: 'Post não encontrado.' });
            return res.json(Posts);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao buscar Post.' });
        }
    }

    async create(req, res) {
        try {
            return res.status(201).json(await postsServices.create(req.body));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao inserir o Post.' });
        }
    }

    async update(req, res) {
        try {
            const Posts = await postsServices.update(req.params.id, req.body);
            if (!Posts) return res.status(404).json({ erro: 'Post não encontrado.' });
            return res.json(Posts);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao atualizar o Posts.' });
        }
    }

    async delete(req, res) {
        try {
            const Posts = await postsServices.delete(req.params.id);
            if (!Posts) return res.status(404).json({ erro: 'Post não encontrado.' });
            return res.json(Posts);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao excluir Post.' });
        }
    }

}

export const postsController = new PostsController();