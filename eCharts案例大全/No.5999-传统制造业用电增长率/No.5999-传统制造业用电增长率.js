// import echarts from 'echarts'
var charts = { // 按顺序排列从大到小
  cityList: ['石油、煤炭及其他燃料加工业', '有色金属冶炼和压延加工业', '黑色金属冶炼及延压加工业', '纺织业','化学原料和化学制品业', '非金属矿物制品业',],
  cityData: [90.60, 22.52, 13.96, -10.91,-12.87,-21.61]
}
var top10CityList = charts.cityList
var top10CityData = charts.cityData
var color = ['rgba(100,255,249', 'rgba(100,255,249', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(135,183,255', 'rgba(135,183,255']

let lineY = []
for (var i = 0; i < charts.cityList.length; i++) {
  var x = i
  if (x > color.length - 1) {
    x = color.length - 1
  }
  var data = {
    name: charts.cityList[i],
    color: color[x] + ')',
    value: top10CityData[i],
    itemStyle: {
      normal: {
        show: true,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: color[x] + ', 0.3)'
        }, {
          offset: 1,
          color: color[x] + ', 1)'
        }], false),
        barBorderRadius: 10
      },
      emphasis: {
        shadowBlur: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      }
    }
  }
  lineY.push(data)
}

console.log(lineY)
option= {
    backgroundColor:'',
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    borderWidth: 0,
    top: '10%',
    left: '5%',
    right: '15%',
    bottom: '3%'
  },
  color: color,
  yAxis: [{
    type: 'category',
    inverse: true,
    axisTick: {
      show: true
    },
    axisLine: {
      show: true,
      lineStyle: {
                color: '#fff'
            }
      
    },
    axisLabel: {
      show: false,
      inside: false
    },
    data: top10CityList
  }, {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      inside: false,
      textStyle: {
        color: '#b3ccf8',
        fontSize: '14',
        fontFamily: 'PingFangSC-Regular'
      },
      formatter: function (val) {
        return ``
      }
    },
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    },
    data: top10CityData
  }],
  xAxis: {
    type: 'value',
    position:'top',
    axisTick: {
      show: true
    },
    axisLine: {
      show: true,
      
       lineStyle: {
                color: '#fff'
            }
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      show: true,
        formatter: '{value}%',
    }
  },
  series: [{
    name: '',
    type: 'bar',
    zlevel: 2,
    barWidth: '10px',
    barCateGoryGap:100,
    data: lineY,
    animationDuration: 1500,
    label: {
      normal: {
        color: '#b3ccf8',
        show: true,
        position: [0, '-24px'],
        textStyle: {
          fontSize: 10
        },
        formatter: function (a, b) {
          return a.name
        }
      }
    }
  }],
  animationEasing: 'cubicOut'
};
var loopIndex = 0;

setInterval(function() {
    if (loopIndex > 5) {
        loopIndex = 0;
    }
    myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: loopIndex
    });
    if (option.series[0].data[loopIndex] === "") {
        myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 2,
            dataIndex: loopIndex
        })
    }
    loopIndex++;
}, 1000);
