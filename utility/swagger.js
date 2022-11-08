const swaggerJsDoc = require('swagger-jsdoc');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Node Js API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:8080",
			},
		],
	},
	apis: ["./routes/*.js"]
	
};
//const options =  require('../docs/swagger.json');
const specs = swaggerJsDoc(options);

module.exports = specs;

