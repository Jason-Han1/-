var colors = [{
    type: 'linear',
    x: 0,
    x2: 0,
    y: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#23c3e2dd'
    }, {
        offset: 1,
        color: '#23c3e2dd'
    }]
}, {
    type: 'linear',
    x: 0,
    x2: 0,
    y: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#352a6b'
    }, {
        offset: 1,
        color: '#352a6b'
    }]
}];


var barWidth = 30;

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {

    },
    yAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    series: [{
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [10, 20],
        "symbolOffset": [5, 0],
        "symbolPosition": "end",
        "z": 12,
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "formatter": "{c}%"
            }
        },
        "data": [60, 70, 80, 90, 60, 70, 80]
    }, {
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [10, 20],
        "symbolOffset": [0, 0],
        "z": 12,
        "data": [60, 70, 80, 90, 60, 70, 80]
    }, {
        "type": "bar",
        "itemStyle": {
            "normal": {
                "opacity": 3.7
            }
        },
        "barWidth": "20",
        "data": [60, 70, 80, 90, 60, 70, 80],
        "markLine": {
            "silent": true,
            "symbol": "none",
            "label": {
                "position": "middle",
                "formatter": "{b}"
            },
            "data": [{
                "name": "目标值",
                "yAxis": 70,
                "lineStyle": {
                    "color": "#ffc832"
                },
                "label": {
                    "position": "end",
                    "formatter": "{b}\n {c}%"
                }
            }]
        }
    },
                    {
                    type: 'effectScatter',
                    silent: true,
                    tooltip: {
                        show: false
                    },
                    zlevel: 3,
                    symbolSize: 10,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke',
                        color: '#3cefff',
                        scale: 5
                    },
                    itemStyle: {
                        color: '#3cefff'
                    },
                    hoverAnimation: true,
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0]
                },]
};