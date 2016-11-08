(function() {
	'use strict';

	var myHeroes = {
		templateUrl: "./components/character.component.html",
		controller: marvelCtrl
	};

	angular
		.module("marvel")
		.component("myHeroes", myHeroes);

	marvelCtrl.$inject = ["apiMarvel"];
	function marvelCtrl(apiMarvel) {
		var hero = this;

		hero.characters = null;
		hero.apiData = apiMarvel
			.get()
			.$promise.then(function(response){
				hero.characters = response.data.results;
			});
	}
})();