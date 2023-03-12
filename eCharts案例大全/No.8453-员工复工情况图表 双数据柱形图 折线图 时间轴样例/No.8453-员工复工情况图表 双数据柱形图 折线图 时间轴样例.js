  var allData = {
  "days": ['03/09', '03/10'],
  "company":["智能系统","检测","船电","网控","自控","电器","电机","园区","机器人平台","装备公司"],
  "data":[{
    "onDuty": [1000, 1100, 1200, 1000, 1500, 1500, 1200, 1100, 1000, 1590],
    "home": [200, 100, 300, 100, 40, 140, 110, 320, 190, 204],
    "rate": [80, 91, 75, 90, 98, 91, 89, 78, 69, 86]
  },
  {
    "onDuty": [1300, 1200, 1100, 1300, 1800, 1990, 1300, 1200, 1330, 1120],
    "home": [200, 100, 300, 100, 40, 140, 110, 320, 190, 204],
    "rate": [80, 91, 75, 90, 98, 91, 89, 78, 69, 86]
  }]
}

function getSum(n)
{
    var result =[];
    for(var i = 0; i < allData.data[n].onDuty.length;i++)
    {
        result.push(allData.data[n].onDuty[i] + allData.data[n].home[i])
    }
    return result;
}

  // echarts配置项
  var option = {
    timeline: {
      axisType: 'category',
      show: true,
      symbol:'rect',
      symbolSize:15,
      currentIndex:allData.days.length-1,
      controlStyle:{
        show:false  
      },
      autoPlay: false,
      playInterval: 1000,
      data: []
    },
    options: []
  };

  //循环数据
  for (var n = 0; n < allData.days.length; n++) {
    option.timeline.data.push(allData.days[n]);
    option.options.push({
    backgroundColor:'#fff',
      title: {
        show: true,
        text: allData.days[n]
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        show: true,
        x: 'right',
        data: ['现场办公', '居家办公','百分比']
      },
      calculable: true,
      grid: {
        y: 80,
        y2: 100
      },
      xAxis: [{
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: 0
        },
        data: allData.company
      }],
      yAxis: [{
        type: 'value',
        name: '员工数量',
        max:3000,
        axisTick:{
            show:false
        },
        splitLine: {
            show: false
        }
      }, {
        type: 'value',
        name: '百分比(%)',
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        }
      }],
      series: [{
        name: '现场办公',
        stack:'员工数量',
        yAxisIndex: 0,
        type: 'bar',
        itemStyle: {
                normal: {
                    color: "rgba(0,191,183,1)",
                    barBorderRadius: 0,
                    label: {
                        show: false,
                        textStyle: {
                            color: "#fff"
                        },
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
        barWidth: 30,
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}'
          }
        },
        data: allData.data[n].onDuty
      },{
        name: '居家办公',
        stack:'员工数量',
        yAxisIndex: 0,
        type: 'bar',
        itemStyle: {
                normal: {
                    color: "rgba(255,144,128,1)",
                    label: {
                        show: true,
                        textStyle: {
                            "color": "#fff"
                        },
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
        barWidth: 30,
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}'
          }
        },
        data: allData.data[n].home
      },
      {
        name: '百分比',
        yAxisIndex: 1,
        type: 'line',
        symbolSize:10,
        symbol:'circle',
        itemStyle: {
            normal: {
                color: '#4E66B2',
                barBorderRadius: 0,
                label: {
                    show: false,
                }
            }
        },
        data: allData.data[n].rate
      },{
            name: "总数",
            type: "line",
            symbolSize:10,
            symbol:'circle',
            itemStyle: {
                normal: {
                    color: "rgba(252,230,48,1)",
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            data: getSum(n)
        }]
    });
  }