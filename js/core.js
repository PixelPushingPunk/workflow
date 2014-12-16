(function () {
	
	var App = (function () {
	
		return {
		
			showAlert: function () {
				
				console.log('this is a stupid fucking alert about nothing');				

			},

			init: function () {
				
				this.showAlert();

			}		

		}		

	})();
	
	document.addEventListener('DOMContentLoaded', function () {
		
		App.init();	

	}, false);

})();
