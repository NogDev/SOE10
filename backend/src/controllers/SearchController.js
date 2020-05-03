const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response){
        
        const {latitude, longitude, techs} = request.query;
        
        const techArray = parseStringAsArray(techs);

        console.log(techArray);

        return response.json({
            devs:[]
        });
    }
}