var option = {
    backgroundColor: '#fff',
    tooltip: {},
    xAxis: {
        type: 'value',
        show: false,

    },
    yAxis: {
        data: ['男', '女', '未知'],
        show: false,
        axisTick: {
            show: false
        }
    },
    grid: {

    },
    series: [{
        name: '',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbolClip: true,
        
        symbolSize: [10, 20],
        stack: 'income',
        data: [{
            "value": 60,
            "itemStyle": {
                "normal": {
                    "color": "#68b837"
                }
            },
        }],
        z: 3,
        animationEasing: 'elasticOut',
        animationDelay: function(dataIndex, params) {
            return params.index * 30;
        }
    }, {
        name: '',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbolClip: true,
        symbolSize: [10, 20],
        stack: 'income',
        data: [{
            "value": 80,
            "itemStyle": {
                "normal": {
                    "color": "#668eff"
                }
            },
        }],
        z: 2,
        animationEasing: 'elasticOut',
        animationDelay: function(dataIndex, params) {
            return params.index * 30;
        }
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbol: 'rect',
        symbolSize: [10, 20],
        stack: 'income',
        data: [{
            value: 100,
            
        }, ],
        z: 1,
        animationEasing: 'elasticOut',
        animationDelay: function(dataIndex, params) {
            return params.index * 30;
        }
    }]
};