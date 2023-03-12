var dataValArray = 0.63;
   var value =25;
   var max = 50;
   color = [["#49afff"], ["#68A54A"], ["#f56c6c"]]
var uploadedDataURL = "/asset/get/s/data-1559120606810-8K55q2kWT.png";
option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    angleAxis: {
           axisLine: {
               show: false
           },
           axisLabel: {
               show: false
           },
           splitLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           min: 0,
           max: 6.666,
           // boundaryGap: ['0', '10'],
           startAngle: 225
       },
       radiusAxis: {
           type: 'category',
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           axisLabel: {
               show: false
           },
           data: ['a', 'b', 'c'],
           z: 10
       },
       polar: {
           radius: '85%'
       },
    series: [{
               type: 'bar',
               data: [, , value/10],
               z: 1,
               coordinateSystem: 'polar',
               barMaxWidth: 10,
               name: '当前温度',
               roundCap: true,
              color:  //数组第一个属性是颜色所占line百分比
                        [],

               barGap: '-100%',
               //如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'。这在用柱子做背景的时候有用。
           },
          
           {//底圈
               type: 'bar',
               data: [, , 5],
               z: 0,
               silent: true,
               coordinateSystem: 'polar',
               barMaxWidth: 45,
               name: '',
               roundCap: true,
               color: 'rgb(255,255,255,0.5)',
               barGap: '-100%',
           },

        {
            name: '温度',
            type: 'gauge',
            max: 50,
            startAngle: 225,
            endAngle: -45,
            detail: {
                formatter: ['{value}℃', '{a|当前温度}'].join('\n'),
                fontSize: 120,
                width: '100%',
                height: '30%',
                padding: [-300, 0, 0, 0],
                rich: {
                    a: {
                        color: '#666',
                        fontSize: 30,
                        padding: [10, 0, 10, 0],
                    }
                }
            },
            data: [{
                value: value
            }],
            axisLine: {
                lineStyle: {
                    color: [ //数组第一个属性是颜色所占line百分比
                        [0.4, "#49afff"],
                        [0.6, "#68A54A"],
                        [1, "#f56c6c"],

                    ],
                    width: 22
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    width: 1
                }
            },
            splitNumber: 50,
            axisLabel: {
                distance: -20,
                show: true,
                formatter: function(value) {
                    if (value === 0 || value === 50) {
                        return value + '℃'
                    }
                    return ''
                },
                //   padding: '8 0 0 0'
                lineHeight: -60,
                fontSize: 40
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: false
            },

        },
    
      
    ]
};
function init_polarColor(value) {    
    //此函数根据value的范围大小，为仪表盘参数设置不同的颜色、数字
    if (0 < value && value < 20) {        
option.series[0].color[0]="#49afff"
    } else if (20 <= value && value < 30) {
option.series[0].color = color[1]
    } else if (30 <= value && value <= 50) {
option.series[0].color = color[2]

    } else {}
  series[0].color = color[0]
}


setInterval(function() {
    // let num = (Math.random() * 40).toFixed(2) - 0;
    let num = value
    // option.series[0].data[0].value = num;
    // option.series[1].data[0].value = num;
    // option.series[1].data[2].value = 67 - num;
    myChart.setOption(option, true);
     init_polarColor(value)
}, 2000);