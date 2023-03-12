option = {
    backgroundColor: '#0d073d',//背景色
    tooltip: {
        trigger: 'axis',
        
        formatter: function (params) {
            return '金额' + ': ' + '<span style="color: yellow;">' + params[0].value + '</span>';
        }
    },
    xAxis: {
        
        data: ['股票', '债权', '货币', 'FOF', '混合', '其他' ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-80%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                //barBorderRadius: 5,
                //渐变色
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#7FFF00'},
                        {offset: 1, color: 'yellow'}
                    ]
                )
            }
            
            
        },
        data: [123, 30, 130, 100, 20, 80],
        z: 10
    }]
};