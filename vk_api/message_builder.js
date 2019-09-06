export function buildMessage(newStatus) {
	const time = new Date();
	const message = `${time.getMinutes()}:${time.getHours()} ${time.getDate()}.${time.getMonth()}.${time.getFullYear()} ${newStatus}\n`;
	return message;
}