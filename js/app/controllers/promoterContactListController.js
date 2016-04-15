app.controller("promoterContactListController", ['$scope', 'promoterManagementService', 'promoterListService', function($scope, promoterManagementService, promoterListService) {
    $scope.promoters = promoterManagementService.listAllPromoters();
    $scope.selectedPromoter = {};
    $scope.selectPromoter = function(promoterId){
      $scope.selectedPromoter = promoterManagementService.getDetailsForPromoter(promoterId)
    };

    $scope.listProblematicPromoters = function(){
      $scope.promoters = promoterManagementService.listProblematicPromoters();
    };

    $scope.listCriticalPromoters = function(){
      $scope.promoters = promoterManagementService.listCriticalPromoters();
    };

    $scope.listMostSucessfulPromoters = function(){
      $scope.promoters = promoterManagementService.listMostSucessfulPromoters();
    };

    $scope.listAllPromoters = function(){
      $scope.promoters = promoterManagementService.listAllPromoters();
    };

    $scope.saveCurrentList = function(){
      promoterListService.saveList($scope.promoters);
    }

}]);
