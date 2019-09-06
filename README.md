VK Status Logger

This application logs any changes to your VK status to GoogleDocument and/or console.

To start you need to create config.json file in your /config directory according to the provided sample.

vk.token: follow this link and then copy access_token from the address bar into your config file - 
	https://oauth.vk.com/authorize?client_id=7093314	&display=page&redirect_uri=https://oauth.vk.com/blank.htm	l&scope=status&response_type=token&v=5.52
	
google.documentID: create or find a GoogleDocument where the logs will be. Copy ID of this document from the address bar.

google.token: open console app auth_app.js from google_auth directory and then follow instructions. Copy all token fields from console into config file.

loggers: Enter "google" and/or "console" in the brackets as your desired loggers.

After creating and filling of the config file you can start by executing app.js file.