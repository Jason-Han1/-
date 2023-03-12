var getname = ['2016','2017','2018','2019','2020'];
var getvalue = ['70','55','50','53','72'];
var getvalue1 = ['40','75','60','68','80'];
var dataName=['数量','金额']
//计算最大值 
var maxnum = Math.max.apply(null, getvalue);
var maxnum1 = Math.max.apply(null, getvalue1);
var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);
var maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2);
if (maxnum >= 5) {
  var max = Math.ceil(maxnum / (10 * maxlen)) * maxlen * 10;
} else {
  var max = 5;
}
if (maxnum1 >= 5) {
  var max1 = Math.ceil(maxnum1 / (10 * maxlen1)) * maxlen1 * 10;
} else {
  var max1 = 5;
}


option = {
    backgroundColor:'#072685',
    grid: {
        top: '21%',
        right: '8%',
        left: '8%',
        bottom: '16%'
    },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: '{b0}年<br/>{a0}: {c0}个<br/>{a1}: {c1}万元',
  },
legend: {
          data: dataName,
          left: "2%",
          top:'2%',
          icon: "roundRect",
          itemWidth: 15, // 设置宽度
          itemHeight: 15, // 设置高度
          textStyle: {
              color: "#666666",
              fontSize: 13,
              padding: [2, 0, 0, 0]
          },
      },
  xAxis: [{
    data: getname,
    axisLabel: {
      margin: 10,
      color: '#82AFC6',
      textStyle: {
        fontSize: 12
      },
    },
    axisLine: {
      lineStyle: {
        color: '#102E74',
      }
    },
    axisTick: {
      show: false
    },
  }],
  yAxis: [{
    type: 'value',
    min: 0,
    max: max, // 计算最大值
    interval: max / 5, // 平均分为5份
    splitNumber: 5,
    name: '数量（个）',
    nameTextStyle: {
      color: '#82AFC6',
      fontSize: 12,
      padding: [0, 0, -8, 100]
    },
    axisLabel: {
      formatter: function(value) {
        num = value
        if (num && num != 'undefined' && num != 'null') {
          let numS = num;
          numS = numS.toString();
          numS = numS.replace(/,/gi, '');
          return numS;
        } else {
          return num;
        }
      },
      color: '#82AFC6',
      textStyle: {
        fontSize: 12
      },
    },
    axisLine: {
        show:false,
      lineStyle: {
        color: '#3E5B7D',
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#102E74',
      }
    }
  }, {
    type: 'value',
    min: 0,
    max: max1, // 计算最大值
    interval: max1 / 5, // 平均分为5份
    splitNumber: 5,
    name: '金额（万元）',
    nameTextStyle: {
      color: '#82AFC6',
      fontSize: 12,
      padding: [0, 0, -8, -100]
    },
    axisLabel: {
      formatter: function(value) {
        num = value
        if (num && num != 'undefined' && num != 'null') {
          let numS = num;
          numS = numS.toString();
          numS = numS.replace(/,/gi, '');
          return numS;
        } else {
          return num;
        }
      },
      color: '#82AFC6',
      textStyle: {
        fontSize: 12
      },
    },
    axisLine: {
        show:false,
      lineStyle: {
        color: '#3E5B7D',
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#102E74',
      }
    }
  }],
  series: [{
    name: "数量",
    type: 'bar',
    data: getvalue,
    barWidth: '15px',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: '#1D82FF'
        }, {
          offset: 1,
          color: '#00FFF6'
        }], false),
        barBorderRadius: [4, 4, 0, 0],
      }
    },
  }, {
			name: '金额',
            type: 'line',
            data: getvalue1,
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 227, 168, 0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255, 227, 168, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 227, 168, 0)'
                        }, ]),
                        shadowColor: 'rgba(255, 120, 0,1)',
                        shadowBlur: 8
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(197, 106, 255, 0.6)'
                        }, {
                            offset: 0.6,
                            color: 'rgba(255, 120, 0, 0)'
                        }]),
                    }
                }
            }
        }]

};
/*
myChart.on('click', function (params) {
	_zn('EANA$2$2$1$551f81b238254ced92d98b825ba63f95$2f4ee0540d7d4defb6ec4cf9368ac940','drillpath=;@DW=<#=@DW#>;@XZ=<#=@XZ#>;@SYFX=<#=@SYFX#>;@NF='+params.name+';');
});*/

// return option; 