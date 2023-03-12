var getname = ['计算机学院','生物科学学院','文学院','医学院','管理学院','设计学院','食品学院','电子学院','化学学院','其他学院'];
var getvalue = ['1100','750','910','550','580','920','810','700','905','780'];
var getvalue1 = ['270','200','260','80','90','260','200','100','290','260'];
var dataName=['资源数','建课数']
//计算最大值 
var maxnum = Math.max.apply(null, getvalue);
var maxnum1 = Math.max.apply(null, getvalue1);
var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);
var maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2);
if (maxnum >= 5) {
  var max = Math.ceil(maxnum / (10 * maxlen)) * maxlen * 5;
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
    formatter: '{b0}<br/>{a0}: {c0}<br/>{a1}: {c1}',
  },
legend: {
          data: [{
                    name:'资源数',
                    icon: "roundRect",
                    
                },
                {
                    name:'建课数',
                    icon: "line",
                    
                }
              ],
          left: "2%",
          top:'2%',
          //icon: "roundRect",
          //itemWidth: 15, // 设置宽度
          //itemHeight: 15, // 设置高度
          textStyle: {
              color: "#666666",
              fontSize: 13,
              padding: [2, 0, 0, 0]
          },
      },
  xAxis: [{
    data: getname,
    axisLabel: {
            interval:0,
            margin: 30,
            color: '#82AFC6',
            textStyle: {
                fontSize: 13
            },
             formatter:function(val){
       console.log("label汉字--",val);
        var strs = val.split(''); //字符串数组
        var str = ''
        for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
        str += s;
        if(!(i % 1)) str += '\n'; //按需要求余
      }
      return str
    }
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
  }],
  yAxis: [{
    type: 'value',
    min: 0,
    max: max, // 计算最大值
    interval: max / 5, // 平均分为5份
    splitNumber: 5,
    name: '资源数',
    nameTextStyle: {
      color: '#82AFC6',
      fontSize: 12,
      padding: [0, 0, 8, -40]
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
    name: '建课数',
    nameTextStyle: {
      color: '#82AFC6',
      fontSize: 12,
      padding: [0, 0, 8, 50]
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
    name: "资源数",
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
			name: '建课数',
            type: 'line',
            data: getvalue1,
            smooth: false,
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                width: 2,
                color: '#FFEA83',
                },
            },
            itemStyle: {
            normal: {
                color: '#FFFADF',
                borderColor: '#FFFADF',
                borderWidth: 0
            },
        },
        }]

};

// return option; 