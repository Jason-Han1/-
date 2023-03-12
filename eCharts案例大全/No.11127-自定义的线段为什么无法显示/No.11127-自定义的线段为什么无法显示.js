option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'custom',
        renderItem(params, api) {
            return {
                type: 'group',
                position: [
                    params.coordSys.x,
                    params.coordSys.y
                ],
                children: [{
                    type: 'line',
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 80,
                        y2: 100
                    },
                    style: {
                        stroke: '#000'
                    }
                }, {
                    type: 'text',
                    style: {
                        text: 'aaaaa'
                    }
                }]
            };
        },
        data:[1]
    }]
};