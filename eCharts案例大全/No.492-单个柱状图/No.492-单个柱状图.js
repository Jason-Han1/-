let richGroup = {
  offset: [10, 0],
  // formatter: `{people|自费}{center|}{percentage|{@score}%}`,
  //   formatter:function(params){
  //     let { seriesName,value } = params;
  //     return `{people|${seriesName}}{center|}{percentage|${value}%}`;
  //   },
  formatter: (params) => `{people|${params.seriesName}}{center|}{percentage|${params.value}%}`,
  rich: {
    people: {
      color: '#B3BFD2',
      fontSize: 30,
    },
    center: {
      padding: [0, 46, 0, 23],
    },
    percentage: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 30,
    },
  },
};
option = {
  backgroundColor: '#12233D',
  // grid:{
  //   top:0,
  //   right:0,
  //   bottom:0,
  //   left:0,
  // },
  xAxis: [
    {
      show: false,
      data: [''],
    },
  ],
  yAxis: [
    {
      show: false,
      type: 'value',
      axisTick: false, // 不显示x轴的刻度
    },
  ],
  series: [
    {
      name: '自费',
      type: 'bar',
      stack: 'a',
      data: [40.2],
      barWidth: '40',
      label: {
        show: true,
        ...richGroup,
      },
      itemStyle: {
        color: '#0376DA',
        barBorderRadius: [0, 0, 100, 100],
      },
    },
    {
      name: '自负',
      type: 'bar',
      stack: 'a',
      data: [30.5],
      label: {
        show: true,
        ...richGroup,
      },
      itemStyle: {
        color: '#079FD7',
      },
    },
    {
      name: '共付',
      type: 'bar',
      stack: 'a',
      data: [38.5],
      label: {
        show: true,
        ...richGroup,
      },
      itemStyle: {
        color: '#06DAAB',
        barBorderRadius: [100, 100, 0, 0],
      },
    },
  ],
};
