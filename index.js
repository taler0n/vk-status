import {config} from './config/config';
import accessDocument from './google_api';
import accessVKStatus from './vk_api';

const callback = accessDocument;
const currentStatus = "";
setInterval(accessVKStatus, config.interval, currentStatus, callback);