const colorList = ['#14D4D9', '#3977CC']
option = {
    color: colorList,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: 'rgba(15, 28, 59, 0.6)',
      borderWidth: 0,
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      show: true,
      itemGap: 25,
      icon: 'circle',
      itemWidth: 7,
      itemHeight: 7,
      textStyle: { color: 'rgba(255, 255, 255, 0.75)' },
      top: -5,
      right: 5,
      // formatter: (name: string) => {
      //   return `{a|${name}}`
      // },
      // textStyle: {
      //   padding: [3, 0, 0, 0],
      //   color: 'white',
      // },
    },
    grid: {
      left: '8%',
      right: '10%',
      top: '20%',
      bottom: '15%',
    },
    xAxis: [
      {
        nameLocation: 'start',
        // name: '平均使用率',
        nameTextStyle: {
          color: 'rgba(255,255,255,0.5)',
          padding: [10, 10, 20, 30],
        },

        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#7BEAE4',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#81C0D1',
          fontSize: 20,
          padding: 10,
        },
        // scale: true,
        // axisLabel: {
        //   formatter: (value: any) => {
        //     return `${value}%`
        //   },
        //   color: 'rgba(255,255,255,0.5)',
        // },
        data: ['售前阶段', '研发设计阶段', '研发转验收阶段', '运维运营阶段'],
      },
      {
        data: [0, 0, 0, 0],
        axisLine: {
          show: false,
          lineStyle: {
            color: '#CED5E1',
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        position: 'top',
      },
      // {
      //   axisTick: { show: false },
      //   axisLabel: {
      //     show: false,
      //     color: 'rgba(255,255,255,0.5)',
      //   },
      //   // type: 'value',
      //   // max: 1500,
      //   data: xData,
      //   splitLine: { show: false },
      // },
    ],
    yAxis: [
      {
        // max: 300,
        position: 'left',
        // nameLocation: 'start',
        type: 'value',
        name: '项目(个)',
        // scale: true,
        nameTextStyle: {
          color: '#569CA7',
          padding: [0, 0, 0, 18],
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#7BEAE4',
          },
        },
        axisLabel: {
          color: '#81C0D1',
          fontSize: 20,
          padding: 10,
        },
      },
    ],
    series: [
      {
        type: 'bar',
        name: 'M9',
        data: [3, 5, 4, 7, 8, 9, 5, 4, 3, 1, 2, 4],
        itemStyle: {
          // color: colorList[1],
          // shadowColor: colorList[0],
          // shadowBlur: 7,
        },
        xAxisIndex: 0,
        barWidth: 42,
        barGap: 0.5,
        // emphasis: {
        //   focus: 'series',
        // },
      },
      {
        type: 'bar',
        name: 'M10',
        xAxisIndex: 0,
        data: [8, 5, 4, 2, 8, 9, 5, 4, 6, 1, 2, 8],
        itemStyle: {
          // color: colorList[2],
          // shadowColor: colorList[1],
          // shadowBlur: 7,
        },
        barWidth: 42,
        barGap: 0.5,
        // emphasis: {
        //   focus: 'series',
        // },
      },
      {
        type: 'bar',
        name: 'M10',
        xAxisIndex: 1,
        data: [8, 8, 8, 8],
        itemStyle: {
          color: 'rgba(206,213,225,0.32)',
          // shadowColor: colorList[1],
          // shadowBlur: 7,
        },
        // barWidth: 42 * 2 + 7,
        tooltip: {
          show: false,
        },
        slient: true,
        z: 1,
      },
    ],
  }