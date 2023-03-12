let color=['#00F4C9','#1371FF','#F00C88','#FC6401','#8A8A8A'];


let xAxisData = ['小店区', '杏花岭区', '迎泽区', '晋源区', '尖草坪区', '万柏林区', '古交市', '清徐县', '娄烦县'];
let maxData = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
let xData1 = [452, 335, 245, 700, 100, 400, 400, 600, 700];
let xData2 = [321, 542, 45, 700, 513, 400, 400, 600, 700];
let xData3 = [345, 35, 345, 700, 112, 400, 430, 600, 700];
let xData4 = [12, 243, 760, 700, 321, 400, 456, 600, 700];
let xData5 = [235, 634, 700, 700, 123, 400, 400, 600, 700];

var option = {
  backgroundColor: '#323a5e',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '14%',
    top: '16%',
    containLabel: true,
  },
  legend: {
    data: ['1', '2', '3'],
    left: 10,
    bottom: 12,
    textStyle: {
      color: '#fff',
    },
    itemWidth: 12,
    itemHeight: 10,
  },
  xAxis: [
    {
      type: 'category',
      data: xAxisData,
      axisLine: {
        lineStyle: {
          color: '#06F4D6',
        },
      },
    },
    {
      show: false,
      type: 'category',
    },
  ],

  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#06F4D6',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#06F4D6',
      },
    },
    axisLabel: {},
  },
  series: [
    {
      name: '独居',
      type: 'bar',
      barWidth: '15%',
      xAxisIndex: 0,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            1,
            [
              {
                offset: 0,
                color: color[0],
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0.1)',
              },
            ],
            false
          ),
          barBorderRadius: 12,
        },
      },
      data: xData1,
    },
    {
      name: '独居',
      type: 'bar',
      barWidth: '15%',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(6, 195, 249, 0.15)',
          barBorderRadius: 12,
        },
      },
      tooltip: {
        show: false,
      },
      data: maxData,
    },
    {
      name: '与配偶同居',
      type: 'bar',
      barWidth: '15%',
      xAxisIndex: 0,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            1,
            [
              {
                offset: 0,
                color: color[1],
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0.1)',
              },
            ],
            false
          ),
          barBorderRadius: 11,
        },
      },
      data: xData2,
    },
    {
      name: '与配偶同居',
      type: 'bar',
      barWidth: '15%',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(6, 195, 249, 0.15)',
          barBorderRadius: 12,
        },
      },
      tooltip: {
        show: false,
      },
      data: maxData,
    },
    {
      name: '与子女同住',
      type: 'bar',
      xAxisIndex: 0,
      barWidth: '15%',
      itemStyle: {
        normal: {
         color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            1,
            [
              {
                offset: 0,
                color: color[2],
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0.1)',
              },
            ],
            false
          ),
          barBorderRadius: 11,
        },
      },
      data: xData3,
    },
    {
      name: '与子女同住',
      type: 'bar',
      barWidth: '15%',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(6, 195, 249, 0.15)',
          barBorderRadius: 12,
        },
      },
      tooltip: {
        show: false,
      },
      data: maxData,
    },
    {
      name: '养老院',
      type: 'bar',
      xAxisIndex: 0,
      barWidth: '15%',
      itemStyle: {
        normal: {color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            1,
            [
              {
                offset: 0,
                color: color[3],
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0.1)',
              },
            ],
            false
          ),
          barBorderRadius: 11,
        },
      },
      data: xData4,
    },
    {
      name: '养老院',
      type: 'bar',
      barWidth: '15%',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(6, 195, 249, 0.15)',
          barBorderRadius: 12,
        },
      },
      tooltip: {
        show: false,
      },
      data: maxData,
    },
    {
      name: '其他',
      type: 'bar',
      xAxisIndex: 0,
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            1,
            [
              {
                offset: 0,
                color: color[4],
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0.1)',
              },
            ],
            false
          ),
          barBorderRadius: 11,
        },
      },
      data: xData5,
    },
    {
      name: '其他',
      type: 'bar',
      barWidth: '15%',
      xAxisIndex: 1,
      itemStyle: {
        normal: {
          color: 'rgba(6, 195, 249, 0.15)',
          barBorderRadius: 12,
        },
      },
      tooltip: {
        show: false,
      },
      data: maxData,
    },
  ],
};
