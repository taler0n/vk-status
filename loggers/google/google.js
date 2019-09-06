import {config} from '../../config/config.js';
import {google} from 'googleapis';

export function log(message){
	fs.readFile('credentials.json', (err, content) => {
  		const oAuth2Client = authorize(JSON.parse(content));
  		const docs = google.docs({version: 'v1', auth});
  		printStatus(docs, message);
	});
}

function authorize(credentials) {
  	const {client_secret, client_id, redirect_uris} = credentials.installed;
  	const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  	oAuth2Client.setCredentials(JSON.parse(config.google.token));
  	return oAuth2Client;
}

function printStatus(docs, message) {
  	const updateObject = {
    	documentId: config.google.documentId,
    	resource: {
      		requests: [{
        		insertText: {
          			text: message,
          			location: {
            			index: 1,
        			},
    			},
      		}],
    	},
  	};
  	
  docs.documents.batchUpdate(updateObject);
}