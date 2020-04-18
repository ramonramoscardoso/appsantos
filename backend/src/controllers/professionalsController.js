const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { name, birthDate, number, country, teams, urlPicture, urlInstagram, type } = request.body;

        await connection('professionals').insert({
            name,
            birthDate,
            number,
            country,
            teams,
            urlPicture,
            urlInstagram,
            type
        })
        
        return response.json({name, number});
    },

    async index(request, response){
        const professionals = await connection('professionals').select('*');

        return response.json(professionals);
    },

    //AJUSTAR FUNCOES DELETE
    async delete(request, response){
        const { id } = request.params;

            const professionals = await connection('professionals')
                .where('id', id)    
                .select('*')
                .first();

        if(!professionals){
            return response.json({"error": "Jogador nao encontrado"});
        }

        await connection('professionals').where('id', id).delete();
            
        return response.json(professionals.name + " Deletado");
    }
}