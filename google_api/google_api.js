import {config} from '../config/config';
import {google} from 'googleapis';

export function accessDocument(newStatus){
	fs.readFile('credentials.json', (err, content) => {
  		if (err) {
  			return console.log('Error loading client secret file:', err);
  		}
  		const oAuth2Client = authorize(JSON.parse(content));
  		printStatus(oAuth2Client, newStatus);
	});
}

function authorize(credentials) {
  	const {client_secret, client_id, redirect_uris} = credentials.installed;
  	const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  	oAuth2Client.setCredentials(JSON.parse(config.google.token));
  	return oAuth2Client;
}

function printStatus(auth, newStatus) {
	const time = new Date();
  	const docs = google.docs({version: 'v1', auth});
  	const updateObject = {
    documentId: config.google.documentId,
    resource: {
      requests: [{
        insertText: {
          text: `${time.getMinutes()}:${time.getHours()} ${time.getDate()}.${time.getMonth()}.${time.getFullYear()} ${newStatus}\n`,
          location: {
            index: 1,
        	},
    	},
      }],
    },
  };
  docs.documents.batchUpdate(updateObject);
}