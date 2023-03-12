var colors=['#71A4EA','#8CD046','#E8CC58','#926DE8']
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        name:"额度",
        nameTextStyle:{
            color:" rgba(77,77,77,0.70)",
            fontSize: 12,
            padding: [0, 0, 0,-20]
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
       name:"月份",
        nameTextStyle:{
            color:" rgba(77,77,77,0.70)",
            fontSize: 12,
            padding: [0, 0, 0, -10]
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
                color: 'red'
            },
            label:{
                show:true,
                position :'outside'
            }
        }
    ]
};