ArZeit.service('TimerModel',
    function(){
        this.getTimers = function(){
            return [
                {id: 0, title: 'test timer 1', active: false},
                {id: 1, title: 'test timer 2', active: false},
                {id: 2, title: 'test timer 3', active: false},
            ];
        };
    }
);
