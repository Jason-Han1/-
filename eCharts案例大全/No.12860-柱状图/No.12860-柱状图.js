
var tmpListTimes = ['现在','17:00','17:10','17:20','17:30','17:40','17:50','18:00','18:10','18:20','18:30','18:40','18:50'];
var preListVals = ['0.4','0.6','1.3','0.9','0.4','0.4','0.5','0.1','0.1','0.2','0','0','0'];
var tmpListVals = ['14.2','15.8','15.8','15.8','15.8','14.2','14.2','14.2','13.6','13.6','13.6','13.6','13.6'];
var wdListVals = ['西南风','西南风','西南风','西南风','西南风','西南风','西南风','西南风','西南风','西南风','西南风','西南风','西南风'];
var wsListVals = ['3.5','3.5','3.5','3.5','3.5','3.5','3.5','3.5','3.5','3.5','3.5','3.5','3.5'];

var tmpmin = '13.6';
var tmpmax = '15.8';

option = {
  title: {
    text: '2小时天气分布图',
    left: 'center',
    top: '4%',
    textStyle: {
      color: '#4F6C8A',
      fontSize: '18',
      fontWeight: 'bold',
    }
  },
  grid: {
    x: 64,
    y: 176,
    x2: 48,
    y2: 160,
  },
  dataZoom: {
    show: true,
    top: '97',
    z: 1,
    backgroundColor: '#82B8EF',
    disabled: false,
    preventDefaultMouseMove: true,
    zoomLock: true,
    fillerColor: 'transparent',
    borderColor: 'transparent',
    showDetail: false,
    handleStyle: { opacity: 0 },
    dataBackground: {
      lineStyle: { opacity: 0 },
      areaStyle: { opacity: 0 }
    }
  },
  toolbox: {
    feature: {
      dataView: {
        show: true,
        readOnly: false,
        //icon:"image://images/dataview.png"
      },
      magicType: {
        show: true,
        type: ['line', 'bar'],
        icon: {
          //line:"image://images/line.png",
          //bar:"image://images/bar.png"
        },
      },
      restore: {
        show: true,
        //icon:"image://images/restore.png"
      },
      saveAsImage: {
        show: true,
        //icon:"image://images/download.png"
      },
    },
    itemSize: 16,
    itemGap: 8,
    top: '39',
    right: '48',
    emphasis: { iconStyle: { color: '#4F6C8A'} }
  },
  xAxis: [
    {
      type: 'category',
      position: 'bottom',
      offset: 8,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#FFFFFF',
          fontSize: 14,
          backgroundColor: '#5C8AE6',
          lineHeight: 24,
          padding: [3, 9]
        },
        formatter: '{value} mm',
        interval: 0
      },
      data: preListVals
    },
    {
      type: 'category',
      position: 'top',
      offset: 30,
      z: 2,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#FFFFFF',
          fontSize: 14,
          lineHeight: 48
        },
      },
      data: tmpListTimes
    },
    {
      type: 'category',
      position: 'top',
      offset: 14,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#4F6C8A',
          fontSize: 14,
          lineHeight: 25,
          fontWeight: 'bold'
        },
        formatter: '{value} °C',
        interval: 0,
      },
      data: tmpListVals
    },
    {
      type: 'category',
      position: 'bottom',
      offset: 48,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: { color: '#4F6C8A', fontSize: 14, lineHeight: 25 },
        interval: 0
      },
      data: wdListVals
    },
    {
      type: 'category',
      position: 'bottom',
      offset: 78,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: { color: '#4F6C8A', fontSize: 14, lineHeight: 25, fontWeight: 'bold' },
        formatter: '{value} m/s',
        interval: 0
      },
      data: wsListVals
    },
  ],
  yAxis: [
    { show: false },
    {
      show: true,
      type: 'value',
      min: parseInt(tmpmin) - 2,
      max: parseInt(tmpmax) + 2,
      splitNumber: 5,
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: {
        lineStyle: { color: '#C8D8E8', width: 1 }
      },
    }
  ],
  series: [
    {
      name: '降水',
      type: 'bar',
      barCategoryGap: '50',

      // itemStyle: {
      //     normal: {
      //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: '#5184E9'
      //         }, {
      //             offset: 1,
      //             color: '#84EBEF'
      //         }]),
      //         shadowColor: 'rgba(0, 0, 0, 0.16)'
      //     }
      // },

      itemStyle: {
        color: {
          type: 'line',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#5184E9' },
            { offset: 1, color: '#84EBEF' }
          ],
          globalCoord: false
        }
      },
      data: preListVals
    },
    {
      name: '温度',
      type: 'line',
      yAxisIndex: 1,
      symbolSize: 16,
      symbol: 'circle',
      itemStyle: { color: '#FF7700', borderColor: '#FFF', borderWidth: '2' },
      lineStyle: { color: '#FFC400', width: 4 },
      data: tmpListVals
    }
  ]
};
