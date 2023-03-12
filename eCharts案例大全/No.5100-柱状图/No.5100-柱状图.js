xName = ['大米', '玉米', '蔬菜', '鸡蛋', '坚果']
data = [13, 23, 34, 45, 15]

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: xName,
        axisLine: {
            lineStyle: {
                 color: 'rgba(70, 196, 255, .8)'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: { 
            color: 'rgba(111, 132, 189, 1)',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        name: '单位：人数',
        nameTextStyle: {
            color: 'rgba(111, 132, 189, 1)'
        },
        axisLabel: {
            formatter: '{value}',
            color: 'rgba(111, 132, 189, 1)',
        },
        axisTick: {
            show: false,
        },

        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(70, 196, 255, .3)'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: data,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 192, 240, 1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(101, 105, 255, 1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [5, 5, 0, 0],
            }
        },
        // label: {
        //     normal: {
        //         show: false,
        //     }
        // }
    }]
};