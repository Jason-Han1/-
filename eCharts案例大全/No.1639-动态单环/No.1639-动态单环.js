
option = {
    color: ['rgba(241,162,42,1)', 'rgba(0,133,255,0.8)'],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '物业分析',
        type: 'pie',
        radius: ['55%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        selectedMode: true,
        data: [
          { value: 145, name: '未处理', itemStyle: {
            normal: {
              borderWidth: 8,
              borderRadius:20,
            }
          }},
          {
            name: '',
            value: 4,
            labelLine: {
              show: false,
              lineStyle: {
                color: 'transparent',
              },
            },
            itemStyle: {
              color: 'transparent',
            },
            tooltip: {
              show: false
            }
          },
          { value: 200, name: '已处理', itemStyle: {
            normal: {
              borderWidth: 8,
              borderRadius:20,
            }
          }},
          {
            name: '',
            value: 4,
            labelLine: {
              show: false,
              lineStyle: {
                color: 'transparent',
              },
            },
            itemStyle: {
              color: 'transparent',
            },
            tooltip: {
              show: false
            }
          },
        ]
      }
    ]
};

let currentIndex = -1;

setInterval(function() {
  var dataLen = option.series[0].data.length;
  // 取消之前高亮的图形
  myChart.dispatchAction({
    type: 'unselect',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
  currentIndex = (currentIndex + 1) % dataLen;
  // 高亮当前图形
  myChart.dispatchAction({
    type: 'select',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
  // 显示 tooltip
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
}, 3000);
