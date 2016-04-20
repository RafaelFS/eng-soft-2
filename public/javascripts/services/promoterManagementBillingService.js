app.factory('promoterManagementBillingService', ['$rootScope','$http', function($rootScope, $http){
  var promoterManagementBillingService = {};
  promoterManagementBillingService.billWriteOperation	= function (numberOfOperations){
    var totalPrice = numberOfOperations*0.30;
    console.log("O gestor realizou uma operação de escrita que escreveu " + numberOfOperations + " linhas e consumiu R$"+totalPrice.toPrecision(2));
  };

  promoterManagementBillingService.billReadOperation = function (numberOfOperations){
    var totalPrice = numberOfOperations*0.10;
    console.log("O gestor realizou uma operação de leitura que consultou " + numberOfOperations + " linhas e consumiu R$"+totalPrice.toPrecision(2));
  };

  return promoterManagementBillingService;
}]);
