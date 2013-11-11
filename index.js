angular.module("FilterDemo", [])
.controller("myController", ['$scope', function($scope){
  $scope.events = [
    {name: 'Basketball game', time: 'Tomorrow', initiator: 'Erdong'},
    {name: 'Basketball game', time: 'Tomorrow', initiator: 'Qingsong'},
    {name: 'Basketball game', time: 'Tomorrow', initiator: 'Yi'},
    {name: 'Basketball game', time: 'Tomorrow', initiator: 'Jojo'},
    {name: 'Basketball game', time: 'Tomorrow', initiator: 'Yi'},
    {name: 'Football game', time: 'Tomorrow', initiator: 'Jo'},
    {name: 'Football game', time: 'Tomorrow', initiator: 'Erdong'},
    {name: 'Football game', time: 'Tomorrow', initiator: 'Erdong'},
    {name: 'Football game', time: 'Tomorrow', initiator: 'Erdong'},
    {name: 'Football game', time: 'Tomorrow', initiator: 'Erdong'}
  ];
}]);
