
var timeData = [
    '12月20日', '12月21日', '12月22日', '12月23日', '12月24日'
    ]

timeData = timeData.map(function (str) {
    return str.replace('2009/', '');
});

option = {
    title: {
        text: '深圳滑坡事件舆论关注度走势',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + ' (m^3/s)<br/>';
        },
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['微博','新闻'],
        x: 'left'
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : '微博',
            type : 'value',
            max : 60000
        },
        {
            gridIndex: 1,
            name : '新闻',
            type : 'value',
            max :60000,
            inverse: true
        }
    ],
    series : [
        {
            name:'微博',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:[
               12290,54460,6510,6115,2300
            ]
        },
        {
            name:'新闻',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [
                5400,7800,3230,632,312
                ]
        }
    ]
};