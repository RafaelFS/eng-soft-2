app.factory('promoterListService',['$rootScope','$http', '$filter', 'promoterService', 'promoterRatingService', 'promoterEarningsService',  'promoterManagementBillingService', function($rootScope, $http, $filter, promoterService, promoterRatingService, promoterEarningsService, promoterManagementBillingService){
  var promoterListService = {};

  promoterListService.saveList = function(list) {
    promoterManagementBillingService.billWriteOperation(list.length);
  };

  return promoterListService;
}]);
