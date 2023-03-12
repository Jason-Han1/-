var w = document.documentElement.clientWidth;
var a,b;
if (w >= 1300 && w < 1500) {
    a = 10;
    b = 12;
    c = '36%';
}else if(w < 1300){
    a = 10;
    b = 12;
    c = '36%';
}else{
    a = 15;
    b = 24;
    c = '40%';
}
var legendData = ["业务指标"];
var seriesData = ["-36.55"];
//gaugeChart
//normalChart


option = {
//   backgroundColor: "#062a44",
  series: [{
    name: '刻度',
    type: 'gauge',
    radius: '53%',
    min:0,//最小刻度
    max:100,//最大刻度
    splitNumber: 10, //刻度数量
    startAngle: 225,
    endAngle: -45,
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: [[1,'rgba(0,0,0,0)']]
      }
    },//仪表盘轴线
    axisLabel: {
      show: true,
      color:'#4c647c',
      distance:25,
    //   formatter:function(v){
    //         switch (v + '') {
    //             case '0' : return '0';
    //             case '2' : return '2W';
    //             case '4' : return '4W';
    //             case '6' : return '6W';
    //             case '8' : return '8W';
    //             case '10' : return '10W';
    //             case '12' : return '12W';
    //             case '14' : return '14W';
    //             case '16' : return '16W';
    //         }
    //     }
    },//刻度标签。
    axisTick: {
      show: true,
       splitNumber: 7,
      lineStyle: {
        color: '#4c647c',
        width: 1,
      },
      length: -8
    },//刻度样式
    splitLine: {
      show: true,
      length: -20,
      lineStyle: {
        color: '#4c647c'
      }
    },//分隔线样式
    detail: {
      show: false
    },
    pointer: {
      show: false
    }
  },
    {


      type: 'gauge',
      radius: c,
      center: ['50%', '50%'],

      splitNumber: 0, //刻度数量
      startAngle: 225,
      endAngle: -45,
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [
            [
              1, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#4e6be3'
            },
              {
                offset: 1,
                color: '#23b4f9'
              }
            ]
              )
            ]
          ]
        }
      },
      //分隔线样式。
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      title: {
        show: true,
        offsetCenter: [0, '-26%'], // x, y，单位px
        textStyle: {
          color: '#4c647c',
          fontSize: a
        }
      },
      //仪表盘详情，用于显示数据。
      detail: {
        show: true,
        offsetCenter: [0, '2%'],
        color: '#4c647c',
        formatter: function(params) {
            // var params = params.toFixed(2)
      return params + '%'
      
    },
    textStyle: {
      fontSize: b
    }
    },
    data: seriesData
  }
  ]
};