module.exports = angular.module('app.service',[]).service('appService', function ($http) {
	
	this.loadData = function(callback) {
		$http({
			method: 'GET',
			url: '/api/subject'
		}).then(function successCallback(response) {
			//console.log(response.data);
		    callback(response.data.weeks);
		}, function errorCallback(response) {
		});
	}

	
	// send the new weeks till api.
	this.create = function(data){
		//var data = {'test':'test'};
		$http.post('/api/post', data);
	}
	this.subDelete = function(data){
		$http.delete('/api/delete' + data);
	}
	this.updateSub = function(week){
		console.log("hit?");
		$http.put('/api/update' + week._id, week);
	}
});