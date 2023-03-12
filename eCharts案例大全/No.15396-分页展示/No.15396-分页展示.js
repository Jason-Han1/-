option = {
    "calculable": true,
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            margin: 23,
            rotate: 10,
            textStyle: {
                align: 'center'
            }
        },
        axisTick: {
            interval: 0
        },
        type: 'category',
        data: ['111111', '民和回族土族自治区', '民和回族土族自治区', '终端分公司海东业务区', '终端分公司海南业务区', '果洛地区系统管理部']
    },
    dataZoom: {
        // "type": "inside",
        "show": true,
        "height": 15,
        "xAxisIndex": [
            0
        ],
        bottom: 0,
        "start": 0,
        "end": 80,
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '111',
        type: 'bar',
        data:  [1, 2, 3, 4, 5, 6],
        itemStyle: {
            normal: {
                color: '#59C68C'
            }
        },
    }, {
        name: 'asd',
        type: 'bar',
        barGap: '0%',
        data: [1, 2, 3, 4, 5, 6],
        itemStyle: {
            normal: {
                color: '#27A5CC'
            }
        },
    }]
};