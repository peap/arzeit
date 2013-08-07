'use strict';

ArZeit.controller('TimerList',
    function($scope, $location, $routeParams, TimerModel){
        var timers = TimerModel.getTimerList();
        $scope.timers = timers;
        $scope.timerStart = function(timer){
            timer.active = true;
        };
        $scope.timerStop = function(timer){
            timer.active = false;
        };
        $scope.addTimer = function(title){
            timers.push({title: title});
            $scope.newTimer = '';
        };
    }
);

ArZeit.controller('TimerDetail',
    function($scope, $location, $routeParams, TimerModel){
        var timerID = $routeParams.timerID;
        var timer = TimerModel.getTimer(timerID);
        $scope.timer = timer;
    }
);
