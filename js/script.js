var myApp = angular.module("myApp", [] );

myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
	//list to be filled by http request later
	$scope.list = ['hello', 'hell', 'int', 'init', 'garbage', 'gargle', 'computer', 'machine'];
	$scope.selected = [];
	
	//function called for auto-complete
	$scope.afterSelected = function(sel) {
		if(sel) {
			$scope.selected = [];
	//		for( i=0; i<$scope.list.length; i++ ) {
	//			if( $scope.list[i].indexOf(sel) > -1 ) {
	//				$scope.selected.push($scope.list[i]);
	//			}
			$http({
				method: 'GET',
				url: 'https://crossorigin.me/http://www.truemd.in/api/medicine_suggestions/',
				params: { id: sel, key:'b5061c13048ee1043cfbc9142375ba', limit:200  },
		//		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				}).then(function(data) {
					//alert("success");
					$scope.selected = data;
					console.log(data);
					console.log("hello");
				}, function() {

					alert('something bad occured');
				});
			}
	//		MyFunction = function(data) {
	//				alert('main bhi call ho gya');
	//				console.log(data.response);
	//				}
		}
	
}]);

