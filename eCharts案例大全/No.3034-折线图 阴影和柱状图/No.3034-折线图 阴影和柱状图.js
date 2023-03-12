option = {
    grid:{
        left:'5%'
    },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#fff',
    padding: [12, 18],
    textStyle: {
      color: '#2b415d',
      fontFamily: 'Source Han Sans CN',
    },

    extraCssText: 'filter: drop-shadow(0 0 5px rgba(216,231,240,0.75));',

    //  formatter: '{a0}: {c0}<br />{a1}  : {c1}<br />{a2}  : {c2}',

  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['06月', '07月', '08月', '09月', '10月', '11月', '12月'],
      axisPointer: {
        type: 'line'
      },

      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#f4f6f8'
        }
      },
      axisLabel: {
        color: '#949ebc',
        fontSize: '14',
        fontFamily: 'Source Han Sans CN'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#f4f6f8'
        }
      }
    }
  ],
  yAxis: [
    {
        name:'人',
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
       show: true
      },
      splitLine: {
        show: true
      }
    }
  ],
  series: [
    {
      name: '总量',
      smooth: true,
      itemStyle: {
        normal: {
          color: '#fb3b4d',
          borderColor: '#fb3b4d',  //拐点边框颜色

        },

      },
      lineStyle: {
        normal: {
          color: '#fb3b4d',
          width: '3',
          shadowColor: 'rgba(251,59,77, 0.5)',
          shadowBlur: 6,
          shadowOffsetY: 16
        }
      },
      type: 'line',
      data: [ 155.2, 110.3, 145.4, 80.0, 40.5, 90.0, 100.2]
    },
    {
      barWidth: '9',
      itemStyle: {//柱样式
        normal: {
          barBorderRadius: 4,
          color: '#0445ff'
        }
      },
      name: '接收量',
      type: 'bar',
      data: [76.7, 35.6, 62.2, 32.6, 20.0, 50.4, 40.3]
    },
    {
      barWidth: '9',

      itemStyle: {//柱样式
        normal: {
          barBorderRadius: 4,
          color: '#2f98ff'
        }
      },
      name: '发送量',
      type: 'bar',
      data: [  70.7, 75.6, 82.2, 48.7, 18.8, 40.0, 60.3]
    }
  ]
};