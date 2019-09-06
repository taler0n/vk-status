<b><h3>VK Status Logger</h3></b>

This application logs any changes to your VK status to GoogleDocument and/or console.

To start you need to create <b>config.json</b> file in your /config directory according to the provided sample.

<b>vk.token:</b> follow this link and then copy access_token from the address bar into your config file - 
	https://oauth.vk.com/authorize?client_id=7093314&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=status&response_type=token&v=5.52
	
<b>google.documentID:</b> create or find a GoogleDocument where the logs will be. Copy ID of this document from the address bar.

<b>google.token:</b> open console app <b>auth_app.js</b> from google_auth directory and then follow instructions. Copy all token fields from console into config file.

<b>loggers:</b> Enter "google" and/or "console" in the brackets as your desired loggers.

After creating and filling of the config file you can start by executing <b>app.js</b> file.
