$(document).ready(function() {
	var userID = config.USER_ID;
	var accessToken = config.ACCESS_TOKEN;
	var userFeed = new Instafeed({
	  get: 'user',
	  userId: userID,
	  accessToken: accessToken
	});
	userFeed.run();
});
