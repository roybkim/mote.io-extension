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
			
		},
		blocks: [
			{
				type: 'buttons',
				data: [
					{
						press: function() {
							jQ('#bigCookie').click();	
						},
						icon: 'play',
						hash: 'big cookie'
					}
				]
			},
		]
	};
});

