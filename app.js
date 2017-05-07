var app = angular.module('myApp', [])

console.log("working");

app.controller('myController', function($scope, $http, $timeout) {

	var vm = this;
  vm.mydata = [];

        $http.get('http://www.reddit.com/r/aww.json')
            .then(function(result) {
              console.log(result);
              vm.mydata = result.data.data.children;
             });

	// var promise = $http({
	// 	method: 'GET',
	// 	url: 'http://www.reddit.com/r/aww.json',
	// 	params: {limit: '25'}});

	// promise.then(function(response) {
	// 	console.log(response.data.data.children[0].data.title);
	// 	$scope.newData = response.data.data.children[0].data.title;
		
	// });

});
