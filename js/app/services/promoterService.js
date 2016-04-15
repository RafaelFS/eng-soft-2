app.factory('promoterService',['$rootScope','$http', function($rootScope, $http){
  var promoterService = {};
  var promoterDetails = [{
      PromoterId: 1,
      Name: "João",
      Rating: 8,
      Earnings: 1234.50,
      Address: "Rua da Consolação, 12, Bela Vista, São Paulo-SP" ,
      Phone: "(11)2341-2322",
      Email: "joao@example.com"
    },
    {
      PromoterId: 2,
      Name: "Pedro",
      Rating: 4,
      Earnings: 4234.50,
      Address: "Rua da Lapa, 1232, Lapa, Rio de Janeiro-RJ" ,
      Phone: "(21)2341-2322",
      Email: "pedro@example.com"
    },
    {
      PromoterId: 3,
      Name: "Luis",
      Rating: 7,
      Earnings: 5434.50,
      Address: "Rua das Flores, 122, Penha, Salvador-BA" ,
      Phone: "(43)2341-2322",
      Email: "luis@example.com"
    }];

  promoterService.getDetailsForPromoter = function(promoterId){
    for (var i = 0; i < promoterDetails.length; i++) {
      if(promoterDetails[i].PromoterId == promoterId){
        return promoterDetails[i];
      }
    }
  };

  return promoterService;
}]);
