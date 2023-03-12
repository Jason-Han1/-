  // 遍历月份
      var weekStr = "";
      for (let k = 1; k <= 12; k++) {
        weekStr += k + "月份,";
      }

      var weekData = weekStr.substring(0, weekStr.lastIndexOf(",")).split(",");

      option = {
    legend: {
          right: "6%",
          top: "15",
          textStyle: {
            fontSize: 12,
            color: "#0ab7ff",
          },
        },
      title: {
          text: "2020年销量对比",
          textStyle: {
            fontWeight: "bold",
            fontSize: 12,
            color: "#0ab7ff",
          },
          left: "15",
          top: "10",
        },
       tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize:12,
        },
        axisPointer: {
            lineStyle: {
              color: "rgba(255,255,255,0.5)",
            }
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '50',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: weekData,
        
         axisLine: {
            lineStyle: {
                color: '#0ab7ff'
            }
        },
    }],
    yAxis: [{
        type: 'value',
         axisLine: {
            lineStyle: {
                color: '#0ab7ff'
            }
        },
         splitLine: {
              lineStyle: {
                color: "rgba(31,86,146,0.7)",
              },
            },
       
    }],


    series: [
        {
        name:'2019销量对比',
        type: 'line',
        // smooth:true,
        color: '#5FAAFF',
        data: [38, 20, 15, -60, 22, -54, 98, 136,40,-44,45,34],
        // areaStyle: {
        //     normal: {
        //       color: 'rgba(95, 170, 255,1)'
              
        //     },
        // },
        
    },
     {
        name:'2020销量对比',
        type: 'bar',
        barWidth: 15,
        data: [58, 10, 35, -80, 32, -64, 108, 146,50,-64,55,64],
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList;
                    if (params.data >= 0) {
                        colorList = '#FF8080';
                    } else {
                        colorList = '#80E6CC';
                    }
                    return colorList;
                },
            }
        }
    },
    
    ]
};
     