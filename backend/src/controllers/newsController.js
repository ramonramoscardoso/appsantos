const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { title, subtitle, text, urlImage, fontImage, fontNews } = request.body;

        const { page = 1 } = request.query;
        
        await connection('news').insert({
            title,
            subtitle,
            text,
            urlImage,
            fontImage,
            fontNews
        })

        return response.json(title);
    },

    async index(request, response){
        const { page } = request.query;

        const [count] = await connection('news').count();

        const news = await connection('news')
        .limit(5)
        .offset((page - 1) * 5)
        .orderBy('id', 'desc')
        .select('*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(news);
    },

    async lastNews(request, response){

        const news = await connection('news')
        .limit(10)
        .orderBy('id', 'desc')
        .select('*');

        return response.json(news);
    },

    async getNews(request, response){
        const {id} = request.params;

        const news = await connection('news')
        .where('id', id)
        .select('*')
        .first();


        return response.json(news);
    },
}