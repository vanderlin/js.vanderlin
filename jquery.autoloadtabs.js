$.extend({

	autoLoadTabs:function(options) {
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var activeTab = $(e.target).attr('href').substr(1);
			if(options.debug == true) console.log(activeTab);
			window.location.hash = "#"+activeTab;
		})				

		// what tab is loaded on this page reaload/start
		var hash = window.location.hash;
		var tokenHash = hash.split('#');
		if(options.debug == true) console.log(tokenHash);
		for(var i=0; i<tokenHash.length; i++) {
			if(tokenHash[i] == "") continue;
			var tab = $(".nav-tabs li a[href=#"+tokenHash[i]+"]");
			if(options.debug == true) console.log(tab.length);
			if(tab.length > 0) {
				$(tab).tab('show');
				break;	
			}
		}

		// nav bar
		var url = window.location.href;
		if(url.charAt(url.length - 1) == "/") {
			url = url.substr(0, url.length-1);
		}

		var navButton = $('.navbar-nav li a[href="'+url+'""]').first();
		if(options.debug == true) console.log(url);

		// remove other active
		$('.navbar-nav li').each(function(index, val) {
			if( $(val).find('a').attr('href') == url) {
				$(val).addClass('active');
			}
			else $(val).removeClass('active');
		});
	}

});
