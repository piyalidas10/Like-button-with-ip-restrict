# Like-button-with-ip-restrict

Initialize ip varible and button class variable in app.js.

    $scope.yourip = 0;
    $scope.btnclass = "";


Get your ip address from "http://freegeoip.net/json/" link. Put the ip address in $scope.getip variable.

        $http.get('http://freegeoip.net/json/')
            .success(function(response) {
              $scope.getip = response.ip;
              console.log(response.ip);
        })

When user click on "Like" button, $scope.getlike function will call showlike()function. if yourip value is not same with getip then  $scope.likes is addding by 1 and getip value put in youip variable and also btnclass "btn-primary" is addded in button class. Again when user click on "Like" button, yourip value is same with getip, so $scope.likes is substracting by 1 and btnclass will be removed.

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
