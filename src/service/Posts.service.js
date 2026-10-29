import { PostRepository } from "../repository/Posts.repository.js";

class PostsServices {
    async getall() {
        return PostRepository.getAll()
    }

    async getById(id) {
        return PostRepository.getById(id)
    }

    async create(dados) {
        return PostRepository.create(dados)
    }

    async update(id) {

        return PostRepository.update(id)
    }

    async delete(id) {

        return PostRepository.delete(id)
    }
}

export const postsServices= new PostsServices();