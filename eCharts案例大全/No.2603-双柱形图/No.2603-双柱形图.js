option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    title:{
         text:"督办发起与完成对比柱状图",
         left:"40%",
         textStyle:{
             fontSize: 16
         },
    },
    legend: {
        top: '2%',
        left:0,
        data: ['已上报', '未上报','已发布']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        name:"单位：个",
        nameTextStyle:{
            color:" rgba(77,77,77,0.70)",
             fontSize: 12,
            padding: [0, 0, 0, 650]
        },
        splitLine: {
            show: true,
            lineStyle: {
              color: '#D2E6F9',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#E0E0E0'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#000'
          }
    },
    xAxis: {
        type: 'category',
        data: ['2019', '2020', '2021'],
        axisLine: {
            lineStyle: {
              color: '#E0E0E0'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#888888'
          }
    },
    series: [
        {
            name: '已上报',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [18, 23, 29],
            itemStyle: {
                barBorderRadius: [1, 1, 0, 0],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#8BA3FF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#6479FF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name: '未上报',
            type: 'bar',
            barWidth: 24,
            barGap: '40%',
            data: [23, 28, 36],
            itemStyle: {
                barBorderRadius: [1, 1, 0, 0],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#A2DDFF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#3ED4FF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    ]
};
