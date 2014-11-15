Menu.add({name:'Flipper',route:'views/Flipper'}, 'Views');

Router.map(function() {
  this.route('views_Flipper', {
  	path: '/views/Flipper'
  });
});

Template.views_Flipper_front.events({
	'click': function(event, tpl) {
		var fview = FView.from(tpl);
		fview.parent.view.flip({ curve : 'easeOutBounce', duration : 500});
	}
});

Template.views_Flipper_back.events({
	'click': function(event, tpl) {
		var fview = FView.from(tpl);
		fview.parent.view.flip({ curve : 'easeOutBounce', duration : 500});
	}
});
