var myApp=angular.module('myApp',['ui.router']);

myApp.config(function ($urlRouterProvider) {
   $urlRouterProvider.otherwise('/list');
});
myApp.config(['$stateProvider',function ($stateProvider) {
   $stateProvider
   .state('list',{
      url:'/list',
      templateUrl:'/js/tpls/list.html',
      controller:'listController'
   })
   .state('detail',{
      url:'/detail/:id',
      templateUrl:'/js/tpls/detail.html',
      controller:'detailController'
   })
}]);

myApp.controller('listController',['$scope','$rootScope',function($scope,$rootScope) {
   $rootScope.items=[{
      id:'APl',
      name:'苹果',
      desc:'每天吃一个保证远离医生！',
      price:12,
      nutriemts:[90, 0, 2, 0, 1, 2]
   },
   {
      id:'AVC',
      name:'鳄梨',
      desc:'好吃的鳄梨酱！',
      price:16,
      nutriemts:[90, 0, 1, 1, 1, 2]
   },
   {
      id:'BAN',
      name:'香蕉',
      desc:'容易剥皮且含有丰富的维生素钾。',
      price:4,
      nutriemts:[120, 0, 2, 1, 2, 2]
   },
   {
      id:'CTP',
      name:'哈密瓜',
      desc:'美味提神。',
      price:3,
      nutriemts:[50, 4, 4, 1, 2, 0]
   },
   {
      id:"GRF",
      name: "葡萄柚",
      desc:"粉红和红色，健康且美味。",
      price:11,
      nutriemts:[50, 4, 4, 1, 1, 1]
   },
   {
         id:"GRP",
         name: "葡萄",
         desc: "酒是伟大的，但葡萄更美好。",
         price: 8,
         nutriemts:[100, 0, 3, 0, 1, 1]
      },
      {
         id:"FIG",
         name:"无花果",
         desc: "不但有营养，且美味。",
         price: 10,
         nutriemts:[100, 0, 0, 0, 1, 2]
      },
      {
         id:"GUA",
         name: "番石榴",
         desc: "异国情调的，芬芳的，美味的！",
         price: 8,
         nutriemts:[ 50, 4, 4, 0, 1, 2]
      },
      {
         id:"KIW",
         name: "猕猴桃",
         desc: "来自新西兰的美味。",
         price: 14,
         nutriemts:[ 90, 1, 4, 0, 2, 2]
      },
      {
         id:"LYC",
         name: "荔枝",
         desc:"爱不释口。",
         price: 18,
         nutriemts:[125, 1, 4, 0, 2, 2]
      },
      {
         id:"MAN",
         name:"芒果",
         desc: "不管吃起来有多费劲，但却总是值得的。",
         price: 8,
         nutriemts:[70, 3, 4, 0, 1, 1]
      },
      {
         id:"ORG",
         name:"橙子",
         desc:"富含维生素C，做点果汁吧。",
         price: 9,
         nutriemts:[70, 1, 4, 2, 1, 2]
      },
      {
         id:"PAP",
         name: "番木瓜",
         desc: "超级流行的早餐。",
         price: 5,
         nutriemts:[60, 3, 4, 2, 2, 2]
      },
      {
         id:"PCH",
         name: "桃子",
         desc:"添加一些奶油更是美味。",
         price: 19,
         nutriemts:[70, 1, 2, 0, 1, 2]
      },
      {
         id:"PER",
         name: "梨",
         desc:"新鲜美味，梨汁可在红酒中烹制，或蒸馏梨水。",
         price: 8,
         nutriemts:[ 100, 0, 2, 0, 1, 2]
      },
      {
         id:"PMG",
         name: "石榴",
         desc: "美味的，健康的，美丽的！",
         price:19,
         nutriemts:[110, 0, 2, 0, 2, 0]
      },
      {
         id:"PNP",
         name: "菠萝",
         desc: "尽情美味吧（但不要忘了剥皮）。",
         price: 4,
         nutriemts:[60, 0, 3, 0, 0, 1]
      },
      {
         id:"PSM",
         name: "柿子",
         desc: "它们是浆果，你信吗？",
         price:6,
         nutriemts:[120, 4, 3, 0, 1, 3]
      },
      {
         id:"STR",
         name: "草莓",
         desc: "美丽，健康，美味。",
         price:7,
         nutriemts:[40, 0, 4, 1, 1, 2]
      },
      {
         id:"TNG",
         name: "柑橘",
         desc: "容易剥皮的橙子。",
         price:8,
         nutriemts:[50, 3, 4, 1, 1, 2]
      },
      {
         id:"WML",
         name: "西瓜",
         desc: "炎热夏日来一块。",
         price: 4,
         nutriemts:[ 90, 4, 4, 0, 1, 1]
      }
   ]

}]);

myApp.controller('detailController',['$scope','$rootScope','$stateParams','$http',function($scope,$rootScope,$stateParams,$http){
   var id=$stateParams.id;
   // console.log($rootScope.items);
   for (var i = 0; i < $rootScope.items.length; i++) {
      if ($rootScope.items[i].id==id) {
         $scope.item=$rootScope.items[i];
         return;
      }
   }
   console.log($scope.item);
}])
