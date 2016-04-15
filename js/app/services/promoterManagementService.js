app.factory('promoterManagementService',['$rootScope','$http', '$filter', 'promoterService', 'promoterRatingService', 'promoterEarningsService',  'promoterManagementBillingService', function($rootScope, $http, $filter, promoterService, promoterRatingService, promoterEarningsService, promoterManagementBillingService){
  var promoterManagementService = {};

  var promoterList = [{
      PromoterId: 1,
      Name: "João",
      Rating: 8,
      Earnings: 1234.50
    },
    {
      PromoterId: 2,
      Name: "Pedro",
      Rating: 4,
      Earnings: 7234.50
    },
    {
      PromoterId: 3,
      Name: "Luis",
      Rating: 7,
      Earnings: 5434.50
    }];

  function isCritical(){
      return function(item){
        return item.Rating < 5;
      }
  }

  function isProblematic(){
      return function(item){
        return item.Rating <= 7 && item.Rating >= 5;
      }
  }

  promoterManagementService.listAllPromoters = function(){
    promoterManagementBillingService.billReadOperation(promoterList.length);
    return promoterList;
  };

  promoterManagementService.listCriticalPromoters = function(){
    var promoters =  $filter('filter')(promoterList, isCritical());
    promoterManagementBillingService.billReadOperation(promoters.length);
    return promoters;
  };

  promoterManagementService.listMostSucessfulPromoters = function(){
    var promoters = $filter('orderBy')(promoterList, 'Earnings', true);
    promoterManagementBillingService.billReadOperation(promoters.length);
    return promoters;
  };

  promoterManagementService.listProblematicPromoters = function(){
    var promoters = $filter('filter')(promoterList, isProblematic());
    promoterManagementBillingService.billReadOperation(promoters.length);
    return promoters;
  };

  promoterManagementService.getDetailsForPromoter = function(promoterId) {
    promoterManagementBillingService.billReadOperation(1);
    return promoterService.getDetailsForPromoter(promoterId);
  };

  return promoterManagementService;
}]);
