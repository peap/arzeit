ArZeit.controller('TimerList',
    function($scope, $location, $routeParams, TimerModel){
        var timers = TimerModel.getTimers();
        $scope.timers = timers;
        $scope.timerStart = function(timer){
            timer.active = true;
        };
        $scope.timerStop = function(timer){
            timer.active = false;
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
