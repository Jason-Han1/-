option = {
    title: {
            text: "生产监控系统",
            subtext: "实时产能监控",
            left: "center"
        },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
   //     formatter: function(params){return Math.max(params.value,-params.value)}
        
        formatter: function (params) {
                    return params[0].name +
                        "<br>生产中：" + params[0].value + 
                        "<br>等待中：" +  -params[1].value;
                }
    },
    legend: {
        data:['等待中', '生产中'],
        left: "right"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
              splitLine: {
                  lineStyle: {
                      color: '#3E4B56',
                      type: 'dashed'
                  }
              },
              axisLine: {
                  show: true,
                  lineStyle: {
                    color:'#0B1D2E'
                  }
              },
        }
    ],
    yAxis : [
        {
            type : 'category',
            // axisTick : {show: false},
            data : ['一月','二月','三月','四月'],
              axisLine: {
                  lineStyle: {
                      color: '#0D2435'
                  }
              },
              axisLabel: {
                  color: '#A0A4AA',
                  textStyle: {
                      fontSize: 12
                  },
              },
              axisTick: {
                  show: false
              }
        }
    ],
    series : [

        {
            name:'等待中',
            type:'bar',
            stack: '总量',
            barMaxWidth: 30,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#DC8F21'
                }, {
                    offset: 1,
                    color: 'rgba(220, 143, 33, 0)' 
                }], false), // 渐变
            },
            // label: {
            //     normal: {
            //         show: true
            //     }
            // },
            data:[400, 241,360, 320, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'生产中',
            type:'bar',
            stack: '总量',
            barMaxWidth: 30,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(24, 253, 255, 0)' 
                }, {
                    offset: 1,
                    color: '#12BDDF'
                }], false), // 渐变
            },
            // label: {
            //     normal: {
            //         show: true,
            //         formatter: function(params){return -params.value}
            //     }
            // },
            data:[-120, -180,-120, -120, -132, -101, -134, -190, -230, -210]
        }
    ]
};
