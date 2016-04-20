app.factory('promoterListService',['$rootScope','$http', '$filter', 'promoterService', 'promoterRatingService', 'promoterEarningsService',  'promoterManagementBillingService', 'localStorageService', function($rootScope, $http, $filter, promoterService, promoterRatingService, promoterEarningsService, promoterManagementBillingService, localStorageService){
  var promoterListService = {};

  promoterListService.saveList = function(list) {
    promoterManagementBillingService.billWriteOperation(list.length);
    localStorageService.set(localStorageService.length().toString(), JSON.stringify(list));
  };

  promoterListService.getSavedLists = function() {
    promoterManagementBillingService.billReadOperation(localStorageService.length());
    return localStorageService.keys();
  };

  promoterListService.getList = function(listId) {
    var list = JSON.parse(localStorageService.get(listId));
    promoterManagementBillingService.billReadOperation(list.length);
    return list;
  };

  return promoterListService;
}]);
