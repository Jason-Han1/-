option = {
  title:[
    {
      text:'直接',
      left:'40%',
      top:'30px',
      textStyle:{
        fontSize:30,
        color:'#f00'
      }
    },
    {
      text:'间接',
      left:'60%',
      top:'30px',
      textStyle:{
        fontSize:30,
        color:'#f00'
      }
    }
  ],
  xAxis: [
    {
      type: 'value',
      splitLine:{
        show:false,
      },
    },
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false,
      },
      splitLine:{
        show:false,
      },
      data: ['', '', '', ''],
    },
  ],
  color:['red','green','pink','purple'],
  series: [
    {
      name: 'bar1',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
      },
      data: [320, 302, 341, 374],
    },
    {
      name: 'bar2',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'left',
      },
      data: [-120, -132, -101, -134],
    },
    {
      name: 'bar3',
      type: 'bar',
      stack: 'Total',
      data: [-120, -132, -101, -134],
      itemStyle:{
        barBorderRadius:[40,0,0,40]
      }
    },
  ],
};
