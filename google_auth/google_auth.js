import fs from 'fs';
import readline from 'readline';
import {google} from 'googleapis';

fs.readFile('../credentials.json', (err, content) => {
	if (err) 
		return console.log('Error loading client secret file:', err);
	const credentials = JSON.parse(content);
  	const {client_secret, client_id, redirect_uris} = credentials.installed;
  	const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  	getToken(oAuth2Client);
});

function getToken(oAuth2Client) {
	const authUrl = oAuth2Client.generateAuthUrl({
    	access_type: 'offline',
    	scope: ['https://www.googleapis.com/auth/documents'],
  	});
  	console.log('Authorize this app by visiting this url:', authUrl);
  	const rl = readline.createInterface({
    	input: process.stdin,
    	output: process.stdout,
  	});
  	rl.question('Enter the code from that page here: ', (code) => {
    	rl.close();
    	oAuth2Client.getToken(code, (err, token) => {
      		if (err) 
      			return console.error('Error retrieving access token', err);
      		console.log('Your token:')
      		console.log(JSON.stringify(token));
    	});
  	});
}