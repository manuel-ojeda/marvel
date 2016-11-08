(function() {
	'use strict';

	angular
		.module("marvel")
		.factory("apiMarvel", apiMarvel);

	apiMarvel.$inject = ["$resource"];
	function apiMarvel($resource) {
		return $resource("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6eaf3ebdc7872df717dddac7f81caf98&hash=e27abb9e25905a9abd259691ce7b2981");
	}
})();