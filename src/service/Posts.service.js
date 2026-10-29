import { postRepository } from "../repository/Posts.repository.js";

class PostsServices {
    async getall() {
        return postRepository.getAll()
    }

    async getById(id) {
        return postRepository.getById(id)
    }

    async create(dados) {
        return postRepository.create(dados)
    }

    async update(id) {

        return postRepository.update(id)
    }

    async delete(id) {

        return postRepository.delete(id)
    }
}

export const postsServices= new PostsServices();