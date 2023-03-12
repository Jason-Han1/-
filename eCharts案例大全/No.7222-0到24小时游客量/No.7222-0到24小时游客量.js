
var data = [
  {name:'2016/12/18 6:38:08', value:['2016/12/18 6:38:08', 80]},
  {name:'2016/12/18 16:18:18', value:['2016/12/18 16:18:18', 60]},
  {name:'2016/12/18 19:18:18', value:['2016/12/18 19:18:18', 90]}
  ];
var anchor = [
  {name:'2016/12/18 00:00:00', value:['2016/12/18 00:00:00', 0]},
  {name:'2016/12/19 00:00:00', value:['2016/12/19 00:00:00', 0]}
  ];

option = {
  color: ['#f9797a'],
  grid: {
    left: '14%',
    right: '6%',
    top: '20%',
    bottom: '16%',
  },
  legend: {
    itemHeight: 12,
    itemWidth: 24,
    textStyle: {
      color:'#bceaff',
      fontSize: 12
    },
    data: [{name: '游客量'}]
  },
  tooltip: {
      trigger: 'axis',
      formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return date.getFullYear() + '/' + (date.getMonth() + 1)+ '/' + date.getDate()+ ' : ' + params.value[1];
      },
      axisPointer: {
          animation: false
      }
  },
  xAxis: {
      type: 'time',
      splitLine: {
          show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
        //   color:'rgb(162,202,248,0.7)',
          fontSize: 12
        }
      },
      axisLine: {
        show :true,
        lineStyle: {
          color: '#85c6e7',
        //   opacity: 0.2
        }
      },
      axisTick: {
        show: false
      },
  },
  yAxis: {
      type: 'value',
      // boundaryGap: [0, '100%'],
      axisLabel: {
        show: true,
        // textStyle: {
        //   color:'rgb(162,202,248,0.7)',
        //   fontSize: 12
        // }
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show :false,
        lineStyle: {
          color: '#65c6e7',
        //   opacity: 0.2
        }
      },
      axisTick: {
        show: false
      },
  },
  series: [{
      name: '游客量',
      symbol: 'none',
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          color: '#f9797a'
        }
      },
      data: data
  },
  {
      name:'hor',
      type:'line',
      showSymbol:false,
      itemStyle:{normal:{opacity:0}},
      lineStyle:{normal:{opacity:0}},
      data:anchor,
  }]
};


