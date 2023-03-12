option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        splitLine: {show: false},
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show:false}
    },
    yAxis: {
        type: 'category',
        data: ['上海'],
        splitLine: {show: false},
        axisTick: { show: false },
        axisLine: { show: false },
         axisLabel: { show:false}
    },
    series: [
        {
            name: 'A门店',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle:{
                normal: {
                    color: '#06d3cd',
                    barBorderRadius: [20, 0, 40, 20]
                }
            },
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideRight'
            //     }
            // },
            z:  1,
            data: [ 40]
        },
        {
            name: 'B门店',
            type: 'bar',
            stack: '总量',
            itemStyle:{
                normal: {
                    color: '#ebe806',
                    barBorderRadius: [40, 20, 20, 0]
                }
            },
            z: 2,
            data: [60]
        }
    ]
};