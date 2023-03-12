option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['风电电量', '光伏电量', '占比', '同比']
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
            axisLine: {
                show: true,
                lineStyle: {
                  color: '#3F93A3',
                  width: 3
                }
            },
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#01747B'
        }
      },
      // x轴刻度
      axisTick: {
        show: false
      },
            data: ['2017', '2018', '2019', '2020']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '新能源发电量/MW',
      // y轴上方单位的颜色
      nameTextStyle: {
        color: '#01747B'
      },
      // y轴竖线
      axisLine: {
        show: true,
        lineStyle: {
          color: '#01747B'
        }
      },
      // y轴刻度
      axisTick: {
        show: false
      },
      // y轴值
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#01747B'
        }
      },
      // y轴分割线
      splitLine: {
        show: true,
        lineStyle: {
          color: '#01747B'
        }
      }
        },
        {
            type: 'value',
            name: '比例/%',
      nameTextStyle: {
        color: '#01747B'
      },
      // y轴竖线
      axisLine: {
        show: true,
        lineStyle: {
          color: '#01747B'
        }
      },
      // y轴刻度
      axisTick: {
        show: false
      },
      // y轴值
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#01747B'
        }
      },
      // y轴分割线
      splitLine: {
        show: true,
        lineStyle: {
          color: '#01747B'
        }
      }
        }
    ],
    series: [
        {
            name: '风电电量',
            type: 'bar',
            barWidth: 30,
            stack: 'ele',
            itemStyle: {
                color: '#28CF9A'
             },
            data: [120, 132, 101, 134]
        },
        {
            name: '光伏电量',
            type: 'bar',
            barWidth: 30,
            stack: 'ele',
            itemStyle: {
                color: '#11A9E9'
             },
            data: [220, 182, 191, 234]
        },
        {
            name: '占比',
            type: 'line',
            yAxisIndex: '1',
            stack: 'percent',
            itemStyle: {
                color: '#FAE51C'
            },
            data: [60, 72, 71, 74]
        },
        {
            name: '同比',
            type: 'line',
            yAxisIndex: '1',
            stack: 'percent',
            itemStyle: {
                color: '#1ACBD3'
            },
            data: [62, 82, 91, 84]
        }
    ]
};
