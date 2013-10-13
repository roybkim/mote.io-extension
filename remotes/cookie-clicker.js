exec(function() {
	
	mote.io.remote = {
		api_version: '0.1',
		app_name: 'Cookie Clicker',
		action: 'playing',
		twitter: 'cc',
		display_input: false,
		init: function() {

		},
		update: function(force) {
			var cookieCount = jQ('#cookies').text().split(" ")[0] + " cookies",
				cps = jQ('#cookies div').text(),
				cookieImg = "http://orteil.dashnet.org/cookieclicker/img/goldCookie.png";

				mote.io.notify(cookieCount, cps, cookieImg, '?', force);
		},
		blocks: [
			{
				type: 'notify',
				share: false
			},
			{
				type: 'buttons',
				data: [
					{
						press: function() {
							jQ('#bigCookie').click();	
						},
						icon: 'globe',
						hash: 'big cookie'
					}
				]
			},
		]
	};
});

