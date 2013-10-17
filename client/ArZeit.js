'use strict';

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
        .when('/category/:categoryID/', {
            controller: 'CategoryDetail',
            templateUrl: 'views/category_details.html',
        })
        .otherwise({
            redirectTo: '/'
        })
    ;
};

var arzeitFactory = function($timeout){
    var time = {};

    (function tick(){
        time.now = new Date().toLocaleTimeString();
        $timeout(tick, 1000);
    })();

    return time;
}

function ClockCtrl($scope, time){
    $scope.time = time;
}

var ArZeit = angular
    .module('ArZeit', [])
    .config(arzeitConfig)
    .factory('time', arzeitFactory)
;

