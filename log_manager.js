import {config} from './config/config.js';

export default function log(message){
	const loggerNames = config.loggers;
	console.log(loggerNames);
	loggerNames.forEach(name => {
		useLogger(message, name);
	});
}

async function useLogger(message, loggerName){
	const path = config[loggerName].pathToLogger;
	const logger = await import(path);
	logger.log(message);
}