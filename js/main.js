//creates the angular modeule called myApp
var app = angular.module('myApp', []);

//root controller
app.controller('PlayerController', ['$scope', function($scope){
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = '/Desktop/WomanWoman.mp3';
	$scope.play = function(){
		$scope.audio.play();
		$scope.playing = true;
	};
	$scope.stop = function(){
		$scope.audio.pause();
		$scope.playing = false;
	};
	$scope.audio.addEventListner('ended'. function(){
		$scope.$apply(function() {
			$scope.stop();
		});
	});x
}]);

//track our audio element
app.controller('RelatedController', ['$scope', function($scope){
}]);

app.controller('DemoController', function($scope) {
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.subtract = function(amount) { $scope.counter -= amount; };
});


// app.run(function($rootScope) {
// 	$rootScope.name = "Holly Brice";
// });

// app.controller('MyController', function($scope){
// 	$scope.person = {
// 		name : "Silly Willy"
// 	};
// });