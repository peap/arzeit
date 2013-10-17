'use strict';

ArZeit.service('TimerModel',
    function($http){
        var _timer = [];
        var _timer_list = [];

        var _api_url_base = 'http://127.0.0.1/api/'
        var _timer_url = 'timers/:id/';
        var _timer_list_url = 'timers/';

        function loadTimer(data, status, headers, config){
            _timer.push(data);
        }

        function loadTimerList(data, status, headers, config){
            for (var i = 0; i < data.length; i++){
                _timer_list.push(data[i]);
            }
        }

        this.getTimer = function(id){
            var url = (_api_url_base + _timer_url).replace(':id', id);
            $http.get(url).success(loadTimer);
            return _timer[0];
        };

        this.getTimerList = function(){
            var url = (_api_url_base + _timer_list_url)
            $http.get(url).success(loadTimerList);
            return _timer_list;
        };


    }
);
