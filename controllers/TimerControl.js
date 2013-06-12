ArZeit.controller('TimerControl',
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
