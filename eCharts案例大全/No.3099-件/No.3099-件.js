option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                    offset: 1,
                    color: 'rgba(255, 176, 100, 0.4)',
                },
                {
                    offset: 0.7,
                    color: 'rgba(255, 176, 100, 1)',
                },
                {
                    offset: 0,
                    color:  'rgba(255, 176, 100, 1)',
                },
                ]),
                borderRadius:[5,5,0,0],
            },
            label:{
                show: true,
                position: 'top',
                formatter: function(params) {
                    for (var i = 0,l = option.xAxis[0].data.length; i < l; i++) {
                        if (option.xAxis[0].data[i] == params.name) {
                            var val1 = params.value || 0;
                            console.log('{备案数量' + val1 + '}')
                            return '{textStyle| 备案数量' + val1 + '}' ;
                        }
                    }
                },
                rich: {
                    textStyle: {
                        fontSize:'18px',
                    }
                },
                textStyle: {
                    color: '#333'
                }
            },
        },
    ]
};