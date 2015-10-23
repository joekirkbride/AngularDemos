var projectapp = angular.module("cvmod", []);

projectapp.controller("cvCtrl", function ($scope, $http) {
	// load data
	$http.get("data/cv-links-1508aug24.json")
	.success(function (data) {
		$scope.cvdata = data;
	}).error(function () {
		confirm("failed to load data");
	});
});
