const db = require('../db/config');

const Fotos = {

	findAll: () => db.manyOrNone('SELECT * FROM fotos'),

	addFoto: (url, description, details) => {
		return db.one(
			`INSERT INTO fotos (url, description, details) VALUES ($1, $2, $3) returning id`,
			[url, description, details]
		);
	},

	updateFoto: (id, url, description, details) => {
		return db.one(
			'UPDATE fotos SET url = $2, description = $3, details = $4 WHERE id = $1 returning id',
			[id, url, description, details]
		);
	},

	delete: (id) => db.none('DELETE FROM fotos WHERE id = $1', [id])
};


module.exports = Fotos;