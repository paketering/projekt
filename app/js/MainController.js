const angular =require('angular');

module.exports = angular.module('app.MainController',[]).controller('MainController', function($scope, appService) {
  // $scope.message = "angular works!"
	appService.loadData(function(response) {
			$scope.subject = response; // weekPlan is whole response. 
		});

	$scope.add = function(){
		var addSub = { name:$scope.name, prio:$scope.prio, status:$scope.status, links:$scope.links, note:$scope.note };
		$scope.subject.push(addSub);
		$scope.name = "";
		$scope.prio ="";
		$scope.status ="";
		$scope.links ="";
		$scope.note = "";
		appService.create(addSub);

	}
	$scope.deleteSub = function(d){
			var removed = $scope.subject.splice(d,1);
			//console.log(removed[0]._id);
			appService.subDelete(removed[0]._id);
		}
	$scope.editSub = function(i){
		//console.log($scope.weekPlan[i]);
		$scope.subject[i].editName = false;
		$scope.subject[i].editPrio = false;
		$scope.subject[i].editLinks = false;
		$scope.subject[i].editNote = false;
		
	
		console.log($scope.subject[i]);
		// save in database
		appService.updateSub($scope.subject[i]);
	}	

  	$scope.visa = false;
  	$scope.open = function(){
  		$scope.visa = !$scope.visa;
  	};



});
