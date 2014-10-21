var PhoneListCtrl = ['$scope', '$http', function($scope, $http) {
			
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data.splice(0,5);
	});
	
	$scope.hello = "Hello World!";
	$scope.orderProp = "name";
}];

function PhoneDetailCtrl($scope, $routeParams) {
	$scope.phoneId = $routeParams.phoneId;
}