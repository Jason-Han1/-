option = {
    xAxis: {
        type: 'category',
        data: ['全部', '可编程控制器', '设备2', '设备3'],
        color: 'white',
        axisLabel: {
             textStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        max: 100,
        splitLine: {
            show: false
        }
    },
    series: [
        { // 背景色
          type: 'pictorialBar',
          stack: '总量',
          symbol: 'fixed',
          symbolSize: [20, 3],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          symbolBoundingData: 100,
          z: -10,
          data: [100, 100, 100, 100],
          itemStyle: {
              normal: {
                  color: '#62D48D',
                  opacity: 0.3
                  
              }
          },
        label: {
            show: true,
            position: 'top',
            
          }
        },
        { // 主颜色
          type: 'pictorialBar',
          symbol: 'fixed',
          stack: '总量',
          symbolSize: [20, 3],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          barCategoryGap: '40%',
          z: -1,
          data: [6, 6, 6, 36],
          itemStyle:{
              normal: {
                  color: '#62D48D'
              }
          }
        }
    ]
};
