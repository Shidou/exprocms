/**
 * Created with JetBrains WebStorm.
 * User: shidoudou
 * Date: 13-12-5
 * Time: 下午10:39
 * To change this template use File | Settings | File Templates.
 */
//var message = $http.get('http://localhost:3000/users/me');
function dataController($scope){
    var message = $http.get('http://localhost:3000/users/me');
    //$scope.items = [message];
    $scope.items = [{name:'sad',email:'asd'}];
    $scope.displayDataall = 'Hello World!';
}
$scope.displayData = function(){
    $scope.needed = "Start";
}