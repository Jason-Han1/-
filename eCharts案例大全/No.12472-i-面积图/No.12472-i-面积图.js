option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: 'rgba(48, 141, 213, .8)',
            fontSize: 14,
          },
          lineStyle: {
            color: '#7daef5'
          }
        },
        formatter: '数量 : {c}<br/> 名称 : {b}'
      },
    xAxis: {
        type: 'category',
        data: ['测试一', '测试二', '测试三', '测试四', '测试五', '测试六', '测试七'],
        axisLine:{
            lineStyle:{
                color: '#82b1f5',
                width: 2
            },
        },
        axisTick:{
            show: false
        },
        axisLabel:{
            color: '#333',
            fontSize: 20
        },
        splitLine:{
            show: true,
            lineStyle:{
                color: '#7daef5'
            }
        },
        boundaryGap: false,
        // boundaryGap: ['10%', '10%']
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color: '#82b1f5',
                width: 2
            }
        },
        axisTick:{
            show: false
        },
        axisLabel:{
            color: '#333',
            fontSize: 20
        },
        splitLine:{
            show: true,
            lineStyle:{
                color: '#7daef5'
            }
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#7daff5' // 0% 处的颜色
                }, {
                  offset: 1, color: '#fff' // 100% 处的颜色
                }],
            }
        },
        lineStyle:{
            color: '#1971ee',
            width:2
        },
        symbol: 'circle',
        symbolSize: 14,
        itemStyle:{
            color: '#54d6ff',
            borderColor: '#1971ee',
            borderWidth: 4,
        }
    }]
};
