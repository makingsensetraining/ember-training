import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		openModal: function(controller, model) {
			this.controllerFor(controller).set('model', model);
			return this.render(controller, {
				into: 'application',
				outlet: 'modal'
			});
		},
		closeModal: function() {
			return this.disconnectOutlet({
				outlet: 'modal',
				parentView: 'application'
			});
		},
		setSpainLanguage: function(){
			console.log("0001");
		},
		setEnglishLanguage: function(){	
			var set = Ember.set;
			var application = this.get('container').lookup('application:main');
			set(application, 'defaultLocale', 'en');

			console.log(this.get('container').lookup('application:main'));

			this.transitionTo('index');

		}
	}	
});
