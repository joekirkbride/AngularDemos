var projectapp = angular.module("projmod", []);

projectapp.controller("projctrl", function ($scope, $http) {
	// load data
	$http.get("proj.json")
	.success(function (data) {
		$scope.projdata = data;
	}).error(function () {
		confirm("failed to load data");
	});
});

// function to display 