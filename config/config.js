import fs from 'fs';

const userData = JSON.parse(fs.readFileSync('./config/config.json'));

export const config = {
	vk: {
		token: userData.vk.token
	},
	google: {
		documentID: userData.token.documentID,
		token: userData.google.token
	},
	interval: 2000
}