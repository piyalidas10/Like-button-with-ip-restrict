var app = angular.module("likeApp",[]);

app.controller("mainCtrl",function($scope,$http){
	$scope.yourip = 0;
	$scope.btnclass = "";
	
	$http.get('http://freegeoip.net/json/')
			.success(function(response) {
				$scope.getip = response.ip;
				console.log(response.ip);

			})
	
	
	$scope.showlike=function(){
				if($scope.yourip===$scope.getip){
					console.log("same ip");
					$scope.likes -= 1;	
					$scope.btnclass = "";
				}
				else{
					$scope.likes += 1;
					$scope.btnclass = "btn-primary";
					$scope.yourip = 0;
				}
				$scope.yourip = $scope.getip;
	}
	
	$scope.getlike=function(){	
		
		if($scope.likes<=0)
		{
			$scope.yourip = 0;
			$scope.showlike();
		}
		else{
			$scope.showlike();
			
		}
		
		
	}
});