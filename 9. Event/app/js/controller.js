var PhoneListCtrl = ['$scope', '$http', function($scope, $http) {
			
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data.splice(0,5);
	});
	
	$scope.hello = "Hello World!";
	$scope.orderProp = "name";
}];

function PhoneDetailCtrl($scope, $http, $routeParams) {
	$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
		$scope.phone = data;
		$scope.mainImageUrl = data.images[0];
	});
	
	$scope.setImage = function(imageUrl){
		$scope.mainImageUrl = imageUrl;
	}
}