var arzeitConfig = function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'TimerControl',
            templateUrl: 'views/timers.html',
        })
        .when('/timer/:timerId/', {
            controller: 'TimerControl',
            templateUrl: 'views/timers.html',
        })
    ;
};

var ArZeit = angular.module('ArZeit', []).config(arzeitConfig);

