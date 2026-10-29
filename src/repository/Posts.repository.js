import { pool } from "../config/db.js";

class PostRepository {

    async getAll() {
        const res = await pool.query('SELECT * FROM Posts');
        return res.rows;
    }

    async getById(id) {
        return knex('Posts').where({ id }).first();
    }

    async create(dados) {
        const { url_image, descricao, curtidas, criado_em } = dados;

        const res = await pool.query(
            'INSERT INTO Posts (url_image, descricao, curtidas, criado_em) VALUES ($1, $2, $3, $4) RETURNING *',
            [url_image, descricao, curtidas, criado_em]
        );

        return res.rows[0];
    }

    async update(id, dados) {
        const { url_image, descricao, curtidas, criado_em } = dados;
        const res = await pool.query(
            'UPDATE Posts SET url_image = $1, descricao = $2, curtidas = $3, criado_em = $4 WHERE id = $5 RETURNING *',
            [url_image, descricao, curtidas, criado_em, id]
        );
        return res.rows[0];
    }

    async delete(id) {
        const res = await pool.query('DELETE FROM Posts WHERE id = $1 RETURNING *', [id]);
        return res.rows[0];
    }
}

export const postRepository = new PostRepository(); 