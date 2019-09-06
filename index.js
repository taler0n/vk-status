import {config} from './config/config.js';
import accessVKStatus from './vk_api/vk_api.js';
import log from './log_manager.js';

let currentStatus = "";

const iterate = function(){
	const newStatus = accessVKStatus(currentStatus);

	if (newStatus != currentStatus){
		currentStatus = newStatus;
		log(currentStatus);
	}
}

setInterval(iterate, config.statusCheckInterval);