var Mdata = [
    [1, null],
    [2, 4.1],
    [3, 4.2],
    [4, 4.3],
    [8, 4.5],
    [12, 4.4],
    [20, 4.5],
    [28, 4.6],
    [40, 4.7]
];
var Ddata = [
    [1, 3.1],
    [2, 3.15],
    [3, 3.25],
    [4, 3.35],
    [8, 3.4],
    [12, 3.5],
    [20, 3.6],
    [28, 3.7],
    [40, 4]
];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(255,255,255,.3)',
                type: 'dashed',
                width: 2
            }
        }
    },
    grid: {
        left: 'left',
        right: '20px',
        bottom: '20px',
        top: '10px',
        containLabel: true
    },
    xAxis: {
        min: 1,
        max: 40,
        type: 'value',
        // minInterval: 1,
        splitNumber: 40,
        boundaryGap: false,
        triggerEvent: true,
        axisLabel: {
            rotate: 90,
            formatter: function(value, index) {

                var _index = index + 1;

                var dateM = _index % 4;

                if (dateM !== 0 && _index > 3) {

                    return '{a|' + value + '}'

                } else if (_index == 16 || _index == 24 || _index == 32 || _index == 36) {
                    return '{a|' + value + '}'
                }

                //给X轴加上单位
                if (value < 4) {

                    var SMval = value * 3 + "M";

                    return SMval;

                } else {
                    return value / 4 + "Y";
                }
            },
            rich: {
                a: {
                    color: 'transparent'
                }
            }
        }
    },
    yAxis: [{
        type: 'value',
        scale: true,
        min: function(value) {
            return value.min - 0.1;
        },
        splitNumber: 9
    }],
    series: [{
            name: '3M Shibor',
            type: 'line',
            animationDelay: 0,
            animationDuration: 1000,
            symbolSize: 15,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(104,44,130,.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(104,44,130,.2)'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    color: '#682c82'
                }
            },
            data: Mdata
        },
        {
            name: '7D Repo',
            type: 'line',
            animationDelay: 0,
            animationDuration: 1000,
            symbolSize: 15,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(8,106,180,.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(12,80,140,.8)'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    color: '#1c9bd7'
                }
            },
            data: Ddata
        },
    ]
};