"use strict";



// create the controller and inject Angular's $scope
routeApp.controller('mainController', ['$scope', '$http',
    function($scope, $http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.userInfo = {"code":888,"msg":"success","data":{"uid":"87697","pid":"0","email":"714600759@qq.com"}};

        $scope.list = {
                title: '基本例子',
                isAdmin: true,
                list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他'],
                elist: ['文艺2', '博客2', '摄影2', '电影2', '民谣2', '旅行2', '吉他2'],
                value: '<span style="color:#F00">hello world!</span>',
            };

        $scope.reply = function() {
            $scope.showActions = false;
        };
        $scope.delete = function() {
            $scope.showActions = false;
        };

    }
]);

routeApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

routeApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
