option = {
  title: {
    text: '图表标题',
    left: 'center',
    top: '5px',
  },
  color: ['#5b9bd5', '#ed7d31', '#a5a5a5', '#ffc000'],
  xAxis: {
    type: 'category',
    axisTick: { show: false },
    data: ['检查次数', '应得分', '检查实际得分', '得分率'],
  },
  legend: {
    data: ['项目1施工单位A', '项目1施工单位C', '项目1施工单位B', '项目4施工单位D'],
    top: 'bottom',
  },
  yAxis: [
    {
      type: 'value',
      name: 'yAxis1',
      nameTextStyle:{
        color: '#f00',
      },
      position: 'left',
      offset: 0,
      axisLine: {
        show:true,
        lineStyle: {
          color: '#f00', // y轴的颜色
        },
      },
      axisLabel: {
        formatter: '{value}',
        color: '#999',
        margin: 10,
        interval: 0,
        aligin: 'right',
      },
      axisTick:{
        show: false
      },
    },
    {
      type: 'value',
      name: 'yAxis2',
      axisLabel: {
        formatter: '{value}',
        color: '#AAB1D2',
        margin: -10,
        interval: 0,
        aligin: 'right',
      },
      splitLine: {
        show: false, // 去掉网格线,
      },
    },
    {
      type: 'value',
      name: 'yAxis3',
      position: 'left',
      offset: 50,
      axisLabel: {
        formatter: '{value}',
        color: '#AAB1D2',
        interval: 0,
        aligin: 'right',
      },
      splitLine: {
        show: false, // 去掉网格线,
      },
    },
    {
      type: 'value',
      name: 'yAxis4',
      position: 'right',
      offset: 40,
      axisLabel: {
        formatter: '{value}',
        color: '#AAB1D2',
        interval: 0,
        aligin: 'right',
      },
      splitLine: {
        show: false, // 去掉网格线,
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: function (params) {
      var signStr = '';
      if (params[0]['axisValue'] == '得分率') {
        signStr = '%';
      }
      return (
        params[0]['axisValue'] + '<br/>' +
        params[0].marker +params[0]['seriesName'] +' ' +params[0]['value'] + signStr + '<br/>' +
        params[1].marker +params[1]['seriesName'] +' ' +params[1]['value'] +signStr +'<br/>' +
        params[2].marker +params[2]['seriesName'] +' ' +params[2]['value'] +signStr +'<br/>' +
        params[3].marker +params[3]['seriesName'] +' ' +params[3]['value'] +signStr
      );
    },
  },
  series: [
    {
      name: '项目1施工单位A',
      data: [110, 200, 300, 430],
      type: 'bar',
      yAxisIndex: 0,
    },
    {
      name: '项目1施工单位C',
      data: [210, 330, 430, 540],
      type: 'bar',
      yAxisIndex: 1,
    },
    {
      name: '项目1施工单位B',
      data: [300, 400, 560, 660],
      type: 'bar',
      yAxisIndex: 2,
    },
    {
      name: '项目4施工单位D',
      data: [432, 520, 660, 777],
      type: 'bar',
      yAxisIndex: 3,
    },
  ],
};
