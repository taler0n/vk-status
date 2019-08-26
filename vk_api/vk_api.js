import {config} from '../config/config';

export async function accessVKStatus(currentStatus){
	const url = `https://api.vk.com/method/status.get?access_token=${config.vk.token}&v=5.52`;
	const response = await fetch(url);
	const data = await response.json();
	const status = data.response.text;

	if (status != currentStatus){
		return status;
	}

	return false;
}