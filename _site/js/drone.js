$(document).ready(function() {
	var userFeed = new Instafeed({
	  get: 'user',
	  // userId: 6820555015,
	  userId: 185347097,
	  accessToken: '6820555015.1677ed0.bb9d07c1a47b4f74b3a6003b9d79fa83'
	});
	userFeed.run();
});
