option = {
    backgroundColor: "#08409f",
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['202101', '202102', '202103', '202104', '202105', '202106'],
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#2d8de0',
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "#4a86ec",
                fontSize: 12
            },
        },
        axisTick:{
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: { //  改变y轴颜色
            show: false,
            lineStyle: {
                color: '#26D9FF',
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "#4a86ec",
                fontSize: 12
            },
            formatter: function(value,index){
               var value;
               if (value) {
               value = value/1000+'k';
               }
              console.log(value)
               return value
             }
        },
        axisTick:{
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
    },
    tooltip: {
      trigger: 'axis',
    },
    series: [{
        smooth: true,
        symbol: 'none',
        markPoint:{
          symbol:"circle",
        },
        markLine:{
            symbol:"none",
            label:{
                normal:{
                    show:true,
                }
            },
            lineStyle:{
                type:"dashed",
                color:'#f19149',
                width:2
            },
            data: [{
                yAxis: 1500,
                label:{
                  textStyle: { 
                    color: '#abaf6e'
                  },
                  position:'insideEndTop',
                  formatter: '预警价'
                }
            }]
        },
        data: [2200, 2300, 2600, 2500, 2600, 2290],
                type: 'line',
                endLabel: {
                  show: true,
                  formatter: "{c}",
                  color: '#fff',
                  position:'insideEndTop',
                  // distance: 0,
                  offset: [-60, -20],
                  fontSize: 24,
                },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    color: "#fff",
                    fontSize: 12
                },
                color: "#294E8F",
                borderColor: "3D7EEB",
                borderWidth: 2,
              }
        },
        lineStyle: {
            normal: {
                width: 3,
               color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: '#0a5b97'
                        },
                        {
                            offset: .5,
                            color: '#04a5b9'
                        },
                        {
                            offset: 1,
                            color: '#01d0c6'
                        }
                    ], false),
                shadowColor: "#3D7EEB",
                shadowBlur: 1
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: 'rgba(61,126,235,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(61,126,235,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};