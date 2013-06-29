'use strict';

ArZeit.service('TimerModel',
    function(){
        _timers = [
                {id: 0, title: 'test timer 1', active: false},
                {id: 1, title: 'test timer 2', active: false},
                {id: 2, title: 'test timer 3', active: false},
            ];
        this.getTimers = function(){
            return _timers;
        };
        this.getTimer = function(id){
            return _timers[id];
        };
    }
);
