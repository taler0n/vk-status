import fs from 'fs';

const userData = JSON.parse(fs.readFileSync('./config/config.json'));

export const config = {
	vk: {
		token: userData.vk.token
	},
	google: {
		documentID: userData.google.documentID,
		token: userData.google.token,
		pathToLogger: './loggers/google/google.js'
	},
	console: {
		pathToLogger: './loggers/console/console.js'
	},
	loggers: userData.loggers,
	statusCheckInterval: 2000
}