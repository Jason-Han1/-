option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        symbolSize: 20,
        itemStyle: {
            color: '#34aaff',
            borderColor: '#34aaff',
            borderWidth: 0,
            // opacity: 0
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'Microsoft YaHei',
              color: 'red'
            },
            // 改变symbolSize样式
            itemStyle: {
              color: 'red',
              borderColor: '#f90',
              borderWidth: 10,
              // opacity: 1 
            }
          }
    }]
};

// 折线图悬浮时显示symbol
// 解决：通过设置 opacity 实现，默认 itemStyle 的 symbolSize为10且opacity 为 0，emphasis.itemStyle 的 opacity 设置为 1