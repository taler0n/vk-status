import {config} from './config/config';
import accessDocument from './google_api';
import accessVKStatus from './vk_api';

let currentStatus = "";

const iterate = function(){
	const newStatus = accessVKStatus(currentStatus);

	if (newStatus){
		console.log(newStatus);
		currentStatus = newStatus;
		accessDocument(newStatus);
	}
}

setInterval(iterate, config.interval);