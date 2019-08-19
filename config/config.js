import nconf from 'nconf';

nconf.env().argv().file('./config/config.json');

export const config = {
	vk: {
		token: nconf.get('vk:token')
	},
	google: {
		documentID: nconf.get('google:documentID'),
		token: nconf.get('google:token')
	},
	interval: 2000
}