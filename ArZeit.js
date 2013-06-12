var arzeitConfig = function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'TimerList',
            templateUrl: 'views/timers.html',
        })
        .when('/timer/:timerID/', {
            controller: 'TimerDetail',
            templateUrl: 'views/timer_details.html',
        })
    ;
};

var ArZeit = angular.module('ArZeit', []).config(arzeitConfig);

