option = {
    legend: {
        right: '15',
        top: '20',
        textStyle: {
            color: '#666',
            fontSize: 13,
        },
        itemWidth: 22,
        itemHeight: 14,
        itemGap: 12,
        icon: 'circle',
        data: ['移动端', '大屏']

    },
    backgroundColor: '#fff',
      color: [new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "#7AC1FF"
      }, {
        offset: 1,
        color: "#5396FF"
      }], false)],
      grid: {
        left: '5%',
        right: '10%',
        top: '7%',
        bottom: '1%',
        containLabel: true
      },
      tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: {

        data: ["UI上传", "前端开发", "测试完成", "完成开发",],
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ccc',
          }
        },
        axisLabel: {
          show: true,
          color: "#666",
          fontSize: 12
        },


      },
      xAxis: [{
        axisTick: {
          show: false
        },
        type: 'value',
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          color: '#666'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      }],
      series: [{
          name: '移动端',
        type: 'bar',
        barWidth: 12,
        label: {
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: "#ccc",
              fontSize: 12
            }
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: [0, 3, 3, 0],
          }
        },
        data: [80, 60, 50, 40]
      },
      {
           name: '大屏',
        type: 'bar',
        barWidth: 12,
        label: {
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: "#ccc",
              fontSize: 12
            }
          }
        },
       itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: '#EAB1F1'
                            },
                            {
                                offset: 1,
                                color: '#CD74D2'
                            }
                        ]
                    ),
                    barBorderRadius: [0, 5, 5, 0],
                }
            },
        data: [5, 6, 10, 20]
      }]
};