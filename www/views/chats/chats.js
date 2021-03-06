angular.module('App')


.controller('chatsController', function($scope, $stateParams, Auth,Chats,$firebase,$firebaseObject, $firebaseArray, $timeout, $ionicNavBarDelegate,$ionicScrollDelegate) {
console.log('chatsController');
  $ionicNavBarDelegate.setTitle('<img class="title-image" src="http://i66.tinypic.com/2a7vjnr.png">');
  $scope.hideTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

	var ref = new Firebase("https://geomapapp.firebaseio.com/home/chat");
	var obj=$firebaseObject(ref);
	
	obj=$scope.messages;

 $scope.chats = Chats.all();
 
 
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  
 $scope.sendMessage = function() {
    alternate = !alternate;

    var d = new Date();
	var c=new Date().toJSON().slice(0,10);
  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

 
    $scope.messages.push({
    //  "username": authData.username,
      "text":$scope.data.text,
	  time: d,
	  date: c,
    });
	
	$scope.text='';
	$scope.username="";
		
		
    delete $scope.data.text;
	 
		  
    $ionicScrollDelegate.scrollBottom(true);

  };
  
 
  
  
  


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];
  
  

})
