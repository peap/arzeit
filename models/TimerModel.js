'use strict';

ArZeit.service('TimerModel',
    function($http){
        var _timers = [
            {id: 0, title: 'test timer 1', active: false},
            {id: 1, title: 'test timer 2', active: false},
            {id: 2, title: 'test timer 3', active: false},
        ];

        var timer_pk_regex = /timers\/(\d+)\//g;

        function loadTimers(data, status, headers, config){
            for (var i; i < data.length; i++){
                var timer_data = data[i];
                var timer_id = timer_pk_regex.exec(data.url)[1];
                var timer = {
                    id: timer_id,
                    title: timer_data.name,
                    active: timer_data.active,
                };
                _timers.push(timer);
            }
        }

        this.getTimers = function(){
            $http.get('http://localhost:8000/timers/').success(loadTimers);
            // cross origin policy violated even for different ports...
            return _timers;
        };

        this.getTimer = function(id){
            return _timers[id];
        };

    }
);
