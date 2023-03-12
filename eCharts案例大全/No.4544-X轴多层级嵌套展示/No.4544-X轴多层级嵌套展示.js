var data = {
 
        legend: ['净功率', '回油功率'],
        data: [
            [1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500,1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500,1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500,300,900,200.300,200,230],
            [320, 302, 301, 334, 390, 330, 320, 100, 50,1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500,1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500,300,900,200.300,200,300],
           
        ]
    

}
var colors = ['#26C978',  '#F56679']
var option = {
    title: {
        
        left: 19,
        top: 15,
        textStyle: {
            color: '#fff'
        }
    },
    color: colors,
    legend: {
        top: 10,
        left: 200,
        itemWidth: 10,
        itemHeight: 10,
        // padding: [5, 10],
        textStyle: {
            fontSize: 14,
            color: '#96A4F4',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
    },
    xAxis: [
        
        {
            type: 'category',
            axisTick: {
              length:20
          },
           axisLabel:{
                  interval:0,
                  rotate:90,//倾斜度 -90 至 90 默认为0
                  
                },
          data:['试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机','试验机','对比机'],
        },
  {
      type: 'category',
      position : 'bottom',
      data:[{"value":"动臂","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"斗杆","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"铲斗","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"回转","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"动臂","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"斗杆","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"铲斗","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"回转","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"动臂","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"斗杆","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"铲斗","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"回转","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"动臂","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"斗杆","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"铲斗","textStyle":{"fontSize":12,"lineHeight":100}},{"value":"回转","textStyle":{"fontSize":12,"lineHeight":100}}],
      axisTick: {
          length:65
      },
  },
  {
      type: 'category', 
      data: [
          {
              value: '挖掘阶段',
              textStyle: {
                  fontSize: 14,
                  lineHeight: 140
              }
          },{
              value: '提臂回转阶段',
              textStyle: {
                  fontSize: 14,
                  lineHeight: 140
              }
          }  ,{
              value: '卸载阶段',
              textStyle: {
                  fontSize: 14,
                  lineHeight: 140
              }
          }  ,{
              value: '复位阶段',
              textStyle: {
                  fontSize: 14,
                  lineHeight:140
              }
          }  
      ],
      position : 'bottom',
      axisTick: {
          length:90
      },
      splitArea: {
          show: true,
          areaStyle: {
              color: ['rgba(255,255,255,0.5)','rgba(200,200,200,0.5)']
          }
      }
  },

  ],
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: [

    ]
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '60%',
        label: {
            show: false,
            position: 'insideRight'
        },
        data: data.data[i]
    })
}
myChart.setOption(option);