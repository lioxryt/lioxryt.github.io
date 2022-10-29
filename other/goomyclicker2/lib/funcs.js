/* for displaying play time, etc. */
function reprtime(ms){
	time_str = "";
	if (ms > 86400000)
		time_str += Math.floor(ms / 86400000) + "/";
	time_str += ("00" + (Math.floor(ms / 3600000) % 24)).substr(-2) + ":";
	time_str += ("00" + (Math.floor(ms / 60000) % 60)).substr(-2) + ":";
	time_str += ("00" + (Math.floor(ms / 1000) % 60)).substr(-2) + "<small>.";
	time_str += ("00" + (Math.floor(ms / 10) % 100)).substr(-2) + "</small>";
	return time_str;
}

function reprsecs(ms){
	time_str = "";
	time_str += ("00" + Math.floor(ms / 1000)).substr(-2) + "<small>.";
	time_str += ("00" + (Math.floor(ms / 10) % 100)).substr(-2) + "</small>";
	return time_str;
}
