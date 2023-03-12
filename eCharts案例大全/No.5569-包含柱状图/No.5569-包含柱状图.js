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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon1', 'Tue1', 'Wed1', 'Thu1', 'Fri1', 'Sat1', 'Sun1']
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
            data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 20,
            zlevel:9,
            itemStyle: {
                borderWidth: 1,
                zlevel: 99,
                borderColor: '#a8d4ff', //同背景色一样
                color: '#e3f2ff'
              
            },
            emphasis: {
                itemStyle: {
                borderWidth: 1,
                zlevel: 99,
                borderColor: '#a8d4ff', //同背景色一样
                color: '#e3f2ff'
                }
            }
        },
        {
            data: [120, 30, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 10,
            barGap: '-75%',
            zlevel:9,
            color:'#2094ff'

        }
    ]
};