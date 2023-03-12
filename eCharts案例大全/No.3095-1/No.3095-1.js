// import echarts from 'echarts'
var charts = { // 按顺序排列从大到小
  cityList: ['故障车位', '自走车位', '机械车位'],
  cityData: [423,390,410],
}
var cdata = ['4/5','123/34','423/124']
var top10CityList = charts.cityList
var top10CityData = charts.cityData
var color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']

let lineY = []
for (var i = 0; i < charts.cityList.length; i++) {
  var x = i
  if (x > color.length - 1) {
    x = color.length - 1
  }
  var data = {
    name: charts.cityList[i],
    // color: color[x] + ')',
    value: top10CityData[i],
    itemStyle: {
      normal: {
        show: true,
        color: '#08bdff',
        // barBorderRadius: 10
      },
    }
  }
  lineY.push(data)
}

// console.log(lineY)
option= {
    backgroundColor:'#000',
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item'
  },
  yAxis: [
    {
    type: 'category',
    // inverse: false,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    data: top10CityList
  }, 
  {
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
        return `${val}`
      }
    },
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    },
    data: cdata
  }
  ],
  xAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [{
    name: '',
    type: 'bar',
    zlevel: 2,
    barWidth: '10px',
    showBackground: true,
    data: lineY,
    // animationDuration: 1500,
    label: {
      normal: {
        color: '#b3ccf8',
        show: true,
        position: [0, '-24px'],
        textStyle: {
          fontSize: 16
        },
        formatter: function (a, b) {
          return a.name
        }
      }
    }
  }],
  animationEasing: 'cubicOut'
}

