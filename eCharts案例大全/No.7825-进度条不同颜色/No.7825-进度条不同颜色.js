
var maxData = 100;

var maxDataaaa = ["10", "20", "30"];

var color = ['rgba(62,177,119', 'rgba(209,81,102', 'rgba(193,152,73']

let lineY = []
let lineY1 = []
for (var i = 0; i < maxDataaaa.length; i++) {
  var x = i
  if (x > color.length - 1) {
    x = color.length - 1
  }
  var data = {
    color: color[x] + ')',
    value: maxDataaaa[i],
    itemStyle: {
      normal: {
        show: true,
        color: color[x] + ', 1)',
        barBorderRadius: [10, 10, 10, 10]
      }
    }
  }
  var data1 = {
    color: 'black',
    value: maxDataaaa[i],
    itemStyle: {
      normal: {
        show: true,
        color: '#044454',
        barBorderRadius: [10, 10, 10, 10]
      }
    }
  }
  lineY.push(data)
  lineY1.push(data1)
}

option = {
    title: [{
        text: '应巡查点',
        left: 'left',
        top:30,
        left:10,
        textStyle:{
        color:'#3eb177',
        fontSize:12
        }
    },{
        text: '已巡查点',
        left: 'left',
        top:130,
        left:10,
        textStyle:{
            color:'#d15166',
            fontSize:12
        }
    },{
        text: '隐患巡查点',
        left: 'left',
        top:230,
        left:10,
        textStyle:{
            color:'#c19849',
            fontSize:12
        }
    }],
    xAxis: {
        show:false,
        max:maxData,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10
        }
    },
    yAxis: {
        show:false,
        data: ['2013','2014'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 16
        }
    },
    grid: {
        top: 20,
        height: 200,
        left: 15,
        right: 15
    },
    color: function (params) {
        var colorList = ['#3eb177', '#d15166','#c19849'];
        return colorList[params.dataIndex]
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
                                barBorderRadius: 5,
                            },
        symbolRepeat: 'fixed',
        symbolMargin: '40%',
        symbolClip: true,
        color: '#000',
        symbolBoundingData: maxData,
        data: lineY,
        symbolSize: [6, 25],
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
                                barBorderRadius: 5,
                            },
        label: {
            show: true,
            formatter: function (params) {
                return '('+params.value+')';
            },
            position: 'insideTopRight',
            offset: [0, -10],
            color: 'white',
            fontSize: 12
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '40%',
        symbolSize: [6, 25],
        color: '#105879',
        symbolBoundingData:maxData,
        data: lineY1,
        z: 5
    }]
}