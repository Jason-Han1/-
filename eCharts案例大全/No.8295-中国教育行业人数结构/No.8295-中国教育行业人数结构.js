var pathSymbols = {};

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value+'万人';
        }
    },
    xAxis: {
        data: ['幼儿园', '小学', '初中', '高中', '各类高校' ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {fontSize:13,
            color: '#474747'
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
  
    series: [{  color: ['#ff863d'],
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,50 L10,50 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            opacity: 0.5
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        },
        data: [4656.4, 10339.3,4652.6, 3934.7, 3833],
        z: 10
    },]
};