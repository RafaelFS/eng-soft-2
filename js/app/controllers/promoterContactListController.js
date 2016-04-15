app.controller("promoterContactListController", ['$scope', function($scope) {
    $scope.promoters = [{
        Name: "João",
        Rating: 8,
        Earnings: 1234.50
      },
      {
        Name: "Pedro",
        Rating: 9,
        Earnings: 4234.50
      },
      {
        Name: "Luis",
        Rating: 7,
        Earnings: 5434.50
      }];
}]);
