'use strict';

ArZeit.service('TimerModel',
    function($http){
        var _timers = [];

        function loadTimers(data, status, headers, config){
            for (var i = 0; i < data.length; i++){
                _timers.push(data[i]);
            }
        }

        this.getTimers = function(){
            $http.get('http://127.0.0.1/api/timers/').success(loadTimers);
            // cross origin policy violated even for different ports...
            return _timers;
        };

        this.getTimer = function(id){
            return _timers[id];
        };

    }
);
