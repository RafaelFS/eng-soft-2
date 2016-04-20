app.controller("promoterContactListController", ['$scope', 'promoterManagementService', 'promoterListService', function($scope, promoterManagementService, promoterListService) {
    $scope.promoters = promoterManagementService.listAllPromoters();
    $scope.selectedPromoter = {};
    getSavedLists();

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
      getSavedLists();
    }

    $scope.$watch(function () { return $scope.selectedSavedList; }, function(){
      if($scope.selectedSavedList){
        $scope.promoters = promoterListService.getList($scope.selectedSavedList);
      }
    });

    function getSavedLists() {
      $scope.savedLists =  promoterListService.getSavedLists();
    }


}]);
