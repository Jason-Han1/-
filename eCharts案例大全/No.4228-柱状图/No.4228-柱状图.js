option = {
    backgroundColor: '#0001',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(item) {
            return item[1].axisValueLabel + '<br />' + item[1].seriesName + ': ' + item[1].data
        }
    },
    grid: {
        top: 40,
        right: 20,
        left: 50,
        bottom: 30
    },
    xAxis: [{
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 12,
                interval: 0
            }
        }
    ],
    yAxis: [{
        //scale:true,
        // min: function(item){
        // 	return parseInt(item.min / 10) * 10
        // },
        max: 200,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#FFFFFF'
            },
            // formatter: function(value){
            //   return parseInt(value * 100) + '%'
            // },
        },
    }],
    series: [{
        name: '',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            color: '#FFFFFF'
        },
        symbolRepeat: true,
        symbolSize: [19, 2],
        // symbolBoundingData: 100,
        symbolMargin: 4,
        symbolPosition: 'start',
        z: 1,
        data: [200, 200, 200, 200, 200]
    }, 
    {
        name: '数量',
        type: 'bar',
        barWidth: 19,
        itemStyle: {
            color:  new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#037EF0'
          },
          {
            offset: 1,
            color: '#00FFE0'
          }])
        },
        label: {
            normal: {
                show: false,
                position: 'top',
                verticalAlign: 'top'
                // formatter: function(value){
                //   return value && (value.data * 100).toFixed(1) + '%'
                // }
            }
        },
        z: 1,
        data:  [120, 200, 150, 80, 70]
    }]
};