option = {
    title: [
        {
            text: '5分钟延误（次）',
            left: '50%',
            textStyle: {
              color: 'red'
            }
        },
         {
            text: '总走行公里（万车公里）',
            left: '50%',
            bottom: '0',
            textStyle: {
              color: 'green'
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
         {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: 'green'
            }
        },
        {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'red'
            }
        },
    ],
    yAxis: {
        type: 'category',
        data: ['L5', 'L1', 'L10', '亦庄线', 'L13', 'L2', '昌平线'],
        axisTick: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#ddd','#fff']
            }
        }
    },
    series: [{
            xAxisIndex: 0,
            symbol: 'path://M450.56 128h61.44v768H450.56zM512 128h61.44v768h-61.44z',
            symbolSize: 15,
            symbolKeepAspect: true,
            data: [300, 150, 300, 330, 390, 530, 400],
            type: 'scatter',
            label: {
                show: true,
                position: 'right',
                formatter: '行走公里{c}',
                color: 'green'
            },
            itemStyle: {
                normal: {
                  	color: 'green'
                }
            }
        },
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                position: 'insideLeft'
            },
            itemStyle: {
                color: 'pink'
            },
            xAxisIndex: 1,
            data: [3, 15, 30, 33, 39, 53, 40]
        }
    ]
};