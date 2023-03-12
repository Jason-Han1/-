  option = {
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    color: ['#22b8ed', '#ffd54f', '#fb8f8e','#8fc31f'],
    legend: {
      data: ['一月份', '二月份','三月份','四月份'],
      align: 'right',
      right: 400,
      top: 10,
      textStyle: {
        color: '#000'
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 35
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '3%',
      backgroundColor: '#333',
      containLabel: true
    },
    // yAxis: [{
    //   type: 'value',
    //   name: '额度',
    //   axisTick: {
    //     show: false
    //   }
    // }, {
    //   type: 'category',
    //   name: '月份',
    //   data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
    // } ],
    xAxis: [{
      type: 'category',
      data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年']
    }],
    yAxis: [{
      type: 'value',
      name: '次数',
      axisLabel: {
        formatter: '{value}'
      }
    }],
    series: [{
      name: '一月份',
      type: 'bar',
      data: [0,0.01,0.01,0.01,1,0.01,0.01],
      barGap: '8%', // 柱图间距
      itemStyle: {
        normal: {
          barBorderRadius: [3, 3, 0, 0]
        }
      },
        markPoint: {
        data: [
           {type: 'min', name: '最小值'},
        
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
   

    }, {
      name: '二月份',
      type: 'bar',
      data: [0,0.01,1,1,0.01,1],
      barGap: '5%', // 柱图间距
      itemStyle: {
        normal: {
          barBorderRadius: [3, 3, 0, 0]
          // color: '#000'
        }
      },
      markPoint: {
        data: [
          {type: 'min', name: '最大值'},
          
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },{
      name: '三月份',
      type: 'bar',
      data: [2,0.01,1,1,0.01,1],
      barGap: '5%', // 柱图间距
      itemStyle: {
        normal: {
          barBorderRadius: [3, 3, 0, 0]
        }
      },
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
    {
      name: '四月份',
      type: 'bar',
      data: [0,1,0.01,0.01,0.01,0.01],
      barGap: '5%', // 柱图间距
      itemStyle: {
        normal: {
          barBorderRadius: [3, 3, 0, 0]
        }
      },
      markPoint: {
        data: [
           {type: 'min', name: '最小值'},
        
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    }]
  };