option = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
      tooltip: {
        trigger: 'axis',
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#ffffff',
                shadowColor: 'rgba(225,225,225,1)',
                shadowBlur: 5
            }
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 20,
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one',
            zlevel:9,
            itemStyle: {
                borderWidth: 0,
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: [0,0,120,120]
            },

            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }
        },
        {
            data: [120, 30, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 40,
             zlevel:9,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: [120,120,0,0]
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        }
    ]
};